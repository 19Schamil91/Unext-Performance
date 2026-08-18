import type { Metadata } from "next"
import {
  getLocalizedPagePath,
  localizedPagePaths,
  type Locale,
  type LocalizedPageId,
} from "@/lib/i18n"

export const SITE_ORIGIN = "https://unext.de"
export const SITE_URL = new URL(SITE_ORIGIN)

const openGraphLocales: Record<Locale, string> = {
  de: "de_DE",
  en: "en_GB",
  ru: "ru_RU",
}

type PageSeoContent = {
  title: string
  description: string
}

const pageSeoContent: Record<Locale, Record<LocalizedPageId, PageSeoContent>> = {
  de: {
    home: {
      title: "KFZ-Gutachter Berlin | UNEXT",
      description:
        "Unabhängige KFZ-Gutachten in Berlin: Unfallgutachten, Fahrzeugbewertungen und Schadendokumentationen. Persönliche Abstimmung per Telefon, WhatsApp oder Anfrage.",
    },
    accidentAppraisal: {
      title: "Unfallgutachten Berlin | UNEXT",
      description:
        "Unabhängiges Unfallgutachten in Berlin mit nachvollziehbarer Schadendokumentation und fachlicher Einordnung. UNEXT klärt mit Ihnen Umfang und nächste Schritte.",
    },
    vehicleValuation: {
      title: "Fahrzeugbewertung Berlin | UNEXT",
      description:
        "Professionelle Fahrzeugbewertung in Berlin für Kauf, Verkauf oder Dokumentation. Zustand, Ausstattung und relevante Fahrzeugdaten werden nachvollziehbar eingeordnet.",
    },
    damageDocumentation: {
      title: "Schadendokumentation Berlin | UNEXT",
      description:
        "Strukturierte Schadendokumentation in Berlin mit Fotos, Fahrzeugdaten und vorhandenen Unterlagen. UNEXT stimmt den passenden Umfang vorab mit Ihnen ab.",
    },
    servicesOverview: {
      title: "KFZ-Gutachten in Berlin | Leistungen von UNEXT",
      description:
        "Überblick über Unfallgutachten, Fahrzeugbewertung und Schadendokumentation von UNEXT in Berlin. Wählen Sie die passende Gutachtenart oder lassen Sie sich beraten.",
    },
    about: {
      title: "Über UNEXT | KFZ-Gutachter in Berlin",
      description:
        "UNEXT ist Ansprechpartner für KFZ-Gutachten in Berlin. Erfahren Sie mehr über das Unternehmen, die fachliche Arbeitsweise und die persönliche Betreuung.",
    },
    contact: {
      title: "Kontakt für KFZ-Gutachten in Berlin | UNEXT",
      description:
        "Sie benötigen ein Unfallgutachten, eine Fahrzeugbewertung oder eine Schadendokumentation? Kontaktieren Sie UNEXT per Telefon, WhatsApp, E-Mail oder Anfrage.",
    },
    imprint: {
      title: "Impressum | UNEXT GmbH",
      description: "Impressum und Anbieterangaben der UNEXT GmbH in Berlin.",
    },
    privacy: {
      title: "Datenschutzerklärung | UNEXT GmbH",
      description:
        "Informationen der UNEXT GmbH zur Verarbeitung personenbezogener Daten und zu Ihren Datenschutzrechten.",
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen | UNEXT GmbH",
      description:
        "Allgemeine Geschäftsbedingungen der UNEXT GmbH für Anfragen und individuell vereinbarte Leistungen.",
    },
  },
  en: {
    home: {
      title: "Vehicle Appraiser in Berlin | UNEXT",
      description:
        "Independent vehicle appraisal services in Berlin: accident damage appraisals, vehicle valuations and damage documentation. Contact UNEXT by phone, WhatsApp or enquiry.",
    },
    accidentAppraisal: {
      title: "Accident Damage Appraisal Berlin | UNEXT",
      description:
        "Independent accident damage appraisal in Berlin with clear damage documentation and assessment. UNEXT discusses the scope and next steps with you.",
    },
    vehicleValuation: {
      title: "Vehicle Valuation Berlin | UNEXT",
      description:
        "Professional vehicle valuation in Berlin for purchase, sale or documentation. Condition, equipment and relevant vehicle details are assessed clearly.",
    },
    damageDocumentation: {
      title: "Vehicle Damage Documentation Berlin | UNEXT",
      description:
        "Structured vehicle damage documentation in Berlin using photographs, vehicle details and available records. UNEXT agrees the appropriate scope with you in advance.",
    },
    servicesOverview: {
      title: "Vehicle Appraisal Services Berlin | UNEXT",
      description:
        "Explore UNEXT services for accident damage appraisals, vehicle valuations and damage documentation in Berlin, or contact us to discuss the right option.",
    },
    about: {
      title: "About UNEXT | Vehicle Appraisers in Berlin",
      description:
        "Learn about UNEXT, its professional approach to vehicle appraisals in Berlin and the personal support provided throughout each enquiry.",
    },
    contact: {
      title: "Contact UNEXT for Vehicle Appraisals in Berlin",
      description:
        "Need an accident damage appraisal, vehicle valuation or damage documentation? Contact UNEXT by phone, WhatsApp, email or the enquiry form.",
    },
    imprint: {
      title: "Legal Notice | UNEXT GmbH",
      description: "Legal notice and provider information for UNEXT GmbH in Berlin.",
    },
    privacy: {
      title: "Privacy Policy | UNEXT GmbH",
      description:
        "Information from UNEXT GmbH about personal data processing and your data protection rights.",
    },
    terms: {
      title: "General Terms and Conditions | UNEXT GmbH",
      description:
        "General terms and conditions of UNEXT GmbH for enquiries and individually agreed services.",
    },
  },
  ru: {
    home: {
      title: "Автоэкспертиза в Берлине | UNEXT",
      description:
        "Независимая автоэкспертиза в Берлине: оценка ущерба после ДТП, оценка стоимости автомобиля и фиксация повреждений. Свяжитесь с UNEXT по телефону, WhatsApp или через форму.",
    },
    accidentAppraisal: {
      title: "Оценка ущерба после ДТП в Берлине | UNEXT",
      description:
        "Независимая оценка ущерба после ДТП в Берлине с понятной фиксацией и оценкой повреждений. UNEXT согласует с вами объём работы и дальнейшие шаги.",
    },
    vehicleValuation: {
      title: "Оценка стоимости автомобиля в Берлине | UNEXT",
      description:
        "Профессиональная оценка стоимости автомобиля в Берлине с учётом состояния, комплектации и ключевых данных. Объём оценки согласуется заранее.",
    },
    damageDocumentation: {
      title: "Фиксация повреждений в Берлине | UNEXT",
      description:
        "Последовательная фиксация повреждений автомобиля в Берлине с фотографиями, данными автомобиля и имеющимися документами. Объём согласуется заранее.",
    },
    servicesOverview: {
      title: "Услуги автоэкспертизы в Берлине | UNEXT",
      description:
        "Услуги UNEXT по оценке ущерба после ДТП, оценке стоимости автомобиля и фиксации повреждений в Берлине. Выберите подходящий вариант или свяжитесь с нами.",
    },
    about: {
      title: "О компании UNEXT | Автоэкспертиза в Берлине",
      description:
        "Узнайте больше о компании UNEXT, профессиональном подходе к автоэкспертизе в Берлине и персональном сопровождении каждого запроса.",
    },
    contact: {
      title: "Контакты по вопросам автоэкспертизы | UNEXT",
      description:
        "Нужна оценка ущерба после ДТП, оценка стоимости или фиксация повреждений? Свяжитесь с UNEXT по телефону, WhatsApp, электронной почте или через форму.",
    },
    imprint: {
      title: "Юридическая информация | UNEXT GmbH",
      description:
        "Юридическая информация и сведения об исполнителе UNEXT GmbH в Берлине.",
    },
    privacy: {
      title: "Политика конфиденциальности | UNEXT GmbH",
      description:
        "Информация UNEXT GmbH об обработке персональных данных и ваших правах в области защиты данных.",
    },
    terms: {
      title: "Общие условия оказания услуг | UNEXT GmbH",
      description:
        "Общие условия UNEXT GmbH для запросов и услуг, согласованных в индивидуальном порядке.",
    },
  },
}

