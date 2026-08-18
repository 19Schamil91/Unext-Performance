# Aufgabe 029 - Dreisprachige SEO-, Metadata- und Structured-Data-Grundlage umsetzen

## Ziel

Die technische und inhaltliche SEO-Grundlage für die gemeinsame deutsche, englische und russische V1-KFZ-Gutachter-Website umsetzen. Deutsch bleibt die fachliche Referenz. Metadata, Canonicals, Sprachalternativen, Social-Metadata, Structured Data, Sitemap, Robots und Indexierungsregeln sollen später zentral, widerspruchsfrei und ausschließlich für bestätigte Inhalte erzeugt werden.

Der Ist-Bestand und der verbindliche Umsetzungsplan wurden vorab dokumentiert. Die freigegebene technische SEO-Grundlage ist inzwischen umgesetzt und wartet auf Nutzerreview.

## Kontext

- Der gemeinsame DE/EN/RU-V1-Launch ist durch `DECISIONS.md` verbindlich; Deutsch ist die fachliche Referenz.
- Aufgabe 051 hat die dreisprachigen Kernseiten und alle sechs EN/RU-Gutachtenarten-Routen umgesetzt und abgeschlossen.
- Die kanonischen deutschen Gutachtenarten liegen unter `/gutachtenarten/unfallgutachten`, `/gutachtenarten/fahrzeugbewertung` und `/gutachtenarten/schadendokumentation`; EN und RU verwenden dieselben Fachpfade unter `/en` beziehungsweise `/ru`.
- Aufgabe 030 hat die freigegebenen permanenten Redirects umgesetzt. Aufgabe 050 hat die deutschen kanonischen Gutachtenarten-Routen abgeschlossen.
- Die alte Aufgabenfassung verwies bei Redirects noch ausschließlich auf Aufgabe 030 und ging von einem älteren, nicht vollständig dreisprachigen Stand aus. Diese Planung richtet sich nach dem inzwischen verbindlichen Projektstand.
- Sichtbarer und physischer Legacy-Cleanup bleibt Aufgabe 026. Finale Launch-QA bleibt Aufgabe 033. Deployment, Environment, AVV/DPA und realer Formularversand bleiben Aufgabe 034. Monitoring bleibt Aufgabe 035.
- Impressum, Datenschutz und AGB bleiben rechtlich vorläufig; die externe Rechtsprüfung ist offen. Aufgabe 029 erteilt keine rechtliche Freigabe.
- Die Website ist durch Aufgabe 029 allein nicht launchbereit.

## Verbindliche Grundlagen und Abgrenzung älterer Aussagen

Es gilt die Spec-Hierarchie aus `AGENTS.md`: `global-spec.md` vor `functional-map.md`, danach die passenden Feature-, Technical- und Work-Plan-Specs. Ältere Stellen in `mehrsprachigkeit.md`, `v1-launch-masterplan.md` und einzelnen historischen Done-Aufgaben, die EN/RU noch als fehlend oder später umzusetzen beschreiben, sind durch Entscheidung 8 und den abgeschlossenen Stand von Aufgabe 051 sachlich überholt. Sie werden in diesem reinen Task-Start nicht rückwirkend geändert; Aufgabe 029 verwendet den aktuellen dreisprachigen Ist-Stand.

Technische Referenzen für die spätere Umsetzung:

- Next.js 16 App-Router Metadata, `generateMetadata`, `metadataBase`, Metadata-Dateien sowie lokalisierte `app/sitemap.ts`-Einträge.
- Google Search Central zu selbstreferenziellen Canonicals, gegenseitigen `hreflang`-Clustern, vollqualifizierten URLs und ausschließlich kanonischen URLs in Sitemaps.
- Schema.org zu `LocalBusiness` und `Service`. `ProfessionalService` ist laut Schema.org deprecated; `AutoRepair` bezeichnet ausdrücklich einen Reparaturbetrieb und passt nicht zur freigegebenen Positionierung.

## Scope

- Metadata für die bestätigten DE/EN/RU-V1-Routen zentralisieren und vervollständigen.
- Pro indexierbarer Route eindeutige Titles und Descriptions, selbstreferenzielle Canonicals, passende Sprachalternativen, OpenGraph- und Twitter-Metadata definieren.
- Produktions-URL als eine zentrale, vor Implementierung bestätigte Basis verwenden.
- Bestehendes JSON-LD auf sichtbare und bestätigte Aussagen begrenzen; die drei Gutachtenarten als `Service` und geeignete Navigationspfade als `BreadcrumbList` abbilden.
- `app/sitemap.ts` und `app/robots.ts` nach Freigabe des Indexierungsmodells umsetzen.
- Error-, 404- und technische Catch-all-Zustände ausdrücklich auf `noindex` ausrichten.
- Aktive Metadata und Structured Data von alten Nicht-Scope-Leistungen und unpassenden Werkstatt-Signalen bereinigen.
- Vorhandene permanente Redirects read-only gegen Canonical, Sitemap und Hreflang prüfen.

## Nicht-Scope

- Keine Routen oder Redirects löschen, umbenennen oder ohne nachgewiesenen Bedarf ergänzen.
- Kein sichtbarer Legacy-Cleanup und keine physische Entfernung alter Leistungsseiten; das bleibt Aufgabe 026.
- Keine neuen Leistungen, Qualifikationen, Bewertungen, Preise, Versicherungszusagen, Behördenanerkennungen oder Zertifizierungen erfinden.
- Keine Änderung oder rechtliche Freigabe von Impressum, Datenschutz oder AGB.
- Keine Upload-, Supabase-, KI-, Admin-, Portal-, Deployment-, Monitoring- oder echte Formularversand-Umsetzung.
- Keine extern gehosteten SEO-Assets und keine neue Dependency.
- Keine automatische Launchfreigabe.

## Read-only-Inventur vom 18.08.2026

### Zentrale Metadata-Quellen

| Quelle | Ist-Bestand | Befund |
| --- | --- | --- |
| `lib/metadata.ts` | `buildSiteMetadata`, `buildPageMetadata`, drei alte Home-Datensätze | Zentrale Wiederverwendung ist vorhanden, aber ohne `metadataBase`, Canonical, `alternates.languages`, `x-default`, Twitter oder Bilder. Alle Site-Metadaten sind pauschal `index, follow`. Die Home-Texte und Keywords bewerben Mietwagen, Werkstatt, Zulassung, Abschleppen, Detailing und teilweise Expresslieferung. |
| `app/(de)/layout.tsx` | `buildSiteMetadata("de")` | Deutsche Seiten erben globale Metadata und globales Unternehmens-JSON-LD. |
| `app/(localized)/[locale]/layout.tsx` | `generateMetadata` mit `buildSiteMetadata(locale)` | EN/RU erben sprachabhängige, aber fachlich alte Site-Metadata. Die OG-URL bleibt fehlerhaft auf `https://unext.de`. |
| Routen mit `generateMetadata` | Unfallgutachten DE, Leistungen, Über uns, Kontakt und Legal; zusätzlich alte Legacy-Detailseiten | Mehrere Route-Dateien setzen Titel und Description über Übersetzungsobjekte. Das erzeugt doppelte Quellen und übernimmt sichtbare Legacy-Texte in Metadata. |
| Routen ohne eigene Metadata | Home DE/EN/RU, Fahrzeugbewertung DE/EN/RU, Schadendokumentation DE/EN/RU sowie Unfallgutachten EN/RU | Diese Routen erben die alten Home-Daten statt fachlich passender Seiten-Metadata. |

Weitere Ist-Befunde:

