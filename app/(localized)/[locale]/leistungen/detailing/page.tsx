/*
  Diese Datei ist die englische und russische Detailseite fuer Aufbereitung & Pflege.
  Sie liest die Sprache aus der URL und zeigt die Detailing-Details in dieser Sprache.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  DetailingServiceDetailContent,
  getDetailingServiceMetadata,
} from "@/components/DetailingServiceDetailContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"

type LocalizedDetailingServicePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedDetailingServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return getDetailingServiceMetadata(locale)
}

export default async function LocalizedDetailingServicePage({
  params,
}: LocalizedDetailingServicePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <DetailingServiceDetailContent locale={currentLocale} />
}
