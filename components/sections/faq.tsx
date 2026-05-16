"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Combien de temps faut-il pour construire mon site web?",
      answer:
        "La durée dépend de la complexité. Les sites web basiques prennent 1-2 semaines, les sites professionnels prennent 2-4 semaines, et les solutions d'entreprise prennent 4-8 semaines. Nous fournissons des mises à jour régulières tout au long du processus.",
    },
    {
      question: "Fournissez-vous l'hébergement et la configuration du domaine?",
      answer:
        "Oui. Nous gérons tout, y compris l'enregistrement du domaine, la configuration de l'hébergement, les certificats SSL et la maintenance continue. Vous obtenez une solution complète et prête à l'emploi.",
    },
    {
      question: "Mon site web fonctionnera-t-il sur les appareils mobiles?",
      answer:
        "Absolument. Tous nos sites web sont construits selon une approche mobile-first et sont responsives. Ils s'adaptent automatiquement à toute taille d'écran, des téléphones aux tablettes en passant par les ordinateurs de bureau.",
    },
    {
      question: "Incluez-vous l'optimisation SEO?",
      answer:
        "Oui. Nous implémentons l'optimisation SEO sur page, les balises meta, les données structurées, et les optimisations de performance. Nous fournissons également des conseils sur la création de contenu et les stratégies de construction de liens.",
    },
    {
      question: "Que faire si j'ai besoin de modifications après le lancement?",
      answer:
        "Nous offrons des packages de support et de maintenance continus. Les petites modifications sont incluses dans nos plans de support, et les mises à jour plus importantes peuvent être gérées via nos services de développement.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Questions Fréquentes</h2>
          <p className="text-lg text-slate-400">Réponses rapides sur nos services de site web</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg glassmorphism glow-border overflow-hidden"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/20 transition cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-700/50 text-slate-400 pt-6">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
