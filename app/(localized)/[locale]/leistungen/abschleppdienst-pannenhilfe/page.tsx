/*
  Diese Datei ist die englische und russische Detailseite fuer Pannenhilfe & Abschleppen.
  Sie liest die Sprache aus der URL und zeigt die Leistungsdetails in dieser Sprache.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  TowingServiceDetailContent,
  getTowingServiceMetadata,
} from "@/components/TowingServiceDetailContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"

type LocalizedTowingServicePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedTowingServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return getTowingServiceMetadata(locale)
}

export default async function LocalizedTowingServicePage({
  params,
}: LocalizedTowingServicePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <TowingServiceDetailContent locale={currentLocale} />
}
