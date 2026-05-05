/*
  Diese Datei ist die englische und russische Kontaktseite.
  Sie zeigt Kontaktwege, Formular, direkte Ansprechpartner und Standortinformationen in der Sprache aus der URL.
  Besucher koennen anrufen, WhatsApp nutzen, eine Nachricht senden oder den Standort oeffnen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContactPageClient } from "@/components/contact-page-client"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getLocalizedPath, isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

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

  const t = getTranslations(locale).contactPage

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/kontakt")
  )
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
    <ContactPageClient
      locale={currentLocale}
      header={<SiteHeader locale={currentLocale} />}
      footer={<SiteFooter locale={currentLocale} />}
    />
  )
}
