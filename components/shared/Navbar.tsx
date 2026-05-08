"use client"

import * as React from "react"
import Link from "next/link"
import { Bell, Menu, User, Trophy, Search, Newspaper, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [unreadCount, setUnreadCount] = React.useState(3);

  const navLinks = [
    { name: "Feed", href: "/feed", icon: Home },
    { name: "Discover", href: "/discover", icon: Search },
    { name: "Competitions", href: "/competitions", icon: Trophy },
    { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
    { name: "News", href: "/news", icon: Newspaper },
  ];

  return (
    <nav className="sticky top-0 z-[50] w-full border-b border-[#E5E5E5] bg-[#FFFFFF] shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[22px] font-[800] text-[#000000] tracking-tighter">AthleteX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-[600] text-[#111111] hover:text-[#FF6B2C] transition-colors duration-200 flex items-center gap-1.5"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/notifications" className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="w-[22px] h-[22px] text-[#111111]" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full animate-pulse-glow" />
              )}
            </Button>
          </Link>
          
          {/* Avatar Dropdown (simplified without dropdown-menu radix component for stability) */}
          <Link href="/athletes/me">
            <Avatar className="cursor-pointer border-2 border-[#111111] bg-[#000000] text-[#FFFFFF] hover:border-primary transition-colors">
              <AvatarImage src="" alt="@user" />
              <AvatarFallback className="bg-transparent text-[#FFFFFF] font-semibold">U</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <link.icon className="w-5 h-5 text-primary" />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
