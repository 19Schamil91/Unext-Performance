export const locales = ["de", "en", "ru"] as const
export const urlLocales = ["en", "ru"] as const

export type Locale = (typeof locales)[number]
export type UrlLocale = (typeof urlLocales)[number]

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
