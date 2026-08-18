/*
  Diese Datei ist die englische und russische Startseite.
  Sie zeigt dieselben Startseitenbereiche wie die deutsche Version in der Sprache aus der URL.
  Besucher koennen Leistungen entdecken und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HomePageContent } from "@/components/HomePageContent"
import { StructuredData } from "@/components/StructuredData"
import { isUrlLocale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"
import { buildWebPageSchema } from "@/lib/structuredData"

type LocalizedHomePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return buildLocalizedPageMetadata(locale, "home")
}

export default async function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return (
    <>
      <StructuredData data={buildWebPageSchema(locale, "home")} />
      <HomePageContent locale={locale} />
    </>
  )
}
