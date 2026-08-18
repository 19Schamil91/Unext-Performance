/*
  Diese Datei ist die englische und russische Ueber-uns-Seite.
  Sie liest die Sprache aus der URL und zeigt den wiederverwendbaren Ueber-uns-Inhalt.
  Nutzer koennen mehr ueber UNEXT lesen und zur passenden Leistung wechseln.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AboutPageContent } from "@/components/AboutPageContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

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

  return buildLocalizedPageMetadata(locale, "about")
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
