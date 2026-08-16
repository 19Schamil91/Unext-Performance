/*
  Diese Datei zeigt die 404-Seite im englischen und russischen Bereich.
  Sie nutzt das Sprachkennzeichen des lokalen Layouts und bietet passende Rückwege.
  Nutzer können zur Startseite, zu den Gutachtenarten oder zum Kontakt wechseln.
*/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getLocalizedPagePath, type UrlLocale } from "@/lib/i18n"

const notFoundContent = {
  en: {
    title: "Page not found",
    text: "The requested page does not exist or has been moved.",
    home: "Home",
    appraisals: "View vehicle appraisal services",
    contact: "Contact us",
  },
  ru: {
    title: "Страница не найдена",
    text: "Запрошенная страница не существует или была перемещена.",
    home: "На главную",
    appraisals: "Посмотреть виды автоэкспертизы",
    contact: "Связаться с нами",
  },
} as const satisfies Record<UrlLocale, {
  title: string
  text: string
  home: string
  appraisals: string
  contact: string
}>

export default function LocalizedNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-background px-4 py-20 lg:px-8">
      <style>{`
        [data-localized-not-found] { display: none; }
        html[lang="en"] [data-localized-not-found="en"],
        html[lang="ru"] [data-localized-not-found="ru"] { display: block; }
      `}</style>
      {(["en", "ru"] as const).map((locale) => {
        const content = notFoundContent[locale]
        const homeHref = getLocalizedPagePath("home", locale)

        return (
          <section
            key={locale}
            data-localized-not-found={locale}
            className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">404</p>
            <h1 className="mt-3 text-3xl font-semibold text-foreground">{content.title}</h1>
            <p className="mt-3 text-muted-foreground">{content.text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild><Link href={homeHref}>{content.home}</Link></Button>
              <Button asChild variant="outline"><Link href={`${homeHref}#leistungen`}>{content.appraisals}</Link></Button>
              <Button asChild variant="outline"><Link href={getLocalizedPagePath("contact", locale)}>{content.contact}</Link></Button>
            </div>
          </section>
        )
      })}
    </main>
  )
}
