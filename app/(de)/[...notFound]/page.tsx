/*
  Diese Route fängt unbekannte deutsche Pfade ab und zeigt die vorhandene deutsche 404-Seite.
  Besucher erhalten dadurch deutschsprachige Hinweise und funktionierende Rückwege.
*/
import { notFound } from "next/navigation"

export default function GermanCatchAllPage() {
  notFound()
}