export const locales = ["de", "en", "ru"] as const
export const urlLocales = ["en", "ru"] as const

export type Locale = (typeof locales)[number]
export type UrlLocale = (typeof urlLocales)[number]

export const localizedPagePaths = {
  home: { de: "/", en: "/en", ru: "/ru" },
  servicesOverview: { de: "/leistungen", en: "/en/leistungen", ru: "/ru/leistungen" },
  accidentAppraisal: {
    de: "/gutachtenarten/unfallgutachten",
    en: "/en/gutachtenarten/unfallgutachten",
    ru: "/ru/gutachtenarten/unfallgutachten",
  },
  vehicleValuation: {
    de: "/gutachtenarten/fahrzeugbewertung",
    en: "/en/gutachtenarten/fahrzeugbewertung",
    ru: "/ru/gutachtenarten/fahrzeugbewertung",
  },
  damageDocumentation: {
    de: "/gutachtenarten/schadendokumentation",
    en: "/en/gutachtenarten/schadendokumentation",
    ru: "/ru/gutachtenarten/schadendokumentation",
  },
  about: { de: "/ueber-uns", en: "/en/ueber-uns", ru: "/ru/ueber-uns" },
  contact: { de: "/kontakt", en: "/en/kontakt", ru: "/ru/kontakt" },
  privacy: { de: "/datenschutz", en: "/en/datenschutz", ru: "/ru/datenschutz" },
  imprint: { de: "/impressum", en: "/en/impressum", ru: "/ru/impressum" },
  terms: { de: "/agb", en: "/en/agb", ru: "/ru/agb" },
} as const satisfies Record<string, Record<Locale, string>>

export type LocalizedPageId = keyof typeof localizedPagePaths

export const defaultLocale: Locale = "de"

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export function normalizeLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale
}

export function isUrlLocale(value: string | undefined): value is UrlLocale {
  return urlLocales.includes(value as UrlLocale)
}

export function getLocalePrefix(locale: Locale) {
  return locale === defaultLocale ? "" : `/${locale}`
}

export function removeLocalePrefix(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  const [, firstSegment, ...restSegments] = normalizedPath.split("/")

  if (isUrlLocale(firstSegment)) {
    const restPath = restSegments.join("/")
    return restPath ? `/${restPath}` : "/"
  }

  return normalizedPath
}

export function getLocalizedPath(locale: Locale, pathname: string) {
  const unprefixedPath = removeLocalePrefix(pathname)
  const prefix = getLocalePrefix(locale)

  return `${prefix}${unprefixedPath === "/" ? "" : unprefixedPath}` || "/"
}

function normalizePathname(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`
  return path.length > 1 ? path.replace(/\/+$/, "") : path
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, firstSegment] = normalizePathname(pathname).split("/")
  return isUrlLocale(firstSegment) ? firstSegment : defaultLocale
}

export function getLocalizedPageId(pathname: string): LocalizedPageId | null {
  const normalizedPath = normalizePathname(pathname)

  for (const [pageId, paths] of Object.entries(localizedPagePaths)) {
    if (Object.values(paths).some((path) => path === normalizedPath)) {
      return pageId as LocalizedPageId
    }
  }

  return null
}

export function getLocalizedPagePath(pageId: LocalizedPageId, locale: Locale) {
  return localizedPagePaths[pageId][locale]
}

export function getLocalizedCounterpartPath(pathname: string, locale: Locale) {
  const pageId = getLocalizedPageId(pathname)
  return pageId ? getLocalizedPagePath(pageId, locale) : null
}
