"use client"

import * as React from "react"
import { Search, Filter, Bookmark, MapPin, Trophy, Flame } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function DiscoverPage() {
  const [activeTab, setActiveTab] = React.useState("discover")

  const mockAthletes = [
    { id: 1, name: "Priya Sharma", sport: "Athletics", rank: 1, streak: 112, points: 3100, badge: "🥇 Gold Streak", saved: true },
    { id: 2, name: "Zara Khan", sport: "Basketball", rank: 3, streak: 65, points: 1890, badge: "🥈 Silver Streak", saved: false },
    { id: 3, name: "Dev Patel", sport: "Swimming", rank: 5, streak: 34, points: 920, badge: "🥉 Bronze Streak", saved: false },
    { id: 4, name: "Ananya Iyer", sport: "Tennis", rank: 2, streak: 83, points: 2450, badge: "⚡ Elite", saved: true },
  ]

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24 space-y-6">
          <div className="flex items-center gap-2 font-bold text-lg border-b pb-2">
            <Filter className="w-5 h-5" /> Filters
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sport</label>
              <div className="space-y-2">
                {['Football', 'Athletics', 'Basketball', 'Tennis'].map(sport => (
                  <label key={sport} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-input text-primary accent-primary" />
                    <span className="text-sm text-muted-foreground">{sport}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Country</label>
              <Input placeholder="Search countries..." className="h-9" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Min Streak (Days)</label>
              <Input type="number" placeholder="e.g. 30" className="h-9" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Min Points</label>
              <Input type="number" placeholder="e.g. 500" className="h-9" />
            </div>

            <Button className="w-full">Apply Filters</Button>
            <Button variant="ghost" className="w-full">Reset</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Talent Discovery</h1>
            <p className="text-muted-foreground">Find the perfect athletes for your club or agency.</p>
          </div>
          
          <div className="flex bg-muted rounded-lg p-1">
            <button 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'discover' ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('discover')}
            >
              Discover
            </button>
            <button 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'saved' ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('saved')}
            >
              Saved Profiles
            </button>
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by name, username, or keywords..." className="pl-10 h-12 text-base" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {(activeTab === 'saved' ? mockAthletes.filter(a => a.saved) : mockAthletes).map((athlete) => (
            <Card key={athlete.id} className="overflow-hidden border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="p-4 flex flex-row items-start justify-between pb-2">
                <Avatar className="w-16 h-16 border-2 border-background shadow-sm group-hover:scale-105 transition-transform">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">{athlete.name[0]}</AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="icon" className={athlete.saved ? "text-primary" : "text-muted-foreground"}>
                  <Bookmark className={athlete.saved ? "fill-current" : ""} />
                </Button>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <h3 className="font-bold text-lg leading-tight mb-1">{athlete.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">{athlete.sport}</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="bg-muted rounded-md p-2 text-center">
                    <div className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">Rank</div>
                    <div className="font-bold flex items-center justify-center gap-1">
                      <Trophy className="w-3 h-3 text-[#FFD700]" /> #{athlete.rank}
                    </div>
                  </div>
                  <div className="bg-muted rounded-md p-2 text-center">
                    <div className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">Streak</div>
                    <div className="font-bold flex items-center justify-center gap-1 text-[#22C55E]">
                      <Flame className="w-3 h-3" /> {athlete.streak}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium border border-border rounded-md p-2 bg-background">
                  <span>🏆 Top Badge:</span>
                  <span className="text-muted-foreground">{athlete.badge}</span>
                </div>
                
                {activeTab === 'saved' && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Scout Notes</p>
                    <textarea 
                      className="w-full text-sm bg-transparent border-none resize-none focus:ring-0 p-0 text-foreground" 
                      placeholder="Add notes about this athlete..."
                      rows={2}
                      defaultValue="Great top speed. Needs work on stamina."
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/athletes/${athlete.name.toLowerCase().replace(' ', '_')}`} className="w-full">
                  <Button className="w-full" variant="secondary">View Profile</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
