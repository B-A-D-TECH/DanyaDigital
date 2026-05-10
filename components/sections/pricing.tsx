"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Micro",
      price: "9",
      currency: "£",
      period: "une seule page",
      description: "Parfait pour débuter",
      features: [
        "1 page web simple",
        "Design basique responsive",
        "Formulaire de contact",
        "6 mois d'hébergement",
        "Support email basique",
      ],
      highlighted: false,
    },
    {
      name: "Essentiel",
      price: "19",
      currency: "£",
      period: "3 pages",
      description: "Pour les petits projets",
      features: [
        "Site web 3 pages",
        "Design responsive mobile",
        "SEO basique inclus",
        "Formulaire de contact",
        "6 mois d'hébergement",
        "Support par email",
      ],
      highlighted: false,
    },
    {
      name: "Startup",
      price: "49",
      currency: "£",
      period: "ou 415 MAD/mois",
      description: "Idéal pour les petits commerces",
      features: [
        "Site web 5 pages",
        "Design responsive mobile",
        "SEO basique inclus",
        "Formulaire de contact",
        "1 an d'hébergement gratuit",
        "Support par email",
      ],
      highlighted: false,
    },
    {
      name: "Business",
      price: "1,490",
      currency: "£",
      period: "ou 1,490 £/mois",
      description: "Solution complète pour votre entreprise",
      features: [
        "Site web 10-15 pages",
        "Design personnalisé",
        "SEO avancé + Google Analytics",
        "Intégration e-commerce",
        "Paiement en ligne sécurisé",
        "2 ans d'hébergement",
        "12 mois de support premium",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "3,490",
      currency: "£",
      period: "à partir",
      description: "Solutions sur mesure à grande échelle",
      features: [
        "Site illimité en pages",
        "Développement 100% custom",
        "Intégrations avancées API",
        "Optimisation performance",
        "Support 24/7 dédié",
        "Maintenance continue",
        "Consultation stratégique incluse",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Tarifs Attractifs & Généreux</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Paiements flexibles adaptés à votre budget • Sans frais cachés • Forfaits conçus pour les entreprises marocaines</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 auto-rows-max">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 lg:p-8 rounded-xl transition duration-300 group cursor-pointer transform hover:scale-105 ${
                plan.highlighted
                  ? "glassmorphism glow-border neon-glow ring-2 ring-primary/30 lg:row-span-1 lg:scale-105"
                  : "glassmorphism border-2 border-gray-600 hover:neon-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-2 lg:-top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-2 lg:px-4 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground whitespace-nowrap">
                    ⭐ PLUS POPULAIRE
                  </span>
                </div>
              )}

              <h3 className="text-lg lg:text-2xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-xs lg:text-sm mb-4 lg:mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-4 lg:mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl lg:text-4xl font-semibold text-primary">{plan.price}</span>
                  <span className="text-sm lg:text-lg text-primary">{plan.currency}</span>
                </div>
                {plan.period && <span className="text-muted-foreground text-xs lg:text-sm">{plan.period}</span>}
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="block">
                <Button
                  className={`w-full mb-4 lg:mb-8 rounded-full text-sm ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted/30 hover:bg-muted/50 text-foreground"
                  } `}
                >
                  Get Started
                </Button>
              </Link>
              {/* Features List */}
              <div className="space-y-2 lg:space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 lg:gap-3">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