export const indexablePageIds = [
  "home",
  "accidentAppraisal",
  "vehicleValuation",
  "damageDocumentation",
  "contact",
] as const satisfies readonly LocalizedPageId[]

export type IndexablePageId = (typeof indexablePageIds)[number]

const appraisalPageIds = [
  "accidentAppraisal",
  "vehicleValuation",
  "damageDocumentation",
] as const satisfies readonly LocalizedPageId[]

export type AppraisalPageId = (typeof appraisalPageIds)[number]

const socialImages: Record<LocalizedPageId, string> = {
  home: "/images/hero-kfz-gutachten-berlin.webp",
  accidentAppraisal: "/images/services/unfallgutachten-berlin.webp",
  vehicleValuation: "/images/services/wertgutachten-fahrzeugbewertung.webp",
  damageDocumentation: "/images/services/beweissicherung-dokumentation.webp",
  servicesOverview: "/images/hero-kfz-gutachten-berlin.webp",
  about: "/images/about-office.webp",
  contact: "/images/hero-kfz-gutachten-berlin.webp",
  imprint: "/images/unext-logo.webp",
  privacy: "/images/unext-logo.webp",
  terms: "/images/unext-logo.webp",
}

export function absoluteUrl(path: string) {
  if (path === "/") {
    return SITE_ORIGIN
  }

  return new URL(path, SITE_URL).toString()
}

