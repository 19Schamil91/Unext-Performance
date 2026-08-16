/*
  Diese Route fängt unbekannte Pfade innerhalb des englischen und russischen Bereichs ab.
  Sie übergibt die Anzeige an den lokalisierten 404-Zustand im gleichen Route-Scope.
  Nutzer erhalten dadurch passende Rückwege statt der allgemeinen Next.js-Fehlerseite.
*/
import { notFound } from "next/navigation"

export default function LocalizedCatchAllPage() {
  notFound()
}
