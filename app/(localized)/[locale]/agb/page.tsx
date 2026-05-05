/*
  Diese Datei ist die englische und russische AGB-Seite.
  Sie zeigt Bedingungen fuer Anfragen und individuelle Vereinbarungen in der Sprache aus der URL.
  Nutzer koennen nachlesen, dass konkrete Leistungen persoenlich abgestimmt werden.
*/
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { getLocalizedPath, isUrlLocale, type UrlLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

type LocalizedTermsPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: LocalizedTermsPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const t = getTranslations(locale).legal.terms

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    `${t.title} - UNEXT GmbH Berlin.`,
    getLocalizedPath(locale, "/agb")
  )
}

export default async function LocalizedTermsPage({
  params,
}: LocalizedTermsPageProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale
  const t = getTranslations(currentLocale).legal.terms

  return (
    <LegalPageLayout locale={currentLocale} title={t.title} showPlaceholderAlert={false}>
      <section className="space-y-8 text-muted-foreground">
        {t.sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-title-fluid font-semibold text-foreground">{section.title}</h2>
            {"content" in section && section.content ? (
              <p className="measure-intro">
                {section.content}
                {"linkLabel" in section && section.linkLabel ? (
                  <>
                    {" "}
                    <Link href={getLocalizedPath(currentLocale, "/datenschutz")} className="text-primary hover:underline">
                      {section.linkLabel}
                    </Link>
                    .
                  </>
                ) : null}
              </p>
            ) : null}

            {"subsections" in section && section.subsections ? (
              <div className="mt-4 space-y-4">
                {section.subsections.map((subsection) => (
                  <div key={subsection.title}>
                    <h3 className="mb-2 text-title-fluid font-semibold text-foreground">{subsection.title}</h3>
                    <p className="measure-intro">{subsection.content}</p>
                  </div>
                ))}
              </div>
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
