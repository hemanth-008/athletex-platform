"use client"

// Minimal toaster placeholder to satisfy the layout without massive radix boilerplate
// In a real environment, you would run `npx shadcn-ui@latest add toast`
import * as React from "react"

export function Toaster() {
  return (
    <div id="toaster-root" className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    </div>
  )
}
