/*
  Diese Datei zeigt die deutsche Detailseite für Fahrzeugbewertung.
  Besucher erfahren, wann eine Bewertung sinnvoll ist, welche Merkmale betrachtet werden und wie sie abläuft.
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
  { label: "Bewertung anfragen", href: "#fahrzeugbewertung-anfrage" },
] as const

const benefits = [
  "Zustand und Ausstattung prüfen",
  "Besondere Merkmale berücksichtigen",
  "Bewertungszweck vorab klären",
  "Ergebnis verständlich erläutern",
] as const

const valuationOccasions = [
  {
    title: "Vor dem Verkauf",
    description: "Sie möchten mit einer realistischen Einschätzung in Verkaufsgespräche gehen.",
  },
  {
    title: "Vor dem Kauf",
    description:
      "Sie möchten Zustand, Ausstattung und wesentliche Eckdaten vor Ihrer Entscheidung prüfen lassen.",
  },
  {
    title: "Für private oder betriebliche Zwecke",
    description:
      "Sie benötigen eine sachliche Grundlage für eine private oder betriebliche Entscheidung.",
  },
  {
    title: "Bei besonderen Merkmalen",
    description:
      "Umbauten, Sonderausstattung oder ein außergewöhnlicher Fahrzeugzustand sollen angemessen berücksichtigt werden.",
  },
] as const

const detailSections = [
  {
    title: "Welche Merkmale fließen in die Bewertung ein?",
    wide: true,
    description:
      "Je nach Bewertungszweck werden Grunddaten, Laufleistung, Zustand, Ausstattung und Besonderheiten gemeinsam betrachtet. Daraus ergibt sich eine fachlich begründete Einschätzung. Ein später erzielter Kauf- oder Verkaufspreis lässt sich nicht garantieren.",
    items: [
      {
        title: "Grunddaten",
        description: "Modell, Erstzulassung und weitere wesentliche Eckdaten.",
      },
      {
        title: "Alter und Laufleistung",
        description: "Fahrzeugalter und aktueller Kilometerstand.",
      },
      {
        title: "Zustand und Pflege",
        description: "Karosserie, Innenraum und der erkennbare Pflegezustand.",
      },
      {
        title: "Ausstattung",
        description: "Serienausstattung, Sonderausstattung und besondere Ausstattungsmerkmale.",
      },
      {
        title: "Schäden und Vorschäden",
        description: "Bekannte Beschädigungen, soweit sie für die Bewertung relevant sind.",
      },
      {
        title: "Umbauten und Besonderheiten",
        description: "Dokumentierte Umbauten und fahrzeugspezifische Besonderheiten.",
      },
    ],
  },
] as const

const valuationProcess = [
  {
    title: "1. Bewertungszweck nennen",
    description: "Sie teilen uns mit, wofür Sie die Bewertung benötigen.",
  },
  {
    title: "2. Eckdaten abstimmen",
    description:
      "Wir besprechen, welche Unterlagen und Informationen für Ihren Fall benötigt werden.",
  },
  {
    title: "3. Fahrzeug prüfen",
    description:
      "Zustand, Ausstattung, Laufleistung und besondere Merkmale werden betrachtet.",
  },
  {
    title: "4. Ergebnis erläutern",
    description:
      "Die berücksichtigten Faktoren und das Ergebnis werden im vereinbarten Umfang verständlich erläutert.",
  },
] as const

const faqs = [
  {
    question: "Was ist der Unterschied zwischen Fahrzeugbewertung und Wertgutachten?",
    answer:
      "Eine Fahrzeugbewertung berücksichtigt Grunddaten, Zustand, Laufleistung und Ausstattung des Fahrzeugs. Ein Wertgutachten bezeichnet häufig eine ausführlicher dokumentierte Bewertung. Welcher Umfang für Ihr Anliegen sinnvoll ist, klären wir vorab.",
  },
  {
    question: "Müssen bereits alle Unterlagen vorliegen?",
    answer:
      "Nein. Für die erste Kontaktaufnahme reichen wenige Eckdaten zum Fahrzeug und der Grund für die Bewertung.",
  },
  {
    question: "Entspricht die Bewertung dem späteren Verkaufspreis?",
    answer:
      "Nein. Die Bewertung ist eine fachliche Einschätzung zum Bewertungszeitpunkt. Der tatsächlich erzielte Kauf- oder Verkaufspreis kann davon abweichen.",
  },
  {
    question: "Was passiert nach meiner Anfrage?",
    answer:
      "Wir besprechen den Bewertungszweck, die vorhandenen Informationen und den passenden Umfang.",
  },
] as const

const formFields = { vehicle: true, date: false, subject: false } as const

const formTextOverrides = {
  description:
    "Beschreiben Sie kurz Ihr Fahrzeug und den Bewertungszweck. Wir melden uns zur weiteren Abstimmung.",
  vehicle: "Fahrzeugmodell",
  vehiclePlaceholder: "z. B. BMW 5er, EZ 2020",
  phonePlaceholder: "Ihre Telefonnummer",
  message: "Fahrzeug und weitere Angaben",
  messagePlaceholder:
    "Zum Beispiel Verkauf, Kilometerstand, Ausstattung oder bekannte Vorschäden",
  submit: "Bewertung anfragen",
} as const

export function VehicleValuationServiceDetailContent() {
  return (
    <>
      <SiteHeader locale={locale} />
      <ServicePageLayout
        locale={locale}
        title="Fahrzeugbewertung in Berlin"
        subtitle="FAHRZEUGWERT SACHLICH PRÜFEN"
        description="Für die Bewertung werden Zustand, Ausstattung und wichtige Fahrzeugdaten berücksichtigt. Welcher Umfang zu Ihrer Situation passt, besprechen wir vorab mit Ihnen."
        image="/images/services/wertgutachten-fahrzeugbewertung.webp"
        imageAlt="Schwarzes Fahrzeug mit Unterlagen und Kamera für eine Fahrzeugbewertung"
        imageClassName="object-cover object-[center_60%] md:object-[center_58%]"
        heroActions={heroActions}
        bottomActions={heroActions}
        heroNotice="Geprüfter und anerkannter Sachverständiger für Schäden an Kraftfahrzeugen und Wertermittlung."
        backLinkHref="/"
        servicePath="/gutachtenarten/fahrzeugbewertung"
        benefits={benefits}
        services={valuationOccasions}
        servicesDescription="Vor Kauf, Verkauf oder einer anderen wichtigen Entscheidung kann eine fachliche Einschätzung des Fahrzeugwerts Klarheit schaffen."
        servicesGridClassName="lg:grid-cols-4"
        detailSections={detailSections}
        whyChoose={valuationProcess}
        faqs={faqs}
        formTitle="Fahrzeugbewertung anfragen"
        ctaTitle="Sie möchten den Wert Ihres Fahrzeugs prüfen lassen?"
        ctaDescription="Nennen Sie uns kurz das Fahrzeug und den Grund für die Bewertung. Wir besprechen mit Ihnen, welche Informationen für den nächsten Schritt benötigt werden."
        serviceName="fahrzeugbewertung"
        formFields={formFields}
        formTextOverrides={formTextOverrides}
        formHelperText="Für die erste Kontaktaufnahme genügen Fahrzeugmodell, Erstzulassung, Kilometerstand und der Grund für die Bewertung. Weitere Unterlagen stimmen wir anschließend ab."
        layoutLabels={{
          backToServices: "Zur Startseite",
          servicesTitle: "Wann ist eine Fahrzeugbewertung sinnvoll?",
          whyTitle: "So läuft die Fahrzeugbewertung ab",
          whyDescription:
            "Umfang und Vorgehen richten sich nach dem Fahrzeug und dem Zweck der Bewertung.",
          faqTitle: "Häufige Fragen zur Fahrzeugbewertung",
        }}
        balancedTypography
        benefitsSingleLine
      />
      <SiteFooter locale={locale} />
    </>
  )
}