export function getPageSeoContent(locale: Locale, pageId: LocalizedPageId) {
  return pageSeoContent[locale][pageId]
}

export function isIndexablePageId(pageId: LocalizedPageId): pageId is IndexablePageId {
  return (indexablePageIds as readonly LocalizedPageId[]).includes(pageId)
}

export function isAppraisalPageId(pageId: LocalizedPageId): pageId is AppraisalPageId {
  return (appraisalPageIds as readonly LocalizedPageId[]).includes(pageId)
}

function buildLanguageAlternates(pageId: IndexablePageId) {
  const languages: Record<string, string> = {
    de: absoluteUrl(localizedPagePaths[pageId].de),
    en: absoluteUrl(localizedPagePaths[pageId].en),
    ru: absoluteUrl(localizedPagePaths[pageId].ru),
  }

  if (pageId === "home") {
    languages["x-default"] = absoluteUrl(localizedPagePaths.home.de)
  }

  return languages
}

export function buildSiteMetadata(locale: Locale): Metadata {
  const home = getPageSeoContent(locale, "home")

  return {
    metadataBase: SITE_URL,
    applicationName: "UNEXT",
    title: {
      default: home.title,
      template: "%s",
    },
    description: home.description,
    authors: [{ name: "UNEXT GmbH", url: SITE_ORIGIN }],
    creator: "UNEXT GmbH",
    publisher: "UNEXT GmbH",
  }
}

export function buildLocalizedPageMetadata(
  locale: Locale,
  pageId: LocalizedPageId
): Metadata {
  const content = getPageSeoContent(locale, pageId)
  const path = getLocalizedPagePath(pageId, locale)
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = absoluteUrl(socialImages[pageId])
  const indexable = isIndexablePageId(pageId)

  return {
    title: content.title,
    description: content.description,
    robots: indexable
      ? { index: true, follow: true }
      : {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        },
    alternates: indexable
      ? {
          canonical: canonicalUrl,
          languages: buildLanguageAlternates(pageId),
        }
      : undefined,
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: Object.values(openGraphLocales).filter(
        (value) => value !== openGraphLocales[locale]
      ),
      url: canonicalUrl,
      siteName: "UNEXT",
      title: content.title,
      description: content.description,
      images: [{ url: imageUrl, alt: content.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [imageUrl],
    },
  }
}

export function buildLegacyPageMetadata(locale: Locale): Metadata {
  return {
    title: { de: "UNEXT", en: "UNEXT", ru: "UNEXT" }[locale],
    description: null,
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    alternates: null,
    openGraph: null,
    twitter: null,
  }
}
