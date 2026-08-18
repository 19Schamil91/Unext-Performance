/*
  Diese Datei ist die deutsche Leistungsuebersicht.
  Sie setzt die deutsche Sprache fest und zeigt alle Leistungen als Uebersicht.
  Besucher koennen Leistungen vergleichen, Details oeffnen oder direkt anrufen.
*/
import type { Metadata } from "next"
import { ServicesOverviewContent } from "@/components/ServicesOverviewContent"
import type { Locale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata(locale, "servicesOverview")
}

export default function LeistungenPage() {
  return <ServicesOverviewContent locale={locale} />
}
