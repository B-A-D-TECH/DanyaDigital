'use client'

import { Shield, Award, Users, Zap } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Websites Delivered', value: '1000+' },
    { label: 'Satisfied Clients', value: '500+' },
    { label: 'Creative Team', value: '50+' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Design Excellence',
      description: 'Every project prioritizes stunning visuals and user-friendly interfaces that captivate audiences.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We listen to our clients and continuously improve our designs to meet their unique needs.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Industry-leading standards with responsive design, SEO optimization, and performance excellence.'
    },
    {
      icon: Zap,
      title: 'Creative Innovation',
      description: 'Cutting-edge technologies and modern frameworks for websites that stand out and perform.'
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 neon-text-glow">
              About <span className="text-accent">WebCraft Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting stunning, professional websites for businesses worldwide with cutting-edge design and development solutions.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-10 ">
            <h2 className="text-3xl font-semibold  mb-6">Our Mission</h2>
            <p className="text-lg text-foreground leading-relaxed">
              To empower businesses of all sizes with beautifully designed, fully functional websites that drive growth and success. We believe that great design should be accessible, and that creating an online presence shouldn't require extensive technical knowledge.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-card/50 border-2 border-accent/30 rounded-xl p-8 text-center  hover:border-accent transition-colors">
                <div className="text-4xl font-semibold text-accent mb-2">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-card/50 border-2 border-primary/30 rounded-xl p-8 hover:border-accent transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center  flex-shrink-0">
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
