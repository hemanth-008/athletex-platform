"use client"

import * as React from "react"
import { Users, MapPin, Trophy, Shield, UserPlus, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function TeamProfilePage({ params }: { params: { id: string } }) {
  const team = {
    name: "Mumbai FC",
    sport: "Football",
    city: "Mumbai",
    country: "India",
    bio: "Semi-professional club playing in the regional premier league. Looking for talented defenders.",
    total_points: 15400,
    wins: 24,
    losses: 8,
    members: [
      { name: "Arjun Mehta", role: "Captain", pos: "GK", points: 1240 },
      { name: "Rahul Singh", role: "Member", pos: "CB", points: 890 },
      { name: "Vikram Reddy", role: "Member", pos: "ST", points: 1100 },
      { name: "Samir Khan", role: "Member", pos: "CM", points: 950 },
    ]
  }

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Cover */}
      <div className="h-64 md:h-80 w-full relative bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative -mt-20 sm:-mt-24 mb-12 flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div className="flex flex-col md:flex-row gap-6 md:items-end">
            <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-background bg-card shadow-xl rounded-xl flex items-center justify-center p-4">
              {/* Logo Placeholder */}
              <Shield className="w-full h-full text-primary" />
            </div>
            
            <div className="mb-2">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{team.name}</h1>
              
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent text-sm">
                  {team.sport}
                </Badge>
                <span className="flex items-center text-sm text-muted-foreground gap-1">
                  <MapPin className="w-4 h-4" /> {team.city}, {team.country}
                </span>
                <span className="flex items-center text-sm text-muted-foreground gap-1">
                  <Users className="w-4 h-4" /> {team.members.length} Members
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-2">
            <Button size="lg" className="w-full md:w-auto shadow-[0_0_20px_-5px_rgba(255,107,44,0.5)] gap-2">
              <UserPlus className="w-5 h-5" /> Request to Join
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-bold tracking-tight mb-3 text-lg flex items-center gap-2"><Info className="w-5 h-5 text-primary"/> About Team</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {team.bio}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Record</p>
                    <p className="text-xl font-bold">{team.wins}W - {team.losses}L</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Total Points</p>
                    <p className="text-xl font-bold flex items-center justify-center gap-1"><Trophy className="w-4 h-4 text-[#FFD700]"/> {team.total_points}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-4 mb-6">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {team.members.map((member, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-border bg-card rounded-xl hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold leading-tight flex items-center gap-2">
                        {member.name}
                        {member.role === 'Captain' && <Badge variant="secondary" className="text-[10px] h-5 px-1 bg-[#FFD700]/20 text-[#FFD700]">C</Badge>}
                      </p>
                      <p className="text-xs text-muted-foreground">{member.pos} • {member.points} pts</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
