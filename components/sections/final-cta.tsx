"use client"

import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>

        <div className="relative z-10 p-12 md:p-16 rounded-2xl bg-accent/10 text-center space-y-6">
          <div className="flex justify-center">
            <Shield className="w-12 h-12 text-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow leading-14">
            Get Your Professional Website Today
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Transform your business with a stunning, high-converting website. Start building your online presence now.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold "
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="border border-white hover:bg-white hover:text-primary-foreground  text-foreground bg-transparent cursor-pointer"
            >
              Contact Us
            </Button>
          </div>

          <p className="text-sm text-slate-400">Free consultation. No obligation. Let's discuss your project.</p>
        </div>
      </div>
    </section>
  )
}
