"use client"

import { Search, Cpu, Lock, BarChart3, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Responsive Design",
      description: "Mobile-first design that works perfectly on all devices",
    },
    {
      icon: Cpu,
      title: "Custom Development",
      description: "Tailored solutions built with modern technologies",
    },
    {
      icon: Lock,
      title: "SEO Optimization",
      description: "Search engine friendly websites that rank higher",
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Fast loading speeds and optimal user experience",
    },
    {
      icon: Lock,
      title: "Secure Hosting",
      description: "Reliable hosting with SSL certificates included",
    },
    {
      icon: Users,
      title: "Content Management",
      description: "Easy-to-use systems for updating your website",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Core Features</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything your website needs in one comprehensive service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
