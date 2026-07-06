/*
  Diese Datei zeigt die Detailseite für Unfallgutachten.
  Besucher sehen eine kompakte Orientierung nach einem Unfall, die Schadenaufnahme, hilfreiche Unterlagen, den Ablauf und das Anfrageformular.
  Sie können direkt per Telefon, WhatsApp oder Formular Kontakt aufnehmen.
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

type AccidentServicePageExtras = {
  imageAlt?: string
  heroNotice?: string
  serviceNote?: { title: string; description: string }
  detailSections?: readonly {
    title: string
    description?: string
    items: readonly { title: string; description: string }[]
  }[]
  layoutLabels?: Partial<{
    backToServices: string
    servicesTitle: string
    whyTitle: string
    whyDescription: string
    faqTitle: string
    contactCta: string
  }>
  ctaTitle?: string
  ctaDescription?: string
  formTextOverrides?: Partial<{
    description: string
    successText: string
    vehicle: string
    vehiclePlaceholder: string
    date: string
    message: string
    messagePlaceholder: string
    submit: string
  }>
}

const accidentTitleLines = {
  de: ["Unfallgutachten Berlin"],
  en: ["Accident Help & Reports"],
  ru: ["Экспертиза", "ДТП и срочная", "помощь"],
} satisfies Record<Locale, readonly string[]>

const accidentDescriptionLines = {
  de: [
    "Nach einem Unfall brauchen Sie schnell Klarheit:",
    "Was ist beschädigt, welche Kosten entstehen und wie geht es mit Versicherung, Werkstatt oder Anwalt weiter?",
    "UNEXT dokumentiert Fahrzeugschäden sachlich, nachvollziehbar und unabhängig.",
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

const germanHeroActions = [
  { label: "Jetzt anrufen", href: "tel:+493023613927", icon: "phone" as const },
  {
    label: "WhatsApp schreiben",
    href: "https://wa.me/4917664365185",
    icon: "message" as const,
    external: true,
  },
  { label: "Anfrage senden", href: "#unfallgutachten-anfrage" },
] as const

const germanBottomActions = [
  { label: "Jetzt anrufen", href: "tel:+493023613927", icon: "phone" as const },
  {
    label: "WhatsApp schreiben",
    href: "https://wa.me/4917664365185",
    icon: "message" as const,
    external: true,
  },
  { label: "Anfrage senden", href: "#unfallgutachten-anfrage" },
] as const

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
  const isGerman = locale === "de"
  const page = t as typeof t & AccidentServicePageExtras
  const afterLayout = (
    <ServicePageLayout
      locale={locale}
      title={t.title}
      subtitle={t.subtitle}
      badge={isGerman ? undefined : t.badge}
      description={t.description}
      image={isGerman ? "/images/services/unfallgutachten-berlin.webp" : "/images/home-service-accident.webp"}
      imageAlt={isGerman ? page.imageAlt : undefined}
      imageClassName={isGerman ? "object-cover object-[center_center]" : "object-cover object-[center_top]"}
      phone={isGerman ? undefined : "0176 64365185"}
      heroActions={isGerman ? germanHeroActions : undefined}
      bottomActions={isGerman ? germanBottomActions : undefined}
      heroNotice={isGerman ? page.heroNotice : undefined}
      serviceNote={isGerman ? page.serviceNote : undefined}
      backLinkHref={isGerman ? getLocalizedPath(locale, "/") : undefined}
      detailSections={isGerman ? page.detailSections : undefined}
      layoutLabels={isGerman ? page.layoutLabels : undefined}
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      ctaTitle={isGerman ? page.ctaTitle : undefined}
      ctaDescription={isGerman ? page.ctaDescription : undefined}
      formTextOverrides={isGerman ? page.formTextOverrides : undefined}
      serviceName="unfallgutachten"
      benefitsSingleLine={isGerman}
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
