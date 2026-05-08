"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Camera, CheckCircle2, ChevronRight, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = React.useState(1)

  const handleComplete = () => {
    // In a real app, update profile data in Supabase here
    router.push("/feed")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome to AthleteX</h1>
          <p className="text-muted-foreground mt-2">Let's set up your profile to help you stand out.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
          
          <div className="relative z-10 flex justify-between">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors border-2 ${
                  step >= num 
                    ? "bg-primary border-primary text-white" 
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-border">
          <CardContent className="pt-6">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold">Profile & Cover Photo</h2>
                  <p className="text-sm text-muted-foreground">Upload a clear photo so scouts can recognize you.</p>
                </div>

                {/* Cover Photo */}
                <div className="relative h-40 bg-muted rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer overflow-hidden group">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2"><Upload className="w-4 h-4"/> Upload Cover</span>
                  </div>
                  <Camera className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground font-medium">Add Cover Photo</span>
                </div>

                {/* Avatar */}
                <div className="flex justify-center -mt-12 relative z-10">
                  <div className="relative group cursor-pointer">
                    <Avatar className="w-24 h-24 border-4 border-card">
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl">U</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label className="text-sm font-medium">Short Bio</label>
                  <textarea 
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us about your sporting journey..."
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={() => setStep(2)}>Next <ChevronRight className="ml-2 w-4 h-4" /></Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold">Your Base Stats</h2>
                  <p className="text-sm text-muted-foreground">Rate your current abilities honestly. You can improve these later.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Speed", value: 75, color: "bg-blue-500" },
                    { label: "Endurance", value: 82, color: "bg-green-500" },
                    { label: "Skill / Technique", value: 65, color: "bg-purple-500" },
                    { label: "Consistency", value: 90, color: "bg-yellow-500" }
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{stat.label}</span>
                        <span>{stat.value}/100</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.value}%` }}></div>
                      </div>
                      {/* In a real app, use Radix Slider here */}
                      <input type="range" min="0" max="100" defaultValue={stat.value} className="w-full mt-2 accent-primary" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button onClick={() => setStep(3)}>Next <ChevronRight className="ml-2 w-4 h-4" /></Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold">Build Your Network</h2>
                  <p className="text-sm text-muted-foreground">Follow top athletes in your sport to populate your feed.</p>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>A{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">Top Athlete {i}</p>
                          <p className="text-xs text-muted-foreground">Football • 3,240 pts</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Follow</Button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-4 mt-6">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button onClick={handleComplete}>Complete Setup</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
