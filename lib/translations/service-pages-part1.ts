import type { Locale } from "@/lib/i18n"

export const servicePagesPart1 = {
  de: {
    accident: {
      title: "Unfallgutachten Berlin",
      subtitle: "KFZ-Unfallgutachten",
      badge: "Schadendokumentation in Berlin",
      description:
        "Nach einem Unfall brauchen Sie schnell Klarheit: Was ist beschädigt, welche Kosten entstehen und wie geht es mit Versicherung, Werkstatt oder Anwalt weiter? UNEXT dokumentiert Fahrzeugschäden sachlich, nachvollziehbar und unabhängig.",
      benefits: [
        "Geprüfter Kfz-Sachverständiger",
        "Unabhängige Schadenbewertung in Berlin",
      ],
      services: [
        { title: "Schaden ist mehr als ein Kratzer", description: "Wenn Reparaturkosten, Wertminderung oder der tatsächliche Schadenumfang unklar sind, schafft ein Unfallgutachten eine belastbare Grundlage." },
        { title: "Verdeckte Schäden möglich", description: "Nach einem Aufprall können Schäden entstehen, die von außen nicht sofort sichtbar sind. Die Begutachtung ordnet den Schaden fachlich ein." },
        { title: "Sichere Grundlage für die Versicherung", description: "Das Gutachten dokumentiert Schadenumfang, Reparaturkosten, Fotos und relevante Werte nachvollziehbar – als Grundlage für die weitere Schadenabwicklung." },
      ],
      serviceNote: {
        title: "Freie Gutachterwahl nach unverschuldetem Unfall",
        description: "Nach einem unverschuldeten Unfall können Sie grundsätzlich einen unabhängigen Gutachter selbst wählen. Wir prüfen mit Ihnen vorab, ob ein Unfallgutachten in Ihrem Fall sinnvoll ist.",
      },
      detailSections: [
        {
          title: "Was enthält das Unfallgutachten?",
          description: "Ein Unfallgutachten dokumentiert den Fahrzeugschaden nachvollziehbar und fachgerecht. Der genaue Umfang richtet sich nach Fahrzeug, Schadenbild und Ergebnis der Besichtigung.",
          items: [
            { title: "Reparaturkosten", description: "Erforderliche Arbeiten, Ersatzteile, Lackierung und weitere erkennbare Reparaturpositionen." },
            { title: "Schadenumfang", description: "Sichtbare Schäden, mögliche verdeckte Schäden, Vorschäden und fahrzeugbezogene Besonderheiten." },
            { title: "Wertminderung", description: "Möglicher merkantiler Minderwert trotz fachgerechter Reparatur." },
            { title: "Wiederbeschaffungswert und Restwert", description: "Wichtige Werte zur Einschätzung, ob eine Reparatur wirtschaftlich sinnvoll ist." },
            { title: "Fotodokumentation", description: "Nachvollziehbare Bilder und Beschreibung des Schadenbildes als Grundlage für die weitere Abstimmung." },
          ],
        },
        {
          title: "Welche Unterlagen helfen?",
          description: "Wenn vorhanden, helfen einige Informationen bei der schnellen Einordnung. Den passenden Übermittlungsweg stimmen wir direkt mit Ihnen ab.",
          items: [
            { title: "Fahrzeugschein", description: "Zulassungsbescheinigung Teil I oder die wichtigsten Fahrzeugdaten." },
            { title: "Schadenfotos", description: "Vorhandene Fotos vom Fahrzeugschaden, die bei der ersten Einordnung helfen können." },
            { title: "Unfall- und Versicherungsdaten", description: "Daten des Unfallgegners, Angaben zur Versicherung oder ein Aktenzeichen, falls bereits vorhanden." },
            { title: "Kurze Schadenschilderung", description: "Was ist passiert, welche Bereiche sind betroffen und ob das Fahrzeug noch fahrbereit ist." },
          ],
        },
      ],
      whyChoose: [
        { title: "Kontakt & erste Einordnung", description: "Sie rufen an, schreiben per WhatsApp oder senden eine kurze Anfrage. Wir ordnen den Fall vorab ein und klären die nächsten Schritte." },
        { title: "Besichtigung abstimmen", description: "Wir klären, welche Informationen vorliegen und wie die Fahrzeugbesichtigung sinnvoll organisiert wird." },
        { title: "Schaden dokumentieren", description: "Der Schaden wird durch einen Gutachter geprüft, fotografiert und fachlich nachvollziehbar eingeordnet." },
        { title: "Gutachten erhalten und nächste Schritte klären", description: "Sie erhalten eine klare Grundlage für die weitere Abstimmung mit Versicherung, Werkstatt oder Anwalt." },
      ],
      faqs: [
        { question: "Wer zahlt das Unfallgutachten?", answer: "Bei einem unverschuldeten Unfall werden die Gutachterkosten in der Regel von der gegnerischen Haftpflichtversicherung übernommen. Bei sehr kleinen Schäden, unklarer Haftung oder besonderen Umständen kann eine Einordnung vorab sinnvoll sein. Wir besprechen Ihren Fall vor der Beauftragung." },
        { question: "Reicht ein Kostenvoranschlag?", answer: "Bei kleineren Schäden kann ein Kostenvoranschlag ausreichen. Wenn Schadenumfang, Wertminderung, verdeckte Schäden oder die weitere Regulierung unklar sind, kann ein unabhängiges Unfallgutachten sinnvoll sein." },
        { question: "Kann ich Fotos vorab schicken?", answer: "Ja. Vorhandene Schadenfotos helfen bei der ersten Einordnung. Den passenden Übermittlungsweg stimmen wir persönlich mit Ihnen ab." },
        { question: "Muss mein Fahrzeug noch fahrbereit sein?", answer: "Nein, nicht zwingend. Teilen Sie uns kurz mit, ob das Fahrzeug fahrbereit ist und wo es sich befindet. Wir stimmen dann den passenden Ablauf mit Ihnen ab." },
        { question: "Wie schnell bekomme ich eine Rückmeldung?", answer: "Wir melden uns zeitnah nach Ihrer Anfrage und klären die nächsten Schritte persönlich mit Ihnen." },
      ],
      formTitle: "Schaden kurz schildern – Rückruf erhalten",
      imageAlt: "KFZ-Unfallgutachten und Schadendokumentation in Berlin",

      heroNotice:
        "Bei unverschuldetem Unfall werden die Gutachterkosten in der Regel von der gegnerischen Haftpflichtversicherung übernommen.",
      ctaTitle: "Unfallgutachten anfragen",
      ctaDescription: [
        "Schildern Sie kurz den Schaden.",
        "Wir stimmen die nächsten Schritte mit Ihnen ab.",
      ],
      layoutLabels: {
        backToServices: "Zurück zur Startseite",
        servicesTitle: "Wann ist ein Unfallgutachten sinnvoll?",
        whyTitle: "So läuft die Anfrage ab",
        whyDescription: "Vom ersten Kontakt bis zur weiteren Abstimmung bleibt der Ablauf bewusst kurz und nachvollziehbar.",
      },
      formTextOverrides: {
        description: "Beschreiben Sie kurz den Schaden. Wir melden uns zeitnah und klären die nächsten Schritte mit Ihnen.",
        vehiclePlaceholder: "z. B. BMW 320d, Baujahr 2021",
        date: "Wunschtermin für Rückruf oder Besichtigung",
        message: "Schadenschilderung",
        messagePlaceholder: "Was ist passiert? Welche Bereiche sind beschädigt? Ist das Fahrzeug noch fahrbereit?",
        submit: "Unfallgutachten anfragen",
      },
    },
  },
  en: {},
  ru: {},
} as const satisfies Record<Locale, unknown>
