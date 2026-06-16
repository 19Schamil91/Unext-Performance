# Aufgabe 027 - Homepage-Rework fuer KFZ-Gutachten umsetzen

## Ziel

Die erste sichtbare Homepage-Umsetzung fuer die reine KFZ-Gutachten-Ausrichtung vorbereiten und spaeter in einem klar begrenzten Code-/UI-Schritt umsetzen.

Die Homepage soll klar als `KFZ-Gutachten Berlin`-Seite wirken und alte Autovermietung-, Werkstatt-, Fahrzeugservice- oder sonstige Nicht-Scope-Wirkung zurueckbauen.

## Kontext

Aufgabe 027 baut auf folgenden abgeschlossenen Grundlagen auf:

- Aufgabe 019: alte Scope-/Service-Inhalte und Risiken inventarisiert
- Aufgabe 020: Homepage-Rework fuer KFZ-Gutachten geplant
- Aufgabe 021: SEO fuer KFZ-Gutachten geplant
- Aufgabe 025: Umsetzungsgate abgeschlossen und 027 als erster Homepage-Umsetzungstask vorgeschlagen
- Visual-Spec: bestehender dunkler hochwertiger Schwarz/Rot-Look bleibt globale Designbasis

Aufgabe 022, 023 und 024 sind spaetere Roadmap-Themen und fuer diese erste Homepage-Umsetzung nicht erforderlich.

## Vorgehen

- Relevante Homepage-Dateien und Komponenten inventarisieren.
- Bestehende UI-/Layout-/Designmuster pruefen und nach Moeglichkeit wiederverwenden.
- Homepage-Struktur auf `KFZ-Gutachten Berlin` ausrichten.
- Hero, sichtbare Sektionen, CTAs, Gutachtenarten, Ablauf, digitale Schadenaufnahme als Anfragevorbereitung, Trust-/Kompetenzbereich, FAQ und Kontaktbereich pruefen und spaeter begrenzt umsetzen.
- Alte Nicht-Scope-Wirkung wie Autovermietung, Mietwagen, Werkstatt, Fahrzeugservice, Zulassung, Abschleppdienst, Detailing, Express/Kurier und allgemeine Mobilitaet aus der sichtbaren Homepage-Prioritaet entfernen oder ersetzen.
- Telefon, WhatsApp und freigegebene Anfragewege mobil priorisieren.
- Bestehende Schwarz/Rot-Designrichtung beibehalten.
- Nach Umsetzung passende Checks ausfuehren.

## Erlaubter Scope

Aufgabe 027 darf spaeter nach weiterer Freigabe nur die fuer die Homepage-Umsetzung noetigen Dateien anfassen, zum Beispiel:

- Homepage-Seite und Homepage-nahe Komponenten
- sichtbare Homepage-Texte und Sektionen
- CTA-Texte und CTA-Reihenfolge auf der Homepage
- FAQ-/Kontakt-/Ablauf-/Trust-Bereiche, soweit sie zur Homepage gehoeren
- bestehende Komponenten, wenn sie fuer die Homepage-Rework-Umsetzung angepasst werden muessen

## Nicht-Scope / Tabu

Aufgabe 027 darf nicht umfassen:

- Supabase
- Upload
- KI
- Kundenportal
- Adminbereich
- neue Dependencies
- Environment-Variablen
- Datenbankaenderungen
- Routenloeschungen
- Redirects ohne eigenen Routing-/Redirect-Task
- SEO-/Metadata-/Structured-Data-Umsetzung ohne eigenen SEO-Umsetzungstask
- alte Services endgueltig loeschen ohne Referenz-, Routing- und SEO-Pruefung
- komplettes Redesign
- Launch oder Deployment

## Akzeptanzkriterien

- Die Homepage wirkt klar als `KFZ-Gutachten Berlin`-Seite.
- Alte Autovermietung-, Werkstatt-, Fahrzeugservice- und sonstige Nicht-Scope-Wirkung wird auf der Homepage nicht mehr sichtbar priorisiert.
- Hero und Hauptaussage passen zur reinen KFZ-Gutachten-Ausrichtung.
- CTAs priorisieren mobil Telefon, WhatsApp und freigegebene Anfragewege.
- Digitale Schadenaufnahme wird nur als Anfragevorbereitung dargestellt und nicht als Upload-/Supabase-/KI-Livefunktion.
- Supabase, Upload, KI und Kundenportal werden nicht umgesetzt und nicht als live suggeriert.
- Bestehende dunkle Schwarz/Rot-Designrichtung bleibt erhalten.
- Keine Routenloeschungen, Redirects, SEO-/Metadata-/Structured-Data-Umsetzung, neuen Dependencies oder Env-Aenderungen erfolgen.
- Typecheck, Lint und Build werden nach einer spaeteren Umsetzung ausgefuehrt oder begruendet uebersprungen.
- Mobile und Desktop werden nach einer spaeteren Umsetzung visuell geprueft oder begruendet uebersprungen.

