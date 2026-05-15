/*
  Diese Datei ist die deutsche Leistungsuebersicht.
  Sie setzt die deutsche Sprache fest und zeigt alle Leistungen als Uebersicht.
  Besucher koennen Leistungen vergleichen, Details oeffnen oder direkt anrufen.
*/
import type { Metadata } from "next"
import { ServicesOverviewContent } from "@/components/ServicesOverviewContent"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  const t = getTranslations(locale).servicesPage

  return buildPageMetadata(locale, `${t.title} | UNEXT GmbH Berlin`, t.description, "/leistungen")
}

export default function LeistungenPage() {
  return <ServicesOverviewContent locale={locale} />
}
