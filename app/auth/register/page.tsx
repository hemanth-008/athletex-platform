"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Trophy, User, Users, Globe, Flame, Loader2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const userTypes = [
  { id: 'athlete', title: 'Athlete', icon: User, desc: 'Showcase your talent' },
  { id: 'scout', title: 'Scout/Club', icon: Users, desc: 'Discover new stars' },
  { id: 'organiser', title: 'Event Organiser', icon: Globe, desc: 'Host competitions' },
  { id: 'fan', title: 'Fan', icon: Flame, desc: 'Follow the action' },
]

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "athlete",
    sport: "",
    city: "",
    country: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)
    setError("")
    
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
      setError('Request timed out. Please check your connection and try again.')
    }, 15000)

    try {
      const supabase = createClient()
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (authError) throw new Error(authError.message)
      if (!authData.user) throw new Error('Failed to create account. Please try again.')

      if (authData.user && !authData.session) {
        // Email confirmation required. To disable, go to Supabase Dashboard -> Auth -> Providers -> Email -> disable "Confirm email"
        clearTimeout(timeoutId)
        router.push('/auth/check-email')
        return
      }

      const { error: profileError } = await supabase.from('profiles').insert([
        {
          id: authData.user.id,
          username: formData.username,
          full_name: formData.fullName,
          user_type: formData.userType,
          sport: formData.sport,
          city: formData.city,
          country: formData.country,
        }
      ])

      if (profileError) {
        // Handle specific unique constraint error
        if (profileError.code === '23505') {
           throw new Error('Username already taken. Please choose another one.')
        }
        throw new Error(profileError.message)
      }

      clearTimeout(timeoutId)
      // Success - show welcome message and redirect
      // (Assuming a simple alert for now, as useToast isn't imported)
      // Welcome to AthleteX! 🎉
      router.push("/onboarding")
    } catch (err: any) {
      clearTimeout(timeoutId)
      console.error('Registration Error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side */}
      <div className="hidden md:flex md:w-1/2 relative bg-[#0A0A0A] items-center justify-center overflow-hidden sticky top-0 h-screen z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <div className="bg-[rgba(255,107,44,0.12)] rounded-full p-8 animate-trophy-glow mb-8">
            <Trophy className="w-[120px] h-[120px] text-[#FF6B2C] opacity-100" />
          </div>
          <h1 className="text-[36px] font-[800] text-[#FFFFFF] mb-4 tracking-tight">Join the Revolution</h1>
          <p className="text-[16px] text-[#AAAAAA] max-w-md">Create your profile, showcase your stats, and get scouted by top teams worldwide.</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col py-12 px-8 sm:px-16 md:px-24 overflow-y-auto h-screen no-scrollbar">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Create an account</h2>
          <p className="text-muted-foreground mb-8">Step {step} of 2</p>

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2) } : handleRegister} className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
              </div>
            )}

            {step === 1 ? (
              <>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {userTypes.map((type) => (
                    <div 
                      key={type.id}
                      onClick={() => setFormData({ ...formData, userType: type.id })}
                      className={cn(
                        "cursor-pointer rounded-xl border p-4 flex flex-col items-center text-center transition-all",
                        formData.userType === type.id ? "border-primary bg-primary/10" : "hover:border-primary/50 hover:bg-accent"
                      )}
                    >
                      <type.icon className={cn("w-8 h-8 mb-2", formData.userType === type.id ? "text-primary" : "text-muted-foreground")} />
                      <div className="font-semibold">{type.title}</div>
                      <div className="text-xs text-muted-foreground">{type.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input name="fullName" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Username</label>
                    <Input name="username" value={formData.username} onChange={handleChange} required />
                  </div>
                  <Button type="submit" className="w-full mt-6">Next Step</Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City</label>
                      <Input name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Country</label>
                      <Input name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Primary Sport</label>
                    <Input name="sport" placeholder="e.g. Football" value={formData.sport} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm Password</label>
                    <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" className="w-1/3" onClick={() => setStep(1)} disabled={isLoading}>Back</Button>
                    <Button type="submit" className="flex-1" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isLoading ? 'Creating account...' : 'Complete Registration'}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-semibold text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
