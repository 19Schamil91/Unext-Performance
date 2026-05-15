/*
  Diese Datei ist die deutsche Detailseite fuer Werkstatt & Service.
  Sie setzt die deutsche Sprache fest und zeigt die Leistungsdetails.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import {
  WorkshopServiceDetailContent,
  getWorkshopServiceMetadata,
} from "@/components/WorkshopServiceDetailContent"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return getWorkshopServiceMetadata(locale)
}

export default function AutoservicePage() {
  return <WorkshopServiceDetailContent locale={locale} />
}
