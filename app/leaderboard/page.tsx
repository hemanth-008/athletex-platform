"use client"

import * as React from "react"
import { Trophy, Flame, Search, ChevronUp, ChevronDown, Download } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = React.useState("World");
  const tabs = ["World", "Continent", "Country", "Region", "Teams"];

  // Mock Data
  const leaderboard = [
    { rank: 1, name: "Priya Sharma", username: "priya_sprints", sport: "Athletics", streak: 112, points: 3100, trend: "up" },
    { rank: 2, name: "Ananya Iyer", username: "ananya_tennis", sport: "Tennis", streak: 83, points: 2450, trend: "up" },
    { rank: 3, name: "Zara Khan", username: "zara_hoops", sport: "Basketball", streak: 65, points: 1890, trend: "down" },
    { rank: 4, name: "Arjun Mehta", username: "arjun_gk1", sport: "Football", streak: 47, points: 1240, trend: "up", isCurrentUser: true },
    { rank: 5, name: "Dev Patel", username: "dev_swims", sport: "Swimming", streak: 34, points: 920, trend: "up" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Trophy className="w-10 h-10 text-primary" /> 
            Global Leaderboard
          </h1>
          <p className="text-muted-foreground">See how you rank against athletes worldwide.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Find athlete..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
              activeTab === tab 
                ? "border-b-2 border-primary text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Podium (Top 3) */}
      <div className="flex items-end justify-center h-80 mb-16 gap-2 sm:gap-6 pt-10">
        {/* Silver (Rank 2) */}
        <div className="flex flex-col items-center order-1 w-24 sm:w-32">
          <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#C0C0C0] mb-3 shadow-[0_0_20px_-5px_rgba(192,192,192,0.5)]">
            <AvatarFallback className="bg-[#C0C0C0]/20 text-[#C0C0C0]">A2</AvatarFallback>
          </Avatar>
          <div className="text-center mb-2">
            <p className="font-bold text-sm sm:text-base line-clamp-1">{leaderboard[1].name}</p>
            <p className="text-xs text-[#C0C0C0] font-semibold">{leaderboard[1].points} pts</p>
          </div>
          <div className="w-full h-32 bg-gradient-to-t from-[#C0C0C0]/20 to-[#C0C0C0]/5 border-t border-[#C0C0C0]/50 rounded-t-lg flex justify-center pt-2">
            <span className="text-2xl font-bold text-[#C0C0C0]">2</span>
          </div>
        </div>

        {/* Gold (Rank 1) */}
        <div className="flex flex-col items-center order-2 w-28 sm:w-40 z-10 -translate-y-8">
          <div className="relative">
            <Trophy className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 text-[#FFD700]" />
            <Avatar className="w-20 h-20 sm:w-28 sm:h-28 border-4 border-[#FFD700] mb-3 shadow-[0_0_30px_-5px_rgba(255,215,0,0.6)]">
              <AvatarFallback className="bg-[#FFD700]/20 text-[#FFD700]">A1</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center mb-2">
            <p className="font-bold text-base sm:text-lg line-clamp-1">{leaderboard[0].name}</p>
            <p className="text-sm text-[#FFD700] font-semibold">{leaderboard[0].points} pts</p>
          </div>
          <div className="w-full h-40 bg-gradient-to-t from-[#FFD700]/20 to-[#FFD700]/5 border-t border-[#FFD700]/50 rounded-t-lg flex justify-center pt-2">
            <span className="text-3xl font-bold text-[#FFD700]">1</span>
          </div>
        </div>

        {/* Bronze (Rank 3) */}
        <div className="flex flex-col items-center order-3 w-24 sm:w-32">
          <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#CD7F32] mb-3 shadow-[0_0_20px_-5px_rgba(205,127,50,0.5)]">
            <AvatarFallback className="bg-[#CD7F32]/20 text-[#CD7F32]">A3</AvatarFallback>
          </Avatar>
          <div className="text-center mb-2">
            <p className="font-bold text-sm sm:text-base line-clamp-1">{leaderboard[2].name}</p>
            <p className="text-xs text-[#CD7F32] font-semibold">{leaderboard[2].points} pts</p>
          </div>
          <div className="w-full h-24 bg-gradient-to-t from-[#CD7F32]/20 to-[#CD7F32]/5 border-t border-[#CD7F32]/50 rounded-t-lg flex justify-center pt-2">
            <span className="text-2xl font-bold text-[#CD7F32]">3</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
            <tr>
              <th className="px-6 py-4 font-semibold">Rank</th>
              <th className="px-6 py-4 font-semibold">Athlete</th>
              <th className="px-6 py-4 font-semibold">Sport</th>
              <th className="px-6 py-4 font-semibold text-center">Streak</th>
              <th className="px-6 py-4 font-semibold text-right">Points</th>
              <th className="px-6 py-4 font-semibold text-center">Trend</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((athlete) => (
              <tr 
                key={athlete.rank} 
                className={`border-b border-border/50 hover:bg-muted/50 transition-colors ${
                  athlete.isCurrentUser ? 'bg-primary/5 hover:bg-primary/10 border-l-4 border-l-primary' : ''
                }`}
              >
                <td className="px-6 py-4 font-bold text-muted-foreground">#{athlete.rank}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className={athlete.isCurrentUser ? "bg-primary/20 text-primary" : ""}>
                        {athlete.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{athlete.name}</div>
                      <div className="text-xs text-muted-foreground">@{athlete.username}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{athlete.sport}</td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center gap-1 font-semibold text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded-full">
                    <Flame className="w-3 h-3 fill-current" />
                    {athlete.streak}
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-bold text-foreground">{athlete.points.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    {athlete.trend === 'up' ? (
                      <ChevronUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
