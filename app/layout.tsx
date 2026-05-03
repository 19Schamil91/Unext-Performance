/*
  Diese Datei ist das Grundgeruest der Website.
  Sie setzt Sprache, Theme, globale Metadaten und strukturierte Firmendaten.
  Nutzer sehen darin alle Seiteninhalte mit einheitlichem Layout und gespeicherter Sprachwahl.
*/
import type { Metadata, Viewport } from "next"
import { LocaleProvider } from "@/components/locale-provider"
import { StructuredData } from "@/components/StructuredData"
import { ThemeProvider } from "@/components/theme-provider"
import { buildSiteMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { buildLocalBusinessSchema } from "@/lib/structuredData"
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  return buildSiteMetadata(locale)
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getCurrentLocale()

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <StructuredData data={buildLocalBusinessSchema()} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
