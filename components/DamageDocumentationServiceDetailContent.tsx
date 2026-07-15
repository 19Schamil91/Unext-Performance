/*
  Diese Datei zeigt die deutsche Detailseite für Schadendokumentation.
  Besucher erfahren, wann eine Dokumentation sinnvoll ist, was festgehalten werden kann und wie sie sich vom Unfallgutachten unterscheidet.
  Sie können telefonisch, per WhatsApp oder über das Anfrageformular Kontakt aufnehmen.
*/
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Locale } from "@/lib/i18n"

const locale: Locale = "de"

const heroActions = [
  { label: "Jetzt anrufen", href: "tel:+493023613927", icon: "phone" as const },
  {
    label: "WhatsApp schreiben",
    href: "https://wa.me/4917664365185",
    icon: "message" as const,
    external: true,
  },
  { label: "Dokumentation anfragen", href: "#schadendokumentation-anfrage" },
] as const

const benefits = [
  "Schäden geordnet dokumentieren",
  "Fahrzeugzustand festhalten",
  "Fotos und Unterlagen berücksichtigen",
  "Vorgehen vorab besprechen",
] as const

const documentationOccasions = [
  {
    title: "Schaden zeitnah festhalten",
    description: "Ein erkennbarer Schaden soll zeitnah und geordnet dokumentiert werden.",
  },
  {
    title: "Übergabe oder Rückgabe vorbereiten",
    description:
      "Der aktuelle Fahrzeugzustand soll vor einer Übergabe oder Rückgabe festgehalten werden.",
  },
  {
    title: "Vorschäden oder Veränderungen\u00A0erfassen",
    description:
      "Bereits vorhandene Schäden oder Veränderungen am Fahrzeug sollen geordnet erfasst werden.",
  },
  {
    title: "Fachliche Prüfung vorbereiten",
    description:
      "Fotos, Fahrzeugdaten und vorhandene Unterlagen sollen für die weitere Prüfung geordnet vorliegen.",
  },
] as const

const detailSections = [
  {
    title: "Was kann dokumentiert werden?",
    wide: true,
    description:
      "Was aufgenommen wird, hängt von Ihrem Fahrzeug und Ihrem Anliegen ab. Dazu können gehören:",
    items: [
      {
        title: "Schäden am Fahrzeug",
        description: "Art und Lage erkennbarer Schäden am Fahrzeug.",
      },
      {
        title: "Betroffene Fahrzeugbereiche",
        description:
          "Fahrzeugbereiche, an denen Schäden oder Veränderungen erkennbar sind.",
      },
      {
        title: "Fahrzeugdaten",
        description: "Modell und weitere für das Anliegen hilfreiche Grunddaten.",
      },
      {
        title: "Fotos aus sinnvollen Perspektiven",
        description:
          "Übersichts- und Detailaufnahmen, soweit sie für die Dokumentation hilfreich sind.",
      },
      {
        title: "Vorschäden und Besonderheiten",
        description:
          "Erkennbare Vorschäden oder Besonderheiten, soweit sie für das Anliegen relevant sind.",
      },
      {
        title: "Unterlagen und ergänzende Angaben",
        description:
          "Vorhandene Unterlagen sowie ergänzende Angaben zu dem, was dokumentiert werden soll.",
      },
    ],
  },
  {
    title: "Schadendokumentation oder Unfallgutachten?",
    wide: true,
    description:
      "Eine Schadendokumentation hält Schäden und den Fahrzeugzustand geordnet fest. Ein Unfallgutachten geht weiter und kann zusätzlich zum Beispiel Reparaturkosten, Wertminderung und weitere wichtige Werte eines Unfallschadens einordnen. Verdeckte oder technisch zu prüfende Schäden lassen sich durch eine reine Dokumentation nicht abschließend beurteilen. Welcher Weg für Ihr Anliegen passt, klären wir gemeinsam mit Ihnen.",
    items: [
      {
        title: "Schadendokumentation",
        description:
          "Geordnete Erfassung von Schäden oder des Fahrzeugzustands im zuvor besprochenen Rahmen.",
      },
      {
        title: "Unfallgutachten",
        description:
          "Weitergehende fachliche Bewertung eines Unfallschadens, zum Beispiel mit Reparaturkosten, Wertminderung und weiteren relevanten Werten.",
      },
      {
        title: "Passenden Weg klären",
        description:
          "Sie müssen nicht selbst entscheiden, welche Leistung passend ist. Wir besprechen Ihr Anliegen vorab.",
      },
    ],
  },
] as const

const documentationProcess = [
  {
    title: "1. Anliegen schildern",
    description:
      "Sie beschreiben kurz den Schaden, den betroffenen Fahrzeugbereich oder den Fahrzeugzustand.",
  },
  {
    title: "2. Vorgehen besprechen",
    description:
      "Wir klären, welche Fahrzeugbereiche, Fotos und vorhandenen Unterlagen berücksichtigt werden sollen.",
  },
  {
    title: "3. Fahrzeug prüfen",
    description:
      "Wir betrachten die relevanten Fahrzeugbereiche und berücksichtigen die zuvor besprochenen Angaben.",
  },
  {
    title: "4. Ergebnis besprechen",
    description:
      "Wir führen die dokumentierten Punkte zusammen und besprechen das Ergebnis mit Ihnen.",
  },
] as const

