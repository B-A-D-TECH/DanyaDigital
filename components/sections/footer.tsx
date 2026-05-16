"use client"

import { Github } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Conception de sites
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Développement
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Optimisation SEO
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Secteurs</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Petites entreprises
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Santé
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Startups
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Ressources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://badra-aliou-diarraportfolio.vercel.app/"
                  className="hover:text-primary transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Études de cas
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Entreprise</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/about" className="hover:text-primary transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Légal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/contact" className="hover:text-primary transition">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image
                src="/BiTech_Professional_Logo.svg"
                alt="BiTech Digital"
                width={200}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-sm text-slate-500">© 2026 BiTech Digital.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/B-A-D-TECH"
              className="text-slate-400 hover:text-primary transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

