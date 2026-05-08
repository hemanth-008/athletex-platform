"use client"

import Link from "next/link"
import { MailCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-screen bg-background items-center justify-center">
      <div className="max-w-md w-full px-8 py-12 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <MailCheck className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Check your email</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          We've sent a confirmation link to your email address. Please click the link to activate your account.
        </p>
        <Link href="/auth/login" className="w-full">
          <Button className="w-full h-12 text-lg">Return to Login</Button>
        </Link>
      </div>
    </div>
  )
}
