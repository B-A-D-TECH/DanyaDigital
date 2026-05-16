'use client'

import React from "react"

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'
import { useState } from 'react'

export default function JoinNow() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    industry: '',
    employees: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration submitted:', formData)
    setStep(4)
  }

  const benefits = [
    'Design Responsive Outils',
    'IA Automation',
    'Déploiement en 1 clic',
    '24/7 Support Expert',
    'Analyse de Performance',
    'Dashboard de qualité',
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {step !== 4 && (
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-sbold mb-6 ">
                Rejoindre <span className="text-accent">BiTech Digital</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Commencer Avec un site Web professionnel crée en minutes
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefits Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8  sticky top-40">
                <h3 className="text-xl font-sbold text-foreground mb-6">Vos avantages</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-2">
              {step === 4 ? (
                // Success Message
                <div className="bg-card/50 border-2 border-accent rounded-2xl p-12 text-center ">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center  mx-auto mb-6">
                    <Check className="w-10 h-10 text-background" />
                  </div>
                  <h2 className="text-3xl font-sbold text-accent mb-4">Bienvenue !</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Ton compte a été crée avec Succès. Vérifiez votre email.
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-accent text-background font-sbold  rounded-full ">
                    Allez au Dashboard
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 ">
                  {/* Step Indicator */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          s <= step ? 'bg-accent' : 'bg-primary/30'
                        }`}
                      ></div>
                    ))}
                  </div>

                  {/* Step 1: Company Info */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-sbold text-foreground mb-8">Information sur l'entreprise</h2>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm  text-foreground mb-2 ">
                          Nom de l'entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-sm  text-foreground mb-2 ">
                          Secteur d'activité
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                        >
                          <option value="">Sélectionnez un secteur</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Santé</option>
                          <option value="retail"></option>
                          <option value="technology">Technology</option>
                          <option value="government">Gouvernment</option>
                          <option value="other">Autres</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="employees" className="block text-sm  text-foreground mb-2 ">
                          Taille de l'Entreprise
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                        >
                          <option value="">Sélectionner la taille de l'Entreprise</option>
                          <option value="1-50">1-50 employées</option>
                          <option value="51-200">51-200 employées</option>
                          <option value="201-1000">201-1,000 employées</option>
                          <option value="1000+">1,000+ employées</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Info */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-sbold text-foreground mb-8">Information Contact</h2>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm  text-foreground mb-2 ">
                            Prénom
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="Aly"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm  text-foreground mb-2 ">
                            Nom
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="Diarra"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm  text-foreground mb-2 ">
                          Address Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="Diarra@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm  text-foreground mb-2 ">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Account Setup */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-sbold text-foreground mb-8">Create Your Account</h2>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm  text-foreground mb-2 ">
                          Mots de passe
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="••••••••"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Au minimum 8 character , en minuscule, et chiffre.
                        </p>
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm  text-foreground mb-2 ">
                          Confirmez votre Mots de passe
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="••••••••"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                        <input type="checkbox" id="terms" required className="w-4 h-4 mt-1" />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          Je suis d'accord avec les termes des services
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1  font-sbold bg-transparent"
                      >
                        Back
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full "
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-primary to-accent text-background font-sbold  rounded-full "
                      >
                        Créer un compte
                      </Button>
                    )}
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-6">
                    J'ai déjà un compte?{' '}
                    <a href="#" className="text-accent hover:text-primary transition-colors font-sbold">
                      connectez vous
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
