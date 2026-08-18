/*
  Diese Datei ist die englische und russische Kontaktseite.
  Sie zeigt Kontaktwege, Formular, direkte Ansprechpartner und Standortinformationen in der Sprache aus der URL.
  Besucher koennen anrufen, WhatsApp nutzen, eine Nachricht senden oder den Standort oeffnen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { StructuredData } from "@/components/StructuredData"
import { ContactPageClient } from "@/components/contact-page-client"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"
import { buildWebPageSchema } from "@/lib/structuredData"

type LocalizedContactPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedContactPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return buildLocalizedPageMetadata(locale, "contact")
}

export default async function LocalizedContactPage({
  params,
}: LocalizedContactPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return (
    <>
      <StructuredData data={buildWebPageSchema(currentLocale, "contact")} />
      <ContactPageClient
        locale={currentLocale}
        header={<SiteHeader locale={currentLocale} />}
        footer={<SiteFooter locale={currentLocale} compactSummary />}
      />
    </>
  )
}
