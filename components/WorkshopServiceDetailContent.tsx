/*
  Diese Datei zeigt den Inhalt der Detailseite fuer Werkstatt & Service.
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

type WorkshopServiceDetailContentProps = {
  locale: Locale
}

const workshopTitleLines = {
  de: ["Werkstatt & Service"],
  en: ["Workshop & Service"],
  ru: ["Сервис и мастерская"],
} satisfies Record<Locale, readonly string[]>

const workshopDescriptionLines = {
  de: [
    "Unser erfahrenes Werkstatt-Team kümmert sich professionell um Ihr Fahrzeug.",
    "Von der routinemäßigen Wartung bis zur Reparatur",
    "- wir bieten zuverlässigen Service mit Qualitätsgarantie.",
  ],
  en: [
    "Our experienced workshop team takes professional care of your vehicle.",
    "From routine maintenance to repairs",
    "- we offer reliable service with a quality guarantee.",
  ],
  ru: [
    "Наша опытная команда мастерской",
    "профессионально позаботится о вашем автомобиле.",
    "От планового обслуживания до ремонта",
    "- мы предлагаем надежный сервис с гарантией качества.",
  ],
} satisfies Record<Locale, readonly string[]>

const workshopServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const workshopWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

export function getWorkshopServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.workshop

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen/autoservice")
  )
}

export function WorkshopServiceDetailContent({ locale }: WorkshopServiceDetailContentProps) {
  const t = getTranslations(locale).serviceDetail.pages.workshop
  const afterLayout = (
    <ServicePageLayout
      locale={locale}
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      image="/images/home-service-workshop.webp"
      imageClassName="object-cover object-[58%_top]"
      phone="0177 7883206"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="autoservice"
      balancedTypography
      singleLineHeadings
      titleLines={workshopTitleLines[locale]}
      descriptionLines={workshopDescriptionLines[locale]}
      serviceTitleLineBreaks={workshopServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={workshopWhyTitleLineBreaks[locale]}
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
