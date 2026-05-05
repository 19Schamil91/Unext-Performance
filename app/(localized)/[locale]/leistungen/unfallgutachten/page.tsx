/*
  Diese Datei ist die englische und russische Detailseite fuer Unfallhilfe & Gutachten.
  Sie liest die Sprache aus der URL und zeigt die Leistungsdetails in dieser Sprache.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  AccidentServiceDetailContent,
  getAccidentServiceMetadata,
} from "@/components/AccidentServiceDetailContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"

type LocalizedAccidentServicePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedAccidentServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return getAccidentServiceMetadata(locale)
}

export default async function LocalizedAccidentServicePage({
  params,
}: LocalizedAccidentServicePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <AccidentServiceDetailContent locale={currentLocale} />
}
