# Launch Readiness

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/02-feature-specs/digitale-schadenaufnahme.md`
- `specs/02-feature-specs/ki-voranalyse.md`
- `specs/02-feature-specs/contact-flow.md`
- `specs/02-feature-specs/seo.md`
- `specs/02-feature-specs/faq.md`
- `specs/02-feature-specs/mehrsprachigkeit.md`
- `specs/03-technical-specs/frontend.md`
- `specs/03-technical-specs/routing.md`
- `specs/03-technical-specs/data-model.md`
- `specs/03-technical-specs/supabase.md`
- `specs/03-technical-specs/ai-analysis.md`
- `specs/04-visual-rules/visual-rules.md`
- `specs/05-user-stories/user-stories.md`

Diese Spec erfindet keine neuen fachlichen Annahmen. Sie beschreibt Launch-Readiness-Leitplanken und Pruefpunkte fuer die erste veroeffentlichbare UNEXT KFZ-Gutachten-Webseite.

## 1. Kurzueberblick / Executive Summary

Diese Datei beschreibt Launch-Readiness-Leitplanken und Pruefpunkte.

Sie ist keine Code-, UI-, Content-, Upload-, Supabase-, KI-, Admin- oder Portal-Umsetzung.

Launch Readiness ist ein Gate vor Veroeffentlichung.

Version 1 darf nur freigegebene Inhalte und Funktionen enthalten.

Roadmap-Funktionen duerfen nicht als live erscheinen.

## 2. Version 1 und Roadmap

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst:

- starke Hauptseite fuer `KFZ-Gutachten Berlin`
- Hero mit klarer Aussage
- Gutachtenarten
- Ablauf / Anfrage
- digitale Schadenaufnahme als Anfragevorbereitung
- Telefon, WhatsApp, E-Mail
- Kontakt / Standort / Oeffnungszeiten
- FAQ
- Impressum / Datenschutz
- Mobile-First-CTAs
- keine Upload-/Supabase-/KI-Livefunktion
- Formular nur, wenn umgesetzt, geprueft und freigegeben

### Roadmap / spaetere Ausbaustufen

Roadmap-Funktionen sind spaetere Ausbaustufen und duerfen nicht als live erscheinen:

- Formular, falls nicht zum Launch freigegeben
- Website-Upload
- Supabase-Speicherung
- KI-Voranalyse
- Adminbereich
- Kundenportal
- Landingpages
- mehrsprachige technische Ausbaustufe

## 3. Launch-Gates

Vor Launch muessen erfuellt sein:

- alle fuer Version 1 relevanten Specs freigegeben
- bestehende UI, Komponenten, Routen, Navigation, Footer, Metadata, Sitemap/Robots und alte Inhalte vor Aenderungen geprueft
- keine nicht freigegebenen Funktionen sichtbar
- keine alten Nicht-Scope-Leistungen als aktive Leistungen sichtbar
- Kontaktwege geprueft
- Impressum und Datenschutz erreichbar
- Mobile First geprueft
- SEO/Metadata geprueft
- FAQ geprueft
- Navigation/Footer geprueft
- Datenschutz-/Einwilligungstexte geprueft, soweit relevant
- Reviewer/Checker genutzt oder begruendet uebersprungen
- technische Checks passend zum Aenderungsumfang ausgefuehrt
- Launch-Freigabe ausdruecklich erteilt
- ausdrueckliche Nutzerfreigabe vor Veroeffentlichung / Deployment erteilt

Nichts darf blind ueberschrieben, geloescht, umgeleitet oder veroeffentlicht werden.

## 4. Launch-Entscheidung und Blocker

Launch darf erst erfolgen, wenn alle launchrelevanten Blocker geloest sind oder ausdruecklich dokumentiert wurde, dass ein offener Punkt nicht launch-blockierend ist.

Offene Punkte muessen vor Launch in `launch-blockierend` und `nicht launch-blockierend / spaeter` eingeordnet werden.

Launch-blockierende Punkte duerfen nicht offen bleiben, wenn sie folgende Bereiche betreffen:

- Version-1-Mindestinhalte
- Rechtliches
- Datenschutz
- Kontaktwege
- nicht freigegebene Funktionen
- alte aktive Nicht-Scope-Leistungen
- SEO-Grundlagen
- Routing-Grundlagen
- technische Stabilitaet
- Mobile-Nutzbarkeit
- Impressum / Datenschutz-Erreichbarkeit

Nicht launch-blockierende Punkte duerfen nur offen bleiben, wenn sie dokumentiert, fachlich akzeptiert und ausdruecklich auf spaeter verschoben wurden.

## 5. Mindestinhalte fuer Version 1

Mindestinhalte fuer die erste veroeffentlichbare Version:

- Hero mit klarer Aussage `KFZ-Gutachten Berlin` oder `KFZ-Gutachten in Berlin`
- kurze Erklaerung, was UNEXT anbietet
- Gutachtenarten
- Ablauf der Anfrage
- digitale Schadenaufnahme als Anfragevorbereitung
- Hinweis auf geplante KI-Unterstuetzung nur, wenn freigegeben und nicht als live
- Sachverstaendigenkompetenz / Vertrauen
- Kontaktmoeglichkeiten
- Telefonnummer
- WhatsApp
- E-Mail
- Standort Berlin
- Adresse aus Global Spec
- Oeffnungszeiten aus Global Spec
- FAQ
- Impressum
- Datenschutz
- klare Mobile-First-CTAs

Regeln:

- Keine frei erfundenen Kontaktdaten, Oeffnungszeiten oder Rueckmeldefristen.
- Keine 24/7-, Sofortdienst-, Schadenhoehen- oder Reparaturkostenversprechen.

## 6. Formular-, Upload-, Supabase- und KI-Gating

- Formular nur live, wenn umgesetzt, geprueft und freigegeben.
- Wenn kein Formular freigegeben ist, muessen CTAs auf Telefon, WhatsApp, E-Mail oder andere freigegebene Kontaktwege ausweichen.
- Upload nur live, wenn umgesetzt, datenschutzseitig geprueft und freigegeben.
- Supabase nicht als kundensichtbare Live-Funktion darstellen.
- KI nicht als aktive Live-Funktion darstellen, solange nicht umgesetzt und freigegeben.
- Keine Upload-, Supabase-, KI-, Admin- oder Portal-Links ohne Freigabe.
- Keine kundensichtbaren KI-Ergebnisse ohne gesonderte fachliche, technische, datenschutzseitige und rechtliche Freigabe.

## 7. Alte Inhalte und Nicht-Scope

Vor Launch nicht mehr als aktuelle Leistungen sichtbar:

- Autovermietung
- Mietwagen / Ersatzwagen
- Fahrzeugservice
- Werkstatt
- Reifenservice
- Dashcam-Einbau
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing
- alte SEO-Texte zu diesen Themen
- alte FAQ-Inhalte zu diesen Themen
- alte strukturierte Daten zu diesen Themen
- alte Navigationspunkte zu diesen Themen
- alte Footer-Links zu diesen Themen
- alte CTAs zu diesen Themen
- alte Bilder/Icons zu diesen Themen

Regeln:

- Nicht benoetigter Code erst nach Verwendungspruefung und Cleanup-Plan entfernen.
- Alte Routen nicht blind loeschen.
- Redirects nur nach Routing-/SEO-Pruefung.
- Keine irrefuehrenden Redirects auf KFZ-Gutachten-Seiten, wenn Suchintention nicht passt.

## 8. Rechtliche Seiten und Datenschutz

Zu pruefen und anzupassen:

- Impressum
- Datenschutz
- Cookie-/Consent-Hinweise, falls vorhanden
- Kontaktformular-Hinweise, falls Formular live ist
- Upload-Hinweise, falls Upload live ist
- KI-Verarbeitungshinweise, falls KI live ist
- Einwilligungstexte fuer Upload und spaetere KI-Voranalyse

Regeln:

- Impressum und Datenschutz muessen erreichbar bleiben.
- Keine Datenschutz-/Einwilligungstexte in einer Sprache live, wenn sie nicht geprueft und freigegeben sind.
- Upload, Supabase und KI nicht ohne Datenschutz-/Einwilligungsfreigabe live schalten.
- Diese Spec ersetzt keine Rechtsberatung und keine finale Datenschutzpruefung.

## 9. Trust- und Nachweisregeln

Oeffentlich nur ausdruecklich freigegebene Trust-Elemente nutzen:

- anerkannte Sachverstaendigenqualifikation, sachlich formuliert
- Standort Berlin
- Erfahrung im Bereich KFZ-Gutachten seit 2024
- digitale Schadenaufnahme als Anfragevorbereitung / Prozess
- geplante KI-Voranalyse als Ausbauschritt, solange nicht live
- KI-gestuetzte Voranalyse von Fahrzeugschaeden erst nach technischer Umsetzung und Freigabe

Nicht ohne Freigabe zeigen oder nennen:

- Urkunden
- Mitgliedsnummern
- Ausstellungsdaten
- personenbezogene Nachweise
- Kundenreferenzen
- konkrete Google-Bewertungen
- Bewertungssterne
- Review-Badges
- Trust-Siegel
- Kundennamen
- Versicherungs- oder Schadensfaelle
- interne Dokumente
- interne KI-Auswertungen
- konkrete Gutachtenbeispiele

Regeln:

- Keine erfundenen Kundenstimmen, Beispielbewertungen, Fake-Sterne, Dummy-Siegel oder Platzhalter-Reviews.
- Keine nicht bestaetigten Qualifikationen oder uebertriebenen Erfahrungsaussagen.

## 10. Mobile-First-Checks

Vor Launch pruefen:

- Startseite Mobile
- Hero Mobile
- Telefon-CTA
- WhatsApp-CTA
- Anfrage-CTA
- Sticky-CTAs oder mobile Kontaktleisten, falls vorhanden
- Textlaengen und Zeilenumbrueche
- FAQ mobil
- Kontaktbereich mobil
- Impressum/Datenschutz erreichbar
- Sprachversionen mobil, falls mehrsprachig live
- Upload-Strecke mobil, falls Upload live ist

## 11. Kontaktweg-Test vor Launch

Vor Launch muessen Telefon-, WhatsApp- und E-Mail-Links auf Desktop und Mobile getestet werden.

Zu pruefen:

- alle CTAs fuehren auf die richtigen freigegebenen Kontaktwege
- wenn kein Formular freigegeben ist, fuehren Anfrage-CTAs nicht auf ein nicht freigegebenes Formular
- CTAs oeffnen keine nicht freigegebenen Formular-, Upload-, Supabase-, KI-, Admin- oder Portal-Wege
- Telefon- und WhatsApp-CTAs sind mobil schnell erreichbar und korrekt bedienbar
- E-Mail-Links funktionieren korrekt und verwenden keine falschen oder frei erfundenen Adressen

## 12. Accessibility-Checks

Vor Launch pruefen:

- Ueberschriftenstruktur
- Links und Buttons unterscheidbar
- Touch-Ziele
- Kontraste
- FAQ/Accordion
- Alt-Texte oder dekorative Behandlung von Bildern
- keine rein farbliche Informationsvermittlung
- Formulare mit Labels, Fehlermeldungen und Datenschutz-Hinweisen, falls Formular live ist

## 13. SEO-, Routing- und Metadata-Checks

Vor Launch pruefen:

- H1 passt zur SEO-Spec
- Meta Title / Meta Description launchabhaengig korrekt
- keine alten SEO-Ziele aktiv
- Navigation/Footer korrekt
- Sitemap nur mit freigegebenen Routen
- Canonical-Regeln geprueft, falls umgesetzt
- Hreflang nur fuer freigegebene Sprachversionen
- FAQPage nur bei sichtbarer und freigegebener FAQ
- keine Review-/Bewertungs-strukturierten Daten ohne Freigabe
- alte Routen / Redirects / 404 / 410 nach Routing-Plan geprueft

## 14. Mehrsprachige Launch-Checks

Wenn mehrsprachig live:

- Deutsch ist fachlich fuehrend
- jede Sprachversion basiert auf freigegebenem deutschen Inhalt
- keine Sprachversion verspricht mehr als Deutsch
- nicht freigegebene Sprachversionen nicht sichtbar/verlinkt/indexierbar
- Sprachumschalter nur fuer freigegebene Sprachen
- Datenschutz-/Einwilligungstexte pro Sprache geprueft
- CTA-Laengen und mobile Umbrueche pro Sprache geprueft

## 15. Performance-Checks

Vor Launch pruefen:

- mobile Performance
- Bilder/Icons optimiert
- keine unnoetigen grossen Assets
- keine unnoetigen Animationen oder schweren Effekte
- keine Roadmap-Funktionen geladen, solange nicht aktiv
- Kontakt-CTAs schnell sichtbar und nutzbar
- Build erfolgreich, falls Code geaendert wurde

## 16. Reviewer / Checker

Vor Launch nutzen oder bewusst begruendet ueberspringen:

- mobile_visual_checker
- desktop_visual_checker
- typography_checker
- a11y_checker
- local_seo_reviewer
- performance_budget_reviewer
- launch_reviewer
- quality_reviewer

Regeln:

- Reviewer ersetzen nicht die Freigabe durch den User.
- Wenn ein Reviewer nicht genutzt wurde, muss kurz begruendet werden, warum nicht.

## 17. Technische Checks nach Aenderungen

Bei Spec-/Markdown-Aenderungen:

- `git diff --check -- <betroffene Dateien>`

Nach Code-/UI-Aenderungen:

- `git diff --check -- <betroffene Dateien>`
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Regeln:

- Wenn Checks nicht ausgefuehrt werden koennen oder fehlschlagen, Grund dokumentieren.
- Checks ersetzen nicht fachliche Pruefung und Freigabe.

## 18. Nach-Launch-Reaktion und Rollback

Vor Launch muss geklaert sein, wie bei kritischen Problemen nach Veroeffentlichung reagiert wird.

Dazu gehoeren:

- Verantwortlichkeit fuer schnelle Pruefung nach Launch
- schnelle Korrekturmoeglichkeit
- Rollback-Option, falls technisch moeglich
- kurzfristige Deaktivierung fehlerhafter Inhalte oder Funktionen
- Pruefung wichtiger Kontaktwege direkt nach Veroeffentlichung
- Pruefung von Impressum und Datenschutz direkt nach Veroeffentlichung
- Pruefung, ob nicht freigegebene Funktionen versehentlich sichtbar wurden

Kritische Probleme nach Launch muessen priorisiert behandelt werden, insbesondere wenn sie Kontaktwege, Datenschutz, Impressum, falsche Leistungsversprechen, nicht freigegebene Funktionen oder technische Erreichbarkeit betreffen.

## 19. Daten, Testdaten und Secrets

Vor Launch sicherstellen:

- keine echten Kundendaten in Tests, Screenshots, Logs oder Commits
- keine API-Keys, Service Role Keys, Secrets oder Environment-Werte in Code, Specs, Screenshots, Logs oder Commits
- keine sensiblen Schadenbilder echter Kunden ohne Freigabe
- keine KI-Testdaten oder Prompt-Experimente mit echten Kundendaten ohne Freigabe

## 20. Dokumentation vor Launch

Vor Launch muss dokumentiert werden:

- freigegebene Specs
- Version-1-Inhalte, die live gehen
- Roadmap-Funktionen, die nicht live sind
- betroffene Dateien / Bereiche
- entfernte oder ersetzte Inhalte
- alte Bereiche, die nicht mehr sichtbar sind
- offene Punkte, die launch-blockierend waren und geloest wurden
- offene Punkte, die bewusst auf spaeter verschoben wurden
- getestete Kontaktwege
- gepruefte rechtliche Seiten
- erfolgte Mobile-, SEO-, Accessibility- und Performance-Pruefungen
- erfolgreiche Checks
- genutzte Reviewer
- bewusst uebersprungene Reviewer mit Begruendung
- ob Formular, Upload, Supabase, KI, Admin oder Portal live sind oder nicht
- bekannte Risiken / offene Entscheidungen
- Person oder Rolle, die die finale Launch-Freigabe erteilt hat
- ausdrueckliche Nutzerfreigabe vor Veroeffentlichung / Deployment
- finale Launch-Freigabe

## 21. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- Code-Umsetzung
- UI-Umsetzung
- finale Content-Ausarbeitung
- Upload-Implementierung
- Supabase-Integration
- KI-Integration
- Admin-/Portal-Implementierung
- finale Rechtsberatung
- finale Datenschutzpruefung

## 22. Offene Launch-Entscheidungen

- Ob Deutsch, Russisch und Englisch direkt live gehen oder Deutsch zuerst.
- Ob Formular zum Launch live ist.
- Ob Upload, Supabase oder KI beim ersten Launch live sind oder spaeter aktiviert werden.
- Konkretes Einzugsgebiet ueber Berlin hinaus.
- Nutzung konkreter Google-Bewertungen.
- Landingpages zum Launch oder spaeter.
- Sitemap/Robots/Canonical/Hreflang final.
- Redirect-/404-/410-Strategie fuer alte Routen.
- Datenschutz-/Einwilligungstexte.
- Reviewer/Checker vor Launch.
- Blocker-Einordnung vor Launch.
- Nach-Launch-Reaktion / Rollback.
- finale Verantwortlichkeit fuer Launch-Freigabe.
- Kontaktweg-Test vor Launch und direkt nach Launch.
- finale Launch-Freigabe.
