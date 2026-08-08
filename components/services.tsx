import Image from "next/image"
import { Truck, Boxes, Anchor, RefreshCw } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const services = [
  {
    icon: Truck,
    title: "Komple Yük Taşımacılığı",
    desc: "Tır ve kamyon ile kapıdan kapıya komple yük taşımacılığı. Aracın tamamı sizin yükünüze ayrılır.",
  },
  {
    icon: Boxes,
    title: "Parça / Parsiyel Yük Eşleştirme",
    desc: "Küçük hacimli yükleri uygun araçlarla eşleştirerek daha ekonomik gönderim sağlıyoruz.",
  },
  {
    icon: Anchor,
    title: "Karadeniz & Samsun Çıkışlı Hatlar",
    desc: "Samsun ve Karadeniz bölgesi çıkışlı düzenli hatlarımızla güvenilir sevkiyat.",
  },
  {
    icon: RefreshCw,
    title: "Dönüş Yükü Organizasyonu",
    desc: "Tırcılar için boş dönüşü önlüyoruz; aracınıza dönüş yolunda uygun yük ayarlıyoruz.",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-20 bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text + list */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Hizmetlerimiz</span>
            <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Yükten Araca, Tüm Süreci Yönetiyoruz
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Komisyonculuk modelimizle yük sahibi ile şoförü buluşturuyor, pazarlıktan yüklemeye kadar aradaki
              koordinasyonu üstleniyoruz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href={buildWhatsAppUrl("Merhaba, hizmetleriniz hakkında detaylı bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Teklif Al
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/turkey-routes.png"
              alt="Samsun'dan Türkiye geneline uzanan nakliye rota ağı haritası"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
