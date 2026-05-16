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
                Créez un site web professionnel qui convertit
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                BiTech Digital conçoit pour vous un site moderne, rapide et optimisé pour Google,
                même avec un domaine Vercel gratuit. Attirez plus de clients au Maroc et au Mali
                et transformez votre image en ligne.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-semibold rounded-full px-8"
                >
                  Contactez-nous
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto border-2 border-accent bg-transparent rounded-full px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 has-[>svg]:px-4 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg cursor-pointer"
                >
                  Voir les services
                </Button>
              </Link>
            </div>
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
