import { Phone, MessageCircle } from "lucide-react"
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/whatsapp"

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-card shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={buildTelUrl()}
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Hemen Ara
      </a>
      <a
        href={buildWhatsAppUrl("Merhaba, bilgi almak istiyorum.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[oklch(0.6_0.16_150)] py-3.5 text-sm font-bold text-white"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp&apos;tan Yaz
      </a>
    </div>
  )
}