- `metadataBase`: fehlt.
- Canonicals, `alternates.languages`, `hreflang`, `x-default`: fehlen vollständig.
- OpenGraph: Titel und Description vorhanden, aber keine Bilder. Die zentrale Site-URL ist für EN/RU und mehrere Detailseiten falsch; `buildPageMetadata` verwendet hart codiert `https://unext.de${path}`.
- Twitter Cards: fehlen vollständig.
- Sitemap: weder `app/sitemap.ts` noch `sitemap.xml` vorhanden.
- Robots: weder `app/robots.ts` noch `robots.txt` vorhanden.
- Webmanifest: nicht vorhanden; für Aufgabe 029 nicht erforderlich, solange keine PWA-Anforderung entsteht.
- Error-, 404- und Catch-all-Zustände: vorhandene sprachbezogene UI-Zustände besitzen keine ausdrückliche `noindex`-Metadata.
- Lokale Bildbasis: passende Dateien liegen unter `public/images/`, insbesondere `hero-kfz-gutachten-berlin.webp`, `services/unfallgutachten-berlin.webp`, `services/wertgutachten-fahrzeugbewertung.webp` und `services/beweissicherung-dokumentation.webp`. Vor Social-Nutzung sind Seitenbezug, Zuschnitt, Rechte und Ausgabeformat zu prüfen; Platzhalter werden nicht verwendet.
- Produktions-URL: Der Nutzer hat `https://unext.de` am 18.08.2026 ausdrücklich als verbindliche Produktions-Origin bestätigt. Canonicals, Hreflang, OpenGraph, Sitemap und Structured Data verwenden ausschließlich diese non-www-Origin. `https://www.unext.de/*` ist nicht kanonisch und muss beim Deployment dauerhaft mit erhaltenem Pfad und erhaltenen Query-Parametern auf `https://unext.de/*` weiterleiten.

### Structured-Data-Bestand

| Typ | Aktuelle Quelle und Routen | Sichtbare Grundlage | Bewertung | Spätere Änderung |
| --- | --- | --- | --- | --- |
| `LocalBusiness` | `buildLocalBusinessSchema()` in beiden Sprach-Layouts, dadurch auf allen Routen | Firma, Adresse, Telefon, E-Mail, Berlin und Öffnungszeiten sind in Specs/Kontaktseite belegt | teilweise passend | Als eine sprachübergreifend identische Unternehmensentität beibehalten; Origin, Schreibweise `Lübarser Str. 25`, URLs und nur bestätigte Felder zentralisieren. |
| `AutoRepair` | Zweiter globaler Typ derselben Entität | Keine freigegebene Werkstatt-/Reparaturpositionierung für V1 | unpassend | Vollständig aus aktivem JSON-LD entfernen. |
| `Organization` | Nicht separat vorhanden; `LocalBusiness` ist bereits ein Organization-Untertyp | Rechtliche UNEXT-GmbH-Daten sind sichtbar | konzeptionell abgedeckt | Kein dupliziertes konkurrierendes Objekt. Nur falls ein eigener Marken-/Rechtsträgerbedarf bestätigt wird, sauber per stabiler `@id` verknüpfen. |
| `ProfessionalService` | Nicht vorhanden | Wäre nur generisch passend | nicht einsetzen | Schema.org führt den Typ als deprecated; stattdessen bestätigtes `LocalBusiness` plus konkrete `Service`-Objekte verwenden. |
| `Service` | `service-page-layout.tsx` auf allen alten und neuen Service-Detailseiten | Name und Beschreibung stammen aus sichtbaren Seitentexten | für die drei V1-Gutachtenarten passend, auf Legacy-Seiten SEO-riskant | Nur für freigegebene, indexierbare V1-Leistungsseiten aktiv ausgeben; lokalisierte URL, Sprache, Provider und sichtbare Beschreibung konsistent halten. |
| `BreadcrumbList` | `service-page-layout.tsx` auf Detailseiten; `ServicesOverviewContent.tsx` auf `/leistungen` | Breadcrumb-Namen und Routen sind ableitbar | grundsätzlich passend | Nur kanonische 200-Ziele und sprachgleiche Pfade verwenden; keine Redirect-Quellen. Sichtbare/semantische Navigation gegen JSON-LD prüfen. |
| `WebSite` | fehlt | Gesamtwebsite vorhanden | sinnvoll | Ein sprachneutral identifiziertes `WebSite`-Objekt auf der Startseite beziehungsweise zentral, mit bestätigter Origin und Publisher-Verknüpfung. |
| `WebPage` | fehlt | Jede indexierbare Seite besitzt sichtbaren Seiteninhalt | sinnvoll | Pro indexierbarer Route sprach- und URL-konsistent erzeugen; `isPartOf`/`about` nur mit stabilen IDs. |
| `FAQPage` | fehlt | Auf den drei Gutachtenseiten sind sichtbare FAQs vorhanden | optional passend | Nur bei exakt sichtbaren Fragen/Antworten und ohne Rich-Result-Versprechen hinzufügen; bei nicht indexierbaren Seiten weglassen. |

Zusätzliche Datenprüfung vor Umsetzung:

- Öffnungszeiten sind in globaler Spec und Kontaktseite bestätigt und dürfen identisch bleiben.
- `sameAs` verweist aktuell auf zwei Instagram-Profile. Vor Übernahme ist die offizielle Zugehörigkeit beider Profile erneut zu bestätigen; unsichere Links werden entfernt, nicht ersetzt.
- DESAG-/Qualifikationsaussagen werden nur dort strukturiert, wo dieselbe Aussage sichtbar, fachlich freigegeben und ohne stärkere Interpretation vorhanden ist. Keine erfundene `Certification`.
- Keine Bewertungen, Preise oder Geo-Koordinaten ergänzen, solange dafür keine bestätigte Quelle vorliegt.

### Redirect-Inventur

Die fünf vorhandenen Redirects in `next.config.mjs` sind permanent und direkt:

| Quelle | Ziel |
| --- | --- |
| `/leistungen/unfallgutachten` | `/gutachtenarten/unfallgutachten` |
| `/leistungen/fahrzeugbewertung` | `/gutachtenarten/fahrzeugbewertung` |
| `/leistungen/schadendokumentation` | `/gutachtenarten/schadendokumentation` |
| `/en/leistungen/unfallgutachten` | `/en/gutachtenarten/unfallgutachten` |
| `/ru/leistungen/unfallgutachten` | `/ru/gutachtenarten/unfallgutachten` |

Sie bleiben als notwendige Alt-URL-Signale erhalten, werden aber weder Canonical-Ziel noch Sitemap-URL oder Hreflang-Ziel. Für EN/RU-Fahrzeugbewertung und -Schadendokumentation existiert keine bestätigte alte Redirect-Quelle; es wird keine erfunden.

## Aktuelle Routen- und SEO-Matrix

Legende Structured Data: `LB/AR` = global `LocalBusiness` plus unpassendes `AutoRepair`; `S` = `Service`; `BC` = `BreadcrumbList`. Aktuell gibt es für keine Route einen Canonical, Sprachalternativen oder Sitemap-Eintrag. `TBD` bedeutet eine vor Implementierung aufzulösende Entscheidung, nicht eine erfundene Vorgabe.

### Aktuelle Title-/Description-Codes

