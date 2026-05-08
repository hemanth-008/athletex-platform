"use client"

import * as React from "react"
import { Bell, Eye, Medal, Trophy, Megaphone, Heart, UserPlus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function NotificationsPage() {
  const [notifications, setNotifications] = React.useState([
    { id: 1, type: "profile_view", title: "Profile Viewed", body: "A scout from Mumbai FC viewed your profile", is_read: false, time: "2m ago", icon: Eye, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: 2, type: "badge_earned", title: "Badge Earned!", body: "You earned: 🥈 Silver Streak (60 Days)", is_read: false, time: "1h ago", icon: Medal, color: "text-[#C0C0C0]", bg: "bg-[#C0C0C0]/10" },
    { id: 3, type: "post_milestone", title: "Post Milestone", body: "Your recent sprint post reached 100 likes", is_read: true, time: "5h ago", icon: Heart, color: "text-red-500", bg: "bg-red-500/10" },
    { id: 4, type: "competition_advance", title: "Tournament Update", body: "Your team advanced to Semi-Finals in Talent Cup", is_read: true, time: "1d ago", icon: Trophy, color: "text-[#FFD700]", bg: "bg-[#FFD700]/10" },
    { id: 5, type: "new_follower", title: "New Follower", body: "Zara Khan started following you", is_read: true, time: "2d ago", icon: UserPlus, color: "text-green-500", bg: "bg-green-500/10" },
    { id: 6, type: "new_competition", title: "New Event", body: "New competition open in your region: Delhi League", is_read: true, time: "3d ago", icon: Megaphone, color: "text-primary", bg: "bg-primary/10" },
  ])

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, is_read: true })))
  }

  const markRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, is_read: true } : n))
  }

  const unreadCount = notifications.filter(n => !n.is_read).length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Bell className="w-8 h-8 text-primary" /> 
            Notifications
            {unreadCount > 0 && (
              <span className="bg-primary text-primary-foreground text-sm font-bold px-2 py-0.5 rounded-full ml-2">
                {unreadCount}
              </span>
            )}
          </h1>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllRead} className="gap-2">
            <Check className="w-4 h-4" /> Mark all as read
          </Button>
        )}
      </div>

      <Card className="border-border bg-card overflow-hidden">
        <div className="divide-y divide-border">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              onClick={() => markRead(notif.id)}
              className={cn(
                "p-4 flex gap-4 cursor-pointer transition-colors hover:bg-accent/50",
                !notif.is_read ? "bg-primary/5" : "bg-transparent"
              )}
            >
              <div className={cn("shrink-0 w-12 h-12 rounded-full flex items-center justify-center", notif.bg)}>
                <notif.icon className={cn("w-6 h-6", notif.color)} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={cn("font-semibold text-base", !notif.is_read ? "text-foreground" : "text-muted-foreground")}>
                    {notif.title}
                  </h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{notif.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{notif.body}</p>
              </div>
              {!notif.is_read && (
                <div className="shrink-0 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
