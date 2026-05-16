"use client"

import { AlertTriangle, TrendingUp, Zap } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "Sans présence en ligne, vous perdez des clients",
      description: "Votre entreprise n’a pas de site web, vous manquez des opportunités de vente et de croissance.",
      icon: TrendingUp,
    },
    {
      stat: "Votre site web est obsolète et nuit à votre réputation",
      description: "Un design médiocre et un chargement lent nuisent à votre réputation",
      icon: AlertTriangle,
    },
    {
      stat: "Les outils DIY sont complexes et consomment du temps",
      description: "Les plateformes de création de sites web en libre-service sont difficiles à utiliser et prennent du temps à maîtriser, ce qui vous empêche de vous concentrer sur votre activité.",
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Les problèmes de votre entreprise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sans un site web professionnel, votre entreprise perd des clients, nuit à sa réputation et gaspille du temps avec des outils de création de sites web complexes.
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
