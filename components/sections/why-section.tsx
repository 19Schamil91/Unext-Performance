/*
  Diese Datei zeigt den Bereich mit Gruenden fuer UNEXT.
  Sie zeigt Vorteile als Karten mit Icon, Titel und kurzer Erklaerung.
  Besucher koennen vergleichen, warum UNEXT fuer ihre Anfrage passt.
*/
import { Award, Clock, Euro, MapPin, ShieldCheck, Users } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

const icons = [Award, Clock, Euro, ShieldCheck, Users, MapPin]

// Diese Zeilen bestimmen nur auf kleinen Bildschirmen, wo die Vorteiltexte lesbar umbrechen.
const mobileBenefitDescriptionLines: Record<string, readonly string[]> = {
  "Ein Ansprechpartner": [
    "Sie müssen nicht mehrere Betriebe koordinieren,",
    "wenn mehrere Schritte zusammenhängen.",
  ],
  "Schnell erreichbar": [
    "Telefon und WhatsApp sind der schnellste Weg",
    "zu einer ersten Einschätzung.",
  ],
  "Auch für Fahrdienste": [
    "Pragmatische Lösungen für Uber-, Bolt-, Taxi-",
    "und andere gewerblich genutzte Fahrzeuge.",
  ],
  "Klare Abstimmung": [
    "Sie erfahren direkt, was möglich ist,",
    "was benötigt wird und wie es weitergeht.",
  ],
  "Leistungen kombinierbar": [
    "Abschleppen, Werkstatt, Mietwagen oder Zulassung",
    "können sinnvoll miteinander verbunden werden.",
  ],
  "Standort Berlin": [
    "Kurze Wege und ein fester Ansprechpartner",
    "für Ihr Anliegen rund ums Fahrzeug.",
  ],
}

type Props = {
  locale: Locale
}

export function WhySection({ locale }: Props) {
  const t = getTranslations(locale).home.why

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <h2 className="mx-auto text-heading-fluid font-semibold text-foreground lg:whitespace-nowrap">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 text-body-fluid text-foreground/82 lg:whitespace-nowrap">{t.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.benefits.map((benefit, index) => {
            const Icon = icons[index]
            const mobileDescriptionLines = locale === "de" ? mobileBenefitDescriptionLines[benefit.title] : undefined

            return (
              <div
                key={benefit.title}
                className="group relative flex flex-col items-center rounded-xl border border-border/50 bg-background p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="measure-card-copy text-card-heading-fluid text-foreground">{benefit.title}</h3>
                <p className="mt-2 measure-card-copy text-body-compact text-foreground/78">
                  {mobileDescriptionLines ? (
                    <>
                      <span className="whitespace-pre-line sm:hidden">{mobileDescriptionLines.join("\n")}</span>
                      <span className="hidden sm:inline">{benefit.description}</span>
                    </>
                  ) : (
                    benefit.description
                  )}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
