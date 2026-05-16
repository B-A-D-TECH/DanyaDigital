import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Navbar from "@/components/navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BiTech Digital | Création de site web professionnel Maroc & Mali",
  description:
    "Agence web spécialisée en création de sites professionnels, SEO local et visibilité Google au Maroc et au Mali. Sites responsives, rapides et optimisés pour convertir.",
  keywords: [
    "site web professionnel",
    "création site web Maroc",
    "création site web Mali",
    "SEO",
    "référencement Google",
    "design web",
    "hébergement Vercel",
  ],
  authors: [{ name: "BiTech Digital" }],
  openGraph: {
    title: "BiTech Digital | Création de site web professionnel Maroc & Mali",
    description:
      "Agence web spécialisée en création de sites professionnels, SEO local et visibilité Google au Maroc et au Mali.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BiTech Digital | Création de site web professionnel Maroc & Mali",
    description:
      "Agence web spécialisée en création de sites professionnels, SEO local et visibilité Google au Maroc et au Mali.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    manifest: "/site.webmanifest",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BiTech Digital",
  "url": "https://danya-digital.vercel.app",
  "logo": "https://danya-digital.vercel.app/BiTech_Professional_Logo.svg",
  "description": "Agence web spécialisée en création de sites professionnels et SEO au Maroc et au Mali.",
  "sameAs": ["https://github.com/B-A-D-TECH"],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+212772172379",
    "contactType": "customer support",
    "areaServed": ["MA","ML"],
    "availableLanguage": ["fr","ar","en"]
  }]
}`,
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
