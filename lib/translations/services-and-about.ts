import type { Locale } from "@/lib/i18n"

export const servicesAndAboutTranslations = {
  de: {
    servicesPage: {
      title: "Gutachten bei Unfall, Schaden und Wertermittlung",
      description:
        "Der Schwerpunkt liegt auf Unfallgutachten in Berlin. Ergänzend unterstützt UNEXT bei der Fahrzeugbewertung und der nachvollziehbaren Schadendokumentation.",
      directCall: "Direkt anrufen:",
      onRequestContact: "Telefon, WhatsApp oder Kontaktformular",
      items: [
        {
          title: "Unfallgutachten",
          subtitle: "Nach Unfall oder Schaden",
          description:
            "UNEXT ordnet den Fahrzeugschaden fachlich ein und klärt mit Ihnen die nächsten Schritte.",
          features: [
            "Schaden sachlich einordnen",
            "Fotos und Fahrzeugdaten bereithalten",
            "Direkt Kontakt aufnehmen",
          ],
        },
        {
          title: "Fahrzeugbewertung",
          subtitle: "Fahrzeugwert einordnen",
          description:
            "Wir bewerten den Fahrzeugwert fachlich – etwa vor Verkauf, Kauf oder weiteren Entscheidungen.",
          features: [
            "Fahrzeugdaten aufnehmen",
            "Zustand und Ausstattung berücksichtigen",
            "Fahrzeugwert fachlich bewerten",
          ],
        },
        {
          title: "Schadendokumentation",
          subtitle: "Unterlagen sichern",
          description:
            "Wir halten Schäden und Fahrzeugzustand mit Fotos und vorhandenen Unterlagen fest.",
          features: [
            "Betroffene Bereiche festhalten",
            "Fotos und Unterlagen erfassen",
            "Fahrzeugzustand dokumentieren",
          ],
        },
      ],
    },
  },
  en: {
    servicesPage: {
      title: "Vehicle appraisal services for accidents, damage and valuation",
      description:
        "Accident damage appraisals in Berlin are our main focus. UNEXT also provides vehicle valuation and vehicle damage documentation.",
      directCall: "Call directly:",
      onRequestContact: "Phone, WhatsApp or contact form",
      items: [
        {
          title: "Accident Damage Appraisal",
          subtitle: "After an accident or damage",
          description:
            "UNEXT assesses the vehicle damage professionally and discusses the next steps with you.",
          features: [
            "Have the damage assessed professionally",
            "Keep photos and vehicle details ready",
            "Contact us directly",
          ],
        },
        {
          title: "Vehicle Valuation",
          subtitle: "Understand the vehicle's value",
          description:
            "We assess the vehicle's value professionally, for example before a sale, purchase or another important decision.",
          features: [
            "Record the vehicle details",
            "Consider condition and equipment",
            "Assess the vehicle's value professionally",
          ],
        },
        {
          title: "Vehicle Damage Documentation",
          subtitle: "Record vehicle damage clearly",
          description:
            "We record vehicle damage and condition using photographs and available documents.",
          features: [
            "Record the affected areas",
            "Capture photos and documents",
            "Document the vehicle's condition",
          ],
        },
      ],
    },
  },
  ru: {
    servicesPage: {
      title: "Оценка ущерба после ДТП, фиксация повреждений и оценка стоимости",
      description:
        "Основное направление UNEXT — независимая оценка ущерба после ДТП в Берлине. Кроме того, UNEXT оказывает услуги по оценке стоимости автомобиля и структурированной фиксации повреждений.",
      directCall: "Позвонить напрямую:",
      onRequestContact: "Телефон, WhatsApp или контактная форма",
      items: [
        {
          title: "Оценка ущерба после ДТП",
          subtitle: "После ДТП или повреждения",
          description:
            "UNEXT профессионально оценивает повреждения автомобиля и согласовывает с вами дальнейшие шаги.",
          features: [
            "Профессионально оценить повреждения",
            "Подготовить фотографии и данные автомобиля",
            "Связаться напрямую",
          ],
        },
        {
          title: "Оценка стоимости автомобиля",
          subtitle: "Определить стоимость автомобиля",
          description:
            "Мы профессионально оцениваем стоимость автомобиля, например перед продажей, покупкой или другим важным решением.",
          features: [
            "Зафиксировать данные автомобиля",
            "Учесть состояние и комплектацию",
            "Профессионально оценить стоимость",
          ],
        },
        {
          title: "Фиксация повреждений",
          subtitle: "Зафиксировать повреждения",
          description:
            "Мы фиксируем повреждения и состояние автомобиля с помощью фотографий и имеющихся документов.",
          features: [
            "Зафиксировать повреждённые участки",
            "Собрать фотографии и документы",
            "Зафиксировать состояние автомобиля",
          ],
        },
      ],
    },
  },
} as const satisfies Record<Locale, unknown>
