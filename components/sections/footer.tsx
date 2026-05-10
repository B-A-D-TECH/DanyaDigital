"use client"

import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/services" className="hover:text-primary transition">
                  Web Design
                </a>
              </li>
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  Development
                </a>
              </li>
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Industries</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  Small Business
                </a>
              </li>
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="../../services" className="hover:text-primary transition">
                  Startups
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://badra-aliou-diarraportfolio.vercel.app/" className="hover:text-primary transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Case Studies
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="../../about" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="../../contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="../../contact" className="hover:text-primary transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Brand */}
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

          {/* Copyright */}
<p className="text-sm text-slate-500">© 2026 BiTech Digital.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/B-A-D-TECH" className="text-slate-400 hover:text-primary transition" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
