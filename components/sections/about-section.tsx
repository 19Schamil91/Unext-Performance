/*
  Diese Datei zeigt den Ueber-uns-Bereich der Startseite.
  Sie verbindet ein Bild, kurze Kennzahlen, Text und Vertrauenspunkte.
  Besucher koennen mehr ueber UNEXT lesen und zur Ueber-uns-Seite wechseln.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { getLocalizedPagePath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type Props = {
  locale: Locale
}

export function AboutSection({ locale }: Props) {
  const t = getTranslations(locale).home.about
  const aboutImageAlt = {
    de: "Begutachtung eines Fahrzeugs nach einem Unfall",
    en: "Vehicle inspection after an accident",
    ru: "Осмотр автомобиля после ДТП",
  } as const

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative lg:pr-6">
            <div
              className={
                "relative aspect-[1/1] overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-sm"
              }
            >
              <Image
                src="/images/home-service-accident-new.webp"
                alt={aboutImageAlt[locale]}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="eager"
                quality={75}
                className="scale-[1.03] object-cover object-[50%_42%] brightness-[1.02] contrast-[1.03] saturate-[1.02]"
              />
              <div
                className={
                  "absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.04)_0%,rgba(5,7,11,0.01)_48%,rgba(5,7,11,0.10)_100%)]"
                }
              />
            </div>

          </div>

          <div className="lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 measure-heading text-heading-fluid font-semibold text-foreground">
              {t.title}
            </h2>
            <ReadableText
              text={t.paragraph1}
              className="mt-6 measure-intro-tight text-body-fluid text-foreground/86"
            />
            <ReadableText
              text={t.paragraph2}
              className="mt-4 measure-intro-tight text-body-fluid text-foreground/86"
            />

            <ul className="mt-8 space-y-3">
              {t.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-body-compact text-foreground/86">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild className="gap-2">
                <Link href={getLocalizedPagePath("about", locale)}>
                  {t.cta}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
