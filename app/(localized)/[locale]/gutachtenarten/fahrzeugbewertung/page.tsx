/*
  Diese Datei stellt die Fahrzeugbewertung in Englisch und Russisch bereit.
  Sie prueft die Sprache aus der URL und nutzt die gemeinsame Bewertungs-Komponente.
  Besucher koennen Bewertungsanlaesse lesen und eine Anfrage stellen.
*/
import { notFound } from "next/navigation"
import { VehicleValuationServiceDetailContent } from "@/components/VehicleValuationServiceDetailContent"
import { isUrlLocale } from "@/lib/i18n"

type LocalizedVehicleValuationPageProps = {
  params: Promise<{ locale: string }>
}

export default async function LocalizedVehicleValuationPage({
  params,
}: LocalizedVehicleValuationPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return <VehicleValuationServiceDetailContent locale={locale} />
}
