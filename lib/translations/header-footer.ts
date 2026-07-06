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
            { name: "Unfallgutachten", href: "/leistungen/unfallgutachten" },
            { name: "Fahrzeugbewertung", href: "/#service-fahrzeugbewertung" },
            { name: "Schadendokumentation", href: "/#service-schadendokumentation" },
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
        { name: "About", href: "/ueber-uns" },
        {
          name: "Services",
          href: "/#leistungen",
          children: [
            { name: "Accident Reports", href: "/leistungen/unfallgutachten" },
            { name: "Car Rental", href: "/leistungen/autovermietung" },
            { name: "Workshop & Service", href: "/leistungen/autoservice" },
            { name: "Detailing", href: "/leistungen/detailing" },
            { name: "Vehicle Registration Service", href: "/leistungen/zulassungsservice" },
            { name: "Towing & Roadside Help", href: "/leistungen/abschleppdienst-pannenhilfe" },
          ],
        },
        { name: "Contact", href: "/kontakt" },
      ],
      allServices: "All services",
      inquiry: "Send inquiry",
      callNow: "Call now",
      quickContact: "Quick contact",
      navigationTitle: "Navigation",
      servicesTitle: "Main services",
      languageTitle: "Language",
      menuDescription: "On mobile, the fastest path comes first: contact options, main navigation and direct access to the 6 core services.",
      openMenu: "Open menu",
    },
    footer: {
      description:
        "Vehicle services in Berlin: reports, rental cars, workshop, care, registration and roadside help from one source.",
      address: "Lübarser Str. 25, 13435 Berlin",
      columns: {
        services: "Services",
        company: "Company",
        legal: "Legal",
      },
      companyLinks: [
        { name: "About", href: "/ueber-uns" },
        { name: "Contact", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Legal notice", href: "/impressum" },
        { name: "Privacy policy", href: "/datenschutz" },
        { name: "Terms & conditions", href: "/agb" },
      ],
      socialLinks: [],
      copyright: "All rights reserved.",
      bottomLocation: "Location: Berlin",
      bottomCertified: "Everything from one source",
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
        { name: "О нас", href: "/ueber-uns" },
        {
          name: "Услуги",
          href: "/#leistungen",
          children: [
            { name: "Экспертиза ДТП", href: "/leistungen/unfallgutachten" },
            { name: "Прокат авто", href: "/leistungen/autovermietung" },
            { name: "Сервис и мастерская", href: "/leistungen/autoservice" },
            { name: "Детейлинг", href: "/leistungen/detailing" },
            { name: "Сервис регистрации авто", href: "/leistungen/zulassungsservice" },
            { name: "Эвакуатор и помощь на дороге", href: "/leistungen/abschleppdienst-pannenhilfe" },
          ],
        },
        { name: "Контакты", href: "/kontakt" },
      ],
      allServices: "Все услуги",
      inquiry: "Отправить запрос",
      callNow: "Позвонить",
      quickContact: "Быстрый контакт",
      navigationTitle: "Навигация",
      servicesTitle: "Основные услуги",
      languageTitle: "Язык",
      menuDescription: "В мобильной версии сначала идут быстрые контакты, затем навигация и прямой доступ к 6 основным услугам.",
      openMenu: "Открыть меню",
    },
    footer: {
      description:
        "Автоуслуги в Берлине: экспертиза, аренда, сервис, детейлинг, регистрация и эвакуатор из одних рук.",
      address: "Lübarser Str. 25, 13435 Berlin",
      columns: {
        services: "Услуги",
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
        { name: "Условия и положения", href: "/agb" },
      ],
      socialLinks: [],
      copyright: "Все права защищены.",
      bottomLocation: "Локация: Berlin",
      bottomCertified: "Сертифицированный сервис",
    },
  },
} as const satisfies Record<Locale, unknown>
