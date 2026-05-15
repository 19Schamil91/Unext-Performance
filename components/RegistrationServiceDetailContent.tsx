/*
  Diese Datei zeigt den Inhalt der Detailseite fuer die Kfz-Zulassung.
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

type RegistrationServiceDetailContentProps = {
  locale: Locale
}

const registrationTitleLines = {
  de: ["Kfz-Zulassung"],
  en: ["Vehicle Registration Service"],
  ru: ["Регистрация авто"],
} satisfies Record<Locale, readonly string[]>

// Diese Zeilen halten nur den grossen Einleitungstext im Hero optisch ruhiger.
const registrationDescriptionLines = {
  de: [
    "Wir übernehmen Anmeldung, Abmeldung und Formalitäten",
    "rund um Ihr Fahrzeug schnell und zuverlässig.",
    "Sie sparen Zeit und vermeiden Behördengänge.",
  ],
  en: [
    "We handle registration, deregistration and other formalities",
    "for your vehicle quickly, reliably and without complications.",
    "This saves you time, avoids unnecessary waiting",
    "and means you do not have to deal with the authorities yourself.",
  ],
  ru: [
    "Мы берем на себя регистрацию, снятие с учета",
    "и другие формальности, связанные с вашим автомобилем,",
    "быстро, надежно и без лишних сложностей.",
    "Так вы экономите время, избегаете ожидания",
    "и вам не нужно самостоятельно посещать ведомства.",
  ],
} satisfies Record<Locale, readonly string[]>

const registrationServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const registrationWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

export function getRegistrationServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.registration

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen/zulassungsservice")
  )
}

export function RegistrationServiceDetailContent({ locale }: RegistrationServiceDetailContentProps) {
  const t = getTranslations(locale).serviceDetail.pages.registration

  const layoutBase = {
    title: t.title,
    subtitle: t.subtitle,
    description: t.description,
    image: "/images/home-service-registration.webp" as const,
    imageClassName: "object-cover object-[42%_top]",
    phone: "030 23613927",
    benefits: t.benefits,
    services: t.services,
    whyChoose: t.whyChoose,
    faqs: t.faqs,
    formTitle: t.formTitle,
    serviceName: "zulassungsservice",
    formFields: { vehicle: true, subject: true, date: false } as const,
  }

  const afterLayout = (
    <ServicePageLayout
      {...layoutBase}
      locale={locale}
      balancedTypography
      singleLineHeadings
      benefitsSingleLine
      titleLines={registrationTitleLines[locale]}
      descriptionLines={registrationDescriptionLines[locale]}
      serviceTitleLineBreaks={registrationServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={registrationWhyTitleLineBreaks[locale]}
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
