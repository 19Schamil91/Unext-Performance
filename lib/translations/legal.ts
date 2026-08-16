import type { Locale } from "@/lib/i18n"

export const legalTranslations = {
  de: {
    alertTitle: "Rechtlicher Prüfstand",
    alertText: "Diese Inhalte müssen vor dem Launch abschließend rechtlich geprüft werden.",
    impressum: {
      title: "Impressum",
      sections: {
        companyDetails: "Angaben gemäß § 5 DDG",
        contact: "Kontakt",
        register: "Registereintrag",
      },
      companyName: "UNEXT GmbH",
      street: "Lübarser Str. 25",
      city: "13435 Berlin",
      country: "Deutschland",
      representedByTitle: "Vertreten durch den Geschäftsführer",
      representedByName: "Selimchan Kasumov",
      registerText: "Eintragung im Handelsregister",
      registerCourt: "Registergericht: Amtsgericht Charlottenburg",
      registerNumber: "Registernummer: HRB 265091 B",
      vatTitle: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG",
      vatNumber: "DE369354416",
    },
    privacy: {
      title: "Datenschutzerklärung",
      sections: [
        {
          title: "1. Verantwortlicher",
          content:
            "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:\n\nUNEXT GmbH\nLübarser Str. 25\n13435 Berlin\nDeutschland",
        },
        {
          subtitle: "Kontakt",
          content: "Telefon: 030 23613927\nE-Mail: info@unext.de",
        },
        {
          title: "2. Hosting und Server-Protokolle",
          content:
            "Diese Website wird bei IONOS SE gehostet. Beim Aufruf können technisch erforderliche Verbindungsdaten verarbeitet werden, insbesondere aufgerufene Seite oder Datei, Zugriffszeit, Browsertyp und -version, Betriebssystem, Gerätedaten, zuvor besuchte Seite und IP-Adresse. IONOS gibt an, IP-Adressen in Webhosting-Protokollen zu anonymisieren. Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung der Website und beruht auf Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren Betrieb unseres Internetauftritts. Protokolldaten werden nach den beim Hosting-Anbieter geltenden Einstellungen und Fristen gelöscht, sofern keine längere Aufbewahrung zur Aufklärung eines Sicherheitsvorfalls erforderlich ist.",
        },
        {
          title: "3. Kontakt- und Serviceanfragen",
          content:
            "Über das allgemeine Kontaktformular verarbeiten wir Name, E-Mail-Adresse, optional Telefonnummer, Betreff und Nachricht. Über die Formulare zu unseren Gutachtenarten verarbeiten wir zusätzlich die ausgewählte Leistung sowie, soweit angegeben, Fahrzeugdaten, Wunschtermin und weitere Angaben zum Anliegen. Pflichtfelder sind in den Formularen gekennzeichnet.\n\nWir verwenden diese Daten, um Ihre Anfrage zu prüfen, zu beantworten und die nächsten Schritte mit Ihnen abzustimmen. Das Absenden eines Formulars ist eine unverbindliche Anfrage und begründet noch keinen Vertrag. Soweit Ihre Anfrage auf den Abschluss eines Vertrags gerichtet ist, beruht die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO. Allgemeine Anfragen verarbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist die sachgerechte Bearbeitung Ihrer Nachricht.",
        },
        {
          title: "4. E-Mail-Versand und Empfänger",
          content:
            "Formularanfragen werden serverseitig über Resend (Plus Five Five, Inc., USA) an unser bei IONOS geführtes E-Mail-Postfach übermittelt. Dabei werden die im Formular eingegebenen Daten und technisch erforderliche Versanddaten verarbeitet. Zugriff erhalten nur Personen und Dienstleister, die die Daten zur Bearbeitung der Anfrage oder zum technischen Betrieb benötigen. Eine Weitergabe an weitere Empfänger erfolgt nur, wenn sie für die Bearbeitung erforderlich ist, eine gesetzliche Pflicht besteht oder Sie eingewilligt haben.\n\nResend verarbeitet Daten nach eigenen Angaben überwiegend in den USA und nennt für internationale Übermittlungen insbesondere das EU-U.S. Data Privacy Framework und die EU-Standardvertragsklauseln. Welcher Mechanismus im Einzelfall greift, richtet sich nach der anwendbaren Vertrags- und Verarbeitungskonstellation.",
        },
        {
          title: "5. Speicherdauer",
          content:
            "Wir speichern Anfragedaten nur so lange, wie dies für die Bearbeitung und mögliche Rückfragen erforderlich ist. Kommt ein Vertrag zustande, werden die hierfür benötigten Daten nach den gesetzlichen handels- und steuerrechtlichen Aufbewahrungsfristen gespeichert. Daten können außerdem bis zum Ablauf gesetzlicher Verjährungsfristen aufbewahrt werden, wenn dies zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist. Entfällt der Zweck und besteht keine Aufbewahrungspflicht mehr, werden die Daten gelöscht.",
        },
        {
          title: "6. Darstellungseinstellung im Browser",
          content:
            "Wenn Sie das Erscheinungsbild der Website umstellen, speichert die Website Ihre Auswahl unter dem Schlüssel „theme“ im lokalen Speicher Ihres Browsers. Die Speicherung dient ausschließlich dazu, die von Ihnen gewünschte Darstellung bei weiteren Seitenaufrufen bereitzustellen. Sie wird als technisch erforderlich für die von Ihnen ausdrücklich gewünschte Funktion gemäß § 25 Abs. 2 Nr. 2 TDDDG behandelt und nicht zu Analyse- oder Werbezwecken genutzt. Sie können den Eintrag jederzeit über die Browsereinstellungen löschen.",
        },
        {
          title: "7. Externe Links und lokale Inhalte",
          content:
            "Diese Website enthält Links zu WhatsApp, Google Maps und zum öffentlichen DESAG-Profil. Eine Verbindung zu diesen Anbietern wird erst hergestellt, wenn Sie den jeweiligen Link aktiv öffnen. Ab diesem Zeitpunkt verarbeitet der externe Anbieter Daten nach eigener Verantwortung. Bilder und Schriftarten werden lokal bereitgestellt. Derzeit sind keine Analyse-, Werbe- oder Profiling-Dienste wie Google Analytics eingebunden. Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO statt.",
        },
        {
          title: "8. Datensicherheit",
          content:
            "Wir setzen angemessene technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor Verlust, Veränderung und unbefugtem Zugriff zu schützen. Die Übertragung zwischen Ihrem Browser und der Website erfolgt verschlüsselt über HTTPS. Ein vollständiger Schutz bei der Datenübertragung im Internet kann dennoch nicht garantiert werden.",
        },
        {
          title: "9. Ihre Datenschutzrechte",
          content: "Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:",
          list: [
            "Auskunft über Ihre verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)",
            "Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)",
            "Löschung Ihrer Daten (Art. 17 DSGVO)",
            "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruch gegen eine Verarbeitung nach Art. 6 Abs. 1 lit. e oder f DSGVO (Art. 21 DSGVO)",
            "Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
          ],
        },
        {
          title: "10. Beschwerderecht",
          content:
            "Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Für unser Unternehmen ist insbesondere zuständig:\n\nBerliner Beauftragte für Datenschutz und Informationsfreiheit\nAlt-Moabit 59–61\n10555 Berlin\nTelefon: 030 13889-0\nE-Mail: mailbox@datenschutz-berlin.de",
        },
      ],
      note: "Stand: 03.08.2026\nDie abschließende rechtliche Prüfung vor dem Launch steht noch aus.",
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen (AGB)",
      sections: [
        {
          title: "§ 1 Geltungsbereich und Vertragspartner",
          content:
            "Diese Allgemeinen Geschäftsbedingungen gelten für Verträge über Leistungen der UNEXT GmbH, Lübarser Str. 25, 13435 Berlin, wenn sie wirksam in den jeweiligen Vertrag einbezogen werden. Abweichende Individualvereinbarungen haben Vorrang.",
        },
        {
          title: "§ 2 Anfragen und Vertragsschluss",
          content:
            "Die Darstellung auf dieser Website ist kein verbindliches Angebot. Kontakt- und Serviceformulare dienen ausschließlich der unverbindlichen Anfrage. Ein Vertrag kommt erst zustande, wenn Leistungsumfang und Preis individuell abgestimmt wurden und beide Seiten die konkrete Beauftragung vereinbart haben.",
        },
        {
          title: "§ 3 Leistungen",
          subsections: [
            { title: "3.1 Unfallgutachten", content: "Der konkrete Umfang richtet sich nach Schadenfall, Fahrzeugzustand, Besichtigungsmöglichkeiten und den verfügbaren Unterlagen." },
            { title: "3.2 Fahrzeugbewertung", content: "Art und Umfang der Bewertung werden nach Fahrzeug, Bewertungsanlass, Zustand und Unterlagenlage individuell vereinbart." },
            { title: "3.3 Schadendokumentation", content: "Die Schadendokumentation hält den feststellbaren Fahrzeugzustand, sichtbare Schäden und die hierfür relevanten Unterlagen im vereinbarten Umfang fest." },
          ],
        },
        {
          title: "§ 4 Mitwirkung des Kunden",
          content:
            "Der Kunde stellt die erforderlichen und verfügbaren Angaben, Unterlagen und Zugangsmöglichkeiten rechtzeitig bereit. Angaben sollen vollständig und richtig sein. Verzögerungen oder Mehraufwand aufgrund fehlender oder unzutreffender Informationen werden vor einer zusätzlichen Beauftragung abgestimmt.",
        },
        {
          title: "§ 5 Termine und Änderungen",
          content:
            "Termine und Leistungsfristen werden individuell abgestimmt. Ist eine Verschiebung oder Absage erforderlich, informieren sich die Parteien möglichst frühzeitig. Es gelten keine pauschalen Stornierungs- oder Nichterscheinensgebühren. Gesetzliche oder im Einzelfall ausdrücklich vereinbarte Ansprüche bleiben unberührt.",
        },
        {
          title: "§ 6 Preise und Zahlung",
          content:
            "Leistungsumfang und Preis werden vor der Beauftragung individuell vereinbart. Die Zahlung erfolgt nach Vereinbarung per Rechnung, in bar oder per Überweisung. Fälligkeit und Zahlungsfrist ergeben sich aus der Rechnung oder individuellen Vereinbarung. Eine Kostenübernahme durch eine Versicherung wird nicht garantiert. Soweit nichts anderes vereinbart ist, bleibt der Kunde unser Vertragspartner und zur Zahlung verpflichtet; mögliche Erstattungsansprüche gegenüber Dritten bleiben unberührt.",
        },
        {
          title: "§ 7 Leistungserbringung",
          content:
            "Die Leistung wird nach dem vereinbarten Umfang und den im Einzelfall verfügbaren Informationen erbracht. Fertigstellungs- oder Rückmeldetermine sind nur verbindlich, wenn sie ausdrücklich als verbindlich vereinbart wurden. Gesetzliche Rechte bei Mängeln bleiben unberührt.",
        },
        {
          title: "§ 8 Widerrufsrecht für Verbraucher",
          content:
            "Besteht bei einem außerhalb von Geschäftsräumen oder im Fernabsatz geschlossenen Vertrag ein gesetzliches Widerrufsrecht, erhält der Verbraucher die erforderliche Widerrufsbelehrung gesondert. Mit einer Leistung vor Ablauf der Widerrufsfrist beginnen wir in den gesetzlich relevanten Fällen nur auf ausdrücklichen Wunsch und nach den erforderlichen Hinweisen und Bestätigungen. Das Absenden eines Website-Formulars ist kein solcher Wunsch und keine Beauftragung.",
        },
        { title: "§ 9 Haftung", content: "Es gelten die gesetzlichen Haftungsregelungen. Diese AGB beschränken insbesondere keine Haftung für Vorsatz, grobe Fahrlässigkeit, Schäden aus der Verletzung von Leben, Körper oder Gesundheit sowie keine zwingende gesetzliche Haftung." },
        { title: "§ 10 Datenschutz", content: "Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer", linkLabel: "Datenschutzerklärung" },
        { title: "§ 11 Schlussbestimmungen", content: "Es gilt das Recht der Bundesrepublik Deutschland. Zwingende Verbraucherschutzvorschriften des Staates, in dem ein Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt." },
      ],
      note: "Stand: 03.08.2026\nDie abschließende rechtliche Prüfung und die operative Prüfung der wirksamen Einbeziehung vor dem Launch stehen noch aus.",
    },
  },
  en: {
    alertTitle: "Legal review status",
    alertText: "These contents require a final legal review before launch.",
    impressum: {
      title: "Legal notice",
      sections: {
        companyDetails: "Information pursuant to Section 5 DDG",
        contact: "Contact",
        register: "Commercial register",
      },
      companyName: "UNEXT GmbH",
      street: "Lübarser Str. 25",
      city: "13435 Berlin",
      country: "Germany",
      representedByTitle: "Represented by the managing director",
      representedByName: "Selimchan Kasumov",
      registerText: "Registered in the commercial register",
      registerCourt: "Register court: Charlottenburg Local Court",
      registerNumber: "Registration number: HRB 265091 B",
      vatTitle: "VAT identification number pursuant to Section 27a UStG",
      vatNumber: "DE369354416",
    },
    privacy: {
      title: "Privacy policy",
      sections: [
        {
          title: "1. Controller",
          content:
            "The controller responsible for processing personal data on this website is:\n\nUNEXT GmbH\nLübarser Str. 25\n13435 Berlin\nGermany",
        },
        {
          subtitle: "Contact",
          content: "Phone: 030 23613927\nEmail: info@unext.de",
        },
        {
          title: "2. Hosting and server logs",
          content:
            "This website is hosted by IONOS SE. When you visit it, technically necessary connection data may be processed, including the requested page or file, access time, browser type and version, operating system, device information, referring page and IP address. IONOS states that IP addresses in web-hosting logs are anonymised. This processing is necessary to provide the website securely and reliably and is based on Article 6(1)(f) GDPR. Our legitimate interest is the secure operation of this website. Log data is deleted in line with the settings and retention periods applied by the hosting provider unless it must be retained longer to investigate a security incident.",
        },
        {
          title: "3. Contact and service enquiries",
          content:
            "Through the general contact form, we process your name, email address, optional phone number, subject and message. Through the forms for our appraisal services, we also process the selected service and, where provided, vehicle details, preferred appointment and further information about your enquiry. Required fields are marked.\n\nWe use this data to review and respond to your enquiry and coordinate the next steps. Submitting a form is a non-binding enquiry and does not create a contract. Where your enquiry is intended to lead to the conclusion of a contract, processing is based on Article 6(1)(b) GDPR. General enquiries are processed under Article 6(1)(f) GDPR; our legitimate interest is to respond appropriately.",
        },
        {
          title: "4. Email delivery and recipients",
          content:
            "Form enquiries are transmitted on the server through Resend (Plus Five Five, Inc., USA) to our IONOS email account. The information entered in the form and technical delivery data are processed for this purpose. Access is limited to people and service providers who need the data to handle the enquiry or operate the service. We disclose data to others only where necessary to process the enquiry, required by law or authorised by your consent.\n\nResend states that data is processed primarily in the United States and identifies the EU-U.S. Data Privacy Framework and EU Standard Contractual Clauses as transfer mechanisms. The mechanism applicable in a specific case depends on the relevant contractual and processing arrangement.",
        },
        {
          title: "5. Retention",
          content:
            "We retain enquiry data only for as long as needed to handle the enquiry and any follow-up questions. If a contract is concluded, the required data is retained under statutory commercial and tax retention periods. Data may also be retained until limitation periods expire where necessary to establish, exercise or defend legal claims. It is deleted once the purpose no longer applies and there is no legal duty to retain it.",
        },
        {
          title: "6. Display preference in your browser",
          content:
            "If you change the website appearance, your choice is stored under the key “theme” in your browser's local storage. This is used solely to provide your chosen appearance on later page views. We treat it as technically necessary for the function you expressly requested under Section 25(2) no. 2 TDDDG. It is not used for analytics or advertising and can be deleted in your browser settings.",
        },
        {
          title: "7. External links and local resources",
          content:
            "This website links to WhatsApp, Google Maps and the public DESAG profile. A connection is established only when you actively open the relevant link. From that point, the external provider processes data under its own responsibility. Images and fonts are served locally. We currently do not use analytics, advertising or profiling services such as Google Analytics. No automated decision-making, including profiling within the meaning of Article 22 GDPR, takes place.",
        },
        {
          title: "8. Data security",
          content:
            "We use appropriate technical and organisational measures to protect personal data against loss, alteration and unauthorised access. Data transmitted between your browser and this website is encrypted using HTTPS. Complete protection during transmission over the internet cannot be guaranteed.",
        },
        {
          title: "9. Your data protection rights",
          content: "Subject to the statutory requirements, you have the following rights in particular:",
          list: [
            "access to your personal data (Article 15 GDPR)",
            "rectification of inaccurate or incomplete data (Article 16 GDPR)",
            "erasure of your data (Article 17 GDPR)",
            "restriction of processing (Article 18 GDPR)",
            "data portability (Article 20 GDPR)",
            "objection to processing based on Article 6(1)(e) or (f) GDPR (Article 21 GDPR)",
            "withdrawal of consent with effect for the future (Article 7(3) GDPR)",
          ],
        },
        {
          title: "10. Right to lodge a complaint",
          content:
            "You may lodge a complaint with a data protection supervisory authority. The authority responsible for our company is, in particular:\n\nBerlin Commissioner for Data Protection and Freedom of Information\nAlt-Moabit 59–61\n10555 Berlin\nGermany\nPhone: +49 30 13889-0\nEmail: mailbox@datenschutz-berlin.de",
        },
      ],
      note: "Last updated: 3 August 2026\nA final legal review before launch is still pending.",
    },
    terms: {
      title: "General Terms and Conditions",
      sections: [
        {
          title: "1. Scope and contracting party",
          content:
            "These General Terms and Conditions apply to contracts for services provided by UNEXT GmbH, Lübarser Str. 25, 13435 Berlin, where they have been validly incorporated into the relevant contract. Individual agreements take precedence.",
        },
        {
          title: "2. Enquiries and conclusion of contract",
          content:
            "The information on this website is not a binding offer. Contact and service forms are used solely to submit a non-binding enquiry. A contract is concluded only after the scope and price have been agreed individually and both parties have agreed on the specific engagement.",
        },
        {
          title: "3. Services",
          subsections: [
            { title: "3.1 Accident damage appraisal", content: "The specific scope depends on the damage, vehicle condition, available inspection options and documents provided." },
            { title: "3.2 Vehicle valuation", content: "The type and scope of the valuation are agreed individually based on the vehicle, the purpose of the valuation, its condition and the available documents." },
            { title: "3.3 Vehicle damage documentation", content: "Vehicle damage documentation records the identifiable condition of the vehicle, visible damage and relevant documents to the agreed extent." },
          ],
        },
        {
          title: "4. Customer cooperation",
          content:
            "The customer provides the available information, documents and access needed for the agreed service in good time. Information should be complete and accurate. Any delay or extra work caused by missing or inaccurate information will be discussed before additional work is commissioned.",
        },
        {
          title: "5. Appointments and changes",
          content:
            "Appointments and service deadlines are agreed individually. If an appointment must be changed or cancelled, both parties should notify each other as early as possible. No fixed cancellation or no-show fees apply. Statutory claims or claims expressly agreed in an individual case remain unaffected.",
        },
        {
          title: "6. Prices and payment",
          content:
            "The scope and price are agreed individually before engagement. Payment is made as agreed by invoice, in cash or by bank transfer. The due date and payment period are stated in the invoice or individual agreement. Payment by an insurer is not guaranteed. Unless otherwise agreed, the customer remains our contracting party and is responsible for payment; any reimbursement claims against third parties remain unaffected.",
        },
        {
          title: "7. Performance of services",
          content:
            "The service is performed within the agreed scope and on the basis of the information available in the individual case. Completion dates or response times are binding only if expressly agreed as binding. Statutory rights in the event of defects remain unaffected.",
        },
        {
          title: "8. Consumer right of withdrawal",
          content:
            "Where a consumer has a statutory right of withdrawal for an off-premises or distance contract, the required withdrawal information is provided separately. In legally relevant cases, we start a service before the withdrawal period expires only at the consumer's express request and after the required information and confirmations. Submitting a website form is not such a request and does not place an order.",
        },
        { title: "9. Liability", content: "Statutory liability rules apply. In particular, these terms do not limit liability for intent, gross negligence, injury to life, limb or health, or any mandatory statutory liability." },
        { title: "10. Privacy", content: "Information about the processing of personal data is available in our", linkLabel: "privacy policy" },
        { title: "11. Final provisions", content: "The laws of the Federal Republic of Germany apply. Mandatory consumer protection provisions of the country in which a consumer has their habitual residence remain unaffected." },
      ],
      note: "Last updated: 3 August 2026\nFinal legal review and an operational review of valid incorporation before launch are still pending.",
    },
  },
  ru: {
    alertTitle: "Статус юридической проверки",
    alertText: "Эти тексты требуют окончательной юридической проверки до запуска сайта.",
    impressum: {
      title: "Юридическая информация",
      sections: {
        companyDetails: "Сведения согласно § 5 DDG",
        contact: "Контакты",
        register: "Торговый реестр",
      },
      companyName: "UNEXT GmbH",
      street: "Lübarser Str. 25",
      city: "13435 Berlin",
      country: "Германия",
      representedByTitle: "В лице управляющего директора",
      representedByName: "Selimchan Kasumov",
      registerText: "Регистрация в торговом реестре",
      registerCourt: "Регистрирующий суд: участковый суд Шарлоттенбурга",
      registerNumber: "Регистрационный номер: HRB 265091 B",
      vatTitle: "Идентификационный номер плательщика НДС согласно § 27a UStG",
      vatNumber: "DE369354416",
    },
    privacy: {
      title: "Политика конфиденциальности",
      sections: [
        {
          title: "1. Ответственный за обработку данных",
          content:
            "Ответственным за обработку персональных данных на этом сайте является:\n\nUNEXT GmbH\nLübarser Str. 25\n13435 Berlin\nГермания",
        },
        {
          subtitle: "Контакты",
          content: "Телефон: 030 23613927\nЭлектронная почта: info@unext.de",
        },
        {
          title: "2. Хостинг и журналы сервера",
          content:
            "Сайт размещён у IONOS SE. При открытии сайта могут обрабатываться технически необходимые данные соединения: запрошенная страница или файл, время доступа, тип и версия браузера, операционная система, данные об устройстве, адрес предыдущей страницы и IP-адрес. IONOS сообщает, что IP-адреса в журналах веб-хостинга анонимизируются. Обработка необходима для безопасной и надёжной работы сайта и осуществляется на основании ст. 6, п. 1, лит. f GDPR. Наш законный интерес заключается в безопасной эксплуатации сайта. Данные журналов удаляются в соответствии с настройками и сроками хостинг-провайдера, если более длительное хранение не требуется для расследования инцидента безопасности.",
        },
        {
          title: "3. Контактные и сервисные запросы",
          content:
            "Через общую контактную форму мы обрабатываем имя, адрес электронной почты, необязательный номер телефона, тему и сообщение. Через формы по видам экспертизы дополнительно обрабатываются выбранная услуга, а также, если указаны, данные автомобиля, желаемая дата и другие сведения о запросе. Обязательные поля отмечены.\n\nЭти данные используются, чтобы рассмотреть запрос, ответить и согласовать дальнейшие шаги. Отправка формы представляет собой запрос без обязательства заключить договор и сама по себе не приводит к заключению договора. Если запрос направлен на возможное заключение договора, обработка основана на ст. 6, п. 1, лит. b GDPR. Общие запросы обрабатываются на основании ст. 6, п. 1, лит. f GDPR; наш законный интерес состоит в надлежащей обработке сообщения.",
        },
        {
          title: "4. Отправка электронной почты и получатели",
          content:
            "Запросы из форм передаются на сервере через Resend (Plus Five Five, Inc., США) в наш почтовый ящик у IONOS. При этом обрабатываются введённые сведения и технические данные, необходимые для отправки. Доступ получают только лица и поставщики услуг, которым данные нужны для обработки запроса или технической эксплуатации. Другим получателям данные передаются только при необходимости для обработки запроса, на основании закона или с вашего согласия.\n\nПо информации Resend, данные преимущественно обрабатываются в США. В качестве механизмов международной передачи поставщик указывает EU-U.S. Data Privacy Framework и стандартные договорные положения ЕС. Применимый механизм зависит от соответствующих договорных условий и обстоятельств обработки.",
        },
        {
          title: "5. Срок хранения",
          content:
            "Мы храним данные запроса только столько, сколько необходимо для его обработки и возможных уточнений. Если заключается договор, необходимые данные хранятся в течение установленных законом коммерческих и налоговых сроков. Данные также могут храниться до истечения сроков исковой давности, если это необходимо для предъявления, осуществления или защиты правовых требований. После отпадения цели и при отсутствии обязанности хранения данные удаляются.",
        },
        {
          title: "6. Настройка оформления в браузере",
          content:
            "Если вы меняете оформление сайта, выбранная настройка сохраняется под ключом «theme» в локальном хранилище браузера. Она используется только для отображения выбранного оформления при следующих посещениях. Мы рассматриваем это хранение как технически необходимое для прямо запрошенной функции согласно § 25, абз. 2, п. 2 TDDDG. Данные не используются для аналитики или рекламы. Запись можно удалить в настройках браузера.",
        },
        {
          title: "7. Внешние ссылки и локальные ресурсы",
          content:
            "На сайте размещены ссылки на WhatsApp, Google Maps и общедоступный профиль DESAG. Соединение устанавливается только после того, как вы самостоятельно откроете ссылку. С этого момента внешний поставщик обрабатывает данные под собственную ответственность. Изображения и шрифты загружаются локально. Мы не используем аналитические, рекламные или профилирующие сервисы, например Google Analytics. Автоматизированное принятие решений, включая профилирование в смысле ст. 22 GDPR, не осуществляется.",
        },
        {
          title: "8. Безопасность данных",
          content:
            "Мы применяем надлежащие технические и организационные меры для защиты персональных данных от утраты, изменения и несанкционированного доступа. Передача данных между браузером и сайтом защищена шифрованием HTTPS. Полностью исключить риски при передаче данных через интернет невозможно.",
        },
        {
          title: "9. Ваши права",
          content: "При соблюдении установленных законом условий вы, в частности, имеете право на:",
          list: [
            "доступ к своим персональным данным (ст. 15 GDPR)",
            "исправление неточных или неполных данных (ст. 16 GDPR)",
            "удаление данных (ст. 17 GDPR)",
            "ограничение обработки (ст. 18 GDPR)",
            "переносимость данных (ст. 20 GDPR)",
            "возражение против обработки на основании ст. 6, п. 1, лит. e или f GDPR (ст. 21 GDPR)",
            "отзыв согласия на будущее время (ст. 7, п. 3 GDPR)",
          ],
        },
        {
          title: "10. Право на подачу жалобы",
          content:
            "Вы вправе подать жалобу в надзорный орган по защите данных. Для нашей компании, в частности, компетентен:\n\nУполномоченный Берлина по защите данных и свободе информации\nAlt-Moabit 59–61\n10555 Berlin\nГермания\nТелефон: +49 30 13889-0\nЭлектронная почта: mailbox@datenschutz-berlin.de",
        },
      ],
      note: "Актуально на 3 августа 2026 года\nОкончательная юридическая проверка до запуска сайта ещё не проведена.",
    },
    terms: {
      title: "Общие условия оказания услуг",
      sections: [
        {
          title: "1. Сфера действия и исполнитель",
          content:
            "Настоящие условия применяются к договорам об услугах UNEXT GmbH, Lübarser Str. 25, 13435 Berlin, если они были надлежащим образом включены в соответствующий договор. Индивидуальные соглашения имеют преимущественную силу.",
        },
        {
          title: "2. Запрос и заключение договора",
          content:
            "Информация на сайте не является обязательным предложением. Контактные и сервисные формы предназначены только для направления запроса и не обязывают заключать договор. Само отправление формы не приводит к заключению договора. Договор заключается лишь после индивидуального согласования объёма и цены, когда обе стороны договорились о конкретном заказе.",
        },
        {
          title: "3. Услуги",
          subsections: [
            { title: "3.1 Оценка ущерба после ДТП", content: "Конкретный объём зависит от обстоятельств повреждения, состояния автомобиля, возможностей осмотра и предоставленных документов." },
            { title: "3.2 Оценка автомобиля", content: "Вид и объём оценки согласуются индивидуально с учётом автомобиля, цели оценки, его состояния и имеющихся документов." },
            { title: "3.3 Фиксация повреждений", content: "Фиксация повреждений отражает установленное состояние автомобиля, видимые повреждения и относящиеся к ним документы в согласованном объёме." },
          ],
        },
        {
          title: "4. Содействие заказчика",
          content:
            "Заказчик своевременно предоставляет имеющиеся сведения, документы и доступ, необходимые для согласованной услуги. Сведения должны быть полными и достоверными. Задержки или дополнительные работы из-за отсутствующей либо неверной информации согласуются до заказа дополнительных услуг.",
        },
        {
          title: "5. Сроки и изменения",
          content:
            "Даты и сроки оказания услуг согласуются индивидуально. Если встречу необходимо перенести или отменить, стороны сообщают об этом как можно раньше. Фиксированные сборы за отмену или неявку не применяются. Предусмотренные законом права и требования, а также требования, прямо согласованные в конкретном случае, сохраняются.",
        },
        {
          title: "6. Цена и оплата",
          content:
            "Объём услуги и цена согласуются индивидуально до оформления заказа. Оплата производится по договорённости на основании счёта, наличными или банковским переводом. Срок оплаты указывается в счёте или индивидуальном соглашении. Оплата страховой компанией не гарантируется. Если не согласовано иное, заказчик остаётся стороной договора и обязан произвести оплату; возможные требования о возмещении к третьим лицам сохраняются.",
        },
        {
          title: "7. Оказание услуги",
          content:
            "Услуга оказывается в согласованном объёме и на основании информации, доступной в конкретном случае. Сроки завершения или ответа являются обязательными только при прямом согласовании. Законные права при недостатках услуги остаются в силе.",
        },
        {
          title: "8. Право потребителя на отказ",
          content:
            "Если при дистанционном договоре или договоре вне помещений потребителю по закону предоставлено право на отказ, соответствующая информация сообщается отдельно. В предусмотренных законом случаях мы начинаем оказание услуги до окончания срока отказа только по прямой просьбе потребителя и после необходимых уведомлений и подтверждений. Отправка формы на сайте не является такой просьбой и не оформляет заказ.",
        },
        { title: "9. Ответственность", content: "Применяются установленные законом правила ответственности. Настоящие условия не ограничивают ответственность за умысел, грубую неосторожность, вред жизни и здоровью, а также иную обязательную ответственность по закону." },
        { title: "10. Защита данных", content: "Информация об обработке персональных данных представлена в нашей", linkLabel: "политике конфиденциальности" },
        { title: "11. Заключительные положения", content: "Применяется право Федеративной Республики Германия. Обязательные нормы защиты потребителей страны обычного места жительства потребителя остаются в силе." },
      ],
      note: "Актуально на 3 августа 2026 года\nОкончательная юридическая проверка и операционная проверка надлежащего включения условий до запуска сайта ещё не проведены.",
    },
  },
} as const satisfies Record<Locale, unknown>
