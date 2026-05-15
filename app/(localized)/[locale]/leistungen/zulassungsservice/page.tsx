/*
  Diese Datei ist die englische und russische Detailseite fuer die Kfz-Zulassung.
  Sie liest die Sprache aus der URL und zeigt die Zulassungsservice-Details in dieser Sprache.
  Besucher koennen Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  RegistrationServiceDetailContent,
  getRegistrationServiceMetadata,
} from "@/components/RegistrationServiceDetailContent"
import { isUrlLocale, type UrlLocale } from "@/lib/i18n"

type LocalizedRegistrationServicePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedRegistrationServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return getRegistrationServiceMetadata(locale)
}

export default async function LocalizedRegistrationServicePage({
  params,
}: LocalizedRegistrationServicePageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return <RegistrationServiceDetailContent locale={currentLocale} />
}
