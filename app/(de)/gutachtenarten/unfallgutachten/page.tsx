/*
  Diese Datei ist die deutsche Gutachtenarten-Detailseite fuer Unfallgutachten.
  Sie setzt die deutsche Sprache fest und zeigt die bereits freigegebenen Unfallgutachten-Inhalte.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import {
  AccidentServiceDetailContent,
  getAccidentServiceMetadata,
} from "@/components/AccidentServiceDetailContent"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return getAccidentServiceMetadata(locale)
}

export default function UnfallgutachtenPage() {
  return <AccidentServiceDetailContent locale={locale} />
}