/*
  Diese Datei definiert den Kopfbereich der Website als serverseitige Huelle.
  Sie zeigt Logo, Navigation, Kontaktaktionen und kleine interaktive Menues.
  Nutzer koennen navigieren, anrufen, die Sprache wechseln und das mobile Menue oeffnen.
*/
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { HeaderLanguageSwitcher } from "@/components/HeaderLanguageSwitcher"
import { HeaderMobileMenu } from "@/components/HeaderMobileMenu"
import { HeaderServicesMenu } from "@/components/HeaderServicesMenu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { getLocalizedPath, locales, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type SiteHeaderProps = {
  locale: Locale
}

type NavigationItem = {
  name: string
  href: string
  children?: readonly { name: string; href: string }[]
}

const localizedPagePaths = [
  "/agb",
  "/datenschutz",
  "/impressum",
  "/kontakt",
  "/ueber-uns",
  "/leistungen",
  "/leistungen/unfallgutachten",
  "/leistungen/autovermietung",
  "/leistungen/abschleppdienst-pannenhilfe",
  "/leistungen/autoservice",
  "/leistungen/detailing",
  "/leistungen/zulassungsservice",
] as const

const themeLabels = {
  de: { light: "Hellmodus aktivieren", dark: "Darkmodus aktivieren" },
  en: { light: "Switch to light mode", dark: "Switch to dark mode" },
  ru: {
    light: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0432\u0435\u0442\u043b\u0443\u044e \u0442\u0435\u043c\u0443",
    dark: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u043c\u043d\u0443\u044e \u0442\u0435\u043c\u0443",
  },
} as const

export function SiteHeader({ locale }: SiteHeaderProps) {
  // Diese Texte und Links werden serverseitig pro Sprache vorbereitet.
  const t = getTranslations(locale)
  const homeHref = getLocalizedPath(locale, "/")
  const contactHref = getLocalizedPath(locale, "/kontakt")
  const servicesHref = getLocalizedPath(locale, "/leistungen")
  const navigation = t.header.navigation as readonly NavigationItem[]
  const pageNavigation = navigation.filter((item) => !item.children)
  const serviceNavigation = navigation.find((item) => item.children)
  const languages = locales.map((code) => ({ code, name: t.languages[code] }))

  // Diese Funktion haelt Navigationslinks in der aktuellen Sprache, wenn die Zielseite bereits migriert ist.
  const getNavigationHref = (href: string) => {
    const isLocalizedPagePath = localizedPagePaths.includes(
      href as (typeof localizedPagePaths)[number]
    )

    if (href === "/" || isLocalizedPagePath) {
      return getLocalizedPath(locale, href)
    }

    return href
  }

  const resolvedPageNavigation = pageNavigation.map((item) => ({
    name: item.name,
    href: getNavigationHref(item.href),
  }))
  const resolvedServiceNavigation = serviceNavigation
    ? {
        name: serviceNavigation.name,
        href: servicesHref,
        children: serviceNavigation.children?.map((child) => ({
          name: child.name,
          href: getNavigationHref(child.href),
        })) ?? [],
      }
    : null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/55 bg-background/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-3.5">
        <Link href={homeHref} className="flex items-center">
          <Image
            src="/images/unext-logo.webp"
            alt="UNEXT GmbH Logo"
            width={140}
            height={40}
            className="h-7 w-auto drop-shadow-[0_1px_0_rgba(255,255,255,0.06)] sm:h-8"
            priority
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) =>
            item.children && resolvedServiceNavigation ? (
              <HeaderServicesMenu
                key={item.name}
                name={resolvedServiceNavigation.name}
                href={resolvedServiceNavigation.href}
                childrenItems={resolvedServiceNavigation.children}
              />
            ) : (
              <Link
                key={item.name}
                href={getNavigationHref(item.href)}
                className="rounded-lg px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/45 hover:text-foreground"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <HeaderLanguageSwitcher
            locale={locale}
            languages={languages}
            localizedPagePaths={localizedPagePaths}
          />

          <ThemeToggle
            lightLabel={themeLabels[locale].light}
            darkLabel={themeLabels[locale].dark}
            className="h-10 w-10 rounded-full border border-border/80 bg-card text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent"
          />

          <Button asChild variant="ghost" size="icon" className="h-10 w-10 sm:hidden">
            <a href="tel:+493023613927" aria-label={t.header.callNow}>
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <a href="tel:+493023613927" className="gap-2">
              <Phone className="h-4 w-4" />
              <span>030 23613927</span>
            </a>
          </Button>

          <Button asChild className="hidden sm:flex">
            <Link href={contactHref}>{t.header.inquiry}</Link>
          </Button>

          <HeaderMobileMenu
            locale={locale}
            homeHref={homeHref}
            contactHref={contactHref}
            servicesHref={servicesHref}
            pageNavigation={resolvedPageNavigation}
            serviceNavigation={resolvedServiceNavigation}
            languages={languages}
            localizedPagePaths={localizedPagePaths}
            labels={{
              openMenu: t.header.openMenu,
              quickContact: t.header.quickContact,
              callNow: t.header.callNow,
              inquiry: t.header.inquiry,
              navigationTitle: t.header.navigationTitle,
              servicesTitle: t.header.servicesTitle,
              languageTitle: t.header.languageTitle,
            }}
          />
        </div>
      </nav>
    </header>
  )
}