## Homepage-Datei- und Komponenten-Inventur

### 1. Sehr wahrscheinlich relevante Dateien fuer die erste Homepage-Umsetzung

- `app/(de)/page.tsx` und `app/(localized)/[locale]/page.tsx`: Startseiten-Einstiege, beide rendern `HomePageContent`.
- `components/HomePageContent.tsx`: zentrale Homepage-Komposition mit Header, Hero, Services, Process, Why, About, ExpressCourier, CTA und Footer.
- `components/sections/hero-section.tsx`: Hero, H1/SR-Titel, Bild, Telefon-, WhatsApp- und Anfrage-CTA sowie direkte Leistungsanker.
- `components/sections/services-section.tsx`: aktuelle sechs Leistungskaerten mit alten Nicht-Scope-Leistungen, Bildern, Icons, Links und Direkttelefonen.
- `components/sections/process-section.tsx`: Ablaufbereich, aktuell breit auf Fahrzeuganliegen ausgerichtet.
- `components/sections/why-section.tsx`: Vorteilsbereich, aktuell mit breiter Fahrzeugservice-Argumentation.
- `components/sections/about-section.tsx`: Ueber-uns-Abschnitt, aktuell mit breiter Automotive-Partner-Erzaehlung und Service-Zaehlung.
- `components/sections/express-courier-section.tsx`: Express-/Kurierbereich der Homepage, gehoert nicht zur neuen Homepage-Zielausrichtung.
- `components/sections/cta-section.tsx`: abschliessender Kontaktbereich mit Telefon, WhatsApp und Anfrage.
- `components/site-header.tsx`, `components/HeaderServicesMenu.tsx`, `components/HeaderMobileMenu.tsx` und `components/site-footer.tsx`: beeinflussen die Homepage sichtbar ueber Navigation, Leistungsmenue, mobile Navigation und Footer-Service-Links.
- `lib/translations/home.ts`, `lib/translations/home-overrides.ts`, `lib/translations/header-footer.ts` und `lib/translations.ts`: zentrale sichtbare Homepage-, Header- und Footer-Texte in Deutsch, Englisch und Russisch.
- `lib/service-anchors.ts`: Anker fuer die aktuelle sechsgeteilte Leistungsstruktur.

### 2. Komponenten mit moeglicher alter Nicht-Scope-Wirkung

- `hero-section.tsx`: Hauptbotschaft nennt aktuell `Kfz-Gutachten und Fahrzeugservice`, `aus einer Hand` und alte Leistungsanker.
- `services-section.tsx`: priorisiert Autovermietung, Werkstatt, Detailing, Zulassung und Abschleppdienst/Pannenhilfe als Homepage-Leistungen.
- `express-courier-section.tsx`: stellt Expresslieferung und Kurierdienst als sichtbaren Homepage-Bereich dar.
- `about-section.tsx`: beschreibt UNEXT als breiten Automotive-Partner und zeigt eine `6`-Services-Logik.
- `why-section.tsx` und `process-section.tsx`: enthalten breite Formulierungen zu Werkstatt, Mietwagen, Zulassung, Panne oder allgemeinen Fahrzeugfragen.
- `site-header.tsx`, `HeaderServicesMenu.tsx`, `HeaderMobileMenu.tsx` und `site-footer.tsx`: zeigen alte Service-Links in Navigation und Footer.
- `lib/translations/home.ts`, `home-overrides.ts` und `header-footer.ts`: enthalten viele sichtbare alte Leistungsbegriffe und muessen bei der Umsetzung konsistent geprueft werden.

### 3. Dateien, die wahrscheinlich spaeter geaendert werden muessen

- `components/HomePageContent.tsx`, wenn Sektionen entfernt, ersetzt oder neu sortiert werden.
- `components/sections/hero-section.tsx`, wenn Hero, CTA-Reihenfolge, H1/Screenreader-Titel oder Direktanker auf `KFZ-Gutachten Berlin` ausgerichtet werden.
- `components/sections/services-section.tsx`, wenn die sechs alten Leistungskarten durch Gutachtenarten oder einen neuen Leistungsfokus ersetzt werden.
- `components/sections/process-section.tsx`, `why-section.tsx`, `about-section.tsx` und `cta-section.tsx`, wenn Ablauf, Trust, Kompetenz und Kontakt auf KFZ-Gutachten eingegrenzt werden.
- `components/sections/express-courier-section.tsx` oder `components/HomePageContent.tsx`, wenn der Express-/Kurierbereich aus der Homepage-Prioritaet entfernt oder ersetzt wird.
- `components/site-header.tsx`, `components/HeaderServicesMenu.tsx`, `components/HeaderMobileMenu.tsx`, `components/site-footer.tsx` und `lib/service-anchors.ts`, wenn sichtbare Homepage-Navigation, Leistungsanker oder Footer-Links angepasst werden.
- `lib/translations/home.ts`, `lib/translations/home-overrides.ts`, `lib/translations/header-footer.ts` und ggf. `lib/translations.ts`, wenn sichtbare mehrsprachige Homepage-Texte angepasst werden.
- `components/contact-page-client.tsx`, `lib/translations/contact.ts`, `lib/contactForm.ts` und der bestehende Resend-Flow sind nur pruefbeduerftig, falls der erste Homepage-Schritt Anfragewege oder Kontaktformulierungen sichtbar beruehrt.

