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
    rental: {
      title: "Autovermietung",
      subtitle: "Ersatzfahrzeuge",
      description:
        "Ob nach einem Unfall, während der Werkstattzeit oder für besondere Anlässe - wir haben das passende Fahrzeug für Sie. Schnell verfügbar, fair im Preis und immer in Top-Zustand.",
      benefits: ["Sofort verfügbare Fahrzeuge", "Flexible Mietdauer", "Faire & transparente Preise", "Geprüfte Fahrzeuge", "Unkomplizierte Abwicklung", "Privat- und Geschäftskunden"],
      services: [
        { title: "Ersatzfahrzeuge", description: "Schnelle Bereitstellung von Ersatzfahrzeugen bei Unfall oder während der Reparatur Ihres Fahrzeugs." },
        { title: "Kurzzeitmiete", description: "Flexible Anmietung für Tage oder Wochen - ideal für kurzfristige Mobilitätsbedürfnisse." },
        { title: "Langzeitmiete", description: "Attraktive Konditionen für längere Mietdauern - für Privat- und Geschäftskunden." },
        { title: "Unfallersatzfahrzeuge", description: "Bei unverschuldetem Unfall stellen wir Ihnen ein gleichwertiges Ersatzfahrzeug." },
        { title: "Firmenfahrzeuge", description: "Flexible Fahrzeuglösungen für Unternehmen - auch bei kurzfristigem Bedarf." },
        { title: "Abholung & Lieferung", description: "Auf Wunsch bringen wir das Fahrzeug zu Ihnen oder holen Sie ab." },
      ],
      whyChoose: [
        { title: "Sofortige Verfügbarkeit", description: "Wir haben immer Fahrzeuge auf Lager - keine langen Wartezeiten." },
        { title: "Top-gepflegte Fahrzeuge", description: "Alle unsere Mietfahrzeuge werden regelmäßig gewartet und gereinigt." },
        { title: "Faire Preise", description: "Transparente Preisgestaltung ohne versteckte Kosten." },
        { title: "Persönlicher Service", description: "Individuelle Beratung und flexible Lösungen für Ihre Bedürfnisse." },
      ],
      faqs: [
        { question: "Welche Fahrzeuge können gemietet werden?", answer: "Wir bieten verschiedene Fahrzeugklassen an - vom Kleinwagen bis zur gehobenen Mittelklasse. Sprechen Sie uns an für aktuelle Verfügbarkeiten." },
        { question: "Was brauche ich für die Anmietung?", answer: "Sie benötigen einen gültigen Führerschein, Personalausweis und eine gültige Kreditkarte oder Kaution." },
        { question: "Wer zahlt bei einem Unfall den Mietwagen?", answer: "Bei unverschuldeten Unfällen übernimmt die gegnerische Versicherung die Mietwagenkosten. Wir beraten Sie gerne." },
        { question: "Kann ich das Fahrzeug am Wochenende abholen?", answer: "Samstags sind wir von 10:00 bis 16:00 Uhr für Sie da. Außerhalb der Öffnungszeiten nach Vereinbarung." },
        { question: "Gibt es eine Kilometerbegrenzung?", answer: "Unsere Tarife beinhalten in der Regel eine großzügige Kilometerpauschale. Details besprechen wir bei der Buchung." },
      ],
      formTitle: "Mietwagen anfragen",
    },
  },
  en: {
    rental: {
      title: "Car Rental",
      subtitle: "Replacement vehicles",
      description:
        "Whether after an accident, during workshop time or for special occasions - we have the right vehicle for you. Available quickly, fairly priced and always in excellent condition.",
      benefits: ["Vehicles available immediately", "Flexible rental duration", "Fair & transparent prices", "Inspected vehicles", "Straightforward processing", "Private and business customers"],
      services: [
        { title: "Replacement vehicles", description: "Fast provision of replacement vehicles after an accident or while your vehicle is being repaired." },
        { title: "Short-term rental", description: "Flexible rental by day or week - ideal for short-term mobility needs." },
        { title: "Long-term rental", description: "Attractive conditions for longer rental periods - for private and business customers." },
        { title: "Accident replacement vehicles", description: "If you are not at fault in an accident, we provide a comparable replacement vehicle." },
        { title: "Company vehicles", description: "Flexible vehicle solutions for companies - even for short-notice demand." },
        { title: "Pickup & delivery", description: "On request, we can bring the vehicle to you or pick you up." },
      ],
      whyChoose: [
        { title: "Immediate availability", description: "We always have vehicles in stock - no long waiting times." },
        { title: "Well-maintained vehicles", description: "All rental vehicles are regularly serviced and cleaned." },
        { title: "Fair prices", description: "Transparent pricing with no hidden costs." },
        { title: "Personal service", description: "Individual advice and flexible solutions for your needs." },
      ],
      faqs: [
        { question: "What kinds of vehicles are available?", answer: "We offer various vehicle classes - from compact cars to upper mid-size models. Contact us for current availability." },
        { question: "What do I need to rent a car?", answer: "You need a valid driving license, ID card and a valid credit card or deposit." },
        { question: "Who pays for the rental car after an accident?", answer: "In non-fault accidents, the opposing insurance company covers the rental costs. We are happy to advise you." },
        { question: "Can I pick up the car on the weekend?", answer: "We are available on Saturdays from 10:00 AM to 4:00 PM. Outside opening hours by appointment." },
        { question: "Is there a mileage limit?", answer: "Our rates usually include a generous mileage allowance. We discuss the details during booking." },
      ],
      formTitle: "Request a rental car",
    },
  },
  ru: {
    rental: {
      title: "Прокат авто",
      subtitle: "Подменные автомобили",
      description:
        "После ДТП, на время ремонта или для особых случаев - у нас есть подходящий автомобиль для вас. Быстро доступно, по честной цене и всегда в отличном состоянии.",
      benefits: ["Автомобили доступны сразу", "Гибкий срок аренды", "Честные и прозрачные цены", "Проверенные автомобили", "Простое оформление", "Частные и корпоративные клиенты"],
      services: [
        { title: "Подменные автомобили", description: "Быстрое предоставление подменного автомобиля после ДТП или на время ремонта вашего авто." },
        { title: "Краткосрочная аренда", description: "Гибкая аренда на дни или недели - идеально для краткосрочной мобильности." },
        { title: "Долгосрочная аренда", description: "Выгодные условия для длительных сроков аренды - для частных и корпоративных клиентов." },
        { title: "Авто на замену после ДТП", description: "Если вы не виноваты в ДТП, мы предоставим равноценный подменный автомобиль." },
        { title: "Корпоративные автомобили", description: "Гибкие транспортные решения для компаний - даже при срочной необходимости." },
        { title: "Доставка и выдача", description: "По запросу мы можем доставить автомобиль вам или забрать вас." },
      ],
      whyChoose: [
        { title: "Мгновенная доступность", description: "У нас всегда есть автомобили в наличии - без долгого ожидания." },
        { title: "Ухоженные автомобили", description: "Все наши арендные автомобили регулярно обслуживаются и очищаются." },
        { title: "Честные цены", description: "Прозрачное ценообразование без скрытых расходов." },
        { title: "Персональный сервис", description: "Индивидуальная консультация и гибкие решения под ваши задачи." },
      ],
      faqs: [
        { question: "Какие автомобили доступны для аренды?", answer: "Мы предлагаем разные классы автомобилей - от компактных моделей до среднего премиум-сегмента. Свяжитесь с нами для уточнения актуальной доступности." },
        { question: "Что нужно для аренды автомобиля?", answer: "Вам понадобится действующее водительское удостоверение, удостоверение личности и действующая кредитная карта или залог." },
        { question: "Кто оплачивает аренду после ДТП?", answer: "При ДТП не по вашей вине расходы на аренду автомобиля оплачивает страховая компания виновной стороны. Мы с радостью проконсультируем вас." },
        { question: "Можно ли забрать автомобиль в выходные?", answer: "По субботам мы работаем с 10:00 до 16:00. Вне часов работы - по договоренности." },
        { question: "Есть ли ограничение по пробегу?", answer: "Наши тарифы обычно включают щедрый лимит пробега. Детали обсуждаются при бронировании." },
      ],
      formTitle: "Запросить аренду автомобиля",
    },
  },
} as const satisfies Record<Locale, unknown>
