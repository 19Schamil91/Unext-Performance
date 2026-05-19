/*
  Diese Datei definiert den abschliessenden Kontaktbereich auf der Startseite.
  Sie hebt die schnelle Kontaktaufnahme visuell hervor und bietet mehrere direkte Aktionen.
  Nutzer koennen direkt anrufen, WhatsApp oeffnen oder zur Kontaktseite wechseln.
*/
import Link from "next/link"
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type Props = {
  locale: Locale
}

export function CtaSection({ locale }: Props) {
  // Dieser Bereich zeigt pro Sprache eine kurze Frage und ein klares Versprechen vor den Kontaktbuttons.
  const t = getTranslations(locale).home.cta
  const contactHref = getLocalizedPath(locale, "/kontakt")
  const titleLines =
    locale === "de"
      ? ["Brauchen Sie Hilfe", "rund ums Fahrzeug?"]
      : locale === "en"
        ? ["Need help with", "your vehicle?"]
        : ["Нужна помощь", "с автомобилем?"]
  const visibleDescriptionLines =
    locale === "de"
      ? ["Wir sagen Ihnen schnell, was möglich ist."]
      : locale === "en"
        ? ["We quickly tell you what is possible."]
        : ["Мы быстро скажем, чем можем помочь."]

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#10090b] py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(82,8,16,0.82),rgba(32,8,12,0.72)_42%,rgba(9,11,14,0.96)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-4xl xl:max-w-none">
            <div className="mb-4 flex items-center gap-2 text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t.badge}</span>
            </div>
            <h2 className="max-w-[18rem] text-[clamp(2rem,1.55rem+1.5vw,2.75rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-primary-foreground sm:max-w-[18ch] lg:max-w-none lg:whitespace-nowrap">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-[22rem] text-[1.08rem] leading-[1.55] text-primary-foreground/86 sm:max-w-[46ch] lg:max-w-none">
              {visibleDescriptionLines.map((line) => (
                <span key={line} className="block lg:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full gap-2 bg-white font-semibold text-primary shadow-[0_16px_34px_rgba(15,23,42,0.28)] hover:bg-white/92 sm:w-auto"
            >
              <a href="tel:+493023613927">
                <Phone className="h-5 w-5" />
                030 23613927
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:text-white sm:w-auto"
            >
              <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t.whatsapp}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:text-white sm:w-auto"
            >
              <Link href={contactHref}>
                {t.inquiry}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
