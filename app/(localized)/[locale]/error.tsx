/*
  Diese Datei zeigt einen sprachabhängigen Fehlerzustand im EN/RU-Bereich.
  Nutzer erhalten eine verständliche Meldung in der aktuellen Sprache.
  Sie können die Seite erneut laden oder UNEXT direkt anrufen.
*/
"use client"

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getLocaleFromPathname } from "@/lib/i18n"

type Props = {
  reset: () => void
}

const errorContent = {
  en: {
    title: "The page could not be loaded",
    text: "Please try again. If the problem continues, you can contact UNEXT directly by phone.",
    retry: "Try again",
    call: "Call 030 23613927",
  },
  ru: {
    title: "Не удалось загрузить страницу",
    text: "Попробуйте ещё раз. Если ошибка повторится, свяжитесь с UNEXT напрямую по телефону.",
    retry: "Повторить",
    call: "Позвонить по номеру 030 23613927",
  },
} as const

export default function LocalizedError({ reset }: Props) {
  const pathname = usePathname()
  const detectedLocale = getLocaleFromPathname(pathname)
  const locale = detectedLocale === "ru" ? "ru" : "en"
  const content = errorContent[locale]

  return (
    <main className="flex min-h-[70vh] items-center bg-background px-4 py-20 lg:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">UNEXT</p>
        <h1 className="mt-3 text-2xl font-semibold text-foreground">{content.title}</h1>
        <p className="mt-3 text-muted-foreground">{content.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>{content.retry}</Button>
          <Button asChild variant="outline">
            <a href="tel:+493023613927">{content.call}</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
