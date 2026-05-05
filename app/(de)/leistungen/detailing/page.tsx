/*
  Diese Datei ist die deutsche Detailseite fuer Aufbereitung & Pflege.
  Sie setzt die deutsche Sprache fest und zeigt die Detailing-Details.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import {
  DetailingServiceDetailContent,
  getDetailingServiceMetadata,
} from "@/components/DetailingServiceDetailContent"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return getDetailingServiceMetadata(locale)
}

export default function DetailingPage() {
  return <DetailingServiceDetailContent locale={locale} />
}
