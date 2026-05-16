'use client'

import type { Metadata } from 'next'
import { Shield, Award, Users, Zap } from 'lucide-react'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'À propos | BiTech Digital',
  description:
    'Découvrez BiTech Digital, votre agence web spécialisée en création de sites professionnels, référencement SEO et design performant au Maroc et au Mali.',
};

export default function About() {
  const stats = [
    { label: "Années d'expérience", value: '15+' },
    { label: 'Sites livrés', value: '1000+' },
    { label: 'Clients satisfaits', value: '500+' },
    { label: 'Équipe créative', value: '50+' },
  ]

  const values = [
    {
      icon: Shield,
      title: "Excellence en design",
      description:
        "Chaque projet privilégie des visuels remarquables et des interfaces conviviales qui captivent votre audience.",
    },
    {
      icon: Users,
      title: "Approche centrée client",
      description:
        "Nous écoutons nos clients et améliorons continuellement nos créations pour répondre à leurs besoins spécifiques.",
    },
    {
      icon: Award,
      title: 'Assurance qualité',
      description:
        'Des standards d’excellence avec un design responsive, l’optimisation SEO et des performances de haut niveau.',
    },
    {
      icon: Zap,
      title: 'Innovation créative',
      description:
        'Des technologies à la pointe et des frameworks modernes pour des sites qui se démarquent et performent.',
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 neon-text-glow">
              À propos <span className="text-accent">BiTech Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conception de sites web professionnels et modernes pour les entreprises du monde
              entier, grâce à des solutions de design et de développement innovantes.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">Notre mission</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Donner aux entreprises de toutes tailles des sites web esthétiques, complets et
              performants pour favoriser la croissance et le succès. Nous pensons qu’un bon
              design doit être accessible, et qu’une présence en ligne ne devrait pas exiger de
              connaissances techniques approfondies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-card/50 border-2 border-accent/30 rounded-xl p-8 text-center hover:border-accent transition-colors"
              >
                <div className="text-4xl font-semibold text-accent mb-2">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold mb-8">Nos valeurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="bg-card/50 border-2 border-primary/30 rounded-xl p-8 hover:border-accent transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

