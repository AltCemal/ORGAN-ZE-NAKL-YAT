import { PackageCheck, Users, Map } from "lucide-react"

const stats = [
  { icon: PackageCheck, value: "500+", label: "Başarılı Taşıma" },
  { icon: Users, value: "200+", label: "Güvenilir Sürücü Ağı" },
  { icon: Map, value: "81", label: "İl Kapsama Alanı" },
]

export function StatsBand() {
  return (
    <section className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 md:px-6">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-heading text-4xl font-extrabold tracking-tight text-accent">{s.value}</span>
              <span className="mt-1 text-sm font-medium text-primary-foreground/80">{s.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
