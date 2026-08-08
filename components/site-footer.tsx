import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/whatsapp"

const links = [
  { href: "#yuk", label: "Yük İlanı Ver" },
  { href: "#arac", label: "Araç Bildir" },
  { href: "#hizmetler", label: "Hizmetlerimiz" },
  { href: "#iletisim", label: "İletişim" },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-20 rounded-full border-2 border-amber-500/40 shadow-md overflow-hidden">
                <Image
                  src="/logo.webp"
                  alt="Organize Nakliyat Samsun Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-heading text-lg font-extrabold">Organize Nakliyat Samsun</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Samsun merkezli nakliye komisyonculuğu. Yük sahiplerini güvenilir tır ve kamyon sürücüleriyle
              buluşturuyor, Türkiye geneli güvenli taşımacılığı organize ediyoruz.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={buildTelUrl()}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={buildTelUrl(siteConfig.phone2)}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone2Display}
              </a>
              <a
                href={buildWhatsAppUrl("Merhaba, bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.6_0.16_150)] px-4 py-2 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">Hızlı Erişim</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO text */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">Hizmet Bölgeleri</h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Samsun nakliye komisyoncusu, Samsun tır garajı yük ilanları, Samsun komple ve parsiyel yük, Karadeniz
              çıkışlı nakliye, dönüş yükü bulma, Atakum · İlkadım · Tekkeköy · Bafra · Çarşamba ve tüm Samsun; Ankara,
              İstanbul, İzmir başta olmak üzere 81 ilde tır ve kamyon ile güvenli taşımacılık.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.domain} · Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
