/*
  Diese Datei definiert den abschliessenden Kontaktbereich auf der Startseite.
  Sie hebt die schnelle Kontaktaufnahme visuell hervor und bietet mehrere direkte Aktionen.
  Nutzer koennen direkt anrufen, WhatsApp oeffnen oder zur Kontaktseite wechseln.
*/
import Link from "next/link"
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type Props = {
  locale: Locale
}

export function CtaSection({ locale }: Props) {
  // Dieser Bereich zeigt pro Sprache eine fest kontrollierte Zeilenaufteilung.
  const t = getTranslations(locale).home.cta
  const contactHref = getLocalizedPath(locale, "/kontakt")
  const fixedDescriptionLines =
    locale === "de"
      ? [
          "Rufen Sie uns an, schreiben Sie per WhatsApp",
          "oder senden Sie direkt eine Anfrage.",
          "Wir melden uns schnell zurück und sagen Ihnen klar,",
          "welcher nächste Schritt sinnvoll ist.",
        ]
      : locale === "en"
        ? [
            "Call us, message us on WhatsApp",
            "or send an inquiry directly.",
            "We will get back to you quickly and explain clearly",
            "which next step makes sense.",
          ]
        : locale === "ru"
          ? [
              "Позвоните нам или напишите в WhatsApp. Мы сразу скажем,",
              "как можем помочь с ДТП, автосервисом, арендой автомобиля,",
              "регистрацией или помощью на дороге.",
            ]
          : null
  const visibleDescriptionLines =
    locale === "ru"
      ? [
          "Позвоните нам, напишите в WhatsApp",
          "или отправьте заявку напрямую.",
          "Мы быстро свяжемся с вами и понятно объясним,",
          "какой следующий шаг имеет смысл.",
        ]
      : fixedDescriptionLines

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
            <h2 className="max-w-[22rem] text-[clamp(1.85rem,1.5rem+1.15vw,2.65rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-primary-foreground sm:max-w-[18ch] lg:max-w-none lg:whitespace-nowrap">
              {t.title}
            </h2>
            {visibleDescriptionLines ? (
              <p className="mt-4 max-w-[36rem] text-body-fluid text-primary-foreground/86 sm:max-w-[46ch] lg:max-w-none">
                {visibleDescriptionLines.map((line, index) => (
                  <span key={line} className="inline sm:block lg:whitespace-nowrap">
                    {line}
                    {index < visibleDescriptionLines.length - 1 ? " " : null}
                  </span>
                ))}
              </p>
            ) : (
              <ReadableText
                text={t.description}
                className="mt-4 max-w-[62ch] text-body-fluid text-primary-foreground/86"
              />
            )}
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
