import type { Locale } from "@/lib/i18n"

export const headerFooterTranslations = {
  de: {
    languages: {
      de: "Deutsch",
      en: "Englisch",
      ru: "Russisch",
    },
    header: {
      navigation: [
        { name: "Startseite", href: "/" },
        {
          name: "Gutachtenarten",
          href: "/#leistungen",
          children: [
            { name: "Unfallgutachten", href: "/gutachtenarten/unfallgutachten" },
            { name: "Fahrzeugbewertung", href: "/gutachtenarten/fahrzeugbewertung" },
            { name: "Schadendokumentation", href: "/gutachtenarten/schadendokumentation" },
          ],
        },
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Kontakt", href: "/kontakt" },
      ],
      allServices: "Gutachtenarten ansehen",
      inquiry: "Gutachten anfragen",
      callNow: "Jetzt anrufen",
      quickContact: "Schnellkontakt",
      navigationTitle: "Navigation",
      servicesTitle: "Gutachtenarten",
      languageTitle: "Sprache",
      menuDescription: "Klare Wege auf Mobile: zuerst Unfallgutachten, dann Gutachtenarten und Kontakt.",
      openMenu: "Menü öffnen",
      closeMenu: "Schließen",
    },
    footer: {
      description:
        "KFZ-Gutachten in Berlin mit direktem Kontakt per Telefon, WhatsApp, E‑Mail oder Kontaktformular.",
      address: "Lübarser Straße 25, 13435 Berlin",
      columns: {
        services: "Gutachtenarten",
        company: "Unternehmen",
        legal: "Rechtliches",
      },
      companyLinks: [
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Kontakt", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Impressum", href: "/impressum" },
        { name: "Datenschutz", href: "/datenschutz" },
        { name: "AGB", href: "/agb" },
      ],
      socialLinks: [],
      copyright: "Alle Rechte vorbehalten.",
      bottomLocation: "Standort: Berlin",
      bottomCertified: "KFZ-Gutachten",
    },
  },
  en: {
    languages: {
      de: "German",
      en: "English",
      ru: "Russian",
    },
    header: {
      navigation: [
        { name: "Home", href: "/" },
        {
          name: "Vehicle appraisal services",
          href: "/#leistungen",
          children: [
            { name: "Accident damage appraisal", href: "/gutachtenarten/unfallgutachten" },
            { name: "Vehicle valuation", href: "/gutachtenarten/fahrzeugbewertung" },
            { name: "Vehicle damage documentation", href: "/gutachtenarten/schadendokumentation" },
          ],
        },
        { name: "About us", href: "/ueber-uns" },
        { name: "Contact", href: "/kontakt" },
      ],
      allServices: "View vehicle appraisal services",
      inquiry: "Request an appraisal",
      callNow: "Call now",
      quickContact: "Quick contact",
      navigationTitle: "Navigation",
      servicesTitle: "Vehicle appraisal services",
      languageTitle: "Language",
      menuDescription: "Quick access on mobile: accident damage appraisals first, followed by vehicle valuation, vehicle damage documentation and contact options.",
      openMenu: "Open menu",
      closeMenu: "Close",
    },
    footer: {
      description:
        "Vehicle appraisals in Berlin with direct contact by phone, WhatsApp, email or contact form.",
      address: "Lübarser Straße 25, 13435 Berlin",
      columns: {
        services: "Vehicle appraisal services",
        company: "Company",
        legal: "Legal",
      },
      companyLinks: [
        { name: "About us", href: "/ueber-uns" },
        { name: "Contact", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Legal notice", href: "/impressum" },
        { name: "Privacy policy", href: "/datenschutz" },
        { name: "Terms and conditions", href: "/agb" },
      ],
      socialLinks: [],
      copyright: "All rights reserved.",
      bottomLocation: "Location: Berlin",
      bottomCertified: "Vehicle appraisals",
    },
  },
  ru: {
    languages: {
      de: "Немецкий",
      en: "Английский",
      ru: "Русский",
    },
    header: {
      navigation: [
        { name: "Главная", href: "/" },
        {
          name: "Виды автоэкспертизы",
          href: "/#leistungen",
          children: [
            { name: "Оценка ущерба после ДТП", href: "/gutachtenarten/unfallgutachten" },
            { name: "Оценка стоимости автомобиля", href: "/gutachtenarten/fahrzeugbewertung" },
            { name: "Фиксация повреждений", href: "/gutachtenarten/schadendokumentation" },
          ],
        },
        { name: "О нас", href: "/ueber-uns" },
        { name: "Контакты", href: "/kontakt" },
      ],
      allServices: "Все виды автоэкспертизы",
      inquiry: "Запросить экспертизу",
      callNow: "Позвонить",
      quickContact: "Быстрый контакт",
      navigationTitle: "Навигация",
      servicesTitle: "Виды автоэкспертизы",
      languageTitle: "Язык",
      menuDescription: "В мобильной версии сначала доступна оценка ущерба после ДТП, затем остальные виды экспертизы и контакты.",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть",
    },
    footer: {
      description:
        "Автоэкспертиза в Берлине с прямой связью по телефону, WhatsApp, электронной почте или через контактную форму.",
      address: "Lübarser Straße 25, 13435 Berlin",
      columns: {
        services: "Виды автоэкспертизы",
        company: "Компания",
        legal: "Правовая информация",
      },
      companyLinks: [
        { name: "О нас", href: "/ueber-uns" },
        { name: "Контакты", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Юридическая информация", href: "/impressum" },
        { name: "Политика конфиденциальности", href: "/datenschutz" },
        { name: "Общие условия", href: "/agb" },
      ],
      socialLinks: [],
      copyright: "Все права защищены.",
      bottomLocation: "Местонахождение: Берлин",
      bottomCertified: "Автоэкспертиза",
    },
  },
} as const satisfies Record<Locale, unknown>
