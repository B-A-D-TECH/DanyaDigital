"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1a0a2e] to-[#0F172A]"></div>

      {/* Decorative glow orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Decorative sparkle */}
            <div className="inline-flex items-center gap-2 text-accent/80">
              <Sparkles className="w-5 h-5" />
<span className="text-sm font-medium">Développez votre activité grâce à des sites sur mesure</span>
            </div>

            <div className="space-y-6">
<h1 className="text-6xl lg:text-6xl font-semibold text-balance leading-tight neon-text-glow">
                <span className="text-primary">Services de création</span>

                <span className="text-primary"> de sites professionnels</span>
              </h1>
             
              <p className="text-xl text-muted-foreground  leading-relaxed">
              Des services de création de sites professionnels pour concevoir des sites modernes 
              et responsives pour votre entreprise.
                Approuvé par des entrepreneurs et des entreprises partout dans le monde.
              </p>
            </div>

<div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-8"
              >
                <Link href="/join">Rejoindre</Link>
              </Button>
              <Button
                size="lg"
              
                className="border-2 border-accent bg-transparent rounded-full px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 has-[>svg]:px-4 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg  cursor-pointer"
              >
                <Link href="/services">
En savoir plus
                </Link>
              </Button>
            </div>

Avec nous, faites plus
          </div>

          <div className="hidden lg:flex flex-col items-center gap-8">
            {/* Shield Icon Card */}
          

            {/* Dashboard Preview with enhanced glow */}
            <div className="w-full">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
