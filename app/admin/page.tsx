"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Edit2, Eye, Settings, Zap } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const sections = [
    {
      id: "hero",
      name: "Section Accueil",
      description: "Titre principal et image d'introduction",
      status: "✅ Actif",
    },
    {
      id: "pricing",
      name: "Tarification",
      description: "Plans tarifaires (9, 19, 49€...)",
      status: "✅ Actif",
    },
    {
      id: "features",
      name: "Fonctionnalités",
      description: "Avantages et services proposés",
      status: "✅ Actif",
    },
    {
      id: "testimonials",
      name: "Avis Clients",
      description: "Témoignages et références",
      status: "✅ Actif",
    },
    {
      id: "faq",
      name: "FAQ",
      description: "Questions fréquemment posées",
      status: "✅ Actif",
    },
    {
      id: "contact",
      name: "Contact",
      description: "Formulaire de contact et localisation",
      status: "✅ Actif",
    },
  ]

  const stats = [
    { label: "Sections actives", value: "6", color: "bg-green-500/20 text-green-400" },
    { label: "Pages", value: "4", color: "bg-blue-500/20 text-blue-400" },
    { label: "Tarifs", value: "5 plans", color: "bg-purple-500/20 text-purple-400" },
    { label: "Localisation", value: "Maroc 🇲🇦", color: "bg-red-500/20 text-red-400" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4" />
                Retour au site
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">🔧 Gestion du Site</h1>
          </div>
          <Button variant="outline">Quitter l'admin</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="sections">Sections</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Tab: Overview */}
          <TabsContent value="overview" className="space-y-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <Card key={i} className="p-6 border border-primary/20 bg-background/50">
                  <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                </Card>
              ))}
            </div>

            <Card className="p-8 border border-primary/20 bg-background/50">
              <h2 className="text-2xl font-bold mb-4">📊 État du site</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Performance</span>
                  <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sécurité</span>
                  <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Contenu optimisé</span>
                  <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tab: Sections */}
          <TabsContent value="sections" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold mb-6">Gérer les sections</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {sections.map((section) => (
                <Card
                  key={section.id}
                  className="p-6 border border-primary/20 bg-background/50 hover:bg-background/70 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary">{section.name}</h3>
                      <p className="text-sm text-slate-400 mt-1">{section.description}</p>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                      {section.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit2 className="w-4 h-4 mr-2" />
                      Modifier
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Voir
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab: Settings */}
          <TabsContent value="settings" className="space-y-6 mt-8">
            <h2 className="text-2xl font-bold mb-6">Paramètres</h2>
            
            <Card className="p-8 border border-primary/20 bg-background/50 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom du site</label>
                    <input
                      type="text"
defaultValue="BiTech Digital"
                      className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Localisation</label>
                    <input
                      type="text"
                      defaultValue="Maroc 🇲🇦"
                      className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email de contact</label>
                    <input
                      type="email"
                      defaultValue="contact@webcraft.ma"
                      className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/10">
                <h3 className="text-lg font-semibold mb-4">Tarification</h3>
                <div className="space-y-3">
                  <p className="text-sm text-slate-400">✅ Plan Micro: 9€</p>
                  <p className="text-sm text-slate-400">✅ Plan Essentiel: 19€</p>
                  <p className="text-sm text-slate-400">✅ Plan Startup: 49€</p>
                  <p className="text-sm text-slate-400">✅ Plan Business: 99€</p>
                  <p className="text-sm text-slate-400">✅ Plan Enterprise: 199€+</p>
                </div>
                <Button className="mt-4 w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Mettre à jour les tarifs
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
