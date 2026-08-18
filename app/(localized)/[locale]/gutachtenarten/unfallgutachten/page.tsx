/*
  Diese Datei stellt das Unfallgutachten in Englisch und Russisch bereit.
  Sie prueft die Sprache aus der URL und nutzt die gemeinsame Gutachten-Komponente.
  Besucher koennen Informationen lesen und in ihrer Sprache Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AccidentServiceDetailContent } from "@/components/AccidentServiceDetailContent"
import { isUrlLocale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

type LocalizedAccidentAppraisalPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedAccidentAppraisalPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return buildLocalizedPageMetadata(locale, "accidentAppraisal")
}

export default async function LocalizedAccidentAppraisalPage({
  params,
}: LocalizedAccidentAppraisalPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return <AccidentServiceDetailContent locale={locale} />
}
