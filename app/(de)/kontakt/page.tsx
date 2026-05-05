/*
  Diese Datei ist die deutsche Kontaktseite.
  Sie zeigt Kontaktwege, Formular, direkte Ansprechpartner und Standortinformationen.
  Besucher koennen anrufen, WhatsApp nutzen, eine Nachricht senden oder den Standort oeffnen.
*/
import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact-page-client"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  const t = getTranslations(locale).contactPage

  return buildPageMetadata(locale, `${t.title} | UNEXT GmbH Berlin`, t.description, "/kontakt")
}

export default function KontaktPage() {
  return <ContactPageClient locale={locale} />
}
