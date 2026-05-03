/*
  Diese Datei ist die Startseite der Website.
  Sie zeigt die wichtigsten Bereiche von UNEXT: Einstieg, Leistungen, Ablauf, Vorteile, Unternehmen, Express-Service und Kontakt.
  Besucher koennen Leistungen entdecken und direkt Kontakt aufnehmen.
*/
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ExpressCourierSection } from "@/components/sections/express-courier-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhySection } from "@/components/sections/why-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProcessSection } from "@/components/sections/process-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <AboutSection />
        <ExpressCourierSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
