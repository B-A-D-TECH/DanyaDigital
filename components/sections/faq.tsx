"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline depends on complexity. Basic websites take 1-2 weeks, professional sites take 2-4 weeks, and enterprise solutions take 4-8 weeks. We provide regular updates throughout the process.",
    },
    // {
    //   question: "Do you provide hosting and domain setup?",
    //   answer:
    //     "Yes. We handle everything including domain registration, hosting setup, SSL certificates, and ongoing maintenance. You get a complete turnkey solution.",
    // },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Absolutely. All our websites are built mobile-first and responsive. They automatically adapt to any screen size, from phones to tablets to desktops.",
    },
    {
      question: "Do you include SEO optimization?",
      answer:
        "Yes. We implement on-page SEO, meta tags, structured data, and performance optimizations. We also provide guidance on content and link building strategies.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "We offer ongoing support and maintenance packages. Small changes are included in our support plans, and larger updates can be handled through our development services.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Common Questions</h2>
          <p className="text-lg text-slate-400">Quick answers about our website services</p>
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
