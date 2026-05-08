"use client"

import * as React from "react"
import { Newspaper, ExternalLink, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function NewsPage() {
  const [activeTab, setActiveTab] = React.useState("All")
  const tabs = ["All", "Football", "Cricket", "Basketball", "Tennis", "Athletics", "More"]

  // Mock data representing NewsAPI response
  const news = [
    {
      title: "Champions League Final: Late Drama Secures Historic Win",
      source: "Sports Illustrated",
      category: "Football",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1574629810360-7efbb1b37c00?q=80&w=2072&auto=format&fit=crop",
      url: "#"
    },
    {
      title: "New World Record Set in 100m Sprint at National Qualifiers",
      source: "ESPN",
      category: "Athletics",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
      url: "#"
    },
    {
      title: "NBA Playoffs: Unlikely Hero Emerges in Game 7",
      source: "Bleacher Report",
      category: "Basketball",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
      url: "#"
    },
    {
      title: "Rising Tennis Star Causes Huge Upset at Grand Slam",
      source: "BBC Sport",
      category: "Tennis",
      time: "10 hours ago",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2071&auto=format&fit=crop",
      url: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Newspaper className="w-10 h-10 text-primary" /> 
            Sports News
          </h1>
          <p className="text-muted-foreground">The latest headlines from around the sporting world.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search news..." className="pl-9" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {news.map((item, i) => (
          <Card key={i} className="overflow-hidden border-border bg-card flex flex-col group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="h-48 w-full relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded shadow">
                {item.category}
              </div>
            </div>
            <CardContent className="p-4 flex-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-medium">
                <span className="text-foreground">{item.source}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {item.time}</span>
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-3">
                {item.title}
              </h3>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-sm font-medium text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
              Read full story <ExternalLink className="w-4 h-4" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
