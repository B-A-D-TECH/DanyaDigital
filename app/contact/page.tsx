'use client'

import React from 'react'
import { useState } from 'react'

import { Mail, Phone, MapPin, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire envoyé :', formData)
    setFormData({ name: '', email: '', company: '', message: '' })
    alert("Message envoyé ! Nous vous recontacterons très bientôt.")
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'bad.no.worst@gmail.com',
      link: 'mailto:bad.no.worst@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+212 772172379',
      link: 'tel:+212772172379',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Casablanca, Maroc',
      link: 'https://www.google.com/maps?q=Casablanca,+Morocco&ll=33.9998,33.9998&z=4',
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 neon-text-glow">
              Prenez <span className="text-accent">contact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des questions ? Notre équipe est prête à vous aider. Contactez-nous quand vous
              voulez.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="bg-card/50 border-2 border-primary/30 rounded-xl p-8 text-center hover:border-accent transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.label}
                  </h3>
                  <p className="text-accent hover:text-primary transition-colors">{info.value}</p>
                </a>
              )
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                <a href='mailto:bad.no.worst@gmail.com'>Envoyez-nous un message</a>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-foreground mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-foreground mb-2"
                    >
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Aly@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm text-foreground mb-2"
                  >
                    Société
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full py-3 hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

