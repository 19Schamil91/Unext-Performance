/*
  Diese Datei ist die Startseite der Website.
  Sie zeigt die wichtigsten Bereiche von UNEXT: Einstieg, Leistungen, Ablauf, Vorteile, Unternehmen, Express-Service und Kontakt.
  Besucher koennen Leistungen entdecken und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { HomePageContent } from "@/components/HomePageContent"
import { StructuredData } from "@/components/StructuredData"
import { buildLocalizedPageMetadata } from "@/lib/metadata"
import { buildWebPageSchema } from "@/lib/structuredData"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata("de", "home")
}

export default function HomePage() {
  return (
    <>
      <StructuredData data={buildWebPageSchema("de", "home")} />
      <HomePageContent locale="de" />
    </>
  )
}
