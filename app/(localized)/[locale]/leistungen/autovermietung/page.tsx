/*
  Diese Datei ist die englische und russische Detailseite fuer die Autovermietung.
  Sie liest die Sprache aus der URL und zeigt die Mietwagen-Details in dieser Sprache.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  RentalServiceDetailContent,
  getRentalServiceMetadata,
} from "@/components/RentalServiceDetailContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"

type LocalizedRentalServicePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedRentalServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return getRentalServiceMetadata(locale)
}

export default async function LocalizedRentalServicePage({
  params,
}: LocalizedRentalServicePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <RentalServiceDetailContent locale={currentLocale} />
}
