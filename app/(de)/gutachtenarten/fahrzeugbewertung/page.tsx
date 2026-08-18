/*
  Diese Datei ist die deutsche Gutachtenarten-Detailseite fuer Fahrzeugbewertung.
  Besucher sehen Bewertungsanlaesse, relevante Fahrzeugmerkmale und den kompakten Ablauf.
  Sie koennen direkt anrufen, per WhatsApp schreiben oder eine Bewertungsanfrage senden.
*/
import type { Metadata } from "next"
import { VehicleValuationServiceDetailContent } from "@/components/VehicleValuationServiceDetailContent"
import { buildLocalizedPageMetadata } from "@/lib/metadata"

export function generateMetadata(): Metadata {
  return buildLocalizedPageMetadata("de", "vehicleValuation")
}

export default function FahrzeugbewertungPage() {
  return <VehicleValuationServiceDetailContent locale="de" />
}
