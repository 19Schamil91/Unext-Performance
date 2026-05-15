/*
  Diese Datei zeigt den Inhalt der Detailseite fuer Unfallhilfe & Gutachten.
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

type AccidentServiceDetailContentProps = {
  locale: Locale
}

const accidentTitleLines = {
  de: ["Unfallhilfe & Gutachten"],
  en: ["Accident Help & Reports"],
  ru: ["Экспертиза", "ДТП и срочная", "помощь"],
} satisfies Record<Locale, readonly string[]>

const accidentDescriptionLines = {
  de: [
    "Ein Unfall ist immer stressig. Wir nehmen Ihnen die Last ab:",
    "Unsere zertifizierten Gutachter erstellen unabhängige Kfz-Gutachten",
    "und unterstützen Sie kompetent bei der gesamten Schadensabwicklung",
    "- schnell, professionell und fair.",
  ],
  en: [
    "An accident is always stressful. We take the burden off your shoulders:",
    "Our certified experts prepare independent vehicle reports",
    "and support you throughout the claims process",
    "- fast, professional and fair.",
  ],
  ru: [
    "ДТП всегда связано со стрессом. Мы берем нагрузку на себя:",
    "наши сертифицированные эксперты готовят независимую автоэкспертизу",
    "и профессионально сопровождают вас в процессе урегулирования ущерба",
    "- быстро, честно и надежно.",
  ],
} satisfies Record<Locale, readonly string[]>

const accidentServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const accidentWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

export function getAccidentServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.accident

  return buildPageMetadata(
    locale,
    `${t.title} | UNFALLX | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen/unfallgutachten")
  )
}

export function AccidentServiceDetailContent({ locale }: AccidentServiceDetailContentProps) {
  const t = getTranslations(locale).serviceDetail.pages.accident
  const afterLayout = (
    <ServicePageLayout
      locale={locale}
      title={t.title}
      subtitle={t.subtitle}
      badge={t.badge}
      description={t.description}
      image="/images/home-service-accident.webp"
      imageClassName="object-cover object-[center_top]"
      phone="0176 64365185"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="unfallgutachten"
      balancedTypography
      titleLines={accidentTitleLines[locale]}
      descriptionLines={accidentDescriptionLines[locale]}
      serviceTitleLineBreaks={accidentServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={accidentWhyTitleLineBreaks[locale]}
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
