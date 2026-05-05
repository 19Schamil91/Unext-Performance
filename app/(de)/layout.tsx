/*
  Diese Datei ist das deutsche Grundgeruest der Website.
  Sie setzt Sprache, Theme, globale Metadaten und strukturierte Firmendaten fuer deutsche Seiten.
  Nutzer sehen darin alle deutschen Seiteninhalte mit einheitlichem Layout.
*/
import type { Metadata, Viewport } from "next"
import { StructuredData } from "@/components/StructuredData"
import { ThemeProvider } from "@/components/theme-provider"
import { buildSiteMetadata } from "@/lib/metadata"
import { buildLocalBusinessSchema } from "@/lib/structuredData"
import "../globals.css"

export function generateMetadata(): Metadata {
  return buildSiteMetadata("de")
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
}

export default function GermanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <StructuredData data={buildLocalBusinessSchema()} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
