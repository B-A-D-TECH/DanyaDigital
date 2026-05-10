"use client"

import { AlertTriangle, TrendingUp, Zap } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "No online presence means lost customers",
      description: "Businesses without websites miss out on potential clients",
      icon: TrendingUp,
    },
    {
      stat: "Outdated websites drive visitors away",
      description: "Poor design and slow loading hurt your reputation",
      icon: AlertTriangle,
    },
    {
      stat: "DIY tools are complex and time-consuming",
      description: "Building a website yourself wastes valuable time",
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">The Problem with Outdated Websites</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your business lacks online presence. Your website is outdated. Your customers can't find you find you.
          </p>
        </div>

        {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group border-primary/20"
              >
                <Icon className="w-8 h-8 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{problem.stat}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
