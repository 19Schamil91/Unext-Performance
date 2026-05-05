/*
  Diese Datei ist das Layout fuer rechtliche Seiten.
  Sie zeigt Kopfbereich, Seitentitel, optionale Hinweise, Seiteninhalt und Fussbereich.
  Nutzer koennen rechtliche Informationen lesen und ueber Header oder Footer weiter navigieren.
*/
import { AlertTriangle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type LegalPageLayoutProps = {
  locale: Locale
  title: string
  children: React.ReactNode
  showPlaceholderAlert?: boolean
}

export function LegalPageLayout({
  locale,
  title,
  children,
  showPlaceholderAlert = true,
}: LegalPageLayoutProps) {
  const t = getTranslations(locale).legal

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h1 className="mb-8 measure-heading text-heading-fluid text-foreground">
            {title}
          </h1>

          {showPlaceholderAlert ? (
            <Alert className="mb-8 border-amber-500/50 bg-amber-500/10">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <AlertTitle className="text-amber-500">{t.alertTitle}</AlertTitle>
              <AlertDescription className="text-amber-500/80">
                {t.alertText}
              </AlertDescription>
            </Alert>
          ) : null}

          <div className="max-w-none text-body-compact">{children}</div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