| Code | Aktueller Title | Aktuelle Description |
| --- | --- | --- |
| H-DE | `UNEXT GmbH \| Ihr starker Partner rund ums Fahrzeug in Berlin` | `UNEXT GmbH Berlin - Unfallgutachten, Autovermietung, Autoservice & Werkstatt, Kfz-Zulassungsservice, Abschleppdienst, Premium Detailing und Expresslieferung. Zertifiziert, schnell und zuverlässig.` |
| H-EN | `UNEXT GmbH \| Your trusted automotive partner in Berlin` | `UNEXT GmbH Berlin - accident reports, car rental, workshop service, vehicle registration, towing, premium detailing and express delivery. Certified, fast and reliable.` |
| H-RU | `UNEXT GmbH \| Ваш надежный автомобильный партнер в Берлине` | `UNEXT GmbH Berlin - экспертиза ДТП, прокат авто, сервис и мастерская, регистрация автомобиля, эвакуатор и премиальный детейлинг. Быстро, надежно и профессионально.` |
| A-DE | `Unfallgutachten Berlin \| UNFALLX \| UNEXT GmbH Berlin` | `Nach einem Unfall brauchen Sie schnell Klarheit: Was ist beschädigt, welche Kosten entstehen und wie geht es mit Versicherung, Werkstatt oder Anwalt weiter? UNEXT dokumentiert Fahrzeugschäden sachlich, nachvollziehbar und unabhängig.` |
| L-DE | `6 Hauptleistungen rund ums Fahrzeug \| UNEXT GmbH Berlin` | `Diese 6 Hauptleistungen bilden den Kern von UNEXT. Sie sehen sofort, wobei wir Sie direkt unterstützen können - klar, schnell und ohne Umwege.` |
| L-EN | `Our services \| UNEXT GmbH Berlin` | `UNEXT GmbH offers a comprehensive range of vehicle-related services. Six strong business areas under one roof - professional, reliable and always there for you.` |
| L-RU | `Наши услуги \| UNEXT GmbH Berlin` | `UNEXT GmbH предлагает полный спектр услуг вокруг автомобиля. Шесть сильных направлений под одной крышей - профессионально, надежно и всегда рядом.` |
| U-DE | `Über UNEXT GmbH \| UNEXT GmbH Berlin` | `Vom Unfallgutachter zum Automotive-Partner in Berlin. UNEXT verbindet Erfahrung, Service und klare Abläufe.` |
| U-EN | `About UNEXT GmbH \| UNEXT GmbH Berlin` | `From accident reports to automotive services in Berlin. UNEXT combines experience, service and clear processes.` |
| U-RU | `О компании UNEXT GmbH \| UNEXT GmbH Berlin` | `От экспертизы ДТП к автоуслугам в Берлине. Опыт, сервис и понятные процессы.` |
| K-DE | `Kontakt für KFZ-Gutachten \| UNEXT GmbH Berlin` | `Sie benötigen ein KFZ-Gutachten, eine Fahrzeugbewertung oder eine erste Einschätzung nach einem Schaden? Sie erreichen UNEXT telefonisch, per WhatsApp, per E-Mail oder über das Kontaktformular.` |
| K-EN | `Contact for Vehicle Appraisals \| UNEXT GmbH Berlin` | `Do you need a vehicle appraisal, a vehicle valuation or an initial assessment after damage? Contact UNEXT by phone, WhatsApp, email or the contact form.` |
| K-RU | `Контакты по вопросам автоэкспертизы \| UNEXT GmbH Berlin` | `Вам нужна автоэкспертиза, оценка стоимости автомобиля или первичная оценка после повреждения? Свяжитесь с UNEXT по телефону, WhatsApp, электронной почте или через контактную форму.` |
| I-DE | `Impressum \| UNEXT GmbH Berlin` | `Impressum der UNEXT GmbH gemäß § 5 DDG.` |
| I-EN | `Legal notice \| UNEXT GmbH Berlin` | `Legal notice - UNEXT GmbH Berlin.` |
| I-RU | `Юридическая информация \| UNEXT GmbH Berlin` | `Юридическая информация - UNEXT GmbH Berlin.` |
| D-DE | `Datenschutzerklärung \| UNEXT GmbH Berlin` | `Datenschutzerklärung - UNEXT GmbH Berlin.` |
| D-EN | `Privacy policy \| UNEXT GmbH Berlin` | `Privacy policy - UNEXT GmbH Berlin.` |
| D-RU | `Политика конфиденциальности \| UNEXT GmbH Berlin` | `Политика конфиденциальности - UNEXT GmbH Berlin.` |
| G-DE | `Allgemeine Geschäftsbedingungen (AGB) \| UNEXT GmbH Berlin` | `Allgemeine Geschäftsbedingungen (AGB) - UNEXT GmbH Berlin.` |
| G-EN | `General Terms and Conditions \| UNEXT GmbH Berlin` | `General Terms and Conditions - UNEXT GmbH Berlin.` |
| G-RU | `Общие условия оказания услуг \| UNEXT GmbH Berlin` | `Общие условия оказания услуг - UNEXT GmbH Berlin.` |

### Matrix

