const siteUrl = "https://unext.de"

const businessId = `${siteUrl}/#business`

const businessContact = {
  "@type": "ContactPoint",
  telephone: "+493023613927",
  contactType: "customer service",
  areaServed: "Berlin",
  availableLanguage: ["de", "en", "ru"],
}

const address = {
  "@type": "PostalAddress",
  streetAddress: "Luebarser Str. 25",
  postalCode: "13435",
  addressLocality: "Berlin",
  addressCountry: "DE",
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": businessId,
    name: "UNEXT GmbH",
    url: siteUrl,
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
    sameAs: [
      "https://instagram.com/unext.performance",
      "https://instagram.com/unfallx",
    ],
  }
}

export function buildServiceSchema(input: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${input.path}#service`,
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Berlin",
    },
    serviceType: input.name,
  }
}

export function buildBreadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}
