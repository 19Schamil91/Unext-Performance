/*
  Diese Datei zeigt den Inhalt der Ueber-uns-Seite.
  Sie zeigt Teamfoto, Unternehmensgeschichte, Werte, UNFALLX-Hinweis und Kontaktbereich.
  Nutzer koennen mehr ueber UNEXT lesen und zur passenden Leistung wechseln.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Heart, Target, Users } from "lucide-react"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type AboutPageContentProps = {
  locale: Locale
}

const icons = [Award, Users, Target, Heart]

// Diese kurzen Fassungen halten den Hero-Text auf schmalen Displays ruhig und gut lesbar.
const mobileHeroDescriptions: Partial<Record<Locale, string>> = {
  de: "Vom Unfallgutachter zum\nAutomotive-Partner in Berlin.\nErfahrung, Service und klare Abläufe.",
  en: "From accident reports to\nautomotive services in Berlin.\nExperience, service and clear processes.",
  ru: "От экспертизы ДТП\nк автоуслугам в Берлине.\nОпыт, сервис и понятные процессы.",
}

export function AboutPageContent({ locale }: AboutPageContentProps) {
  const t = getTranslations(locale).aboutPage
  const mobileHeroDescription = mobileHeroDescriptions[locale] ?? t.description

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="overflow-hidden bg-black md:relative md:aspect-[5022/1795]">
          <div className="relative aspect-[5022/1795] bg-black md:absolute md:inset-0 md:h-auto md:aspect-auto">
            {/* Dieses breite Teamfoto bleibt mobil voll sichtbar, damit die Personen nicht unruhig angeschnitten werden. */}
            <Image
              src="/images/about-hero-team-cropped.webp"
              alt="Team von UNEXT GmbH"
              fill
              sizes="100vw"
              quality={86}
              className="object-contain object-top md:object-contain md:object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/8 to-black/34 md:via-black/18 md:to-black/58" />
          </div>

          <div className="mx-auto max-w-7xl px-4 pb-9 pt-6 md:absolute md:inset-0 md:flex md:items-end md:pb-10 md:pt-0 lg:px-8 lg:pb-12">
            <div className="max-w-5xl max-md:mx-auto max-md:max-w-[34rem] max-md:text-center">
              <h1 className={`text-display-fluid text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.42)] max-md:text-[clamp(2rem,8vw,2.45rem)] max-md:leading-[1.02] ${locale === "de" ? "md:whitespace-nowrap" : ""}`}>
                {t.title}
              </h1>
              <p className="mt-6 measure-intro text-body-fluid text-white/82 drop-shadow-[0_6px_20px_rgba(0,0,0,0.36)] max-md:hidden">
                {t.description.split("\n").map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mx-auto mt-4 hidden max-w-[36ch] text-[0.98rem] leading-[1.55] text-white/82 drop-shadow-[0_6px_20px_rgba(0,0,0,0.36)] max-md:block">
                {mobileHeroDescription.split("\n").map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t.storyEyebrow}
                </p>
                <h2 className="mt-2 measure-heading text-heading-fluid font-semibold text-foreground">
                  {t.storyTitle}
                </h2>
                <div className="mt-6 measure-intro-tight space-y-4 text-body-fluid text-muted-foreground">
                  {t.storyParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-primary/30 pl-8 lg:pl-10">
                <div className="space-y-8">
                  {t.milestones.map((milestone, index) => (
                    <div key={`${milestone.year}-${milestone.title}`} className="relative">
                      <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="max-w-none text-title-fluid font-semibold text-foreground lg:whitespace-nowrap">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 max-w-[42ch] text-[0.98rem] leading-[1.62] text-muted-foreground">
                          {milestone.description.split("\n").map((line, index) => (
                            <span key={`${line}-${index}`} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mx-auto measure-heading text-heading-fluid font-semibold text-foreground">
                {t.valuesTitle}
              </h2>
              <p className="mx-auto mt-4 measure-intro text-body-fluid text-muted-foreground">{t.valuesDescription}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.values.map((value, index) => {
                const Icon = icons[index]

                return (
                  <Card
                    key={value.title}
                    className="border-border/50 bg-background text-left transition-all hover:border-primary/30 sm:text-center"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mx-auto">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-title-fluid font-semibold text-foreground sm:measure-card-copy">{value.title}</h3>
                      <p className="mt-2 max-w-none text-body-compact text-muted-foreground sm:mx-auto sm:measure-card-copy-wide">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12">
              <div className="lg:order-2 lg:pl-6">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[21rem] overflow-hidden rounded-[1.75rem] border border-border/50 bg-card p-2 shadow-sm lg:max-w-[20rem] xl:max-w-[22rem]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                    {/* Dieses Foto zeigt den Mitarbeiter im Buero mit etwas Abstand zum Kartenrand. */}
                    <Image
                      src="/images/about-office.webp"
                      alt="UNEXT Mitarbeiter im Buero"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      quality={82}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                  <span className="text-sm font-semibold text-primary">{t.subBrandBadge}</span>
                </div>
                <h2 className="measure-heading text-heading-fluid font-semibold text-foreground">
                  {t.subBrandTitle}
                </h2>
                <p className="mt-6 max-w-[64ch] text-body-compact leading-[1.72] text-muted-foreground">
                  {t.subBrandDescription.split("\n").map((line, index, lines) => (
                    <span key={`${line}-${index}`} className="inline lg:block">
                      {line}
                      {index < lines.length - 1 ? " " : null}
                    </span>
                  ))}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.subBrandHighlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild className="gap-2">
                    <Link href="/leistungen/unfallgutachten">
                      {t.subBrandCta}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