| Sprache | Seiten-ID | Route | Indexziel | Title/Description Ist | Canonical / Alternativen Ist | OG Ist → Soll | JSON-LD Ist | Sitemap | Alt-URL/Redirect | Änderungsbedarf | Zuständige bestehende Quelle |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DE | home | `/` | index | H-DE | fehlt / fehlt | `https://unext.de` → self | LB/AR | nein | keine | Legacy-Metadata entfernen; vollständiges Social-/Sprachmodell | `app/(de)/page.tsx`, `app/(de)/layout.tsx`, `lib/metadata.ts` |
| DE | accidentAppraisal | `/gutachtenarten/unfallgutachten` | index | A-DE | fehlt / fehlt | self → self | LB/AR, S, BC | nein | `/leistungen/unfallgutachten` | UNFALLX-Titel prüfen; Canonical, Trio, Social, bereinigtes Schema | deutsche Route, `AccidentServiceDetailContent.tsx`, zentrale Utilities |
| DE | vehicleValuation | `/gutachtenarten/fahrzeugbewertung` | index | H-DE geerbt | fehlt / fehlt | Root → self | LB/AR, S, BC | nein | `/leistungen/fahrzeugbewertung` | eigene Metadata und vollständiges Trio | deutsche Route, `VehicleValuationServiceDetailContent.tsx`, zentrale Utilities |
| DE | damageDocumentation | `/gutachtenarten/schadendokumentation` | index | H-DE geerbt | fehlt / fehlt | Root → self | LB/AR, S, BC | nein | `/leistungen/schadendokumentation` | eigene Metadata und vollständiges Trio | deutsche Route, `DamageDocumentationServiceDetailContent.tsx`, zentrale Utilities |
| DE | servicesOverview | `/leistungen` | TBD: bis 026 noindex | L-DE | fehlt / fehlt | self → nach Gate self | LB/AR, BC | nein | keine | sichtbare sechs Legacy-Leistungen; erst nach 026 indexierbar | deutsche Route, `ServicesOverviewContent.tsx`, Übersetzungsquelle, zentrale Utilities |
| DE | about | `/ueber-uns` | TBD: bis 026 noindex | U-DE | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sichtbare Automotive-/Legacy-Aussagen; nach 026 neu bewerten | deutsche Route, About-Übersetzungen, zentrale Utilities |
| DE | contact | `/kontakt` | index | K-DE | fehlt / fehlt | self → self | LB/AR | nein | keine | Canonical, Trio, Social; Unternehmensdaten unverändert | deutsche Route, `contact.ts`, zentrale Utilities |
| DE | imprint | `/impressum` | TBD: Rechts-/Index-Gate | I-DE | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; externe Rechtsprüfung bleibt offen | deutsche Legal-Route, `legal.ts`, zentrale Utilities |
| DE | privacy | `/datenschutz` | TBD: Rechts-/Index-Gate | D-DE | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; externe Rechtsprüfung bleibt offen | deutsche Legal-Route, `legal.ts`, zentrale Utilities |
| DE | terms | `/agb` | TBD: Rechts-/Index-Gate | G-DE | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; externe Rechtsprüfung bleibt offen | deutsche Legal-Route, `legal.ts`, zentrale Utilities |
| EN | home | `/en` | index | H-EN | fehlt / fehlt | fälschlich Root → self | LB/AR | nein | keine | Legacy-Metadata entfernen; vollständiges Social-/Sprachmodell | lokalisierte Home-/Layout-Route, `lib/metadata.ts` |
| EN | accidentAppraisal | `/en/gutachtenarten/unfallgutachten` | index | H-EN geerbt | fehlt / fehlt | fälschlich Root → self | LB/AR, S, BC | nein | `/en/leistungen/unfallgutachten` | eigene natürliche Metadata und Trio | lokalisierte Unfallroute, `appraisal-pages.ts`, zentrale Utilities |
| EN | vehicleValuation | `/en/gutachtenarten/fahrzeugbewertung` | index | H-EN geerbt | fehlt / fehlt | fälschlich Root → self | LB/AR, S, BC | nein | keine bestätigte | eigene natürliche Metadata und Trio | lokalisierte Bewertungsroute, `appraisal-pages.ts`, zentrale Utilities |
| EN | damageDocumentation | `/en/gutachtenarten/schadendokumentation` | index | H-EN geerbt | fehlt / fehlt | fälschlich Root → self | LB/AR, S, BC | nein | keine bestätigte | eigene natürliche Metadata und Trio | lokalisierte Dokumentationsroute, `appraisal-pages.ts`, zentrale Utilities |
| EN | servicesOverview | `/en/leistungen` | TBD: bis 026 noindex | L-EN | fehlt / fehlt | self → nach Gate self | LB/AR, BC | nein | keine | sichtbare sechs Legacy-Leistungen; erst nach 026 indexierbar | lokalisierte Route, `services-and-about.ts`, zentrale Utilities |
| EN | about | `/en/ueber-uns` | TBD: bis 026 noindex | U-EN | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sichtbare Legacy-Aussagen; erst nach 026 indexierbar | lokalisierte Route, About-Übersetzungen, zentrale Utilities |
| EN | contact | `/en/kontakt` | index | K-EN | fehlt / fehlt | self → self | LB/AR | nein | keine | Canonical, Trio, Social | lokalisierte Route, `contact.ts`, zentrale Utilities |
| EN | imprint | `/en/impressum` | TBD: Rechts-/Index-Gate | I-EN | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; Rechtsprüfung offen | lokalisierte Legal-Route, `legal.ts`, zentrale Utilities |
| EN | privacy | `/en/datenschutz` | TBD: Rechts-/Index-Gate | D-EN | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; Rechtsprüfung offen | lokalisierte Legal-Route, `legal.ts`, zentrale Utilities |
| EN | terms | `/en/agb` | TBD: Rechts-/Index-Gate | G-EN | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; Rechtsprüfung offen | lokalisierte Legal-Route, `legal.ts`, zentrale Utilities |
| RU | home | `/ru` | index | H-RU | fehlt / fehlt | fälschlich Root → self | LB/AR | nein | keine | Legacy-Metadata entfernen; vollständiges Social-/Sprachmodell | lokalisierte Home-/Layout-Route, `lib/metadata.ts` |
| RU | accidentAppraisal | `/ru/gutachtenarten/unfallgutachten` | index | H-RU geerbt | fehlt / fehlt | fälschlich Root → self | LB/AR, S, BC | nein | `/ru/leistungen/unfallgutachten` | eigene natürliche Metadata und Trio | lokalisierte Unfallroute, `appraisal-pages.ts`, zentrale Utilities |
| RU | vehicleValuation | `/ru/gutachtenarten/fahrzeugbewertung` | index | H-RU geerbt | fehlt / fehlt | fälschlich Root → self | LB/AR, S, BC | nein | keine bestätigte | eigene natürliche Metadata und Trio | lokalisierte Bewertungsroute, `appraisal-pages.ts`, zentrale Utilities |
| RU | damageDocumentation | `/ru/gutachtenarten/schadendokumentation` | index | H-RU geerbt | fehlt / fehlt | fälschlich Root → self | LB/AR, S, BC | nein | keine bestätigte | eigene natürliche Metadata und Trio | lokalisierte Dokumentationsroute, `appraisal-pages.ts`, zentrale Utilities |
| RU | servicesOverview | `/ru/leistungen` | TBD: bis 026 noindex | L-RU | fehlt / fehlt | self → nach Gate self | LB/AR, BC | nein | keine | sichtbare sechs Legacy-Leistungen; erst nach 026 indexierbar | lokalisierte Route, `services-and-about.ts`, zentrale Utilities |
| RU | about | `/ru/ueber-uns` | TBD: bis 026 noindex | U-RU | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sichtbare Legacy-Aussagen; erst nach 026 indexierbar | lokalisierte Route, About-Übersetzungen, zentrale Utilities |
| RU | contact | `/ru/kontakt` | index | K-RU | fehlt / fehlt | self → self | LB/AR | nein | keine | Canonical, Trio, Social | lokalisierte Route, `contact.ts`, zentrale Utilities |
| RU | imprint | `/ru/impressum` | TBD: Rechts-/Index-Gate | I-RU | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; Rechtsprüfung offen | lokalisierte Legal-Route, `legal.ts`, zentrale Utilities |
| RU | privacy | `/ru/datenschutz` | TBD: Rechts-/Index-Gate | D-RU | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; Rechtsprüfung offen | lokalisierte Legal-Route, `legal.ts`, zentrale Utilities |
| RU | terms | `/ru/agb` | TBD: Rechts-/Index-Gate | G-RU | fehlt / fehlt | self → nach Gate self | LB/AR | nein | keine | sachliche Metadata; Rechtsprüfung offen | lokalisierte Legal-Route, `legal.ts`, zentrale Utilities |

Technische Zustände außerhalb der Matrix: `app/(de)/not-found.tsx`, `app/(localized)/[locale]/not-found.tsx`, beide Catch-all-Routen und Error-Zustände dürfen nicht indexiert und nie in Sitemap/Hreflang aufgenommen werden. Die Catch-all-Seiten rufen bereits `notFound()` auf; Next.js 16 injiziert für diesen Zustand automatisch `robots=noindex`, auch bei gestreamten 404-Antworten. Die vorhandenen `error.tsx` sind Client Error Boundaries und keine eigenständigen öffentlichen URLs; sie können keine Metadata exportieren. Bei der Umsetzung sind deshalb 404-HTML/Status und unerwartete Error-Antworten separat zu verifizieren. Falls ein Fehlerpfad nicht zuverlässig als 5xx oder `noindex` ausgeliefert wird, ist ein eng begrenzter serverseitiger `X-Robots-Tag`-Mechanismus als Gate zu planen, nicht pauschal per globaler Route-Regel.

## Canonical- und Hreflang-Sollmodell

1. Eine bestätigte `PRODUCTION_ORIGIN` wird zentral definiert und erzeugt alle absoluten URLs. Vorher keine technische Umsetzung. Der aktuelle Kandidat ist `https://unext.de`; Hostvariante, HTTPS und Deployment-Ziel müssen ausdrücklich bestätigt werden.
2. Jede indexierbare 200-Seite erhält genau einen selbstreferenziellen Canonical.
3. `localizedPagePaths` bleibt die fachliche Seiten-ID-Quelle. Nur wirklich gleichwertige Seiten derselben ID bilden ein gegenseitiges Trio mit `de`, `en` und `ru`; jede Variante verweist auch auf sich selbst.
4. Sprachcodes werden ohne erfundene Region als `de`, `en` und `ru` verwendet. Die bestehenden OG-Locale-Werte `de_DE`, `en_US`, `ru_RU` bleiben davon getrennt und sind vor Umsetzung auf die tatsächliche Zielgruppe zu prüfen.
5. `x-default` wird nur beim vollständigen Home-Cluster eingesetzt und zeigt auf die bestätigte deutsche Default-Startseite `/`. Für Detail-, Kontakt-, Übersichts- und Legal-Cluster wird kein `x-default` gesetzt, weil keine sprachneutrale Auswahlseite existiert.
6. Fehlende oder nicht freigegebene Fachvarianten werden nicht auf eine Sprach-Startseite umgebogen. Ein unvollständiger Cluster bleibt ohne erfundene Alternative.
7. Redirect-Quellen, 404-, Error-, Catch-all-, noindex- und Legacy-Ziele werden weder Canonical noch Hreflang-Ziel.
8. Sitemap-Alternativen verwenden dieselben Cluster wie HTML-Metadata. Canonical, OG-URL, JSON-LD-URL und Sitemap-URL müssen pro Route identisch sein.

## Title- und Description-Entwürfe

Die folgenden Texte wurden am 18.08.2026 ausdrücklich zur technischen Umsetzung freigegeben. DE ist die fachliche Referenz; EN/RU sind sinngleich und nicht stärker formuliert. Seiten mit `TBD` bleiben trotz vorhandenem Text bis zu ihrem Gate `noindex`.

### Deutsch

