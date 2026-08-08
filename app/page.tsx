import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { RequestForms } from "@/components/request-forms"
import { WhyUs } from "@/components/why-us"
import { Services } from "@/components/services"
import { StatsBand } from "@/components/stats-band"
import { FaqContact } from "@/components/faq-contact"
import { SiteFooter } from "@/components/site-footer"
import { StickyCta } from "@/components/sticky-cta"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RequestForms />
        <WhyUs />
        <Services />
        <StatsBand />
        <FaqContact />
      </main>
      <SiteFooter />
      {/* Sabit boşluk: mobil sticky bar içeriği örtmesin */}
      <div className="h-14 md:hidden" aria-hidden="true" />
      <StickyCta />
    </>
  )
}
