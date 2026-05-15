/*
  Diese Datei zeigt den Inhalt der Detailseite fuer Aufbereitung & Pflege.
  Sie zeigt den Leistungsbereich mit Einleitung, Vorteilen, Servicekarten, Gruenden, Fragen und dem Anfrageformular in der gewaehlten Sprache.
  Besucher koennen die Inhalte lesen und direkt Kontakt per Telefon, WhatsApp oder Formular aufnehmen.
*/
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type DetailingServiceDetailContentProps = {
  locale: Locale
}

/** Geschütztes Leerzeichen: verhindert unruhige Silbentrennung bei Fachbegriffen (Wortlaut unverändert). */
const NB = "\u00A0"

const detailingTitleLines = {
  de: ["Aufbereitung & Pflege"],
  en: ["Detailing"],
  ru: ["Детейлинг"],
} satisfies Record<Locale, readonly string[]>

const detailingDescriptionLines = {
  de: [
    "Unsere Detailing-Experten bringen Ihr Fahrzeug wieder auf Hochglanz.",
    `Mit professionellen${NB}Methoden und Premium-Produkten`,
    "entsteht ein Ergebnis, das überzeugt.",
  ],
  en: [
    "Your vehicle deserves the best.",
    "Our detailing experts restore your car's shine",
    `using professional${NB}methods and premium${NB}products`,
    "for results that impress.",
  ],
  ru: [
    "Ваш автомобиль заслуживает лучшего.",
    "Наши специалисты по детейлингу вернут ему блеск",
    "с помощью профессиональных методов и премиальных продуктов",
    "- результат действительно впечатляет.",
  ],
} satisfies Record<Locale, readonly string[]>

const detailingServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const detailingWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

export function getDetailingServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.detailing

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen/detailing")
  )
}

export function DetailingServiceDetailContent({ locale }: DetailingServiceDetailContentProps) {
  const t = getTranslations(locale).serviceDetail.pages.detailing
  const afterLayout = (
    <ServicePageLayout
      locale={locale}
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      image="/images/home-service-detailing.webp"
      imageClassName="object-cover object-[42%_top]"
      phone="0177 6691006"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="detailing"
      balancedTypography
      singleLineHeadings
      titleLines={detailingTitleLines[locale]}
      descriptionLines={detailingDescriptionLines[locale]}
      serviceTitleLineBreaks={detailingServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={detailingWhyTitleLineBreaks[locale]}
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
