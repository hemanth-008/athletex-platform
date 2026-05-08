"use client"

import * as React from "react"
import { Trophy, Calendar, Users, MapPin, Share2, Info, List, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CompetitionDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = React.useState("overview")
  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "participants", label: "Participants", icon: Users },
    { id: "bracket", label: "Bracket", icon: List },
    { id: "live", label: "Live Event", icon: Radio },
  ]

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="h-64 md:h-96 w-full relative bg-muted overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1518605368461-1e1e11411516?q=80&w=2062&auto=format&fit=crop" 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 container mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary hover:bg-primary text-white border-none text-sm px-3 py-1">Football</Badge>
            <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 text-sm px-3 py-1">Individual</Badge>
            <Badge className="bg-green-500 hover:bg-green-500 text-white border-none text-sm px-3 py-1">Active</Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">National Football Talent Cup</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">The premier grassroots football talent discovery tournament in India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                    activeTab === tab.id 
                      ? "bg-accent/50 border-b-2 border-primary text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary' : ''}`} />
                  {tab.label}
                  {tab.id === 'live' && <span className="flex w-2 h-2 rounded-full bg-red-500 ml-1 animate-pulse"></span>}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "overview" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-2xl font-bold text-foreground mb-4">About this Competition</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The National Football Talent Cup is a multi-stage scouting event designed to find the next generation of football stars. Participants will undergo rigorous physical testing, skill challenges, and live match scenarios observed by scouts from top-tier clubs.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Rules & Eligibility</h4>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      <li>Open to athletes aged 16-21.</li>
                      <li>Must have a verified AthleteX profile with updated baseline stats.</li>
                      <li>Registration closes 48 hours before the event start date.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "bracket" && (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                  <h3 className="text-xl font-bold mb-6">Tournament Bracket</h3>
                  <div className="overflow-x-auto pb-8 border border-border rounded-xl p-8 bg-card/50">
                    <div className="flex gap-16 min-w-max">
                      {/* Round 1 */}
                      <div className="flex flex-col gap-8 justify-center">
                        <div className="text-center font-bold text-sm text-muted-foreground mb-4">Quarter-Finals</div>
                        {[1,2,3,4].map(i => (
                          <div key={i} className="flex flex-col gap-1">
                            <div className="border border-primary rounded-md p-2 bg-background w-48 text-sm font-semibold">Player A <span className="float-right">2</span></div>
                            <div className="border border-border rounded-md p-2 bg-background w-48 text-sm text-muted-foreground">Player B <span className="float-right">1</span></div>
                          </div>
                        ))}
                      </div>
                      {/* Round 2 */}
                      <div className="flex flex-col gap-24 justify-center">
                        <div className="text-center font-bold text-sm text-muted-foreground mb-4">Semi-Finals</div>
                        {[1,2].map(i => (
                          <div key={i} className="flex flex-col gap-1 relative">
                            <div className="absolute -left-16 top-1/2 w-16 h-[2px] bg-border"></div>
                            <div className="border border-primary rounded-md p-2 bg-background w-48 text-sm font-semibold shadow-[0_0_10px_rgba(255,107,44,0.3)]">Player A <span className="float-right">3</span></div>
                            <div className="border border-border rounded-md p-2 bg-background w-48 text-sm text-muted-foreground">Player C <span className="float-right">0</span></div>
                          </div>
                        ))}
                      </div>
                      {/* Final */}
                      <div className="flex flex-col gap-8 justify-center">
                        <div className="text-center font-bold text-sm text-[#FFD700] mb-4 flex items-center justify-center gap-2"><Trophy className="w-4 h-4"/> Final</div>
                        <div className="flex flex-col gap-1 relative">
                          <div className="absolute -left-16 top-1/2 w-16 h-[2px] bg-border"></div>
                          <div className="border-2 border-[#FFD700] rounded-md p-3 bg-background w-56 text-base font-bold shadow-[0_0_20px_rgba(255,215,0,0.2)]">Player A <span className="float-right text-primary">TBD</span></div>
                          <div className="border border-border rounded-md p-3 bg-background w-56 text-base text-muted-foreground font-semibold">Player D <span className="float-right">TBD</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "live" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6">
                  <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-bold">Live Match: Player A vs Player D</span>
                    </div>
                    <Badge variant="outline" className="text-lg py-1 px-3">00:45:12</Badge>
                  </div>
                  <div className="aspect-video w-full bg-black rounded-xl border border-border overflow-hidden relative flex items-center justify-center group">
                    {/* Placeholder for video stream */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <Trophy className="w-16 h-16 text-white/50 mb-4" />
                      <p className="text-white font-medium text-lg">Stream starts at 18:00 IST</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Registration Closes In</p>
                  <p className="text-2xl font-bold text-primary font-mono tracking-wider">04d 12h 30m</p>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Prize Pool</p>
                      <p className="text-sm text-muted-foreground">₹50,000 + Club Trial Selection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Dates</p>
                      <p className="text-sm text-muted-foreground">June 1 - June 5, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Location</p>
                      <p className="text-sm text-muted-foreground">JLN Stadium, Delhi</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Spots Filled</span>
                    <span>342 / 500</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `68%` }} />
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <Button size="lg" className="w-full text-lg shadow-[0_0_20px_-5px_rgba(255,107,44,0.5)]">Register Now</Button>
                  <Button variant="outline" className="w-full gap-2"><Share2 className="w-4 h-4"/> Share Event</Button>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
