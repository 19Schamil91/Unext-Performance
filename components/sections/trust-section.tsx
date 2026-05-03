/*
  Diese Datei zeigt den Vertrauensbereich der Startseite.
  Sie zeigt kurze Zielgruppen- und Vertrauenshinweise als ruhige Zeile.
  Besucher koennen schnell erkennen, fuer wen UNEXT arbeitet und welchen Umfang der Service hat.
*/
import { CheckCircle2 } from "lucide-react"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function TrustSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.trust

  return (
    <section className="border-y border-border/80 bg-background py-5 sm:py-6">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="max-w-[34ch] text-body-compact font-semibold text-foreground/82">
            {t.title}
          </p>

          <ul className="grid gap-2 text-sm font-medium text-foreground/72 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-end md:gap-x-5 md:gap-y-2">
            {t.badges.map((badge) => (
              <li key={badge} className="flex min-w-0 items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/86" />
                <span className="min-w-0 [text-wrap:balance]">{badge}</span>
              </li>
            ))}
          </ul>

          {t.note ? <p className="mt-8 text-center text-xs text-muted-foreground">{t.note}</p> : null}
        </div>
      </div>
    </section>
  )
}