| Seiten-ID | Title-Entwurf | Description-Entwurf |
| --- | --- | --- |
| home | `KFZ-Gutachter Berlin \| UNEXT` | `Unabhängige KFZ-Gutachten in Berlin: Unfallgutachten, Fahrzeugbewertungen und Schadendokumentationen. Persönliche Abstimmung per Telefon, WhatsApp oder Anfrage.` |
| accidentAppraisal | `Unfallgutachten Berlin \| UNEXT` | `Unabhängiges Unfallgutachten in Berlin mit nachvollziehbarer Schadendokumentation und fachlicher Einordnung. UNEXT klärt mit Ihnen Umfang und nächste Schritte.` |
| vehicleValuation | `Fahrzeugbewertung Berlin \| UNEXT` | `Professionelle Fahrzeugbewertung in Berlin für Kauf, Verkauf oder Dokumentation. Zustand, Ausstattung und relevante Fahrzeugdaten werden nachvollziehbar eingeordnet.` |
| damageDocumentation | `Schadendokumentation Berlin \| UNEXT` | `Strukturierte Schadendokumentation in Berlin mit Fotos, Fahrzeugdaten und vorhandenen Unterlagen. UNEXT stimmt den passenden Umfang vorab mit Ihnen ab.` |
| servicesOverview | `KFZ-Gutachten in Berlin \| Leistungen von UNEXT` | `Überblick über Unfallgutachten, Fahrzeugbewertung und Schadendokumentation von UNEXT in Berlin. Wählen Sie die passende Gutachtenart oder lassen Sie sich beraten.` |
| about | `Über UNEXT \| KFZ-Gutachter in Berlin` | `UNEXT ist Ansprechpartner für KFZ-Gutachten in Berlin. Erfahren Sie mehr über das Unternehmen, die fachliche Arbeitsweise und die persönliche Betreuung.` |
| contact | `Kontakt für KFZ-Gutachten in Berlin \| UNEXT` | `Sie benötigen ein Unfallgutachten, eine Fahrzeugbewertung oder eine Schadendokumentation? Kontaktieren Sie UNEXT per Telefon, WhatsApp, E-Mail oder Anfrage.` |
| imprint | `Impressum \| UNEXT GmbH` | `Impressum und Anbieterangaben der UNEXT GmbH in Berlin.` |
| privacy | `Datenschutzerklärung \| UNEXT GmbH` | `Informationen der UNEXT GmbH zur Verarbeitung personenbezogener Daten und zu Ihren Datenschutzrechten.` |
| terms | `Allgemeine Geschäftsbedingungen \| UNEXT GmbH` | `Allgemeine Geschäftsbedingungen der UNEXT GmbH für Anfragen und individuell vereinbarte Leistungen.` |

### Englisch

| Seiten-ID | Title-Entwurf | Description-Entwurf |
| --- | --- | --- |
| home | `Vehicle Appraiser in Berlin \| UNEXT` | `Independent vehicle appraisal services in Berlin: accident damage appraisals, vehicle valuations and damage documentation. Contact UNEXT by phone, WhatsApp or enquiry.` |
| accidentAppraisal | `Accident Damage Appraisal Berlin \| UNEXT` | `Independent accident damage appraisal in Berlin with clear damage documentation and assessment. UNEXT discusses the scope and next steps with you.` |
| vehicleValuation | `Vehicle Valuation Berlin \| UNEXT` | `Professional vehicle valuation in Berlin for purchase, sale or documentation. Condition, equipment and relevant vehicle details are assessed clearly.` |
| damageDocumentation | `Vehicle Damage Documentation Berlin \| UNEXT` | `Structured vehicle damage documentation in Berlin using photographs, vehicle details and available records. UNEXT agrees the appropriate scope with you in advance.` |
| servicesOverview | `Vehicle Appraisal Services Berlin \| UNEXT` | `Explore UNEXT services for accident damage appraisals, vehicle valuations and damage documentation in Berlin, or contact us to discuss the right option.` |
| about | `About UNEXT \| Vehicle Appraisers in Berlin` | `Learn about UNEXT, its professional approach to vehicle appraisals in Berlin and the personal support provided throughout each enquiry.` |
| contact | `Contact UNEXT for Vehicle Appraisals in Berlin` | `Need an accident damage appraisal, vehicle valuation or damage documentation? Contact UNEXT by phone, WhatsApp, email or the enquiry form.` |
| imprint | `Legal Notice \| UNEXT GmbH` | `Legal notice and provider information for UNEXT GmbH in Berlin.` |
| privacy | `Privacy Policy \| UNEXT GmbH` | `Information from UNEXT GmbH about personal data processing and your data protection rights.` |
| terms | `General Terms and Conditions \| UNEXT GmbH` | `General terms and conditions of UNEXT GmbH for enquiries and individually agreed services.` |

### Russisch

| Seiten-ID | Title-Entwurf | Description-Entwurf |
| --- | --- | --- |
| home | `Автоэкспертиза в Берлине \| UNEXT` | `Независимая автоэкспертиза в Берлине: оценка ущерба после ДТП, оценка стоимости автомобиля и фиксация повреждений. Свяжитесь с UNEXT по телефону, WhatsApp или через форму.` |
| accidentAppraisal | `Оценка ущерба после ДТП в Берлине \| UNEXT` | `Независимая оценка ущерба после ДТП в Берлине с понятной фиксацией и оценкой повреждений. UNEXT согласует с вами объём работы и дальнейшие шаги.` |
| vehicleValuation | `Оценка стоимости автомобиля в Берлине \| UNEXT` | `Профессиональная оценка стоимости автомобиля в Берлине с учётом состояния, комплектации и ключевых данных. Объём оценки согласуется заранее.` |
| damageDocumentation | `Фиксация повреждений в Берлине \| UNEXT` | `Последовательная фиксация повреждений автомобиля в Берлине с фотографиями, данными автомобиля и имеющимися документами. Объём согласуется заранее.` |
| servicesOverview | `Услуги автоэкспертизы в Берлине \| UNEXT` | `Услуги UNEXT по оценке ущерба после ДТП, оценке стоимости автомобиля и фиксации повреждений в Берлине. Выберите подходящий вариант или свяжитесь с нами.` |
| about | `О компании UNEXT \| Автоэкспертиза в Берлине` | `Узнайте больше о компании UNEXT, профессиональном подходе к автоэкспертизе в Берлине и персональном сопровождении каждого запроса.` |
| contact | `Контакты по вопросам автоэкспертизы \| UNEXT` | `Нужна оценка ущерба после ДТП, оценка стоимости или фиксация повреждений? Свяжитесь с UNEXT по телефону, WhatsApp, электронной почте или через форму.` |
| imprint | `Юридическая информация \| UNEXT GmbH` | `Юридическая информация и сведения об исполнителе UNEXT GmbH в Берлине.` |
| privacy | `Политика конфиденциальности \| UNEXT GmbH` | `Информация UNEXT GmbH об обработке персональных данных и ваших правах в области защиты данных.` |
| terms | `Общие условия оказания услуг \| UNEXT GmbH` | `Общие условия UNEXT GmbH для запросов и услуг, согласованных в индивидуальном порядке.` |

## Sitemap-, Robots- und Indexierungsmodell

- Die neue zentrale `app/sitemap.ts` enthält ausschließlich kanonische, indexierbare 200-Ziele und deren vollständige freigegebene Sprachalternativen.
- Initial sicher indexierbar geplant sind Home, drei Gutachtenarten und Kontakt in DE/EN/RU. `/leistungen` und `/ueber-uns` bleiben bis zum sichtbaren Legacy-Cleanup aus Aufgabe 026 `noindex` und außerhalb der Sitemap. Legal-Routen bleiben bis zur ausdrücklichen Rechts-/Indexentscheidung `TBD` und außerhalb der Sitemap.
- Redirect-Quellen, alte Leistungsdetailseiten, Error-, 404-, Catch-all-, API- und sonstige technische Zustände werden ausgeschlossen.
- `app/robots.ts` erlaubt das Crawling der indexierbaren öffentlichen Website, verweist mit absoluter URL auf die Sitemap und sperrt keine URL, die zugleich indexierbar sein soll. `noindex` wird über Seiten-Metadata beziehungsweise den passenden Response-Mechanismus gesetzt, nicht allein über `Disallow`.
- Keine erfundenen `lastModified`-Werte, Prioritäten oder Change-Frequencies. Nur belastbare Daten verwenden; andernfalls Felder weglassen.
- Nach Umsetzung müssen gerenderte Head-Daten, `/sitemap.xml`, `/robots.txt`, Redirect-Antworten und 404-Zustände in DE/EN/RU geprüft werden.

