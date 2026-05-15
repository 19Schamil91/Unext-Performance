/*
  Diese Datei ist die englische und russische Detailseite fuer Werkstatt & Service.
  Sie liest die Sprache aus der URL und zeigt die Leistungsdetails in dieser Sprache.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  WorkshopServiceDetailContent,
  getWorkshopServiceMetadata,
} from "@/components/WorkshopServiceDetailContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"

type LocalizedWorkshopServicePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedWorkshopServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return getWorkshopServiceMetadata(locale)
}

export default async function LocalizedWorkshopServicePage({
  params,
}: LocalizedWorkshopServicePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <WorkshopServiceDetailContent locale={currentLocale} />
}
