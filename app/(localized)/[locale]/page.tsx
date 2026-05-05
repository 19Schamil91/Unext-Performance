/*
  Diese Datei ist die englische und russische Startseite.
  Sie zeigt dieselben Startseitenbereiche wie die deutsche Version in der Sprache aus der URL.
  Besucher koennen Leistungen entdecken und direkt Kontakt aufnehmen.
*/
import { HomePageContent } from "@/components/HomePageContent"
import { isUrlLocale } from "@/lib/i18n"
import { notFound } from "next/navigation"

type LocalizedHomePageProps = {
  params: Promise<{ locale: string }>
}

export default async function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return <HomePageContent locale={locale} />
}
