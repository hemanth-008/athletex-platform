"use client"

import * as React from "react"
import Link from "next/link"
import { Trophy, Flame, Target, Plus, Search, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PostCard from "@/components/shared/PostCard"

// Mock data for the feed
const MOCK_POSTS = [
  {
    id: "1",
    title: "New Personal Best! 100m Sprint in 10.4s ⚡",
    description: "Months of grueling training finally paying off. Thanks to my coach and my team for pushing me every single day. Next stop: National Qualifiers!",
    difficulty: "elite" as const,
    points_earned: 100,
    media_url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
    media_type: "image" as const,
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    likes_count: 245,
    comments_count: 32,
    athlete: {
      username: "priya_sprints",
      full_name: "Priya Sharma",
      sport: "Athletics",
      is_verified: true,
    }
  },
  {
    id: "2",
    title: "Clean sheet against the league leaders 🧤",
    description: "Made 8 crucial saves today. The defense was incredibly solid in front of me.",
    difficulty: "hard" as const,
    points_earned: 50,
    created_at: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    likes_count: 128,
    comments_count: 14,
    athlete: {
      username: "arjun_gk1",
      full_name: "Arjun Mehta",
      sport: "Football",
      is_verified: false,
    }
  }
];

export default function FeedPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      
      {/* Left Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 space-y-6">
          <Card className="overflow-hidden border-border bg-card shadow-sm">
            <div className="h-20 bg-gradient-to-r from-primary/80 to-primary"></div>
            <div className="px-4 pb-4">
              <div className="flex justify-between items-end -mt-10 mb-3">
                <Avatar className="h-20 w-20 border-4 border-card bg-card">
                  <AvatarFallback className="text-2xl font-bold text-primary">JD</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-muted-foreground text-sm mb-4">@johndoe • Basketball</p>
              
              <div className="grid grid-cols-2 gap-2 text-center border-t border-border pt-4">
                <div>
                  <div className="text-xl font-bold flex items-center justify-center gap-1">
                    <Flame className="w-5 h-5 text-green-500" />
                    12
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">Day Streak</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">450</div>
                  <div className="text-xs text-muted-foreground uppercase">Points</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground uppercase tracking-wider">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <Link href="/athletes/me" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Target className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">My Profile</span>
              </Link>
              <Link href="/teams" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Trophy className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">My Teams</span>
              </Link>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Main Feed */}
      <main className="flex-1 max-w-2xl mx-auto w-full">
        {/* Create Post Input Trigger (simplified) */}
        <Card className="mb-8 border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
          <CardContent className="p-4 flex items-center gap-4">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 h-10 bg-background border border-input rounded-full flex items-center px-4 text-muted-foreground">
              Share your latest achievement...
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {MOCK_POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-80 shrink-0">
        <div className="sticky top-24 space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-lg">
                Top Athletes
                <Button variant="link" size="sm" className="text-xs text-primary p-0">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-muted-foreground w-4">{i}</span>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">U{i}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-semibold leading-none mb-1">Athlete Name</p>
                      <p className="text-xs text-muted-foreground">1,240 pts</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Open Competitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg bg-background hover:border-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">FOOTBALL</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Search className="w-3 h-3"/> India</span>
                </div>
                <h4 className="font-bold text-sm mb-1">National Talent Cup</h4>
                <p className="text-xs text-muted-foreground">Prize: ₹50,000 + club trial</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <Button className="w-14 h-14 rounded-full shadow-[0_0_20px_-5px_rgba(255,107,44,0.6)]">
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