const faqs = [
  {
    question: "Was ist eine Schadendokumentation?",
    answer:
      "Eine Schadendokumentation hält Schäden oder den aktuellen Zustand Ihres Fahrzeugs geordnet fest. Was genau aufgenommen wird, besprechen wir vorher mit Ihnen.",
  },
  {
    question: "Was ist der Unterschied zu einem Unfallgutachten?",
    answer:
      "Ein Unfallgutachten geht über die reine Dokumentation hinaus und kann zusätzlich zum Beispiel Reparaturkosten, Wertminderung und weitere wichtige Werte eines Unfallschadens einordnen. Welcher Weg zu Ihrem Anliegen passt, klären wir gemeinsam mit Ihnen.",
  },
  {
    question: "Welche Angaben oder Unterlagen sind hilfreich?",
    answer:
      "Für die erste Anfrage genügen wenige Angaben zum Fahrzeug, zum betroffenen Bereich und zu dem, was dokumentiert werden soll. Vorhandene Fotos oder Unterlagen stimmen wir bei Bedarf anschließend über einen passenden Kontaktweg mit Ihnen ab.",
  },
  {
    question: "Was passiert nach meiner Anfrage?",
    answer:
      "Wir besprechen Ihr Anliegen, klären das passende Vorgehen und teilen Ihnen mit, welche Angaben oder Unterlagen für den nächsten Schritt hilfreich sind.",
  },
] as const

const formFields = { vehicle: true, date: false, subject: false } as const

const formTextOverrides = {
  description:
    "Beschreiben Sie kurz, was beschädigt ist oder welchen Fahrzeugzustand Sie festhalten lassen möchten. Wir melden uns bei Ihnen und besprechen die nächsten Schritte.",
  vehicle: "Fahrzeugmodell",
  vehiclePlaceholder: "z. B. VW Golf, EZ 2021",
  phonePlaceholder: "Ihre Telefonnummer",
  message: "Schaden oder Fahrzeugzustand",
  messagePlaceholder:
    "Zum Beispiel: Kratzer an der rechten Tür, sichtbarer Unfallschaden oder Zustand vor einer Fahrzeugrückgabe",
  submit: "Dokumentation anfragen",
} as const

export function DamageDocumentationServiceDetailContent() {
  return (
    <div className="max-[430px]:[&_[id=schadendokumentation-anfrage]_h2]:text-[1.85rem] lg:[&_[data-slot=card-description]]:whitespace-normal">
      <SiteHeader locale={locale} />
      <ServicePageLayout
        locale={locale}
        title="Schadendokumentation in Berlin"
        subtitle="SCHÄDEN GEORDNET FESTHALTEN"
        description="Eine Schadendokumentation hält Schäden und den aktuellen Zustand Ihres Fahrzeugs geordnet fest. Dabei können betroffene Fahrzeugbereiche, Fotos, Fahrzeugdaten und vorhandene Unterlagen berücksichtigt werden. Vorab besprechen wir mit Ihnen, was genau dokumentiert werden soll."
        image="/images/services/beweissicherung-dokumentation.webp"
        imageAlt="Schadendokumentation an einem beschädigten Fahrzeug mit Tablet, Fotos und Unterlagen"
        imageClassName="object-cover object-center"
        heroActions={heroActions}
        bottomActions={heroActions}
        heroNotice="Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung."
        backLinkHref="/"
        benefits={benefits}
        services={documentationOccasions}
        servicesDescription="Eine geordnete Dokumentation kann sinnvoll sein, wenn ein Schaden oder ein bestimmter Fahrzeugzustand für die weitere Abstimmung festgehalten werden soll."
        servicesGridClassName="lg:grid-cols-4"
        detailSections={detailSections}
        whyChoose={documentationProcess}
        faqs={faqs}
        formTitle="Schadendokumentation anfragen"
        ctaTitle="Sie möchten einen Schaden oder den Zustand Ihres Fahrzeugs dokumentieren lassen?"
        ctaDescription="Schildern Sie uns kurz, was festgehalten werden soll. Wir besprechen mit Ihnen, welches Vorgehen zu Ihrem Anliegen passt."
        serviceName="schadendokumentation"
        formFields={formFields}
        formTextOverrides={formTextOverrides}
        formHelperText="Für die erste Kontaktaufnahme genügen Fahrzeugmodell, betroffener Bereich und eine kurze Beschreibung dessen, was dokumentiert werden soll. Vorhandene Fotos oder Unterlagen stimmen wir bei Bedarf anschließend mit Ihnen ab."
        layoutLabels={{
          backToServices: "Zur Startseite",
          servicesTitle: "Wann ist eine Schadendokumentation sinnvoll?",
          whyTitle: "So läuft die Schadendokumentation\u00A0ab",
          whyDescription:
            "Vor Beginn besprechen wir mit Ihnen, was dokumentiert werden soll und welche Angaben dafür hilfreich sind.",
          faqTitle: "Häufige Fragen zur Schadendokumentation",
        }}
        balancedTypography
        benefitsSingleLine
      />
      <SiteFooter locale={locale} />
    </div>
  )
}
