/*
  Diese Datei zeigt den Inhalt der Detailseite fuer Pannenhilfe & Abschleppen.
  Sie zeigt Soforthilfe, Fahrzeugtransport, Vorteile, Servicekarten, Fragen und das Anfrageformular in der gewaehlten Sprache.
  Besucher koennen die Leistungen lesen und direkt Kontakt per Telefon, WhatsApp oder Formular aufnehmen.
*/
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type TowingServiceDetailContentProps = {
  locale: Locale
}

const towingTitleLines = {
  de: ["Pannenhilfe & Abschleppen"],
  en: ["Towing & Roadside Help"],
  ru: ["Эвакуатор", "и помощь на дороге"],
} satisfies Record<Locale, readonly string[]>

const towingDescriptionLines = {
  de: [
    "Bei Panne oder Unfall organisieren wir schnell Hilfe.",
    "Vom Abschleppen bis zu den nächsten Schritten",
    "bekommen Sie Unterstützung aus einer Hand.",
  ],
  en: [
    "If your vehicle is no longer roadworthy",
    "after a breakdown or accident,",
    "we provide a fast and reliable solution.",
    "From towing to the next steps,",
    "you receive support from one source.",
  ],
  ru: [
    "Если ваш автомобиль после поломки или аварии",
    "больше не может ехать,",
    "мы быстро и надежно обеспечим безопасное решение.",
    "От эвакуации до следующих шагов",
    "вы получаете поддержку из одних рук.",
  ],
} satisfies Record<Locale, readonly string[]>

export function getTowingServiceMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale).serviceDetail.pages.towing

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen/abschleppdienst-pannenhilfe")
  )
}

export function TowingServiceDetailContent({ locale }: TowingServiceDetailContentProps) {
  const t = getTranslations(locale).serviceDetail.pages.towing

  return (
    <>
      <SiteHeader locale={locale} />
      <ServicePageLayout
        locale={locale}
        title={t.title}
        subtitle={t.subtitle}
        description={t.description}
        image="/images/service-towing.webp"
        imageClassName="object-cover object-[48%_center] md:object-[52%_center]"
        phone="030 23613927"
        benefits={t.benefits}
        services={t.services}
        whyChoose={t.whyChoose}
        faqs={t.faqs}
        formTitle={t.formTitle}
        serviceName="abschleppdienst"
        formFields={{ vehicle: true, subject: true, date: false }}
        balancedTypography
        singleLineHeadings
        benefitsSingleLine
        titleLines={towingTitleLines[locale]}
        descriptionLines={towingDescriptionLines[locale]}
      />
      <SiteFooter locale={locale} />
    </>
  )
}
