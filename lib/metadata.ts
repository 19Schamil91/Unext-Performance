import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"

const openGraphLocales: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  ru: "ru_RU",
}

const homeMeta: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  de: {
    title: "UNEXT GmbH | Ihr starker Partner rund ums Fahrzeug in Berlin",
    description:
      "UNEXT GmbH Berlin - Unfallgutachten, Autovermietung, Autoservice & Werkstatt, Kfz-Zulassungsservice, Abschleppdienst, Premium Detailing und Expresslieferung. Zertifiziert, schnell und zuverlässig.",
    keywords: [
      "Unfallgutachten Berlin",
      "Kfz-Gutachter Berlin",
      "Autovermietung Berlin",
      "Werkstatt Berlin",
      "Auto Detailing Berlin",
      "Kfz-Zulassungsservice Berlin",
      "Abschleppdienst Berlin",
      "Expresslieferung Berlin",
      "Kurierdienst Berlin",
      "UNEXT",
      "UNFALLX",
    ],
  },
  en: {
    title: "UNEXT GmbH | Your trusted automotive partner in Berlin",
    description:
      "UNEXT GmbH Berlin - accident reports, car rental, workshop service, vehicle registration, towing, premium detailing and express delivery. Certified, fast and reliable.",
    keywords: [
      "accident reports Berlin",
      "car appraiser Berlin",
      "car rental Berlin",
      "workshop Berlin",
      "vehicle registration Berlin",
      "towing Berlin",
      "auto detailing Berlin",
      "express delivery Berlin",
      "courier service Berlin",
      "UNEXT",
      "UNFALLX",
    ],
  },
  ru: {
    title: "UNEXT GmbH | Ваш надежный автомобильный партнер в Берлине",
    description:
      "UNEXT GmbH Berlin - экспертиза ДТП, прокат авто, сервис и мастерская, регистрация автомобиля, эвакуатор и премиальный детейлинг. Быстро, надежно и профессионально.",
    keywords: [
      "экспертиза ДТП Берлин",
      "автоэксперт Берлин",
      "прокат авто Берлин",
      "автосервис Берлин",
      "регистрация авто Берлин",
      "эвакуатор Берлин",
      "детейлинг Берлин",
      "UNEXT",
      "UNFALLX",
    ],
  },
}

export function buildSiteMetadata(locale: Locale): Metadata {
  const meta = homeMeta[locale]

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "UNEXT GmbH" }],
    creator: "UNEXT GmbH",
    publisher: "UNEXT GmbH",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: "https://unext.de",
      siteName: "UNEXT GmbH",
      title: meta.title,
      description: meta.description,
    },
  }
}

export function buildPageMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: `https://unext.de${path}`,
      siteName: "UNEXT GmbH",
      title,
      description,
    },
  }
}
