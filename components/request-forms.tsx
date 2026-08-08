"use client"

import { useState, type FormEvent } from "react"
import { Package, Truck, Send } from "lucide-react"
import {
  buildWhatsAppUrl,
  buildYukMessage,
  buildAracMessage,
  type YukFormData,
  type AracFormData,
} from "@/lib/whatsapp"

type Tab = "yuk" | "arac"

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

const aracTipleri = ["Tır", "Kamyon", "Kırkayak", "Kamyonet", "Panelvan", "Frigo", "Lowbed", "Diğer"]

export function RequestForms() {
  const [tab, setTab] = useState<Tab>("yuk")

  return (
    <section id="yuk" className="relative -mt-8 pb-4 md:-mt-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          {/* Tabs */}
          <div className="grid grid-cols-2" role="tablist" aria-label="Hızlı işlem formları">
            <TabButton active={tab === "yuk"} onClick={() => setTab("yuk")} icon={Package} label="Yük İlanı Ver" />
            <TabButton active={tab === "arac"} onClick={() => setTab("arac")} icon={Truck} label="Araç Bildir" />
          </div>

          <div className="p-5 md:p-7">
            {tab === "yuk" ? <YukForm /> : <AracForm />}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Formu gönderdiğinizde bilgileriniz WhatsApp mesajına dönüştürülüp hattımıza iletilir. Kayıt oluşturulmaz.
            </p>
          </div>
        </div>
      </div>

      {/* anchor for araç tab deep-links */}
      <span id="arac" className="block h-0 scroll-mt-24" aria-hidden="true" />
    </section>
  )
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: typeof Package
  label: string
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-4 text-sm font-bold transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
      }`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      {label}
    </button>
  )
}

function YukForm() {
  const [data, setData] = useState<YukFormData>({
    adSoyad: "",
    telefon: "",
    nereden: "",
    nereye: "",
    yukCinsi: "",
    tarih: "",
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const url = buildWhatsAppUrl(buildYukMessage(data))
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const set = (k: keyof YukFormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }))

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ad Soyad" required value={data.adSoyad} onChange={set("adSoyad")} placeholder="Adınız Soyadınız" />
        <Field
          label="Telefon"
          required
          type="tel"
          value={data.telefon}
          onChange={set("telefon")}
          placeholder="05XX XXX XX XX"
        />
        <Field label="Nereden" required value={data.nereden} onChange={set("nereden")} placeholder="Örn: Samsun / Atakum" />
        <Field label="Nereye" required value={data.nereye} onChange={set("nereye")} placeholder="Örn: İstanbul / Hadımköy" />
        <Field
          label="Yük Cinsi / Ağırlığı"
          value={data.yukCinsi}
          onChange={set("yukCinsi")}
          placeholder="Örn: Palet, 12 ton"
        />
        <div>
          <label className={labelClass} htmlFor="yuk-tarih">
            Yükleme Tarihi
          </label>
          <input id="yuk-tarih" type="date" value={data.tarih} onChange={set("tarih")} className={inputClass} />
        </div>
      </div>
      <SubmitButton label="Yükü WhatsApp ile Gönder" />
    </form>
  )
}

function AracForm() {
  const [data, setData] = useState<AracFormData>({
    adSoyad: "",
    telefon: "",
    aracTipi: "",
    konum: "",
    yon: "",
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const url = buildWhatsAppUrl(buildAracMessage(data))
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const set =
    (k: keyof AracFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }))

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ad Soyad" required value={data.adSoyad} onChange={set("adSoyad")} placeholder="Adınız Soyadınız" />
        <Field
          label="Telefon"
          required
          type="tel"
          value={data.telefon}
          onChange={set("telefon")}
          placeholder="05XX XXX XX XX"
        />
        <div>
          <label className={labelClass} htmlFor="arac-tipi">
            Araç Tipi
          </label>
          <select id="arac-tipi" required value={data.aracTipi} onChange={set("aracTipi")} className={inputClass}>
            <option value="">Seçiniz</option>
            {aracTipleri.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <Field
          label="Bulunduğu İl / İlçe"
          required
          value={data.konum}
          onChange={set("konum")}
          placeholder="Örn: Samsun / Tekkeköy"
        />
        <div className="sm:col-span-2">
          <Field
            label="Gitmek İstediği Yön"
            value={data.yon}
            onChange={set("yon")}
            placeholder="Örn: Ankara, İç Anadolu veya farketmez"
          />
        </div>
      </div>
      <SubmitButton label="Aracı WhatsApp ile Bildir" />
    </form>
  )
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}) {
  const id = "f-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  )
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-md transition-transform hover:scale-[1.02]"
    >
      <Send className="h-5 w-5" aria-hidden="true" />
      {label}
    </button>
  )
}
