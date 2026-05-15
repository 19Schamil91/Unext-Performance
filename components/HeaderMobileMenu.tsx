"use client"

/*
  Diese Datei zeigt das mobile Menue im Kopfbereich.
  Sie oeffnet ein Seitenmenue mit Kontaktwegen, Navigation, Leistungen und Sprache.
  Nutzer koennen auf kleinen Bildschirmen navigieren und die Sprache wechseln.
*/
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronRight, Menu, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getLocalizedPath, removeLocalePrefix, type Locale } from "@/lib/i18n"

type HeaderMobileMenuProps = {
  locale: Locale
  homeHref: string
  contactHref: string
  servicesHref: string
  pageNavigation: readonly { name: string; href: string }[]
  serviceNavigation: { name: string; href: string; children: readonly { name: string; href: string }[] } | null
  languages: readonly { code: Locale; name: string }[]
  localizedPagePaths: readonly string[]
  labels: {
    openMenu: string
    quickContact: string
    callNow: string
    inquiry: string
    navigationTitle: string
    servicesTitle: string
    languageTitle: string
  }
}

export function HeaderMobileMenu({
  locale,
  homeHref,
  contactHref,
  servicesHref,
  pageNavigation,
  serviceNavigation,
  languages,
  localizedPagePaths,
  labels,
}: HeaderMobileMenuProps) {
  // Diese Werte steuern das mobile Menue und sperren Spracheingaben kurz waehrend der Navigation.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Diese Funktion schliesst das mobile Menue, wenn ein Link gewaehlt wurde.
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Diese Funktion wechselt mobil auf migrierten Seiten pfadtreu und sonst zur Sprach-Startseite.
  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      closeMobileMenu()
      return
    }

    const currentPath = removeLocalePrefix(pathname)
    const isLocalizedPagePath = localizedPagePaths.includes(currentPath)
    const nextPath = getLocalizedPath(
      nextLocale,
      currentPath === "/" || isLocalizedPagePath ? currentPath : "/"
    )

    setIsPending(true)
    closeMobileMenu()
    router.push(nextPath)
  }

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full border border-border/80 bg-card text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent lg:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">{labels.openMenu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] max-w-[20rem] overflow-y-auto border-l border-border/70 bg-card/98 px-3.5 pb-5 pt-4 shadow-[0_18px_44px_rgba(15,23,42,0.24)] backdrop-blur"
      >
        <div className="flex min-h-full flex-col gap-5 pt-2">
          <div className="rounded-[1.35rem] border border-border/60 bg-background/70 p-4 shadow-sm">
            <Link href={homeHref} onClick={closeMobileMenu} className="flex items-center">
              <Image
                src="/images/unext-logo.webp"
                alt="UNEXT GmbH Logo"
                width={120}
                height={35}
                className="h-7 w-auto drop-shadow-[0_1px_0_rgba(255,255,255,0.06)]"
              />
            </Link>
          </div>

          <div className="rounded-[1.35rem] border border-border/60 bg-background/50 p-3">
            <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {labels.languageTitle}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={locale === lang.code ? "secondary" : "ghost"}
                  size="sm"
                  className="h-11 rounded-full px-3"
                  disabled={isPending}
                  onClick={() => handleLocaleChange(lang.code)}
                >
                  {lang.code.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {labels.quickContact}
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full">
                <a href="tel:+493023613927" onClick={closeMobileMenu} className="gap-2">
                  <Phone className="h-4 w-4" />
                  {labels.callNow}
                </a>
              </Button>
              <Button asChild variant="ghost" className="w-full">
                <a
                  href="https://wa.me/4917664365185"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href={contactHref} onClick={closeMobileMenu}>
                  {labels.inquiry}
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {labels.navigationTitle}
            </p>
            <nav className="rounded-[1.35rem] border border-border/60 bg-background/50 p-2">
              {pageNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-[1rem] px-3.5 py-3 text-base font-semibold leading-6 text-foreground transition-colors hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="min-w-0 [text-wrap:balance]">{item.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>
          </div>

          {serviceNavigation ? (
            <div>
              <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {labels.servicesTitle}
              </p>
              <div className="rounded-[1.35rem] border border-border/60 bg-background/50 p-2">
                <Link
                  href={servicesHref}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-[1rem] px-3.5 py-3 text-sm font-semibold leading-5 text-foreground transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="min-w-0 [text-wrap:balance]">{serviceNavigation.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                {serviceNavigation.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-[1rem] px-3.5 py-3 text-sm font-medium leading-5 text-foreground transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="min-w-0 [text-wrap:balance]">{child.name}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

        </div>
      </SheetContent>
    </Sheet>
  )
}