### 4. Dateien und Bereiche, die fuer Aufgabe 027 tabu bleiben

- `lib/metadata.ts` und `lib/structuredData.ts`: SEO-, Metadata- und Structured-Data-Umsetzung braucht einen eigenen SEO-Umsetzungstask.
- Alte Service-Routen unter `app/(de)/leistungen/` und `app/(localized)/[locale]/leistungen/`: keine Routenloeschungen oder Redirects in diesem ersten Homepage-Schritt.
- Alte Service-Detailkomponenten wie `RentalServiceDetailContent.tsx`, `WorkshopServiceDetailContent.tsx`, `DetailingServiceDetailContent.tsx`, `RegistrationServiceDetailContent.tsx` und `TowingServiceDetailContent.tsx`: keine endgueltige Service-Bereinigung ohne Referenz-, Routing- und SEO-Pruefung.
- Assets unter `public/` beziehungsweise Bilddateien wie alte Service-Bilder: keine Loeschung ohne eigene Asset- und Referenzpruefung.
- Supabase-, Upload-, KI-, Admin-, Kundenportal-, Dependency-, Environment- und Config-Bereiche.
- Specs bleiben in Aufgabe 027 unveraendert, sofern nicht spaeter ein eigener Spec-Aenderungsauftrag freigegeben wird.

### 5. Offene Fragen vor der Code-Umsetzung

- Soll die erste Umsetzung nur Deutsch betreffen oder muessen Englisch und Russisch im selben Schritt sichtbar konsistent mitgezogen werden?
- Soll `ExpressCourierSection` komplett aus der Homepage-Komposition entfernt oder durch einen neuen KFZ-Gutachten-Bereich ersetzt werden?
- Welche genaue Gutachtenarten-Struktur soll die alte sechsgeteilte Service-Kartenstruktur ersetzen: Unfallgutachten, Schadengutachten, Wertgutachten/Fahrzeugbewertung, Beweissicherung und digitale Schadenaufnahme als Anfragevorbereitung?
- Welcher freigegebene Anfrageweg gilt fuer `Gutachten anfragen`, solange kein neuer Upload- oder Supabase-Flow freigegeben ist?
- Duerfen Header/Footer-Service-Links im ersten Umsetzungsschritt sichtbar reduziert werden, oder braucht das wegen alter URLs einen eigenen Navigations-/Routing-/SEO-Task?
- Welche bestehenden Bilder duerfen fuer Hero, Gutachtenarten und Trust-Bereich weiterverwendet werden, ohne Werkstatt-, Mietwagen- oder Fahrzeugservice-Wirkung zu erzeugen?
- Gibt es freigegebene Trust-Aussagen oder Qualifikationsformulierungen, die ueber die Visual-Spec-Leitplanke hinaus verwendet werden duerfen?

### 6. Einschaetzung zur ersten Code-/UI-Umsetzung

- Eine erste Code-/UI-Umsetzung erscheint nach dieser Inventur grundsaetzlich moeglich.
- Der erste Schritt sollte eng auf Homepage-Komposition, Hero, sichtbare Sektionen, CTAs und Homepage-Texte begrenzt bleiben.
- Routing, Redirects, SEO-/Metadata-/Structured-Data-Dateien, Supabase, Upload, KI und endgueltiger Cleanup alter Services bleiben ausserhalb dieses ersten Umsetzungsschritts.

## Status

Status: abgeschlossen

## Done-Zusammenfassung

- Deutsche Homepage auf `KFZ-Gutachten Berlin` umgestellt.
- Alte Service-Priorisierung fuer Mietwagen, Werkstatt, Abschleppen, Pannenhilfe, Detailing, Zulassung und Express/Kurier aus der sichtbaren deutschen Homepage-Prioritaet entfernt.
- Hero, Services, Process, Why, About, CTA und Footer gegen den KFZ-Gutachten-Scope geprueft.
- Digitale Schadenaufnahme nur als Anfragevorbereitung dargestellt.
- Neue deutsche Bilder fuer Hero und Gutachtenkarten bewusst eingebunden.
- Desktop und Mobile visuell geprueft.
- `npm run lint`, `npx tsc --noEmit`, `npm run build` und `git diff --check` erfolgreich ausgefuehrt.
- Keine Routen, Metadata, Structured Data, Specs, Upload, Supabase oder KI geaendert.
- EN/RU nicht umgebaut.
