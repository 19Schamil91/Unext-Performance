import type { MetadataRoute } from "next"
import { locales, localizedPagePaths } from "@/lib/i18n"
import { absoluteUrl, indexablePageIds } from "@/lib/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePageIds.flatMap((pageId) => {
    const languages: Record<string, string> = {
      de: absoluteUrl(localizedPagePaths[pageId].de),
      en: absoluteUrl(localizedPagePaths[pageId].en),
      ru: absoluteUrl(localizedPagePaths[pageId].ru),
    }

    if (pageId === "home") {
      languages["x-default"] = absoluteUrl(localizedPagePaths.home.de)
    }

    return locales.map((locale) => ({
      url: absoluteUrl(localizedPagePaths[pageId][locale]),
      alternates: { languages },
    }))
  })
}
