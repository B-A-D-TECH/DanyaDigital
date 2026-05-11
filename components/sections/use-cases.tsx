"use client"

import { Briefcase, Building2, Stethoscope, DollarSign, ShoppingCart, Wifi } from "lucide-react"

export default function UseCases() {
  const useCases = [
    { icon: Building2, title: "Petites Entereprises", description: "Présence professionnelle en ligne" },
    { icon: Briefcase, title: "Startups", description: "Lancement rapide avec des sites web impressionnants" },
    { icon: Stethoscope, title: "Santé", description: "Construire la confiance avec les patients en ligne" },
    { icon: DollarSign, title: "Services Financiers", description: "Présence web sécurisée et professionnelle" },
    { icon: ShoppingCart, title: "E-commerce", description: "Convertir les visiteurs en clients" },
    { icon: Wifi, title: "Entreprises à Distance", description: "Se connecter avec des clients à l'échelle mondiale" },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Pour qui nous construisons</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Sites web professionnels pour tous les types d'entreprises</p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-primary/20 rounded-lg overflow-hidden">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8  glassmorphism  transition group text-center border-b  md:border-r last:border-0 border-primary/20 "
              >
                <Icon className="w-12 h-12 text-accent group-hover:text-primary transition mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
