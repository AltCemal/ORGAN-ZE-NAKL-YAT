"use client"

import { useState } from "react"
import { ChevronDown, Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/whatsapp"

const faqs = [
  {
    q: "Komisyon süreci nasıl işler?",
    a: "Yük sahibi bize yükünü bildirir, biz ağımızdaki uygun aracı bulup fiyat konusunda iki tarafı anlaştırırız. Yük yüklendikten sonra hizmetimiz karşılığında belirlenen komisyonu alırız. Süreç boyunca koordinasyonu tamamen biz yönetiriz.",
  },
  {
    q: "Aracımın / yükümün sigortası var mı?",
    a: "Çalıştığımız araçların yasal zorunlu sigortaları bulunur. Yükün cinsine göre ek taşıma sigortası (nakliyat sigortası) yaptırılması konusunda sizi yönlendirir, talep etmeniz halinde organizasyonunu sağlarız.",
  },
  {
    q: "Samsun dışındaki iller için yük bulabilir misiniz?",
    a: "Evet. Samsun merkezli çalışsak da 81 ilde geniş bir sürücü ve yük ağımız var. Türkiye'nin herhangi bir noktasından diğerine yük ve araç eşleştirmesi yapabiliyoruz.",
  },
  {
    q: "Tırım boş, dönüş yükü ayarlıyor musunuz?",
    a: "Kesinlikle. Boş dönüşleri en aza indirmek için aracınızın bulunduğu konum ve gitmek istediğiniz yöne göre dönüş yükü organize ediyoruz. 'Araç Bildir' formunu doldurmanız yeterli.",
  },
]

export function FaqContact() {
  return (
    <section id="iletisim" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        {/* FAQ */}
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-accent">S.S.S.</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => (
              <FaqItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-accent">İletişim</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-3 text-muted-foreground">
            Yükünüzü bildirin ya da aracınıza yük arayın. Bir telefon kadar yakınınızdayız.
          </p>

          <div className="mt-6 grid gap-3">
            <a
              href={buildTelUrl()}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Telefon</span>
                <span className="font-heading font-bold text-foreground">{siteConfig.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={buildWhatsAppUrl("Merhaba, bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[oklch(0.6_0.16_150)] text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">WhatsApp</span>
                <span className="font-heading font-bold text-foreground">Hemen mesaj gönderin</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Adres</span>
                <span className="font-heading font-bold text-foreground">{siteConfig.address}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Çalışma Saatleri</span>
                <span className="font-heading font-bold text-foreground">{siteConfig.workingHours}</span>
              </span>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Samsun Konum Haritası"
              src="https://www.google.com/maps?q=Samsun,Türkiye&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-heading text-base font-bold text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>}
    </div>
  )
}
