/*
  Diese Datei zeigt die Detailseite für Unfallgutachten.
  Besucher sehen eine kompakte Orientierung nach einem Unfall, die Schadenaufnahme, hilfreiche Unterlagen, den Ablauf und das Anfrageformular.
  Sie können direkt per Telefon, WhatsApp oder Formular Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { getLocalizedPagePath, type Locale } from "@/lib/i18n"
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
  ctaDescription?: string | readonly string[]
  heroActions?: readonly {
    label: string
    ariaLabel?: string
    href: string
    icon?: "phone" | "message"
    external?: boolean
  }[]
  bottomActions?: readonly {
    label: string
    ariaLabel?: string
    href: string
    icon?: "phone" | "message"
    external?: boolean
  }[]
  servicesDescription?: string
  formHelperText?: string
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
  de: ["Unfallgutachten in Berlin"],
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
  {
    label: "Jetzt anrufen",
    href: "tel:+493023613927",
    icon: "phone" as const,
  },
  {
    label: "WhatsApp schreiben",
    href: "https://wa.me/4917664365185",
    icon: "message" as const,
    external: true,
  },
  {
    label: "Anfrage stellen",
    ariaLabel: "Anfrage stellen – Unfallgutachten",
    href: "#unfallgutachten-anfrage",
  },
] as const

export function getAccidentServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.accident

  return buildPageMetadata(
    locale,
    `${t.title} | UNFALLX | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPagePath("accidentAppraisal", locale)
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
      badge={undefined}
      description={t.description}
      image="/images/services/unfallgutachten-berlin.webp"
      imageAlt={page.imageAlt}
      imageClassName="object-cover object-[center_center]"
      heroActions={page.heroActions ?? germanHeroActions}
      bottomActions={page.bottomActions ?? germanBottomActions}
      heroNotice={page.heroNotice}
      serviceNote={page.serviceNote}
      backLinkHref={getLocalizedPagePath("home", locale)}
      servicePath={getLocalizedPagePath("accidentAppraisal", locale)}
      detailSections={page.detailSections}
      layoutLabels={page.layoutLabels}
      benefits={t.benefits}
      services={t.services}
      servicesDescription={page.servicesDescription}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      ctaTitle={page.ctaTitle}
      ctaDescription={page.ctaDescription}
      formTextOverrides={page.formTextOverrides}
      formHelperText={page.formHelperText}
      serviceName="unfallgutachten"
      benefitsSingleLine={isGerman}
      balancedTypography
      titleLines={isGerman ? accidentTitleLines[locale] : [t.title]}
      descriptionLines={isGerman ? accidentDescriptionLines[locale] : undefined}
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
