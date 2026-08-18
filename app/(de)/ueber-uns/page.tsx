/*
  Diese Datei ist die deutsche Ueber-uns-Seite.
  Sie setzt die deutsche Sprache fest und zeigt den wiederverwendbaren Ueber-uns-Inhalt.
  Nutzer koennen mehr ueber UNEXT lesen und zur passenden Leistung wechseln.
*/
import type { Metadata } from "next"
import { AboutPageContent } from "@/components/AboutPageContent"
import type { Locale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata(locale, "about")
}

export default function UeberUnsPage() {
  return <AboutPageContent locale={locale} />
}
