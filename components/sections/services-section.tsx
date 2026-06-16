/*
  Diese Datei zeigt den Leistungsbereich auf der Startseite.
  Sie zeigt die sechs Hauptleistungen als Karten mit Bild, Kurztext, Vorteilen und Kontaktaktion.
  Besucher koennen eine Leistung ansehen, Details oeffnen oder direkt anrufen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Phone, Sparkles, Truck, Wrench } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { homeReportAnchors, homeServiceAnchors } from "@/lib/service-anchors"
import { getTranslations } from "@/lib/translations"

type ServiceMeta = {
  icon: typeof FileCheck
  image: string
  imageClassName: string
  href: string
  contactText?: string
  contactHref?: string
  accentColor: string
}

const serviceMeta = [
  {
    icon: FileCheck,
    image: "/images/home-service-accident-wide.webp",
    imageClassName: "object-cover object-center",
    href: "/leistungen/unfallgutachten",
    contactText: "0176 64365185",
    contactHref: "tel:+4917664365185",
    accentColor: "from-red-500/20 to-transparent",
  },
  {
    icon: Car,
    image: "/images/home-service-rental.webp",
    imageClassName: "object-cover object-[42%_top]",
    href: "/leistungen/autovermietung",
    contactText: "0174 4292900",
    contactHref: "tel:+491744292900",
    accentColor: "from-blue-500/20 to-transparent",
  },
  {
    icon: Wrench,
    image: "/images/home-service-workshop.webp",
    imageClassName: "object-cover object-[58%_top]",
    href: "/leistungen/autoservice",
    contactText: "0177 7883206",
    contactHref: "tel:+491777883206",
    accentColor: "from-amber-500/20 to-transparent",
  },
  {
    icon: Sparkles,
    image: "/images/home-service-detailing.webp",
    imageClassName: "object-cover object-[42%_top]",
    href: "/leistungen/detailing",
    contactText: "0177 6691006",
    contactHref: "tel:+491776691006",
    accentColor: "from-emerald-500/20 to-transparent",
  },
  {
    icon: ClipboardCheck,
    image: "/images/home-service-registration.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/zulassungsservice",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-cyan-500/20 to-transparent",
  },
  {
    icon: Truck,
    image: "/images/service-towing.webp",
    imageClassName: "object-cover object-[44%_center]",
    href: "/leistungen/abschleppdienst-pannenhilfe",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-orange-500/20 to-transparent",
  },
] satisfies readonly ServiceMeta[]

const reportServiceMeta = [
  {
    icon: FileCheck,
    image: "/images/home-service-accident-wide.webp",
    imageClassName: "object-cover object-center",
    href: "/kontakt",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/20 to-transparent",
  },
  {
    icon: ClipboardCheck,
    image: "/images/home-service-accident-wide.webp",
    imageClassName: "object-cover object-center",
    href: "/kontakt",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/18 to-transparent",
  },
  {
    icon: FileCheck,
    image: "/images/home-service-accident-wide.webp",
    imageClassName: "object-cover object-center",
    href: "/kontakt",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/16 to-transparent",
  },
  {
    icon: ClipboardCheck,
    image: "/images/home-service-accident-wide.webp",
    imageClassName: "object-cover object-center",
    href: "/kontakt",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-red-500/14 to-transparent",
  },
] satisfies readonly ServiceMeta[]

const protectedDesktopPhrases = ["sicheren Transport"] as const

const mobileServiceDescriptions = {
  de: [
    "Unabhängige Dokumentation nach einem Unfall mit klarer Einordnung der nächsten Schritte.",
    "Schadendokumentation für Karosserie, Technik und sichtbare Unfallfolgen.",
    "Fahrzeugbewertung und Wertgutachten für Kauf, Verkauf oder interne Entscheidungen.",
    "Beweissicherung mit Fotos, Unterlagen und nachvollziehbarer Schadendokumentation.",
  ],
  en: [
    "After an accident, you get fast support,\nan independent vehicle report\nand clear next steps.",
    "Rental and replacement vehicles\nfor private customers, businesses\nand ride-hailing drivers.",
    "From inspections to repairs,\nwe take care of technology,\nsafety and reliable readiness.",
    "Interior and exterior detailing\nfor well-kept vehicles,\nvalue retention and a premium finish.",
    "Registration, deregistration\nand plate services,\nso your vehicle gets on the road correctly.",
    "If your vehicle can no longer continue,\nwe organize fast help,\nsafe transport and the next steps.",
  ],
  ru: [
    "После ДТП вы получаете\nбыструю поддержку,\nнезависимую экспертизу\nи понятные следующие шаги.",
    "Аренда и подменные автомобили\nдля частных клиентов, бизнеса\nи водителей такси.",
    "От инспекции до ремонта\nмы заботимся о технике,\nбезопасности и готовности авто.",
    "Подготовка салона и кузова\nдля аккуратного вида\nи сохранения стоимости.",
    "Оформляем регистрацию\nи номера, чтобы автомобиль\nбыстро вышел на дорогу.",
    "Если автомобиль не едет дальше,\nорганизуем помощь и безопасную\nэвакуацию, а также следующие шаги.",
  ],
} as const satisfies Record<Locale, readonly string[]>

const mobileServicesIntro = {
  de: "UNEXT fokussiert sich auf KFZ-Gutachten in Berlin:\nUnfallgutachten, Schadengutachten,\nFahrzeugbewertung und Beweissicherung.",
  en: "UNEXT combines accident assistance, rental cars,\nworkshop service and detailing\nwith registration and roadside help in Berlin.",
  ru: "UNEXT объединяет помощь при ДТП,\nаренду авто, сервис и детейлинг\nс регистрацией и помощью на дороге в Берлине.",
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
  const resolvedServiceMeta = locale === "de" ? reportServiceMeta : serviceMeta
  const serviceAnchors = locale === "de" ? homeReportAnchors : homeServiceAnchors

  return (
    <section id="leistungen" className="bg-accent/35 pt-18 pb-20 sm:pt-20 sm:pb-22 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16">
          <h2 className="mx-auto measure-heading text-heading-fluid font-semibold text-foreground lg:max-w-none">
            {t.title}
          </h2>
          <ReadableText
            text={t.description}
            className="mx-auto mt-3 hidden measure-intro text-body-fluid text-foreground/82 sm:mt-4 md:block"
          />
          <ReadableText
            text={mobileServicesIntro[locale]}
            className="mx-auto mt-3 measure-intro-tight text-body-compact text-foreground/82 md:hidden"
          />
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {t.items.map((service, index) => {
            const meta = resolvedServiceMeta[index] ?? resolvedServiceMeta[0]
            const contactText = meta.contactText ?? ""

            return (
              <Card
                key={service.title}
                id={serviceAnchors[index]}
                className="group relative scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-border/65 bg-card/98 shadow-[0_16px_38px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_22px_48px_rgba(15,23,42,0.14)] focus-within:-translate-y-0.5 focus-within:border-primary/35 focus-within:shadow-[0_22px_48px_rgba(15,23,42,0.14)]"
              >
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] border border-border/55 bg-background shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
                      <Image
                        src={meta.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                        quality={74}
                        className={`${meta.imageClassName} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${meta.accentColor}`} />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col px-1 pt-5 sm:px-2 lg:px-1">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <meta.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[0.63rem] font-medium uppercase tracking-[0.22em] text-primary/90">
                            {service.subtitle}
                          </p>
                          <div className="inline-block max-w-full">
                            <h3 className="mt-1 text-card-heading-fluid text-foreground lg:whitespace-nowrap">
                              {service.title}
                            </h3>
                            <span aria-hidden="true" className="mt-2 block h-px w-full rounded-full bg-primary/70" />
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 measure-card-copy-wide hidden text-body-compact leading-7 text-foreground/74 md:block lg:!max-w-[58ch] xl:!max-w-[60ch] lg:[text-wrap:balance]">
                        {renderServiceDescription(service.description)}
                      </p>
                      <p className="mt-3 text-body-compact text-foreground/76 md:hidden">
                        {renderMobileServiceDescription(mobileServiceDescriptions[locale][index] ?? service.description)}
                      </p>

                      <ul className="mt-4 grid gap-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="grid grid-cols-[0.35rem_minmax(0,1fr)] items-start gap-x-3 rounded-xl border border-border/40 bg-background/58 px-3.5 py-2.5 text-body-compact text-foreground/76"
                          >
                            <span className="mt-[0.64rem] h-[0.3125rem] w-[0.3125rem] rounded-full bg-primary/90" />
                            <span className="leading-6">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 border-t border-border/55 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <Button asChild size="sm" className="w-full gap-2 sm:w-auto">
                          <Link href={getLocalizedPath(locale, meta.href)}>
                            {t.learnMore}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        {meta.contactHref ? (
                          <>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="group w-full gap-2 border-primary/45 bg-primary/14 font-semibold text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/60 hover:!bg-primary/16 hover:!text-foreground sm:ml-auto sm:w-auto"
                            >
                              <a href={meta.contactHref}>
                                <Phone className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
                                <span className="transition-colors duration-300 group-hover:text-primary">{contactText}</span>
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

        {locale === "de" ? (
          <div
            id="service-digitale-schadenaufnahme"
            className="mt-7 scroll-mt-28 rounded-[1.75rem] border border-primary/22 bg-card/88 p-5 shadow-[0_16px_38px_rgba(15,23,42,0.08)] sm:p-6 lg:mt-8 lg:p-8"
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-primary/90">
                  Anfrage vorbereiten
                </p>
                <h3 className="mt-2 text-card-heading-fluid text-foreground">
                  Digitale Schadenaufnahme als Vorbereitung
                </h3>
                <p className="mt-3 max-w-3xl text-body-compact leading-7 text-foreground/76">
                  <span className="block">
                    Fotos und Fahrzeugdaten können für die Anfrage vorbereitet werden.
                  </span>
                  <span className="block">
                    Danach erfolgt die persönliche Abstimmung per Telefon, WhatsApp oder Kontaktformular.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild className="gap-2">
                  <Link href="/kontakt">
                    Gutachten anfragen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href="tel:+493023613927">
                    <Phone className="h-4 w-4" />
                    030 23613927
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
