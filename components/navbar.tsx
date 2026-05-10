"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import Image from "next/image"

type SearchItem = { label: string; href: string }

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [query, setQuery] = useState("")

  const items: SearchItem[] = useMemo(
    () => [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Démarrage", href: "/getting-started" },
      { label: "Rejoindre", href: "/join" },
    ],
    []
  )

  const navLinks = useMemo(() => items.slice(0, 4), [items])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return items.filter((it) => it.label.toLowerCase().includes(q)).slice(0, 6)
  }, [items, query])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
    <Link href="/" className="flex items-center group">
  <div className="flex items-center gap-1">

        <Image
          src="/BiTech_Professional_Logo.svg"
          alt="BiTech Digital"
          width={200}
          height={120}
          className="object-contain"
        />

  </div>
    
    </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link href={link.href} className="font-normal text-lg text-foreground hidden lg:inline hover:text-primary px-3 py-2  ">
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section: Search & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher..."
                className="px-4 py-2 bg-background/50 border-2 border-gray-600 rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:bg-background transition-all w-56"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-accent pointer-events-none" />

              {results.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl shadow-lg overflow-hidden z-50">
                  {results.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-accent transition-colors"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            {/* CTA Button */}
            <Link href="/join">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full px-6  hover:shadow-lg  transition-all"
              >
                <Shield className="w-4 h-4" />
                Rejoindre
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card/50 backdrop-blur-md border-t border-primary/30 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-foreground  hover:text-accent transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher..."
                  className="w-full px-4 py-2 bg-background/50 border-2 border-accent rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none"
                />

                {results.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl shadow-lg overflow-hidden z-50">
                    {results.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        onClick={() => {
                          setMobileMenuOpen(false)
                        }}
                        className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-accent transition-colors"
                      >
                        {r.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/join" className="w-full">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full"
                >
                  Rejoindre maintenant
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
