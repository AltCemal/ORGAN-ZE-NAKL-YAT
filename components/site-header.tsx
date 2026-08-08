"use client"

import { useState } from "react"
import Image from "next/image"
import { Truck, Phone, MessageCircle, Menu, X, Package, Route } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/whatsapp"

const navLinks = [
  { href: "#yuk", label: "Yüküm Var", icon: Package },
  { href: "#arac", label: "Tırcıyım / Araç Var", icon: Truck },
  { href: "#hizmetler", label: "Hizmetlerimiz", icon: Route },
  { href: "#iletisim", label: "İletişim", icon: Phone },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 flex-shrink-0" aria-label={siteConfig.name}>
          <div className="relative h-20 w-20 rounded-full border-2 border-amber-500/40 shadow-md overflow-hidden">
            <Image
              src="/logo.webp"
              alt="Organize Nakliyat Samsun Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={buildTelUrl()}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Hemen Ara
          </a>
          <a
            href={buildWhatsAppUrl("Merhaba, nakliye hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.6_0.16_150)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Mobil menü">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
                >
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
