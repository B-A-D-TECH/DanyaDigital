"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Notre nouveau site web a augmenté les leads de 300% le premier mois. Le design est impressionnant et axé sur les conversions.",
      author: "Sarah Chen",
      role: "PDG, Entreprise Locale",
      stats: "300% plus de leads",
    },
    {
      quote: "Le mobile-responsive design nous aide à avoir des clients sur tous les appareils. Vendre n'a jamis été si facile.",
      author: "Michael Rodriguez",
      role: "Propriétaire, Boutique E-commerce",
      stats: "Succès mobile-first",
    },
    {
      quote: "Site web professionnel livré en 2 semaines. L'optimisation SEO nous a mis sur la page 1 de Google.",
      author: "Jennifer Lee",
      role: "Fondateur de Startup",
      stats: "Une visibilité accrue sur Google",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Confiance de nos clients</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Découvrez pourquoi les entreprises nous choisissent
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:neon-glow transition">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 italic">{testimonial.quote}</p>

              {/* Author */}
              <div className="border-t border-slate-700/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-slate-400 mb-2">{testimonial.role}</p>
                <p className="text-sm text-primary font-semibold">{testimonial.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
