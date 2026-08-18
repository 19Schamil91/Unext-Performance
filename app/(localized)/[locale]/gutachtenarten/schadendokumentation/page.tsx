/*
  Diese Datei stellt die Schadendokumentation in Englisch und Russisch bereit.
  Sie prueft die Sprache aus der URL und nutzt die gemeinsame Dokumentations-Komponente.
  Besucher koennen den Leistungsumfang lesen und eine Anfrage stellen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DamageDocumentationServiceDetailContent } from "@/components/DamageDocumentationServiceDetailContent"
import { isUrlLocale } from "@/lib/i18n"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

type LocalizedDamageDocumentationPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedDamageDocumentationPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return buildLocalizedPageMetadata(locale, "damageDocumentation")
}

export default async function LocalizedDamageDocumentationPage({
  params,
}: LocalizedDamageDocumentationPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return <DamageDocumentationServiceDetailContent locale={locale} />
}
