/*
  Diese Datei ist die deutsche Gutachtenarten-Detailseite fuer Schadendokumentation.
  Besucher sehen Anwendungsfaelle, moegliche Dokumentationsinhalte und die Abgrenzung zum Unfallgutachten.
  Sie koennen direkt anrufen, per WhatsApp schreiben oder eine Dokumentationsanfrage senden.
*/
import type { Metadata } from "next"
import { DamageDocumentationServiceDetailContent } from "@/components/DamageDocumentationServiceDetailContent"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata("de", "damageDocumentation")
}

export default function SchadendokumentationPage() {
  return <DamageDocumentationServiceDetailContent locale="de" />
}
