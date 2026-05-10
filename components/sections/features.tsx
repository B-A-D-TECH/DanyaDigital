"use client"

import { Search, Cpu, Lock, BarChart3, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Design Responsive",
      description: "Un design mobile-first qui fonctionne parfaitement sur tous les appareils",
    },
    {
      icon: Cpu,
      title: "Développement Sur Mesure",
      description: "Des solutions adaptées, construites avec des technologies modernes",
    },
    {
      icon: Lock,
      title: "Optimisation SEO",
      description: "Des sites pensés pour les moteurs de recherche, avec un meilleur positionnement",
    },
    {
      icon: BarChart3,
      title: "Suivi des Performances",
      description: "Des chargements rapides et une expérience utilisateur optimale",
    },
    {
      icon: Lock,
      title: "Hébergement Sécurisé",
      description: "Un hébergement fiable avec certificats SSL inclus",
    },
    {
      icon: Users,
      title: "Gestion du Contenu",
      description: "Des outils simples pour mettre à jour votre site",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Fonctionnalités Clés</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tout ce dont votre site a besoin, regroupé dans un service complet
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
