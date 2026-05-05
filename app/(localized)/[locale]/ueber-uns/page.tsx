/*
  Diese Datei ist die englische und russische Ueber-uns-Seite.
  Sie liest die Sprache aus der URL und zeigt den wiederverwendbaren Ueber-uns-Inhalt.
  Nutzer koennen mehr ueber UNEXT lesen und zur passenden Leistung wechseln.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AboutPageContent } from "@/components/AboutPageContent"
import { getLocalizedPath, isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type LocalizedAboutPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedAboutPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const t = getTranslations(locale).aboutPage

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    t.description,
    getLocalizedPath(locale, "/ueber-uns")
  )
}

export default async function LocalizedAboutPage({
  params,
}: LocalizedAboutPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <AboutPageContent locale={currentLocale} />
}
