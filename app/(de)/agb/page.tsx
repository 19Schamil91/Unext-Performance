/*
  Diese Datei ist die AGB-Seite.
  Sie zeigt Hinweise zu den Bedingungen fuer Anfragen und individuelle Vereinbarungen.
  Nutzer koennen nachlesen, dass konkrete Leistungen persoenlich abgestimmt werden.
*/
import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { getLocalizedPath, type Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getTranslations } from "@/lib/translations"

const locale: Locale = "de"

export function generateMetadata(): Metadata {
  const t = getTranslations(locale).legal.terms

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GmbH Berlin`,
    `${t.title} - UNEXT GmbH Berlin.`,
    "/agb"
  )
}

export default function AGBPage() {
  const t = getTranslations(locale).legal.terms

  return (
    <LegalPageLayout locale={locale} title={t.title} showPlaceholderAlert={false}>
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
                    <Link href={getLocalizedPath(locale, "/datenschutz")} className="text-primary hover:underline">
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
