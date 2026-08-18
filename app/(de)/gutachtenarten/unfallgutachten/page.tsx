/*
  Diese Datei ist die deutsche Gutachtenarten-Detailseite fuer Unfallgutachten.
  Sie setzt die deutsche Sprache fest und zeigt die bereits freigegebenen Unfallgutachten-Inhalte.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { AccidentServiceDetailContent } from "@/components/AccidentServiceDetailContent"
import type { Locale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata(locale, "accidentAppraisal")
}

export default function UnfallgutachtenPage() {
  return <AccidentServiceDetailContent locale={locale} />
}
