'use client'

import { Palette, Code, Zap, Globe, ShoppingCart, Wrench, MapPin, Globe2, Search, Megaphone, Camera, Brain, Smartphone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

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
      description: 'Sites web modernes et responsives adaptés aux besoins des entreprises maliennes.',
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
      description: 'Apps mobiles natives ou hybrides pour iOS et Android adaptées au marché malien.',
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: 'Campagnes emailing automatisées et personnalisées pour fidéliser vos clients.',
    },
  ]

  const services = [
    {
      icon: Palette,
      title: 'Web Design & UI/UX',
      description: 'Beautiful, user-centered website designs that engage visitors and drive conversions with modern aesthetics.',
      features: ['Responsive Design', 'User Experience Optimization', 'Brand Identity', 'Prototyping & Wireframing']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Custom web applications built with cutting-edge technologies and best practices for performance and scalability.',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration']
    },
    {
      icon: Zap,
      title: 'SEO Optimization',
      description: 'Improve your online visibility with comprehensive SEO strategies and technical optimization to rank higher.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Optimization']
    },
    {
      icon: Globe,
      title: 'Hosting & Deployment',
      description: 'Reliable hosting solutions with automated deployment, backups, and 24/7 monitoring for your website.',
      features: ['Cloud Hosting', 'SSL Certificates', 'Automated Backups', 'CDN Integration']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with payment processing, inventory management, and customer analytics.',
      features: ['Store Setup', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly and securely.',
      features: ['Regular Updates', 'Security Patches', 'Performance Monitoring', 'Technical Support']
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
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions designed to build, optimize, and maintain your online presence.
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
                    Learn More
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Mali Digital Services Section */}
          <div className="mt-20 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 neon-text-glow">
                Services <span className="text-accent">digitaux pour le Mali</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Solutions digitales complètes adaptées au marché malien pour booster votre présence en ligne.
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
            <h2 className="text-3xl font-semibold mb-4">Ready to Build Your Website?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's schedule a free consultation to discuss your website vision and create the perfect solution for your needs.
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full px-8 ">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
