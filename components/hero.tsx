import Image from "next/image"
import { Package, Truck, ShieldCheck, Clock } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-truck.png"
          alt="Karadeniz sahilinde otoyolda ilerleyen beyaz tır"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent ring-1 ring-accent/30">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Samsun Merkezli · Türkiye Geneli
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Samsun ve Tüm Türkiye&apos;de Güvenli Nakliye &amp; Yük Eşleştirme
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Yükünüz mü var? Uygun aracı anında bulalım. Tırınız boş mu? Size en uygun yükü ayarlayalım.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl("Merhaba, taşınması gereken bir yüküm var. Bilgi vermek istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Package className="h-5 w-5" aria-hidden="true" />
              Yük Bildir (WhatsApp)
            </a>
            <a
              href="#arac"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-3.5 text-base font-bold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              <Truck className="h-5 w-5" aria-hidden="true" />
              Boş Araç Bildir
            </a>
          </div>

          {/* Mini trust row */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              Doğrulanmış sürücüler
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
              Hızlı araç tedariği
            </span>
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-accent" aria-hidden="true" />
              81 il kapsama
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