## Legacy-SEO-Abgrenzung

| Fund | Einordnung | Behandlung |
| --- | --- | --- |
| Mietwagen/Autovermietung | aktive Home-/Leistungs-Metadata, Keywords und sichtbarer Legacy-Code | Aus aktiver Metadata/Structured Data in 029 entfernen; sichtbare/physische Inhalte bleiben 026. |
| Werkstatt/Autoservice | aktive Home-/Leistungs-Metadata, Keywords und `AutoRepair` | Metadata-/JSON-LD-Signal in 029 entfernen; sichtbare Route/Dateien bleiben 026. |
| Detailing/Fahrzeugaufbereitung | aktive Home-/Leistungs-Metadata und Keywords | In 029 aus aktiver SEO-Ausgabe entfernen; physischer Cleanup 026. |
| Zulassungsservice | aktive Home-/Leistungs-Metadata und Keywords | In 029 aus aktiver SEO-Ausgabe entfernen; physischer Cleanup 026. |
| Pannenhilfe/Abschleppen | aktive Home-/Leistungs-Metadata und Keywords | In 029 aus aktiver SEO-Ausgabe entfernen; physischer Cleanup 026. |
| Expresslieferung/Kurierdienst | alte Home-Metadata/Keywords | In 029 entfernen; historische Dokumentation bleibt unangetastet. |
| Automotive-Partner | alte Home-/About-Metadata und sichtbare Legacy-Positionierung | Nicht in neue aktive Metadata übernehmen; sichtbarer About-Cleanup bleibt 026. |
| `AutoRepair` | globales JSON-LD | In 029 entfernen, weil es einen Reparaturbetrieb bezeichnet. |
| alte `/leistungen/...`-Gutachtenpfade | fünf freigegebene Redirect-Quellen | Als notwendige Redirect-Signale behalten; nie indexieren, kanonisieren oder in Sitemap/Hreflang aufnehmen. |
| sonstige alte `/leistungen/...`-Detailseiten | noch vorhandene Legacy-Routen und Metadata | Bis 026/abschließender Routingentscheidung `noindex`, außerhalb Sitemap und ohne aktive V1-Structured-Data-Ausgabe; nicht in 029 löschen. |
| Changelog, Specs und Done-Aufgaben mit alten Begriffen | historischer Nachweis oder ältere Planung | Nicht als aktive SEO-Quelle werten und nicht rückwirkend bereinigen. Echte aktuelle Spec-Widersprüche separat benennen. |

### Noch vorhandene Legacy-Leistungsrouten

Diese Routen gehören nicht zur 30-zeiligen V1-Matrix, senden im aktuellen Repository aber weiterhin relevante SEO-Signale. Die fünf regulären Legacy-Leistungen liefern jeweils eigene alte Metadata sowie global `LB/AR`, `Service` und `BreadcrumbList`; durch die Layout-Vorgabe gelten sie aktuell als `index, follow`. Sie werden in Aufgabe 029 nicht gelöscht, müssen aber bis zur Behandlung in Aufgabe 026 ausdrücklich `noindex` bleiben, aus Sitemap/Hreflang ausgeschlossen werden und dürfen kein aktives V1-`Service`-Signal senden.

| Sprache | Route | Effektiver Ist-Zustand | SEO-Ziel in 029 | Zuständige Quelle |
| --- | --- | --- | --- | --- |
| DE | `/leistungen/autovermietung` | 200, alte Rental-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | deutsche Route, `RentalServiceDetailContent.tsx` |
| DE | `/leistungen/autoservice` | 200, alte Workshop-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | deutsche Route, `WorkshopServiceDetailContent.tsx` |
| DE | `/leistungen/detailing` | 200, alte Detailing-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | deutsche Route, `DetailingServiceDetailContent.tsx` |
| DE | `/leistungen/zulassungsservice` | 200, alte Registration-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | deutsche Route, `RegistrationServiceDetailContent.tsx` |
| DE | `/leistungen/abschleppdienst-pannenhilfe` | 200, alte Towing-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | deutsche Route, `TowingServiceDetailContent.tsx` |
| EN | `/en/leistungen/unfallgutachten` | permanenter Redirect auf kanonische EN-Route; alte Page-Datei weiterhin vorhanden | Redirect erhalten; nie Sitemap/Hreflang/Canonical | lokalisierte alte Unfallroute, `next.config.mjs` |
| EN | `/en/leistungen/autovermietung` | 200, alte Rental-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `RentalServiceDetailContent.tsx` |
| EN | `/en/leistungen/autoservice` | 200, alte Workshop-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `WorkshopServiceDetailContent.tsx` |
| EN | `/en/leistungen/detailing` | 200, alte Detailing-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `DetailingServiceDetailContent.tsx` |
| EN | `/en/leistungen/zulassungsservice` | 200, alte Registration-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `RegistrationServiceDetailContent.tsx` |
| EN | `/en/leistungen/abschleppdienst-pannenhilfe` | 200, alte Towing-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `TowingServiceDetailContent.tsx` |
| RU | `/ru/leistungen/unfallgutachten` | permanenter Redirect auf kanonische RU-Route; alte Page-Datei weiterhin vorhanden | Redirect erhalten; nie Sitemap/Hreflang/Canonical | lokalisierte alte Unfallroute, `next.config.mjs` |
| RU | `/ru/leistungen/autovermietung` | 200, alte Rental-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `RentalServiceDetailContent.tsx` |
| RU | `/ru/leistungen/autoservice` | 200, alte Workshop-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `WorkshopServiceDetailContent.tsx` |
| RU | `/ru/leistungen/detailing` | 200, alte Detailing-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `DetailingServiceDetailContent.tsx` |
| RU | `/ru/leistungen/zulassungsservice` | 200, alte Registration-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `RegistrationServiceDetailContent.tsx` |
| RU | `/ru/leistungen/abschleppdienst-pannenhilfe` | 200, alte Towing-Metadata, index/follow, LB/AR + S + BC | noindex, keine Sitemap/Hreflang/V1-Schemaausgabe | lokalisierte Route, `TowingServiceDetailContent.tsx` |

Die zwei weiteren deutschen Altquellen `/leistungen/fahrzeugbewertung` und `/leistungen/schadendokumentation` besitzen keine Page-Dateien und werden bereits permanent auf die kanonischen Gutachtenarten-Routen weitergeleitet; sie sind im Redirect-Inventar erfasst.

## Konkreter Dateiplan für die spätere Umsetzung

### Bestehende Dateien

- `lib/i18n.ts`: vorhandene `localizedPagePaths` als einzige Seiten-ID-/Sprachpfad-Matrix wiederverwenden und nur bei zwingendem Typbedarf erweitern.
- `lib/metadata.ts`: alte Home-Keywords ersetzen; bestätigte Origin, seiten-ID-basierte DE/EN/RU-Datensätze, Canonical, Alternativen, Robots, OpenGraph, Twitter und lokale Bilder zentral erzeugen. Keine zweite konkurrierende Metadata-Quelle anlegen.
- `lib/structuredData.ts`: Origin zentral beziehen; `AutoRepair` entfernen; Unternehmensdaten normalisieren; Builder für `WebSite`, `WebPage`, V1-`Service`, Breadcrumbs und optional sichtbare FAQs konsistent verknüpfen.
- `components/StructuredData.tsx`: sichere vorhandene JSON-Ausgabe wiederverwenden; nur ändern, wenn für `@graph` oder Typisierung nachweislich nötig.
- `app/(de)/layout.tsx` und `app/(localized)/[locale]/layout.tsx`: zentrale Site-Metadata/Unternehmensentität weiterverwenden; keine duplizierten Page-Metadaten im Layout.
- Die 20 bestehenden V1-Route-Dateien, die zusammen die 30 Sprachrouten der Matrix erzeugen: eigene `generateMetadata` nur über den zentralen Builder anbinden beziehungsweise über ein gemeinsames, typisiertes Muster vereinheitlichen. Keine sichtbaren Texte ändern.
- `components/service-page-layout.tsx` und `components/ServicesOverviewContent.tsx`: bestehende Structured-Data-Ausgabe auf V1-/Indexierungsstatus begrenzen und URL-/Breadcrumb-Quellen zentralisieren; sichtbares Layout unverändert lassen.
- `next.config.mjs`: vorhandene Redirects wurden read-only verifiziert und nicht geändert. Die Hostweiterleitung von www auf non-www wird zuverlässig in der späteren Produktions-/Hostingkonfiguration umgesetzt und bleibt deshalb ein verbindliches Gate für Aufgabe 034; Pfad und Query-Parameter sind zu erhalten.

