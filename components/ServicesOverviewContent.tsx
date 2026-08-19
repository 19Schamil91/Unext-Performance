/*
  Diese Datei zeigt die Übersicht der drei aktuellen Gutachtenarten.
  Besucher sehen Bilder, Vorteile und passende Detail-Links für jede Gutachtenart.
  Sie können eine Gutachtenart öffnen oder UNEXT direkt anrufen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Phone } from "lucide-react"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type ServicesOverviewContentProps = {
  locale: Locale
}

type ServiceMeta = {
  icon: typeof FileCheck
  image: string
  href: string
  imageAlt: Record<Locale, string>
}

const serviceMeta = [
  {
    icon: FileCheck,
    image: "/images/services/unfallgutachten-berlin.webp",
    href: "/gutachtenarten/unfallgutachten",
    imageAlt: {
      de: "Unfallschaden an einem Fahrzeug in Berlin",
      en: "Accident damage to a vehicle in Berlin",
      ru: "Повреждение автомобиля после ДТП в Берлине",
    },
  },
  {
    icon: Car,
    image: "/images/services/wertgutachten-fahrzeugbewertung.webp",
    href: "/gutachtenarten/fahrzeugbewertung",
    imageAlt: {
      de: "Fahrzeugbewertung mit Unterlagen und Kamera",
      en: "Vehicle valuation with documents and a camera",
      ru: "Оценка стоимости автомобиля с документами и камерой",
    },
  },
  {
    icon: ClipboardCheck,
    image: "/images/services/beweissicherung-dokumentation.webp",
    href: "/gutachtenarten/schadendokumentation",
    imageAlt: {
      de: "Dokumentation eines Fahrzeugschadens mit Fotos",
      en: "Documentation of vehicle damage with photographs",
      ru: "Фиксация повреждений автомобиля с помощью фотографий",
    },
  },
] satisfies readonly ServiceMeta[]

const callLabels = {
  de: "Anrufen",
  en: "Call",
  ru: "Позвонить",
} as const satisfies Record<Locale, string>

const detailLinkLabels = {
  de: ["Zum Unfallgutachten", "Zur Fahrzeugbewertung", "Zur Schadendokumentation"],
  en: ["View appraisal", "View valuation", "View documentation"],
  ru: ["Оценка ущерба", "Оценка стоимости", "Фиксация повреждений"],
} as const satisfies Record<Locale, readonly string[]>

export function ServicesOverviewContent({ locale }: ServicesOverviewContentProps) {
  const t = getTranslations(locale).servicesPage
  const callLabel = callLabels[locale]

  const renderServiceCards = () => (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {t.items.map((service, index) => {
        const meta = serviceMeta[index]
        const detailHref = getLocalizedPath(locale, meta.href)
        const detailLinkLabel = detailLinkLabels[locale][index]

        return (
          <Card
            key={service.title}
            className={`overflow-hidden rounded-[1.45rem] border border-border/55 bg-card shadow-[0_14px_32px_rgba(15,23,42,0.07)] transition-colors hover:border-primary/30 ${
              index === 2
                ? "md:col-span-2 md:mx-auto md:w-[calc((100%-1.25rem)/2)] xl:col-span-1 xl:w-auto"
                : ""
            }`}
          >
            <CardContent className="flex h-full flex-col p-4 sm:p-5">
              <div className="relative aspect-[16/8.5] overflow-hidden rounded-[1.15rem] border border-border/50 bg-background shadow-sm">
                <Image
                  src={meta.image}
                  alt={meta.imageAlt[locale]}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
                  quality={72}
                  className="object-cover object-center"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col pt-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <meta.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                      {service.subtitle}
                    </p>
                    <h2 className="mt-1 text-card-heading-fluid text-foreground [text-wrap:balance]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-4 measure-card-copy-wide text-body-compact text-foreground/78 lg:!max-w-[58ch] xl:!max-w-[60ch] lg:[text-wrap:balance]">
                  {service.description}
                </p>

                <ul className="mt-5 grid gap-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="grid grid-cols-[0.45rem_minmax(0,1fr)] items-start gap-x-3 rounded-xl border border-border/45 bg-background/55 px-3 py-2.5 text-sm leading-6 text-foreground/82"
                    >
                      <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 border-t border-border/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <Button asChild className="gap-2">
                    <Link href={detailHref} aria-label={`${detailLinkLabel}: ${service.title}`}>
                      {detailLinkLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group w-full gap-2 border-primary/40 bg-primary/10 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/55 hover:!bg-primary/12 hover:!text-foreground sm:ml-auto sm:w-auto"
                  >
                    <a href="tel:+493023613927" aria-label={`${callLabel}: 030 23613927 – ${service.title}`}>
                      <Phone className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
                      <span className="transition-colors duration-300 group-hover:text-primary">{callLabel}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="mx-auto measure-heading text-display-fluid font-semibold text-foreground [text-wrap:balance]">
                {t.title}
              </h1>
              <p className="mx-auto mt-6 measure-intro-tight text-body-fluid text-muted-foreground">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">{renderServiceCards()}</div>
        </section>

        <CtaSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
