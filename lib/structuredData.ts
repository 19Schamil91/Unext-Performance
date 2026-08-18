import {
  getLocalizedPagePath,
  type Locale,
  type LocalizedPageId,
} from "@/lib/i18n"
import {
  absoluteUrl,
  getPageSeoContent,
  type AppraisalPageId,
} from "@/lib/metadata"

const businessId = `${absoluteUrl("/")}#business`
const websiteId = `${absoluteUrl("/")}#website`

const businessContact = {
  "@type": "ContactPoint",
  telephone: "+493023613927",
  contactType: "customer service",
  areaServed: "Berlin",
  availableLanguage: ["de", "en", "ru"],
}

const address = {
  "@type": "PostalAddress",
  streetAddress: "Lübarser Str. 25",
  postalCode: "13435",
  addressLocality: "Berlin",
  addressCountry: "DE",
}

const localBusiness = {
  "@type": "LocalBusiness",
  "@id": businessId,
  name: "UNEXT GmbH",
  url: absoluteUrl("/"),
  telephone: "+493023613927",
  email: "info@unext.de",
  address,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Berlin",
  },
  contactPoint: businessContact,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
}

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: absoluteUrl("/"),
  name: "UNEXT",
  publisher: { "@id": businessId },
  inLanguage: ["de", "en", "ru"],
}

export function buildSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, website],
  }
}

export function buildWebPageSchema(locale: Locale, pageId: LocalizedPageId) {
  const path = getLocalizedPagePath(pageId, locale)
  const url = absoluteUrl(path)
  const content = getPageSeoContent(locale, pageId)

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: content.title,
    description: content.description,
    inLanguage: locale,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
  }
}

type ServicePageSchemaInput = {
  locale: Locale
  pageId: AppraisalPageId
  serviceName: string
  faqs?: readonly { question: string; answer: string }[]
  breadcrumbs: readonly { name: string; path: string }[]
}

export function buildServicePageSchema(input: ServicePageSchemaInput) {
  const path = getLocalizedPagePath(input.pageId, input.locale)
  const url = absoluteUrl(path)
  const content = getPageSeoContent(input.locale, input.pageId)
  const serviceId = `${url}#service`
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: content.title,
      description: content.description,
      inLanguage: input.locale,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      mainEntity: { "@id": serviceId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: input.serviceName,
      description: content.description,
      url,
      inLanguage: input.locale,
      provider: { "@id": businessId },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Berlin",
      },
      serviceType: input.serviceName,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: input.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    },
  ]

  if (input.faqs && input.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: input.locale,
      mainEntity: input.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    })
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  }
}
