/*
  Diese Datei zeigt den gemeinsamen Inhalt der Startseite.
  Sie setzt Kopfbereich, Startseitenbereiche und Footer in der uebergebenen Sprache zusammen.
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
import type { Locale } from "@/lib/i18n"

type Props = {
  locale: Locale
}

export function HomePageContent({ locale }: Props) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <ProcessSection locale={locale} />
        <WhySection locale={locale} />
        <AboutSection locale={locale} />
        <ExpressCourierSection locale={locale} />
        <CtaSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
