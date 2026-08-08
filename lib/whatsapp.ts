import { siteConfig } from "./site-config"

/**
 * Verilen mesaj metnini WhatsApp yönlendirme linkine dönüştürür.
 * Format: https://wa.me/90XXXXXXXXXX?text=...
 */
export function buildWhatsAppUrl(message: string, phone: string = siteConfig.whatsapp): string {
  const encoded = encodeURIComponent(message.trim())
  return `https://wa.me/${phone}?text=${encoded}`
}

/** Telefon araması için tel: linki üretir. */
export function buildTelUrl(phone: string = siteConfig.phone): string {
  return `tel:+${phone}`
}

export type YukFormData = {
  adSoyad: string
  telefon: string
  nereden: string
  nereye: string
  yukCinsi: string
  tarih: string
}

export function buildYukMessage(data: YukFormData): string {
  return [
    "🚚 *YENİ YÜK İLANI*",
    "",
    `👤 Ad Soyad: ${data.adSoyad || "-"}`,
    `📞 Telefon: ${data.telefon || "-"}`,
    `📍 Nereden: ${data.nereden || "-"}`,
    `🏁 Nereye: ${data.nereye || "-"}`,
    `📦 Yük Cinsi / Ağırlığı: ${data.yukCinsi || "-"}`,
    `📅 Yükleme Tarihi: ${data.tarih || "-"}`,
  ].join("\n")
}

export type AracFormData = {
  adSoyad: string
  telefon: string
  aracTipi: string
  konum: string
  yon: string
}

export function buildAracMessage(data: AracFormData): string {
  return [
    "🛻 *BOŞ ARAÇ BİLDİRİMİ*",
    "",
    `👤 Ad Soyad: ${data.adSoyad || "-"}`,
    `📞 Telefon: ${data.telefon || "-"}`,
    `🚛 Araç Tipi: ${data.aracTipi || "-"}`,
    `📍 Bulunduğu İl/İlçe: ${data.konum || "-"}`,
    `🧭 Gitmek İstediği Yön: ${data.yon || "-"}`,
  ].join("\n")
}