### Mögliche neue Dateien

- `app/sitemap.ts`: eine kleine App-Router-Sitemap aus der zentralen Seiten-ID-/Indexierungsquelle.
- `app/robots.ts`: eine App-Router-Robots-Ausgabe mit bestätigter Sitemap-URL.
- Eine kleine zentrale SEO-Daten-/Typdatei unter `lib/` nur dann, wenn `lib/metadata.ts` sonst unübersichtlich wird. Sie darf keine parallele Pfadmatrix zu `localizedPagePaths` erzeugen.
- Lokale OG-/Twitter-Dateien oder ein zentraler Bild-Datensatz nur mit bestehenden, geprüften Assets. Keine Platzhalter und keine externen Bildabhängigkeiten.

### Ausdrücklich nicht ändern

- Sichtbare Übersetzungsquellen und Website-Texte, solange kein klarer Konflikt einen separaten Content-Schritt erfordert.
- Legacy-Routen/-Komponenten/-Assets, Rechtstexte, Formulare, API-Routen, Environment-Konfiguration sowie Aufgaben 026/033/034/035.

## Vorgehen

1. Plan, vorgeschlagene Texte, Origin- und Index-Gates ausdrücklich freigeben lassen.
2. Vor Code Branch, Working Tree, aktive Aufgabe, Spec-Hierarchie und aktuellen `main`-Stand erneut prüfen.
3. Zentrale URL-, Seiten-ID- und Metadata-Struktur aus vorhandenen Utilities ableiten; keine doppelten Pfadtabellen.
4. Home, drei Gutachtenarten und Kontakt in DE/EN/RU umsetzen; gated Routen nur gemäß freigegebener Indexentscheidung behandeln.
5. Structured Data auf bestätigte Unternehmens- und V1-Service-Daten begrenzen.
6. Sitemap, Robots und noindex-Zustände implementieren.
7. Canonical/Hreflang/OG/Twitter/JSON-LD/Sitemap/Robots gerendert und sprachübergreifend prüfen; Redirect-Ziele und Fehlerzustände testen.
8. Lint, TypeScript, Build, Router-Check, Local-SEO-, Content-Consistency- und Quality-Review durchführen.
9. Ergebnisse und verbleibende Gates dokumentieren; Aufgabe nur nach ausdrücklicher Nutzerfreigabe abschließen.

## Abhängigkeiten

- Abgeschlossen: 021, 030, 032, 049, 050 und 051.
- Freigegeben: Produktions-Origin `https://unext.de`, Metadata-Texte, initiales Indexierungsmodell sowie Verwendung der vorhandenen lokalen Seitenbilder. `/leistungen`, `/ueber-uns` und Legal-Routen bleiben bis zu ihren dokumentierten Gates `noindex`; unbestätigte Social-Profile werden nicht strukturiert ausgegeben.
- Aufgabe 026 bleibt verantwortlich für sichtbaren und physischen Legacy-Cleanup. Aufgabe 029 darf gated Routen bis dahin noindex halten, aber nicht nebenbei bereinigen.
- Externe Rechtsprüfung bleibt ein Launch-Gate, nicht Teil der SEO-Implementierung.
- Aufgabe 033 prüft später den vollständigen Launchstand; 034 und 035 bleiben unverändert nachgelagert.

## Verbindliches Vor-Launch-Indexierungs-Gate

- Nach Abschluss von Aufgabe 026 müssen `/leistungen`, `/en/leistungen`, `/ru/leistungen`, `/ueber-uns`, `/en/ueber-uns` und `/ru/ueber-uns` erneut geprüft werden. Diese Seiten dürfen erst indexierbar werden, wenn ihre Legacy-Inhalte vollständig bereinigt und sie ausdrücklich für die Indexierung freigegeben wurden.
- Impressum, Datenschutz und AGB müssen in DE, EN und RU nach der externen Rechtsprüfung erneut auf ihre Indexfreigabe geprüft werden. Die externe Rechts- und Indexfreigabe bleibt offen.
- Vor dem Launch muss eine vollständige Prüfung aller V1-Routen bestätigen, dass keine wichtige freigegebene Seite versehentlich auf `noindex` geblieben ist und keine rechtlich ungeprüfte, nicht freigegebene oder Legacy-Inhalte enthaltende Seite versehentlich indexierbar ist. Sitemap, Canonicals, Hreflang, Robots und das finale Indexierungsmodell müssen vollständig übereinstimmen.
- Diese Prüfung bleibt ein verbindliches Launch-Gate und gilt durch den formalen Abschluss von Aufgabe 029 ausdrücklich noch nicht als erledigt.
- Die Zuständigkeiten bleiben getrennt: Legacy-Cleanup ist Aufgabe 026, finale Launch-QA ist Aufgabe 033, www-/Deployment-Konfiguration ist Aufgabe 034 und Monitoring ist Aufgabe 035.

## Risiken und Stopppunkte

- Die Produktions-Origin und non-www-Hostvariante sind eindeutig bestätigt. Die tatsächliche www-Weiterleitung bleibt Aufgabe 034, weil sie erst in der Produktions-/Hostingkonfiguration zuverlässig erzwungen und geprüft werden kann.
- Stoppen, wenn EN/RU-Metadata fachlich stärker als die deutsche Referenz wird oder eine professionelle Sprachfreigabe verlangt wird, die nicht vorliegt.
- Stoppen, wenn die Indexierung von sichtbaren Legacy-Seiten aktive Nicht-Scope-Leistungen in Suchmaschinen bewerben würde.
- Stoppen, wenn Structured Data eine nicht sichtbare Leistung, Qualifikation, Zertifizierung, Bewertung, Preisangabe oder Öffnungszeit behaupten würde.
- Stoppen und Nutzerentscheidung einholen, wenn externe Rechtsprüfung und Indexierungswunsch für Legal-Routen kollidieren.
- Keine Redirect-, Routing-, Dependency-, Environment- oder globale Layoutänderung ohne eigenen nachgewiesenen Bedarf und Freigabe.

## Technischer Umsetzungsstand vom 18.08.2026

