"use client"

import { Shield, Zap, Eye, BarChart3 } from "lucide-react"

export default function Solution() {
  const features = [
    {
      title: "Meilleure Design & Expérience Utilisateur",
      description: "Des sites web modernes et élégants qui captivent les visiteurs et augmentent les conversions",
      icon: Eye,
    },
    {
      title: "Responsive avec tous les appareils",
      description: "Des sites web qui ont l'air bien et fonctionnent parfaitement sur tous les appareils",
      icon: Zap,
    },
    {
      title: "Optimisation SEO",
      description: "Crée avec des analyse de données SEO pour améliorer votre positionnement sur les moteurs de recherche et faciliter la découverte de votre entreprise en ligne",
      icon: Shield,
    },
    {
      title: "Rapidité & Performance",
      description: "Optimisé pour des temps de chargement rapides et des performances de haut niveau, offrant une expérience utilisateur fluide et agréable",
      icon: BarChart3,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">
            Une Service. Un Site Web complet pour votre entreprise.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que tu as besoin pour la création de ton site web simplifié.
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-primary/10 p-8 rounded-xl glassmorphism border border-primary/20 hover:border-accent transition group" >
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
