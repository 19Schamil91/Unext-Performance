/*
  Diese Route fängt unbekannte deutsche Unterpfade unter /leistungen ab.
  Sie löst dafür den vorhandenen deutschen Not-found-Zustand aus.
  Bestehende Weiterleitungen werden weiterhin durch die Redirect-Konfiguration behandelt.
*/
import { notFound } from "next/navigation"

export default function GermanServicesCatchAllPage() {
  notFound()
}
