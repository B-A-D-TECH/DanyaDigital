"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Our new website increased leads by 300% in the first month. The design is stunning and conversion-focused.",
      author: "Sarah Chen",
      role: "CEO, Local Business",
      stats: "300% more leads",
    },
    {
      quote: "The mobile-responsive design helped us reach customers on all devices. Sales have never been better.",
      author: "Michael Rodriguez",
      role: "Owner, E-commerce Store",
      stats: "Mobile-first success",
    },
    {
      quote: "Professional website delivered in 2 weeks. SEO optimization brought us to page 1 of Google.",
      author: "Jennifer Lee",
      role: "Founder, Startup Company",
      stats: "2-week delivery",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Trusted by Business Owners</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See why businesses choose our website creation services
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
