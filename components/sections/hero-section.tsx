/*
  Diese Datei definiert den Hero-Bereich der Startseite.
  Sie zeigt den zentralen Einstieg mit grosser Hauptbotschaft, lesbarem Bildbereich und schnellen Kontaktaktionen.
  Nutzer koennen von hier direkt anrufen, per WhatsApp schreiben oder die Leistungen weiter unten anspringen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, DoorOpen, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { homeServiceAnchors } from "@/lib/service-anchors"
import { getTranslations } from "@/lib/translations"

type HeroContentProps = {
  tone: "surface" | "overlay"
  locale: Locale
  badge?: string
  title1: string
  title2: string
  title3: string
  combinePrimaryTitle?: boolean
  description: string
  services: readonly { title: string; anchor: string }[]
  callNow: string
  inquiry: string
  whatsapp: string
  address: string
  directServicesLabel: string
  className?: string
}

function renderHeroDescription(description: string, lineClassName?: string) {
  // Diese Begriffe bleiben zusammen, damit sie in allen Sprachen lesbar umbrechen.
  const protectedTerm = "Kfz-Werkstatt"
  const desktopBreakMarkers = ["Autovermietung,", "Berlin."]
  const protectedTerms = [protectedTerm, "Taxi-Fahrer"]
  const combinedEndingMarkers = ["Alles unter einem Dach.", "All under one roof."]

  const renderProtectedLine = (line: string) => {
    const segments: Array<string | { protected: string }> = []
    let cursor = 0

    while (cursor < line.length) {
      let nextMatch: { index: number; term: string } | null = null

      for (const term of protectedTerms) {
        const index = line.indexOf(term, cursor)

        if (index !== -1 && (!nextMatch || index < nextMatch.index)) {
          nextMatch = { index, term }
        }
      }

      if (!nextMatch) {
        segments.push(line.slice(cursor))
        break
      }

      if (nextMatch.index > cursor) {
        segments.push(line.slice(cursor, nextMatch.index))
      }

      segments.push({ protected: nextMatch.term })
      cursor = nextMatch.index + nextMatch.term.length
    }

    return segments.map((segment, index) =>
      typeof segment === "string" ? (
        <span key={`${segment}-${index}`}>{segment}</span>
      ) : (
        <span key={`${segment.protected}-${index}`} className="whitespace-nowrap">
          {segment.protected}
        </span>
      )
    )
  }

  if (description.includes("\n")) {
    // Diese Zeilenlogik haelt den abschliessenden Vertrauenssatz optisch als Einheit zusammen.
    const sourceLines = description
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
    const combinedLines =
      sourceLines.length === 3
        ? combinedEndingMarkers.reduce<string[] | null>((currentLines, marker) => {
            if (currentLines) {
              return currentLines
            }

            const markerIndex = sourceLines[1]?.indexOf(marker) ?? -1

            if (markerIndex === -1) {
              return null
            }

            const beforeMarker = sourceLines[1].slice(0, markerIndex).trim()
            const endingLine = `${sourceLines[1].slice(markerIndex).trim()} ${sourceLines[2]}`

            return [sourceLines[0], beforeMarker, endingLine].filter(Boolean)
          }, null) ?? sourceLines
        : sourceLines

    return (
      <>
        {combinedLines
          .map((line, index, lines) => (
            <span key={`${line}-${index}`} className={`block ${lineClassName ?? ""}`.trim()}>
              {renderProtectedLine(line)}
              {index < lines.length - 1 ? " " : null}
            </span>
          ))}
      </>
    )
  }

  let remaining = description
  const lines: string[] = []

  for (const marker of desktopBreakMarkers) {
    const markerIndex = remaining.indexOf(marker)

    if (markerIndex === -1) {
      continue
    }

    const lineEnd = markerIndex + marker.length
    lines.push(remaining.slice(0, lineEnd).trim())
    remaining = remaining.slice(lineEnd).trimStart()
  }

  if (lines.length === 0) {
    lines.push(description)
  } else if (remaining) {
    lines.push(remaining)
  }

  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={`block ${lineClassName ?? ""}`.trim()}>
          {renderProtectedLine(line)}
          {index < lines.length - 1 ? " " : null}
        </span>
      ))}
    </>
  )
}

function HeroContent({
  tone,
  locale,
  badge,
  title1,
  title2,
  title3,
  combinePrimaryTitle = false,
  description,
  services,
  callNow,
  inquiry,
  whatsapp,
  address,
  directServicesLabel,
  className,
}: HeroContentProps) {
  const isOverlay = tone === "overlay"
  const addressParts = address.split(",").map((part) => part.trim()).filter(Boolean)
  const addressPrimary = addressParts[0] ?? address
  const addressSecondary = addressParts.slice(1).join(", ")
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  // Russisch braucht wegen der laengeren Woerter eine eigene Hero-Groesse; die vorhandene Display-Klasse ist dort zu hoch.
  const overlayTitleClass =
    locale === "ru"
      ? "text-[clamp(1.86rem,7vw,2.24rem)] leading-[1] tracking-[-0.015em] md:text-[clamp(2.35rem,4.15vw,4.55rem)] md:leading-[0.95] md:tracking-[-0.03em]"
      : "text-display-fluid max-md:text-[clamp(1.95rem,7.8vw,2.4rem)] max-md:leading-[1]"
  const overlayWrapperClass = locale === "ru" ? "md:-translate-y-8" : ""
  // Die deutsche Startseitenzeile bleibt auf Handybreite als Sinnabschnitt zusammen.
  const primaryTitleSecondLineClass =
    locale === "de"
      ? "block whitespace-nowrap text-primary md:whitespace-normal"
      : "block max-w-[11ch] text-primary sm:max-w-none"

  return (
    <div className={`relative min-w-0 ${className ?? ""}`}>
      <div
        className={
          isOverlay
            ? `relative max-w-[45rem] px-0 py-0 ${overlayWrapperClass}`.trim()
            : ""
        }
      >
        {badge ? (
          <div
            className={
              isOverlay
                ? "mb-5 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/68 backdrop-blur-sm sm:text-xs sm:tracking-[0.18em]"
                : "mb-5 inline-flex max-w-full rounded-full border border-border/70 bg-accent px-3 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]"
            }
          >
            {badge}
          </div>
        ) : null}

        <div
          aria-hidden="true"
          className={
            isOverlay
              ? combinePrimaryTitle
                ? "relative z-10 inline-flex max-w-[45rem] flex-col text-left text-white drop-shadow-[0_16px_42px_rgba(0,0,0,0.72)]"
                : "relative z-10 max-w-[45rem] text-left text-white drop-shadow-[0_16px_42px_rgba(0,0,0,0.72)]"
              : "max-w-none text-[clamp(2rem,1.78rem+1vw,2.35rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          }
        >
          {isOverlay && combinePrimaryTitle ? (
            <span className={`block font-semibold ${overlayTitleClass}`}>
              <span className="block text-white">{title1}</span>
              <span className={primaryTitleSecondLineClass}>{title2}</span>
            </span>
          ) : (
            <>
              <span
                className={
                  isOverlay
                    ? `block font-semibold ${overlayTitleClass}`
                    : "block"
                }
              >
                {title1}
              </span>
              <span
                className={
                  isOverlay
                    ? `block font-semibold text-primary ${overlayTitleClass}`
                    : "block text-primary"
                }
              >
                {title2}
              </span>
            </>
          )}
          <span
            className={
              isOverlay
                ? combinePrimaryTitle
                  ? "mt-3 block text-title-fluid font-semibold text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.6)] max-md:mt-2 max-md:text-[clamp(1.02rem,4.5vw,1.22rem)] max-md:leading-[1.05]"
                  : "mt-3 block text-title-fluid font-semibold text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.6)] max-md:mt-2 max-md:text-[clamp(1.02rem,4.5vw,1.22rem)] max-md:leading-[1.05]"
                : "mt-1.5 block max-w-none text-[clamp(1rem,0.9rem+0.45vw,1.22rem)] leading-[1.25] font-normal tracking-normal text-foreground/78 sm:mt-2 sm:max-w-[18ch] sm:text-[clamp(1.05rem,0.84rem+1vw,2.35rem)] sm:leading-[1.12]"
            }
          >
            {title3}
          </span>
        </div>

        <p
          className={
            isOverlay
              ? "relative z-10 mt-6 measure-intro text-body-fluid font-medium text-white/92 drop-shadow-[0_10px_30px_rgba(0,0,0,0.78)] max-md:mt-4 max-md:max-w-[35ch] max-md:text-[0.91rem] max-md:font-normal max-md:leading-[1.5]"
              : "mt-4 max-w-none text-body-fluid text-foreground/82 sm:mt-6"
          }
        >
          {renderHeroDescription(description, isOverlay ? "max-md:inline" : undefined)}
        </p>
      </div>

      {!isOverlay ? (
        <>
          <div className="mt-9 sm:mt-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/68 sm:text-[0.72rem]">
              {directServicesLabel}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2 sm:hidden">
            {services.map((service) => (
              <Link
                key={service.anchor}
                href={`#${service.anchor}`}
                className="group flex min-h-14 min-w-0 items-center justify-between gap-3 rounded-[1.1rem] border border-border/70 bg-card px-4 py-3 text-[0.92rem] leading-5 text-foreground shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all hover:border-primary/45 hover:bg-accent"
              >
                <span className="min-w-0">{service.title}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/12 text-primary transition-transform group-hover:translate-x-0.5">
                  <DoorOpen className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 hidden max-w-[54rem] grid-cols-2 gap-2.5 sm:grid lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.anchor}
                href={`#${service.anchor}`}
                className="group inline-flex min-w-0 items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-foreground shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all hover:border-primary/45 hover:bg-accent"
              >
                <span className="min-w-0 [text-wrap:balance]">{service.title}</span>
                <DoorOpen className="h-3.5 w-3.5 shrink-0 text-primary/92 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </>
      ) : null}

      <div className={isOverlay ? "mt-8 flex flex-col gap-5 max-md:mt-5 max-md:gap-3 sm:flex-row sm:items-start sm:justify-start" : "mt-9 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"}>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
          <Button asChild size="lg" className="w-full gap-2 px-5 sm:w-auto">
            <a href="tel:+493023613927">
              <Phone className="h-5 w-5" />
              {callNow}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant={isOverlay ? "outline" : "secondary"}
            className={
              isOverlay
                ? "w-full gap-2 border-white/24 bg-black/28 px-5 text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-md hover:border-white/42 hover:bg-white/10 hover:text-white sm:w-auto"
                : "w-full gap-2 sm:w-auto"
            }
          >
            <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              {whatsapp}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={isOverlay ? "hidden" : "hidden w-full gap-2 sm:inline-flex sm:w-auto"}
          >
            <Link href="/kontakt">
              {inquiry}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        {!isOverlay ? (
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-full items-center gap-3 rounded-[1.1rem] border border-border/70 bg-card px-4 py-3 text-left text-foreground shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.95rem] font-semibold leading-tight text-foreground">
                {addressPrimary}
              </span>
              {addressSecondary ? (
                <span className="mt-1 block truncate text-[0.76rem] font-medium uppercase tracking-[0.14em] text-foreground/68">
                  {addressSecondary}
                </span>
              ) : null}
            </span>
          </a>
        ) : null}
      </div>

      {isOverlay ? (
        <nav
          aria-label={directServicesLabel}
          className="hidden"
        >
          <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/62">
            {directServicesLabel}
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.anchor}
                href={`#${service.anchor}`}
                className="group flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-full border border-white/14 bg-black/24 px-4 py-2.5 text-center text-[0.76rem] font-semibold leading-4 text-white/84 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/14 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="min-w-0 [text-wrap:balance]">{service.title}</span>
                <DoorOpen className="h-3.5 w-3.5 shrink-0 text-primary/90 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </div>
  )
}

type Props = {
  locale: Locale
}

export function HeroSection({ locale }: Props) {
  // Diese Inhalte werden serverseitig nach der Sprache der aktuellen URL geladen.
  const home = getTranslations(locale).home
  const t = home.hero
  const mainServices = home.services.items.map((service, index) => ({
    title: service.title,
    anchor: homeServiceAnchors[index] ?? homeServiceAnchors[0],
  }))
  // Dieses optimierte Bild ist der visuelle Einstieg der Startseite.
  const heroImageSrc = "/images/home-hero-new.webp"
  // Dieser vollstaendige Titel ist fuer Suchmaschinen und Screenreader gedacht.
  const heroTitle = `${t.title1} ${t.title2} ${t.title3}`

  return (
    <section className="overflow-x-clip overflow-y-hidden bg-background">
      <h1 className="sr-only">{heroTitle}</h1>
      <div className="bg-black md:hidden">
        <div className="relative h-[17.5rem] overflow-hidden bg-black min-[430px]:h-[19.25rem]">
          <Image
            src={heroImageSrc}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 0vw"
            quality={88}
            className="scale-125 object-cover object-[58%_64%]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0)_0%,rgba(5,7,11,0.02)_54%,rgba(5,7,11,0.42)_100%)]" />
        </div>

        <div className="px-5 pb-7 pt-6">
          <HeroContent
            tone="overlay"
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            combinePrimaryTitle
            locale={locale}
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            directServicesLabel={t.directServicesLabel}
            className="mx-auto w-full max-w-[26.5rem]"
          />
        </div>
      </div>

      <div className="relative hidden h-[calc(88svh-5rem)] min-h-[39rem] max-h-[50rem] items-start overflow-hidden md:flex">
        <div className="absolute inset-0">
          <Image
            src={heroImageSrc}
            alt=""
            fill
            sizes="(min-width: 768px) 100vw, 0vw"
            quality={88}
            className="object-cover object-[58%_18%] lg:object-[57%_16%]"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_42%,rgba(255,255,255,0.14),transparent_32%),linear-gradient(90deg,rgba(4,6,10,0.68)_0%,rgba(7,9,13,0.52)_30%,rgba(7,9,13,0.18)_58%,rgba(7,9,13,0.02)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.18)_0%,rgba(5,7,11,0)_34%,rgba(5,7,11,0.36)_100%)]" />
        </div>

        <div className="relative flex h-full w-full px-[clamp(2rem,5vw,6rem)] pb-12 pt-[clamp(7rem,13vh,10rem)]">
          <HeroContent
            tone="overlay"
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            locale={locale}
            combinePrimaryTitle
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            directServicesLabel={t.directServicesLabel}
            className="h-full w-full max-w-none"
          />
        </div>
      </div>
    </section>
  )
}
