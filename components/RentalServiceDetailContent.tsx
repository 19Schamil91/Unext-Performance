/*
  Diese Datei zeigt den Inhalt der Detailseite fuer die Autovermietung.
  Sie zeigt Mietwagen-Angebote, Vorteile, Servicekarten, Gruende, Fragen und das Anfrageformular in der gewaehlten Sprache.
  Besucher koennen passende Mietwagen-Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type RentalServiceDetailContentProps = {
  locale: Locale
}

const rentalTitleLines = {
  de: ["Autovermietung"],
  en: ["Car Rental"],
  ru: ["Прокат авто"],
} satisfies Record<Locale, readonly string[]>

const rentalDescriptionLines = {
  de: [
    "Ob Unfall, Werkstatt oder besonderer Anlass:",
    "Wir stellen schnell das passende Fahrzeug bereit.",
    "Fair, gepflegt und unkompliziert verfügbar.",
  ],
  en: [
    "Whether after an accident, during workshop time or for special occasions",
    "- we have the right vehicle for you.",
    "Available quickly, fairly priced and always in excellent condition.",
  ],
  ru: [
    "После ДТП, на время ремонта или для особых случаев",
    "- у нас есть подходящий автомобиль для вас.",
    "Быстро доступно, по честной цене и всегда в отличном состоянии.",
  ],
} satisfies Record<Locale, readonly string[]>

const rentalServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const rentalWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

export function getRentalServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.rental

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen/autovermietung")
  )
}

export function RentalServiceDetailContent({ locale }: RentalServiceDetailContentProps) {
  const t = getTranslations(locale).serviceDetail.pages.rental
  const afterLayout = (
    <ServicePageLayout
      locale={locale}
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      image="/images/home-service-rental.webp"
      imageClassName="object-cover object-[42%_top]"
      phone="0174 4292900"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="autovermietung"
      balancedTypography
      singleLineHeadings
      titleLines={rentalTitleLines[locale]}
      descriptionLines={rentalDescriptionLines[locale]}
      serviceTitleLineBreaks={rentalServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={rentalWhyTitleLineBreaks[locale]}
    />
  )

  return (
    <>
      <SiteHeader locale={locale} />
      {afterLayout}
      <SiteFooter locale={locale} />
    </>
  )
}
