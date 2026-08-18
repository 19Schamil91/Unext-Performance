/*
  Diese Datei ist die deutsche Kontaktseite.
  Sie zeigt Kontaktwege, Formular, direkte Ansprechpartner und Standortinformationen.
  Besucher koennen anrufen, WhatsApp nutzen, eine Nachricht senden oder den Standort oeffnen.
*/
import type { Metadata } from "next"
import { StructuredData } from "@/components/StructuredData"
import { ContactPageClient } from "@/components/contact-page-client"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import type { Locale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"
import { buildWebPageSchema } from "@/lib/structuredData"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata(locale, "contact")
}

export default function KontaktPage() {
  return (
    <>
      <StructuredData data={buildWebPageSchema(locale, "contact")} />
      <ContactPageClient
        locale={locale}
        header={<SiteHeader locale={locale} />}
        footer={<SiteFooter locale={locale} compactSummary />}
      />
    </>
  )
}
