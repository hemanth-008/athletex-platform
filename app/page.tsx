"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trophy, Target, Globe2, Zap, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  const features = [
    { title: "Global Leaderboards", desc: "Rank up against athletes worldwide in your specific sport.", icon: Trophy },
    { title: "Performance Tracking", desc: "Log your achievements and track your stats over time.", icon: TrendingUp },
    { title: "Scout Connections", desc: "Get discovered by verified scouts and clubs looking for talent.", icon: Target },
    { title: "Real-time Feed", desc: "See the latest achievements from your community as they happen.", icon: Zap },
    { title: "Team Management", desc: "Join or create teams, compete together, and win prizes.", icon: Users },
    { title: "Worldwide Competitions", desc: "Participate in local and international tournaments.", icon: Globe2 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Abstract background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#0A0A0A] to-[#0A0A0A] z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Athlete<span className="text-primary">X</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-400 font-light mb-12"
          >
            Where Champions Are Found.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/auth/register?type=athlete">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 py-3 rounded-full bg-[#FF6B2C] text-[#FFFFFF] font-semibold hover:bg-[#E55A1F] hover:scale-[1.02] transition-transform shadow-[0_0_30px_-5px_rgba(255,107,44,0.5)]">
                Join as Athlete
              </Button>
            </Link>
            <Link href="/auth/register?type=scout">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10">
                Scout Talent
              </Button>
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/80"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">2.4M+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Athletes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">180+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Countries</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">50K+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Competitions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Everything you need to succeed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AthleteX provides a comprehensive suite of tools for athletes to showcase their skills, and for scouts to discover the next big star.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Athlete<span className="text-primary">X</span></h2>
          <div className="flex justify-center gap-6 text-gray-400 text-sm mb-6">
            <Link href="#" className="hover:text-primary transition">About Us</Link>
            <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition">Contact Support</Link>
          </div>
          <p className="text-gray-600 text-sm">© 2026 AthleteX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
