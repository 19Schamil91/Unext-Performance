/*
  Diese Datei zeigt den Gutachtenbereich auf der Startseite.
  Die deutsche Startseite zeigt drei Gutachtenkarten mit Bild, Kurztext, Vorteilen und Kontaktaktion.
  Besucher koennen Unfallgutachten oeffnen oder direkt Kontakt aufnehmen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Phone } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { homeReportAnchors } from "@/lib/service-anchors"
import { getTranslations } from "@/lib/translations"

type ServiceMeta = {
  icon: typeof FileCheck
  image: string
  imageAlt?: string
  imageClassName: string
  href: string
  contactText?: string
  contactHref?: string
  accentColor: string
}

const reportServiceMeta: readonly ServiceMeta[] = [
  {
    icon: FileCheck,
    image: "/images/services/unfallgutachten-berlin.webp",
    imageAlt: "Unfallschaden an einem Fahrzeug in Berlin",
    imageClassName: "object-cover object-center",
    href: "/gutachtenarten/unfallgutachten",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/20 to-transparent",
  },
  {
    icon: Car,
    image: "/images/services/wertgutachten-fahrzeugbewertung.webp",
    imageAlt: "Fahrzeugbewertung mit Unterlagen und Kamera",
    imageClassName: "object-cover object-center",
    href: "/gutachtenarten/fahrzeugbewertung",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/16 to-transparent",
  },
  {
    icon: ClipboardCheck,
    image: "/images/services/beweissicherung-dokumentation.webp",
    imageAlt: "Dokumentation eines Fahrzeugschadens mit Fotos",
    imageClassName: "object-cover object-center",
    href: "/gutachtenarten/schadendokumentation",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/14 to-transparent",
  },
] as const

const localizedServiceImageAlts = {
  de: [
    "Unfallschaden an einem Fahrzeug in Berlin",
    "Fahrzeugbewertung mit Unterlagen und Kamera",
    "Dokumentation eines Fahrzeugschadens mit Fotos",
  ],
  en: [
    "Accident damage to a vehicle in Berlin",
    "Vehicle valuation with documents and a camera",
    "Documentation of vehicle damage with photographs",
  ],
  ru: [
    "Повреждение автомобиля после ДТП в Берлине",
    "Оценка стоимости автомобиля с документами и камерой",
    "Фиксация повреждений автомобиля с помощью фотографий",
  ],
} as const satisfies Record<Locale, readonly string[]>
const protectedDesktopPhrases = ["sicheren Transport"] as const

const mobileServiceDescriptions = {
  de: [
    "UNEXT ordnet den Fahrzeugschaden fachlich ein und klärt mit Ihnen die nächsten Schritte.",
    "Wir bewerten den Fahrzeugwert fachlich – etwa vor Verkauf, Kauf oder weiteren Entscheidungen.",
    "Wir halten Schäden und Fahrzeugzustand mit Fotos und vorhandenen Unterlagen fest.",
  ],
  en: [
    "UNEXT assesses accident damage professionally and discusses the next steps with you.",
    "We assess the vehicle's value professionally before a sale, purchase or another important decision.",
    "We record vehicle damage and condition using photographs and available documents.",
  ],
  ru: [
    "UNEXT профессионально оценивает повреждения автомобиля и согласовывает с вами дальнейшие шаги.",
    "Мы профессионально оцениваем стоимость автомобиля перед продажей, покупкой или другим важным решением.",
    "Мы фиксируем повреждения и состояние автомобиля с помощью фотографий и имеющихся документов.",
  ],
} as const satisfies Record<Locale, readonly string[]>

const mobileServicesIntro = {
  de: "Der Schwerpunkt liegt auf Unfallgutachten in Berlin.\nErgänzend unterstützt UNEXT bei der Fahrzeugbewertung\nund der nachvollziehbaren Schadendokumentation.",
  en: "Accident damage appraisals in Berlin are our main focus.\nUNEXT also provides vehicle valuation\nand vehicle damage documentation.",
  ru: "Основное направление UNEXT — независимая оценка ущерба после ДТП в Берлине.\nКроме того, UNEXT оказывает услуги по оценке стоимости автомобиля\nи структурированной фиксации повреждений.",
} as const satisfies Record<Locale, string>

type Props = {
  locale: Locale
}

// Diese Funktion haelt auf Desktop einzelne zusammengehoerige Begriffe in Kartenbeschreibungen zusammen.
function renderDesktopProtectedDescriptionLine(description: string) {
  const phrase = protectedDesktopPhrases.find((item) => description.includes(item))

  if (!phrase) {
    return description
  }

  const phraseIndex = description.indexOf(phrase)

  return (
    <>
      {description.slice(0, phraseIndex)}
      <span className="lg:whitespace-nowrap">{phrase}</span>
      {description.slice(phraseIndex + phrase.length)}
    </>
  )
}

// Diese Funktion zeigt bewusst gesetzte Zeilenumbrueche in Kartenbeschreibungen als sichtbare neue Zeilen.
function renderServiceDescription(description: string) {
  return description.split("\n").map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {renderDesktopProtectedDescriptionLine(line)}
      {index < lines.length - 1 ? " " : null}
    </span>
  ))
}

function renderMobileServiceDescription(description: string) {
  return description.split("\n").map((line) => line.trim()).filter(Boolean).join(" ")
}

export function ServicesSection({ locale }: Props) {
  // Diese Daten bestimmen pro Leistung Bild, Icon und direkte Kontaktaktion.
  const t = getTranslations(locale).home.services

  const resolvedServiceMeta = reportServiceMeta
  const serviceAnchors = homeReportAnchors

  return (
    <section
      id="leistungen"
      className="bg-accent/35 pb-20 pt-16 sm:pb-22 sm:pt-18 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-12">
          <h2 className="mx-auto max-w-[28ch] text-[clamp(1.85rem,1.08rem+0.82vw,2.2rem)] font-semibold leading-[1.1] text-foreground [text-wrap:balance] lg:max-w-[34ch]">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 hidden max-w-[64rem] text-body-fluid leading-8 text-foreground/82 md:block">
            {t.description.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <ReadableText
            text={mobileServicesIntro[locale]}
            className="mx-auto mt-3 measure-intro-tight text-body-compact text-foreground/82 md:hidden"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {t.items.map((service, index) => {
            const meta = resolvedServiceMeta[index] ?? resolvedServiceMeta[0]
            const contactText = meta.contactText ?? ""
            const primaryCtaLabels = {
              de: ["Zum Unfallgutachten", "Zur Fahrzeugbewertung", "Zur Schadendokumentation"],
              en: ["View appraisal", "View valuation", "View documentation"],
              ru: ["Оценка ущерба", "Оценка стоимости", "Фиксация повреждений"],
            } as const
            const callLabels = { de: "Anrufen", en: "Call", ru: "Позвонить" } as const
            const primaryCtaLabel = primaryCtaLabels[locale][index] ?? t.learnMore
            const primaryCtaAriaLabels = {
              de: ["Unfallgutachten ansehen", "Fahrzeugbewertung ansehen", "Schadendokumentation ansehen"],
              en: ["View accident damage appraisal", "View vehicle valuation", "View vehicle damage documentation"],
              ru: ["Открыть оценку ущерба после ДТП", "Открыть оценку стоимости автомобиля", "Открыть фиксацию повреждений"],
            } as const
            const primaryCtaAriaLabel = primaryCtaAriaLabels[locale][index]
            const callCtaLabel = callLabels[locale]
            const callCtaAriaLabel = contactText
              ? `${callCtaLabel}: ${contactText}`
              : undefined

            return (
              <Card
                key={service.title}
                id={serviceAnchors[index]}
                className={`group relative scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-border/65 bg-card/98 shadow-[0_16px_38px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_22px_48px_rgba(15,23,42,0.14)] focus-within:-translate-y-0.5 focus-within:border-primary/35 focus-within:shadow-[0_22px_48px_rgba(15,23,42,0.14)] ${
                  index === 2
                    ? "md:col-span-2 md:mx-auto md:w-[calc((100%-1.5rem)/2)] xl:col-span-1 xl:w-auto"
                    : ""
                }`}
              >
                <CardContent className="p-4 sm:p-5 lg:p-4">
                  <div className="flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] border border-border/55 bg-background shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
                      <Image
                        src={meta.image}
                        alt={localizedServiceImageAlts[locale][index] ?? meta.imageAlt ?? service.title}
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                        quality={74}
                        className={`${meta.imageClassName} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${meta.accentColor}`} />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col px-1 pt-5 sm:px-2 lg:px-0">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <meta.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[0.63rem] font-medium uppercase tracking-[0.22em] text-primary/90">
                            {service.subtitle}
                          </p>
                          <div className="inline-block max-w-full">
                            <h3 className="mt-1 text-card-heading-fluid text-foreground [text-wrap:balance]">
                              {service.title}
                            </h3>
                            <span aria-hidden="true" className="mt-2 block h-px w-full rounded-full bg-primary/70" />
                          </div>
                        </div>
                      </div>

                      <p
                        className="mt-3 hidden max-w-none text-[1rem] leading-7 text-foreground/78 md:block"
                      >
                        {renderServiceDescription(service.description)}
                      </p>
                      <p className="mt-3 text-body-compact text-foreground/76 md:hidden">
                        {renderMobileServiceDescription(mobileServiceDescriptions[locale][index] ?? service.description)}
                      </p>

                      <ul className="mt-4 grid gap-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="grid grid-cols-[0.35rem_minmax(0,1fr)] items-start gap-x-3 rounded-xl border border-border/40 bg-background/58 px-3.5 py-2.5 text-[0.99rem] leading-7 text-foreground/80"
                          >
                            <span className="mt-[0.64rem] h-[0.3125rem] w-[0.3125rem] rounded-full bg-primary/90" />
                            <span className="leading-7">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="mt-6 flex flex-col gap-3 border-t border-border/55 pt-5 lg:flex-row lg:items-center lg:justify-between"
                      >
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="w-full gap-2 border-primary/28 bg-background/60 text-foreground/88 shadow-none hover:border-primary/45 hover:bg-primary/10 lg:w-auto"
                        >
                          <Link href={getLocalizedPath(locale, meta.href)} aria-label={primaryCtaAriaLabel}>
                            {primaryCtaLabel}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        {meta.contactHref ? (
                          <>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="group w-full gap-2 border-primary/45 bg-primary/14 font-semibold text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/60 hover:!bg-primary/16 hover:!text-foreground lg:ml-auto lg:w-auto"
                            >
                              <a href={meta.contactHref} aria-label={callCtaAriaLabel}>
                                <Phone className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
                                <span className="transition-colors duration-300 group-hover:text-primary">{callCtaLabel}</span>
                              </a>
                            </Button>
                          </>
                        ) : (
                          <span className="text-sm text-muted-foreground">{contactText}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}
