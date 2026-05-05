/*
  Diese Datei ist die deutsche Detailseite fuer Pannenhilfe & Abschleppen.
  Sie setzt die deutsche Sprache fest und zeigt die Leistungsdetails.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import {
  TowingServiceDetailContent,
  getTowingServiceMetadata,
} from "@/components/TowingServiceDetailContent"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return getTowingServiceMetadata(locale)
}

export default function AbschleppdienstPage() {
  return <TowingServiceDetailContent locale={locale} />
}