- `lib/metadata.ts` ist die einzige fachliche SEO-Datenquelle. Dort sind `https://unext.de`, die freigegebenen DE/EN/RU-Texte, Indexierungsstatus, lokale Social-Bilder sowie Builder für Layout-, V1- und Legacy-Metadata zentralisiert.
- Alle 20 V1-Route-Dateien erzeugen damit die Metadata der 30 Sprachrouten. Home, drei Gutachtenarten und Kontakt besitzen je Sprache genau einen selbstreferenziellen Canonical sowie gegenseitige `de`-, `en`- und `ru`-Alternativen. Nur der Home-Cluster besitzt zusätzlich `x-default` auf die deutsche Startseite.
- `/leistungen`, `/ueber-uns`, die Legal-Routen und 15 weiterhin physisch vorhandene Legacy-Leistungsseiten bleiben `noindex, follow`, außerhalb von Sitemap und Hreflang. Die Legacy-Seiten besitzen keinen Canonical und kein leistungsbezogenes Structured Data.
- `app/sitemap.ts` erzeugt 15 kanonische, indexierbare V1-URLs ohne erfundene Änderungsdaten, Prioritäten oder Frequenzen. `app/robots.ts` erlaubt öffentliches Crawling und verweist ausschließlich auf `https://unext.de/sitemap.xml`.
- Das globale JSON-LD enthält eine identische `LocalBusiness`-Entität mit bestätigten Unternehmensdaten und eine verknüpfte `WebSite`-Entität. Indexierbare Home-/Kontaktseiten erhalten `WebPage`; die neun Gutachtenseiten zusätzlich `Service`, `BreadcrumbList` und die exakt sichtbaren FAQs als `FAQPage`.
- `AutoRepair`, `ProfessionalService`, unbestätigte `sameAs`-Profile und aktive Structured-Data-Signale für Legacy-Leistungen sind nicht enthalten. Bewertungen, Preise, Geo-Koordinaten, Auszeichnungen, staatliche Anerkennungen oder Versicherungszusagen wurden nicht ergänzt.
- Die fünf vorhandenen permanenten Redirects bleiben unverändert. Die www-Weiterleitung ist nicht durch eine ungeplante Next.js-Sonderlösung umgesetzt: Aufgabe 034 muss `https://www.unext.de/*` in der echten Produktions-/Hostingkonfiguration dauerhaft mit Pfad- und Query-Erhalt auf `https://unext.de/*` weiterleiten und prüfen.
- Die Catch-all-Routen verwenden weiter `notFound()`. Next.js ergänzt dadurch gerendert `noindex`; bei gestreamten Catch-all-Antworten kann technisch HTTP 200 entstehen. Es gibt weder Canonical noch Hreflang auf diesen Zuständen. Die Client-Error-Boundaries sind keine adressierbaren Seiten; echte Serverfehler bleiben 5xx-Zustände und werden nicht als Sitemap-, Canonical- oder Hreflang-Ziel erzeugt.
- Es wurden keine sichtbaren Texte, Routen, Redirects, Formulare, Legaltexte, Assets, Dependencies, Environment-Einstellungen oder globalen Layoutgrößen geändert. Die externe Rechtsprüfung und alle nachgelagerten Launch-Gates bleiben offen.
- `ROADMAP.md` bleibt unverändert, weil Reihenfolge, Prioritäten und Projektphasen durch die Umsetzung nicht verändert wurden.

### Prüfprotokoll

- `git diff --check`, ESLint und `npx tsc --noEmit` sind ohne Befund erfolgreich. Der finale Produktions-Build mit Next.js 16.2.6 ist erfolgreich; ein vorheriger Wiederholungslauf wurde nach erfolgreicher Kompilierung einmal durch lokales `spawn EPERM` blockiert und anschließend mit erlaubter Worker-Ausführung vollständig bestanden.
- Die Produktions-Runtimeprüfung auf Port 3105 erfasste alle 30 V1-Routen mit HTTP-Status, `html lang`, Title, Description, Canonical, Hreflang, OpenGraph-URL, Robots, Structured-Data-Typen und Sitemap-Zuordnung. Ergebnis: 30/30 V1-Routen, 15 Sitemap-URLs, 48 Sitemap-Sprachlinks, sechs erreichbare lokale Social-Bilder, 15 isolierte Legacy-`noindex`-Routen, fünf direkte permanente Redirects mit Query-Erhalt und drei sprachbezogene Catch-all-`noindex`-Zustände ohne Fehler. Der Server wurde beendet; Port 3105 war danach frei.
- Der lokale `next-router-check` prüfte 33 Page-Routen, davon 16 datenladend, und meldete keine fehlende Pflicht-Boundary.
- Local-SEO-, Content-Consistency- und Quality-Review sind ohne verbleibenden In-Scope-Blocker bestanden. Das zusätzliche Legal-/Trust-Review bestätigt konsistente Unternehmensdaten und keine unbestätigten Structured-Data-Aussagen; die weiterhin offene externe Rechtsprüfung bleibt ausdrücklich ein Launch-Blocker außerhalb von Aufgabe 029.

## Akzeptanzkriterien

- [x] Die endgültige Produktions-Origin einschließlich HTTPS und Hostvariante ist ausdrücklich bestätigt und zentral definiert.
- [x] Alle freigegebenen V1-Seiten besitzen in DE/EN/RU eindeutige, natürliche und fachlich gleichwertige Titles und Descriptions.
- [x] Deutsch bleibt fachliche Referenz; EN/RU enthalten keine stärkeren Versprechen, erfundenen Leistungen oder zusätzlichen Qualifikationen.
- [x] Jede indexierbare Seite besitzt einen selbstreferenziellen absoluten Canonical.
- [x] Jede fachlich gleichwertige DE/EN/RU-Gruppe besitzt vollständige, gegenseitige und selbstreferenzielle `hreflang`-Links mit `de`, `en` und `ru`.
- [x] `x-default` wird nur für das freigegebene Home-Modell verwendet; es gibt keine Ersatzverlinkung auf fachlich andere Seiten.
- [x] Redirect-, noindex-, Error-, 404-, Catch-all- und Legacy-URLs sind weder Canonical- noch Hreflang-Ziel.
- [x] OpenGraph- und Twitter-Metadata nutzen pro Route dieselben Titel, Descriptions und kanonischen URLs sowie geprüfte lokale Assets ohne unnötige externe Abhängigkeit.
- [x] `app/sitemap.ts` enthält ausschließlich kanonische, indexierbare 200-Ziele und korrekte freigegebene Sprachalternativen.
- [x] `app/robots.ts` ist widerspruchsfrei, verweist auf die bestätigte Sitemap und blockiert keine zugleich indexierbare URL.
- [x] Error-, 404- und technische Catch-all-Zustände sind nachweisbar `noindex` und fehlen in Sitemap/Hreflang.
- [x] Das Unternehmens-JSON-LD ist sprachübergreifend identisch, verwendet bestätigte Firmendaten und eine stabile `@id`.
- [x] `AutoRepair` und jede Werkstatt-/Meisterbetrieb-/Reparaturdarstellung sind aus aktiver Metadata und Structured Data entfernt.
- [x] `ProfessionalService` wird nicht verwendet; `LocalBusiness`, `Service`, `WebSite`, `WebPage`, `BreadcrumbList` und optional `FAQPage` entsprechen der tatsächlichen sichtbaren Grundlage.
- [x] Die drei V1-Gutachtenarten besitzen lokalisierte, sichtbare und URL-konsistente `Service`-Daten; keine Legacy-Leistung erhält ein aktives V1-Service-Signal.
- [x] Es gibt keine erfundenen Bewertungen, Preise, Geo-Koordinaten, Qualifikationen, Zertifizierungen, Versicherungszusagen oder rechtlichen Freigaben.
- [x] Alte Begriffe zu Mietwagen, Werkstatt, Detailing, Aufbereitung, Zulassung, Pannenhilfe, Abschleppen, Express/Kurier und Automotive-Partner erscheinen nicht mehr in aktiver V1-Metadata oder Structured Data.
- [x] Keine Route wird gelöscht; vorhandene Redirects werden nur bei nachgewiesenem Bedarf und ausdrücklicher Freigabe geändert.
- [x] `/leistungen`, `/ueber-uns` und die Legal-Routen werden erst nach dokumentierter Gate-Entscheidung indexiert und in die Sitemap aufgenommen.
- [x] Die Umsetzung ist auf DE, EN und RU anhand der gerenderten Head-Tags, JSON-LD-Ausgabe, Sitemap, Robots, Redirects und Fehlerzustände geprüft.
- [x] `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` sind erfolgreich.
- [x] Der lokale `next-router-check` meldet keine fehlende Pflicht-Boundary.
- [x] Local-SEO-, Content-Consistency- und Quality-Review sind vor Abschluss durchgeführt und Findings behoben oder ausdrücklich freigegeben.
- [x] Aufgabe 026, 033, 034 und 035 bleiben getrennt; Aufgabe 029 macht die Website nicht automatisch launchbereit.
- [ ] Aufgabe 029 wird nur nach Review, Zusammenfassung und ausdrücklicher Nutzerfreigabe nach `workflow/done/` verschoben.

## Status

Status: wartet auf Review
