/*
  Diese Datei ist die deutsche Detailseite fuer die Autovermietung.
  Sie setzt die deutsche Sprache fest und zeigt die Mietwagen-Details.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import {
  RentalServiceDetailContent,
  getRentalServiceMetadata,
} from "@/components/RentalServiceDetailContent"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return getRentalServiceMetadata(locale)
}

export default function AutovermietungPage() {
  return <RentalServiceDetailContent locale={locale} />
}
