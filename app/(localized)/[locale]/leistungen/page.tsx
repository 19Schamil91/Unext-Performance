/*
  Diese Datei ist die englische und russische Leistungsuebersicht.
  Sie liest die Sprache aus der URL und zeigt alle Leistungen als Uebersicht.
  Besucher koennen Leistungen vergleichen, Details oeffnen oder direkt anrufen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicesOverviewContent } from "@/components/ServicesOverviewContent"
import { getLocalizedPath, isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type LocalizedServicesPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedServicesPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const t = getTranslations(locale).servicesPage

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/leistungen")
  )
}

export default async function LocalizedServicesPage({
  params,
}: LocalizedServicesPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <ServicesOverviewContent locale={currentLocale} />
}
