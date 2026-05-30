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
import type { Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type Props = {
  locale: Locale
}

export function AboutSection({ locale }: Props) {
  const t = getTranslations(locale).home.about
  // Diese mobile englische Fassung setzt Sinnzeilen, ohne die Desktop-Fassung oder andere Sprachen zu veraendern.
  const mobileEnglishParagraph1 =
    "UNEXT GmbH is a Berlin-based company,\nfounded in 2024 with a focus on\nprofessional accident reports and\nimmediate assistance.\n\nUnder the UNFALLX brand, we quickly became\na reliable partner for customers."
  const mobileEnglishParagraph2 =
    "Today, we offer more:\ncar rental, workshop service and detailing,\nvehicle registration, roadside assistance\nand towing - all in one place.\n\nOur goal is to support you\nwith vehicle-related questions\nclearly, directly and competently."
  const mobileRussianParagraph1 =
    "UNEXT GmbH - берлинская компания,\nоснованная в 2024 году с фокусом\nна автоэкспертизу после ДТП\nи срочную помощь.\n\nПод брендом UNFALLX мы быстро стали\nнадежным партнером для клиентов."
  const mobileRussianParagraph2 =
    "Сегодня мы предлагаем больше:\nаренду авто, сервис и детейлинг,\nрегистрацию, помощь на дороге\nи эвакуацию - все в одном месте.\n\nНаша цель - помогать вам\nв автомобильных вопросах\nпонятно, напрямую и компетентно."

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative lg:pr-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-sm">
              <Image
                src="/images/hero-car.webp"
                alt="UNEXT team member"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={76}
                className="object-cover object-[62%_42%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent dark:from-background/28" />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 sm:left-8 sm:right-auto">
              <div className="flex flex-wrap justify-center gap-3 rounded-xl border border-border/80 bg-card/95 p-3.5 shadow-lg backdrop-blur sm:flex-nowrap">
                <div className="min-w-[84px] px-2 text-center">
                  <p className="text-2xl font-bold text-primary">2024</p>
                  <p className="text-xs font-medium text-foreground/72">{t.stats.founded}</p>
                </div>
                <div className="hidden w-px bg-border sm:block" />
                <div className="min-w-[84px] px-2 text-center">
                  <p className="text-2xl font-bold text-primary">6</p>
                  <p className="text-xs font-medium text-foreground/72">{t.stats.services}</p>
                </div>
                <div className="hidden w-px bg-border sm:block" />
                <div className="min-w-[84px] px-2 text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs font-medium text-foreground/72">{t.stats.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 measure-heading text-heading-fluid font-semibold text-foreground">
              {t.title}
            </h2>
            {locale === "en" || locale === "ru" ? (
              <>
                <ReadableText
                  text={t.paragraph1}
                  className="mt-6 hidden measure-intro-tight text-body-fluid text-foreground/82 md:block"
                />
                <ReadableText
                  text={t.paragraph2}
                  className="mt-4 hidden measure-intro-tight text-body-fluid text-foreground/82 md:block"
                />
                <ReadableText
                  text={locale === "en" ? mobileEnglishParagraph1 : mobileRussianParagraph1}
                  className="mt-6 measure-intro-tight text-body-fluid text-foreground/82 md:hidden"
                />
                <ReadableText
                  text={locale === "en" ? mobileEnglishParagraph2 : mobileRussianParagraph2}
                  className="mt-4 measure-intro-tight text-body-fluid text-foreground/82 md:hidden"
                />
              </>
            ) : (
              <>
                <ReadableText
                  text={t.paragraph1}
                  className="mt-6 measure-intro-tight text-body-fluid text-foreground/82"
                />
                <ReadableText
                  text={t.paragraph2}
                  className="mt-4 measure-intro-tight text-body-fluid text-foreground/82"
                />
              </>
            )}

            <ul className="mt-8 space-y-3">
              {t.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-body-compact text-foreground/82">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild className="gap-2">
                <Link href="/ueber-uns">
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
