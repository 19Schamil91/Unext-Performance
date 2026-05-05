/*
  Diese Datei ist die deutsche Detailseite fuer die Kfz-Zulassung.
  Sie setzt die deutsche Sprache fest und zeigt die Zulassungsservice-Details.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import {
  RegistrationServiceDetailContent,
  getRegistrationServiceMetadata,
} from "@/components/RegistrationServiceDetailContent"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return getRegistrationServiceMetadata(locale)
}

export default function ZulassungsservicePage() {
  return <RegistrationServiceDetailContent locale={locale} />
}
