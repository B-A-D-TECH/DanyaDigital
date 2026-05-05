"use client"

import { Shield, Zap, Eye, BarChart3 } from "lucide-react"

export default function Solution() {
  const features = [
    {
      title: "Custom Design & Development",
      description: "Tailored websites built to match your brand and business needs",
      icon: Eye,
    },
    {
      title: "Responsive & Mobile-First",
      description: "Websites that look great and work perfectly on all devices",
      icon: Zap,
    },
    {
      title: "SEO Optimization",
      description: "Built-in search engine optimization to help customers find you",
      icon: Shield,
    },
    {
      title: "Fast Loading & Performance",
      description: "Optimized for speed and performance to keep visitors engaged",
      icon: BarChart3,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">
            One Service. Complete Website Solution.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to build your website, simplified.
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-primary/10 p-8 rounded-xl glassmorphism border border-primary/20 hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
