"use client"

import * as React from "react"
import { BarChart3, Users, Eye, TrendingUp, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ScoutDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Scout Dashboard</h1>
          <p className="text-muted-foreground">Analytics and insights on your talent pipeline.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" /> Export Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-green-500 flex items-center gap-1">+12% <TrendingUp className="w-3 h-3"/></span>
            </div>
            <div className="text-3xl font-bold mb-1">142</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Total Saved Profiles</div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-green-500 flex items-center gap-1">+8% <TrendingUp className="w-3 h-3"/></span>
            </div>
            <div className="text-3xl font-bold mb-1">845</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Profile Views (30d)</div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">Football</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Top Searched Sport</div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-500" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">18</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Active Outreach</div>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-border bg-card h-96 flex flex-col">
          <CardHeader>
            <CardTitle>Activity Over Time (30 Days)</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center border-t border-border mt-2 bg-muted/20">
            <p className="text-muted-foreground text-sm">[Recharts LineChart Placeholder]</p>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card h-96 flex flex-col">
          <CardHeader>
            <CardTitle>Saved Athletes by Sport</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center border-t border-border mt-2 bg-muted/20">
            <p className="text-muted-foreground text-sm">[Recharts DonutChart Placeholder]</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
