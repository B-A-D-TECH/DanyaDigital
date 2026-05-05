"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, BookOpen, Settings, Zap, Home } from "lucide-react"

export default function GettingStarted() {
  const steps = [
    {
      icon: Home,
      title: "1. Vue d'ensemble",
      description: "Consultez la page d'accueil pour présenter votre site aux visiteurs",
      action: "Aller à l'accueil",
      link: "/",
    },
    {
      icon: Zap,
      title: "2. Gestion du contenu",
      description: "Modifiez facilement vos tarifs, services et informations de contact",
      action: "Accéder à l'admin",
      link: "/admin",
    },
    {
      icon: BookOpen,
      title: "3. Personnalisation",
      description: "Adaptez le site à votre marque (couleurs, texte, images)",
      action: "Apprendre plus",
      link: "#docs",
    },
    {
      icon: Settings,
      title: "4. Publication",
      description: "Une fois satisfait, votre site est prêt pour être déployé en ligne",
      action: "Déployer",
      link: "#deploy",
    },
  ]

  const quickLinks = [
    { title: "📱 Voir le site", href: "/" },
    { title: "⚙️ Gérer le contenu", href: "/admin" },
    { title: "💼 Services", href: "/services" },
    { title: "📞 Contact", href: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">🚀 Démarrage</h1>
            <Link href="/">
              <Button variant="outline" size="sm">Retour</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="space-y-12">
          {/* Welcome */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Bienvenue sur <span className="text-primary">WebCraft Studio</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ce guide vous montre comment gérer et personnaliser votre site web sans expérience technique.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <Card className="p-6 border border-primary/20 bg-background/50 hover:bg-background/70 transition h-full cursor-pointer">
                  <p className="font-semibold text-primary">{link.title}</p>
                </Card>
              </Link>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">📋 Premiers pas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <Card
                    key={i}
                    className="p-6 border border-primary/20 bg-background/50 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400">{step.description}</p>
                    </div>
                    <Link href={step.link}>
                      <Button size="sm" variant="outline" className="w-full group">
                        {step.action}
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                      </Button>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">❓ Questions fréquentes</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 border border-primary/20 bg-background/50 space-y-3">
                <h4 className="font-semibold">Comment modifier les tarifs ?</h4>
                <p className="text-sm text-slate-400">
                  Rendez-vous dans l'espace admin (icône engrenage en haut à droite), puis onglet "Paramètres" pour mettre à jour vos tarifs.
                </p>
              </Card>

              <Card className="p-6 border border-primary/20 bg-background/50 space-y-3">
                <h4 className="font-semibold">Comment ajouter une nouvelle page ?</h4>
                <p className="text-sm text-slate-400">
                  Les pages principales sont déjà créées. Contactez le support technique pour ajouter des pages personnalisées.
                </p>
              </Card>

              <Card className="p-6 border border-primary/20 bg-background/50 space-y-3">
                <h4 className="font-semibold">Comment personnaliser les couleurs ?</h4>
                <p className="text-sm text-slate-400">
                  Les couleurs du site sont définies dans les paramètres. Vous pouvez les modifier sans coder.
                </p>
              </Card>

              <Card className="p-6 border border-primary/20 bg-background/50 space-y-3">
                <h4 className="font-semibold">Le site est-il mobile-friendly ?</h4>
                <p className="text-sm text-slate-400">
                  Oui ! Votre site s'adapte automatiquement à tous les appareils (téléphone, tablette, ordinateur).
                </p>
              </Card>
            </div>
          </div>

          {/* Support */}
          <Card className="p-8 border border-primary/20 bg-background/50 text-center space-y-4">
            <h3 className="text-xl font-bold">💡 Besoin d'aide ?</h3>
            <p className="text-slate-400">
              Notre équipe support est disponible pour répondre à vos questions et vous aider à configurer votre site.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Nous contacter
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
