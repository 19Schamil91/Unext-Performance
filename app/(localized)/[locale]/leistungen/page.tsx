/*
  Diese Datei ist die englische und russische Leistungsuebersicht.
  Sie liest die Sprache aus der URL und zeigt alle Leistungen als Uebersicht.
  Besucher koennen Leistungen vergleichen, Details oeffnen oder direkt anrufen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicesOverviewContent } from "@/components/ServicesOverviewContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

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

  return buildLocalizedPageMetadata(locale, "servicesOverview")
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
