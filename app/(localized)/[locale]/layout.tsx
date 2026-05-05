/*
  Diese Datei ist das Grundgeruest fuer die englische und russische Website.
  Sie setzt die Sprache aus der URL, Theme, globale Metadaten und strukturierte Firmendaten.
  Nutzer sehen darin statisch erzeugte Sprachvarianten mit korrektem Sprachkennzeichen.
*/
import { notFound } from "next/navigation"
import type { Metadata, Viewport } from "next"
import { LocaleProvider } from "@/components/locale-provider"
import { StructuredData } from "@/components/StructuredData"
import { ThemeProvider } from "@/components/theme-provider"
import { buildSiteMetadata } from "@/lib/metadata"
import { isUrlLocale, urlLocales, type UrlLocale } from "@/lib/i18n"
import { buildLocalBusinessSchema } from "@/lib/structuredData"
import "../../globals.css"

type LocalizedRootLayoutProps = Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>

export const dynamicParams = false

export function generateStaticParams() {
  return urlLocales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  return buildSiteMetadata(locale)
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
}

export default async function LocalizedRootLayout({
  children,
  params,
}: LocalizedRootLayoutProps) {
  const { locale } = await params

  if (!isUrlLocale(locale)) {
    notFound()
  }

  const currentLocale: UrlLocale = locale

  return (
    <html lang={currentLocale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <StructuredData data={buildLocalBusinessSchema()} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LocaleProvider initialLocale={currentLocale}>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
