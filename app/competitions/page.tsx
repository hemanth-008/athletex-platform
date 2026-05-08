"use client"

import * as React from "react"
import Link from "next/link"
import { Trophy, Calendar, Users, MapPin, Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompetitionsHub() {
  const [activeTab, setActiveTab] = React.useState("Open")
  const tabs = ["Open", "Active", "Live", "Completed", "My Competitions"]

  const competitions = [
    {
      id: "comp-1",
      title: "National Football Talent Cup",
      sport: "Football",
      format: "Individual",
      organiser: "IndiaAthletics",
      prize: "₹50,000 + club trial",
      region: "Pan-India",
      status: "Active",
      max_participants: 500,
      current_participants: 342,
      deadline: "2026-06-01",
      image: "https://images.unsplash.com/photo-1518605368461-1e1e11411516?q=80&w=2062&auto=format&fit=crop"
    },
    {
      id: "comp-2",
      title: "All India Athletics Sprint Challenge",
      sport: "Athletics",
      format: "Individual",
      organiser: "SpeedForce",
      prize: "₹25,000",
      region: "Mumbai",
      status: "Live",
      max_participants: 100,
      current_participants: 100,
      deadline: "2026-05-10",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "comp-3",
      title: "South India Cricket League",
      sport: "Cricket",
      format: "Team",
      organiser: "CricketSouth",
      prize: "₹1,00,000",
      region: "South India",
      status: "Upcoming",
      max_participants: 16,
      current_participants: 12,
      deadline: "2026-07-15",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Trophy className="w-10 h-10 text-primary" /> 
            Competition Hub
          </h1>
          <p className="text-muted-foreground">Find and register for tournaments worldwide.</p>
        </div>
        
        {/* Only visible to organisers */}
        <Button className="gap-2 shadow-[0_0_20px_-5px_rgba(255,107,44,0.5)]">
          <Plus className="w-4 h-4" /> Create Competition
        </Button>
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((comp) => (
          <Card key={comp.id} className="overflow-hidden border-border bg-card flex flex-col hover:border-primary/50 transition-colors">
            <div className="h-40 w-full relative bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={comp.image} alt={comp.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge className="bg-primary hover:bg-primary text-white border-none">{comp.sport}</Badge>
                {comp.status === "Live" && (
                  <Badge className="bg-red-500 hover:bg-red-500 text-white border-none animate-pulse">LIVE</Badge>
                )}
              </div>
              <div className="absolute top-3 right-3">
                <Badge variant="outline" className="bg-black/50 text-white backdrop-blur-sm border-white/20">
                  {comp.format}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <h3 className="font-bold text-xl leading-tight line-clamp-2">{comp.title}</h3>
              <p className="text-sm text-muted-foreground">by {comp.organiser}</p>
            </CardHeader>
            
            <CardContent className="space-y-4 flex-1">
              <div className="bg-accent/50 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Trophy className="w-4 h-4"/> Prize</span>
                  <span className="font-semibold text-primary">{comp.prize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Region</span>
                  <span className="font-medium">{comp.region}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Users className="w-4 h-4"/> Participants</span>
                  <span className="font-medium">{comp.current_participants} / {comp.max_participants}</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all" 
                    style={{ width: `${(comp.current_participants / comp.max_participants) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-sm font-medium text-orange-500">
                <Calendar className="w-4 h-4" /> 
                {comp.status === 'Live' ? 'In Progress' : `Closes: ${comp.deadline}`}
              </div>
            </CardContent>
            
            <CardFooter className="pt-0 border-t border-border mt-auto flex">
              <Link href={`/competitions/${comp.id}`} className="w-full">
                <Button className="w-full mt-4 group">
                  {comp.status === 'Live' ? 'View Live Event' : 'View Details & Register'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
