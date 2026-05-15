/*
  Diese Datei zeigt den Fehlerzustand fuer die englische und russische Startseite.
  Sie erscheint, wenn die lokalisierte Startseite nicht geladen werden kann.
  Nutzer koennen die Seite erneut laden oder telefonisch Kontakt aufnehmen.
*/
"use client"

import { Button } from "@/components/ui/button"

type Props = {
  reset: () => void
}

export default function LocalizedHomeError({ reset }: Props) {
  return (
    <main className="flex min-h-[70vh] items-center bg-background px-4 py-20 lg:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">UNEXT</p>
        <h1 className="mt-3 text-2xl font-semibold text-foreground">Seite konnte nicht geladen werden</h1>
        <p className="mt-3 text-muted-foreground">
          Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>
            Erneut versuchen
          </Button>
          <Button asChild variant="outline">
            <a href="tel:+493023613927">030 23613927 anrufen</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
