import { Zap, ShieldCheck, MapPin, Headphones } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Hızlı Araç Tedariği",
    desc: "Zengin tır ve kamyoncu ağımız sayesinde yükünüze uygun aracı en kısa sürede buluyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Taşımacılık",
    desc: "Doğrulanmış şoförler ve araçlarla çalışıyoruz. Yükünüz emin ellerde yola çıkar.",
  },
  {
    icon: MapPin,
    title: "Samsun Merkezli, Türkiye Geneli",
    desc: "Samsun çıkışlı ve varışlı tüm rotalarda, 81 ilde kesintisiz hizmet veriyoruz.",
  },
  {
    icon: Headphones,
    title: "7/24 İletişim & Destek",
    desc: "Yükünüz yoldayken anlık bilgi alın. Her aşamada size bir telefon kadar yakınız.",
  },
]

export function WhyUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Neden Organize Nakliyat Samsun?
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Yük sahibi de olsanız, aracınıza yük arayan bir tırcı da olsanız; süreci sizin için biz yönetiyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
