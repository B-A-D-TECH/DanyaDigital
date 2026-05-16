import type { Metadata } from 'next'
import { Palette, Code, Zap, Globe, ShoppingCart, Wrench, MapPin, Globe2, Search, Megaphone, Camera, Brain, Smartphone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | BiTech Digital',
  description:
    'Services web complets : création de site web, SEO, hébergement, e-commerce et maintenance pour les entreprises au Maroc et au Mali.',
};

export default function Services() {
  const maliServices = [
    {
      icon: MapPin,
      title: 'Profil Google Business',
      description: 'Optimisez votre visibilité locale avec un profil Google Business professionnel et complet.',
    },
    {
      icon: Globe2,
      title: 'Création de Site Web',
      description: 'Sites web modernes et responsives adaptés aux besoins des entreprises au Mali et au Maroc.',
    },
    {
      icon: Search,
      title: 'Référencement SEO',
      description: 'Améliorez votre positionnement sur Google pour attirer plus de clients locaux.',
    },
    {
      icon: Megaphone,
      title: 'Publicité Facebook/Instagram',
      description: 'Campagnes publicitaires ciblées sur les réseaux sociaux pour maximiser votre ROI.',
    },
    {
      icon: Camera,
      title: 'Photos & Vidéos Professionnelles',
      description: 'Contenu visuel de haute qualité pour valoriser votre marque et vos produits.',
    },
    {
      icon: Brain,
      title: 'Stratégie Digitale',
      description: 'Plan digital complet pour développer votre présence en ligne de manière efficace.',
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps mobiles natives ou hybrides pour iOS et Android adaptées aux marchés du Mali et du Maroc.',
    },
    {
      icon: Wrench,
      title: 'Support & formation',
      description: 'Accompagnement continu, formation et support technique pour vous aider à gérer votre site et vos campagnes digitales.',
    },
  ]

  const services = [
    {
      icon: Palette,
title: 'Design web & UI/UX',
description: "Des conceptions de sites modernes centrées sur l’utilisateur, pensées pour captiver les visiteurs et augmenter les conversions grâce à un design actuel.",
      features: ['Design responsive', 'Optimisation de l’expérience utilisateur', 'Identité de marque', 'Prototypage & wireframes']
    },
    {
      icon: Code,
title: 'Développement full-stack',
      description: "Création d’applications web sur mesure avec des technologies modernes et les meilleures pratiques pour la performance et la scalabilité.",
      features: ['Développement front-end', 'Développement back-end', 'Conception de base de données', 'Intégration API']
    },
    {
      icon: Zap,
title: 'Optimisation SEO',
      description: 'Améliorez votre visibilité en ligne grâce à des stratégies SEO complètes et une optimisation technique pour mieux vous positionner.',
      features: ['Recherche de mots-clés', 'SEO on-page', 'SEO technique', 'Optimisation des performances']
    },
    {
      icon: Globe,
title: "Hébergement & déploiement",
      description:
        "Des solutions d’hébergement fiables avec déploiement automatisé, sauvegardes et supervision 24/7 pour votre site web.",
      features: ['Hébergement cloud', 'Certificats SSL', 'Sauvegardes automatisées', 'Intégration CDN']
    },
    {
      icon: ShoppingCart,
title: "Solutions e-commerce",
      description:
        "Mise en place complète d’une boutique en ligne avec traitement des paiements, gestion du stock et analyses clients.",
      features: ['Mise en place de la boutique', 'Intégration de paiement', 'Gestion du stock', 'Tableau de bord analytics']
    },
    {
      icon: Wrench,
      title: "Maintenance & support",
      description:
        "Maintenance continue, mises à jour et support technique pour assurer le bon fonctionnement et la sécurité de votre site web.",
      features: ['Mises à jour régulières', 'Correctifs de sécurité', 'Suivi des performances', 'Support technique']
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 ">
              Nos <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solutions de développement web complètes conçues pour créer, optimiser et maintenir votre présence en ligne.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 hover:border-accent transition-all hover:shadow-lg group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-accent">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full w-full hover:shadow-lg ">
En savoir plus
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Mali Digital Services Section */}
          <div className="mt-20 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 neon-text-glow">
                Services <span className="text-accent">digitaux pour le Maroc et le Mali</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Solutions digitales complètes adaptées en fonction de votre pays pour booster votre présence en ligne.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {maliServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="bg-card/50 border-2 border-accent/50 rounded-2xl p-8 hover:border-primary transition-all hover:shadow-lg group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-background" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <Button className="bg-gradient-to-r from-accent to-primary text-background font-semibold rounded-full w-full hover:shadow-lg">
                      En savoir plus
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-semibold mb-4">Prêt à créer votre site web ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Planifiez une consultation gratuite pour discuter de votre vision et construire la solution idéale pour vos besoins.
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full px-8 ">
              <Link href="/join">Planifier une consultation</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
