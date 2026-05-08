"use client"

import * as React from "react"
import { Trophy, MapPin, Flame, Star, Activity, BadgeCheck, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PostCard from "@/components/shared/PostCard"

export default function AthleteProfilePage({ params }: { params: { username: string } }) {
  // Mock Data
  const athlete = {
    username: params.username,
    full_name: "Arjun Mehta",
    sport: "Football",
    position: "Goalkeeper",
    city: "Delhi",
    country: "India",
    bio: "Professional goalkeeper aiming for the national squad. Passionate about fitness, quick reflexes, and clean sheets.",
    streak_count: 47,
    total_points: 1240,
    global_rank: 4,
    country_rank: 1,
    is_verified: true,
    stats: { speed: 65, endurance: 80, skill: 90, consistency: 85 },
    badges: [
      { name: "Bronze Streak", icon: "🥉", color: "bronze" },
      { name: "Elite Performer", icon: "⚡", color: "purple" }
    ]
  };

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Hero Cover */}
      <div className="h-64 md:h-80 w-full relative bg-gradient-to-r from-orange-600 to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        {/* Cover image placeholder */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1e1e11411516?q=80&w=2062&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60" />
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Info Header */}
        <div className="relative -mt-20 sm:-mt-24 mb-8 flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div className="flex flex-col md:flex-row gap-6 md:items-end">
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-background bg-card shadow-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" />
              <AvatarFallback className="text-4xl text-primary font-bold">AM</AvatarFallback>
            </Avatar>
            
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{athlete.full_name}</h1>
                {athlete.is_verified && <BadgeCheck className="w-6 h-6 text-primary fill-primary/20" />}
              </div>
              <p className="text-muted-foreground text-lg mb-2">@{athlete.username}</p>
              
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                  {athlete.sport} {athlete.position && `• ${athlete.position}`}
                </Badge>
                <span className="flex items-center text-sm text-muted-foreground gap-1">
                  <MapPin className="w-4 h-4" /> {athlete.city}, {athlete.country} 🇮🇳
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-2">
            <Button size="lg" className="w-full md:w-auto shadow-lg shadow-primary/25">Follow</Button>
            <Button size="lg" variant="outline" className="w-full md:w-auto gap-2">
              <Mail className="w-4 h-4" /> Message
            </Button>
          </div>
        </div>

        {/* 4 Metric Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Card className="bg-card border-border">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <GlobeIcon className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-2xl font-bold">{athlete.global_rank}</div>
              <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Global Rank</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <MapPin className="w-6 h-6 text-green-400 mb-2" />
              <div className="text-2xl font-bold">{athlete.country_rank}</div>
              <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Country Rank</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border ring-1 ring-primary/20 bg-primary/5">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Flame className="w-6 h-6 text-[#22C55E] mb-2 fill-[#22C55E]/20 animate-pulse" />
              <div className="text-2xl font-bold text-[#22C55E]">{athlete.streak_count}</div>
              <div className="text-xs text-[#22C55E] uppercase font-semibold tracking-wider">Day Streak</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Trophy className="w-6 h-6 text-[#FFD700] mb-2" />
              <div className="text-2xl font-bold">{athlete.total_points.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Total Points</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (About & Stats) */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-bold tracking-tight mb-3 text-lg">About</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {athlete.bio}
                </p>
                <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">1.2K</span>
                    <span className="text-xs text-muted-foreground uppercase">Followers</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">240</span>
                    <span className="text-xs text-muted-foreground uppercase">Following</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-bold tracking-tight mb-5 text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> Performance Stats
                </h3>
                <div className="space-y-4">
                  {Object.entries(athlete.stats).map(([stat, value]) => (
                    <div key={stat}>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="capitalize">{stat}</span>
                        <span>{value}/100</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border overflow-hidden">
              <div className="bg-muted px-6 py-3 border-b border-border flex justify-between items-center">
                <h3 className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FFD700]" /> Trophy Cabinet
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="flex overflow-x-auto gap-4 no-scrollbar">
                  {athlete.badges.map((badge, i) => (
                    <div key={i} className="flex flex-col items-center shrink-0 w-20 group cursor-help text-center">
                      <div className="w-14 h-14 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-primary/20 group-hover:border-primary/50">
                        {badge.icon}
                      </div>
                      <span className="text-xs font-medium leading-tight">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (Posts Grid) */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-4 mb-6">Recent Achievements</h2>
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {/* Using the mock data from Feed to populate profile posts */}
              <PostCard post={{
                id: "2",
                title: "Clean sheet against the league leaders 🧤",
                description: "Made 8 crucial saves today. The defense was incredibly solid in front of me.",
                difficulty: "hard",
                points_earned: 50,
                created_at: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
                likes_count: 128,
                comments_count: 14,
                athlete: { ...athlete }
              }} />
              {/* Additional Mock Post */}
              <PostCard post={{
                id: "3",
                title: "Completed my first 100-day training streak!",
                description: "Consistency is key. Didn't miss a single day of practice or gym.",
                difficulty: "medium",
                points_earned: 25,
                media_url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
                media_type: "image",
                created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
                likes_count: 342,
                comments_count: 56,
                athlete: { ...athlete }
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  )
}
