/*
  Diese Datei ist die englische und russische Datenschutzseite.
  Sie zeigt Hinweise zur Verarbeitung von Besucherdaten, Kontaktanfragen und Cookies in der Sprache aus der URL.
  Nutzer koennen nachlesen, welche Rechte sie haben und wie sie UNEXT dazu erreichen.
*/
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { getLocalizedPath, isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type LocalizedPrivacyPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedPrivacyPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const t = getTranslations(locale).legal.privacy

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    `${t.title} - UNEXT GmbH Berlin.`,
    getLocalizedPath(locale, "/datenschutz")
  )
}

export default async function LocalizedPrivacyPage({
  params,
}: LocalizedPrivacyPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale
  const t = getTranslations(currentLocale).legal.privacy

  return (
    <LegalPageLayout locale={currentLocale} title={t.title} showPlaceholderAlert={false}>
      <section className="space-y-8 text-muted-foreground">
        {t.sections.map((section) => (
          <div key={("title" in section ? section.title : section.subtitle) ?? "section"}>
            {"title" in section && section.title && (
              <h2 className="mb-4 text-title-fluid font-semibold text-foreground">{section.title}</h2>
            )}
            {"subtitle" in section && section.subtitle && (
              <h3 className="mb-2 text-title-fluid font-semibold text-foreground">{section.subtitle}</h3>
            )}
            <p className="measure-intro whitespace-pre-line">{section.content}</p>
            {"list" in section && section.list ? (
              <ul className="measure-intro mt-2 list-inside list-disc space-y-1">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        <div className="border-t border-border pt-8">
          <p className="measure-intro whitespace-pre-line text-sm italic text-muted-foreground/70">{t.note}</p>
        </div>
      </section>
    </LegalPageLayout>
  )
}
