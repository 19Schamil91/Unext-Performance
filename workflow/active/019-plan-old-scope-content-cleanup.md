# Aufgabe 019 - Alte Scope-Inhalte fuer Cleanup planen

## Ziel

Alte Inhalte zu Autovermietung, Mietwagen, Ersatzwagen, Fahrzeugservice, Werkstatt, Zulassung, Abschleppdienst, Pannenhilfe und Fahrzeugaufbereitung kontrolliert erfassen.

## Kontext

Diese alten Themen gehoeren nicht mehr zum fachlichen Scope der Webseite. Sie duerfen nicht blind geloescht werden, sondern muessen vor Entfernung oder Ersatz dokumentiert und freigegeben werden.

## Vorgehen

- Bestehende alte Routen, Seiten, Komponenten, Datenarrays, Uebersetzungen, Texte, SEO-/Metadata-/Structured-Data-Inhalte und Assets inventarisieren.
- Legal-Texte wie AGB, Datenschutz und Impressum auf alte Leistungsbezuege pruefen.
- Kontaktformular-Texte im bestehenden Resend-Flow auf alte Leistungsbezuege pruefen, ohne den technischen Resend-Flow zu aendern.
- Hinweise auf alte Leistungen wie Autovermietung, Autoservice, Detailing, Zulassung, Abschleppdienst/Pannenhilfe, Express/Kurier oder allgemeine Mobilitaet erfassen.
- Fundstellen gegen die freigegebenen Specs pruefen.
- Pro Fundstelle festhalten: behalten, ersetzen, entfernen oder spaeter pruefen.
- Moegliche spaetere Spezialtasks wie Routing/Redirects, i18n, Legal, Kontaktformular/Datenschutz oder Asset-Cleanup nur vorschlagen, nicht anlegen.
- Keine Inhalte ohne Freigabe loeschen.

## Inventarbericht alte Scope-Inhalte

### 1. Alte Routen und Seiten

- Alte Service-Routen existieren fuer Autovermietung, Autoservice, Detailing, Zulassungsservice und Abschleppdienst/Pannenhilfe unter `app/(de)/leistungen/` sowie in den lokalisierten Varianten unter `app/(localized)/[locale]/leistungen/`.
- Die breite `/leistungen`-Uebersicht ist weiterhin auf mehrere alte Leistungsbereiche ausgerichtet.
- `unfallgutachten` wirkt fachlich grundsaetzlich passend, liegt aber noch in der alten Service-Struktur und muss spaeter gegen die neue KFZ-Gutachten-Ausrichtung geprueft werden.
- Alte Service-Routen duerfen spaeter nicht ohne Redirect- und SEO-Plan geloescht werden.

### 2. Alte Komponenten und Datenarrays

- Alte Service-Detailkomponenten liegen unter anderem in `RentalServiceDetailContent.tsx`, `WorkshopServiceDetailContent.tsx`, `DetailingServiceDetailContent.tsx`, `RegistrationServiceDetailContent.tsx` und `TowingServiceDetailContent.tsx`.
- `ServicesOverviewContent.tsx` und `components/sections/services-section.tsx` bilden weiterhin eine breite Leistungsuebersicht ab.
- Homepage-Abschnitte wie `hero-section.tsx`, `about-section.tsx` und `express-courier-section.tsx` enthalten alte Fahrzeugservice-, Mehrleistungs- oder Express-/Kurierbezuege.
- Header, Footer, Service-Menues und `lib/service-anchors.ts` enthalten Links oder Anker zu alten Leistungsbereichen.
- `service-page-layout.tsx` ist als gemeinsames Layout pruefbeduerftig: Es ist nicht automatisch Altlast, stuetzt aber aktuell alte Service-Detailseiten.

### 3. Alte Uebersetzungen und Texte

- Betroffen sind insbesondere `lib/translations/home.ts`, `home-overrides.ts`, `header-footer.ts`, `services-and-about.ts`, `about-overrides.ts`, `service-pages-part1.ts`, `service-pages-part2.ts`, `contact.ts` und `service-details.ts`.
- Alte Themen erscheinen in Deutsch, Englisch und Russisch, unter anderem Autovermietung, Mietwagen, Werkstatt, Autoservice, Detailing, Zulassung, Abschleppdienst, Pannenhilfe, Express/Kurier und allgemeine Fahrzeugservice-Positionierung.
- Die i18n-Bereinigung muss spaeter konsistent erfolgen. Keine Sprache darf alte Leistungen aktiver darstellen als die freigegebene deutsche Zielausrichtung.

### 4. SEO, Metadata und Structured Data

- `lib/metadata.ts` enthaelt alte Titles, Descriptions und Keywords zu Autovermietung, Werkstatt, Detailing, Zulassung, Abschleppdienst, Expresslieferung und Kurierdienst.
- `lib/structuredData.ts` ist wegen der aktuellen Schema-/Service-Positionierung pruefbeduerftig, insbesondere wegen einer moeglichen falschen Einordnung als Werkstatt oder AutoRepair.
- Alte SEO- und Schema-Inhalte koennen UNEXT weiterhin als Autovermietung, Werkstatt, Fahrzeugservice oder breiten Mobilitaetsanbieter positionieren.
- Die Bereinigung gehoert spaeter in den SEO-/Metadata-/Structured-Data-Plan.

### 5. Assets und Bildreferenzen

- Alte Service-Bilder sind unter anderem `home-service-rental.webp`, `home-service-workshop.webp`, `home-service-detailing.webp`, `home-service-registration.webp`, `service-towing.webp` und `service-express-courier.webp`.
- Wahrscheinlich passende oder zumindest pruefbeduerftige Bilder sind unter anderem `home-service-accident.webp`, `home-service-accident-wide.webp`, `unext-logo.webp` sowie Hero-, Team- und Office-Bilder.
- Assets duerfen spaeter nicht blind geloescht werden. Vor jedem Asset-Cleanup braucht es eine Referenzpruefung in Code, Metadata, Dokumentation und sichtbaren Seiten.

### 6. Legal-Texte

- `lib/translations/legal.ts` enthaelt alte AGB-Abschnitte zu Autovermietung, Werkstattservice und Detailing in Deutsch, Englisch und Russisch.
- Diese Inhalte sind pruefbeduerftig, weil sie alte Leistungen weiter als Vertrags- oder Leistungsbereiche darstellen koennen.
- Aufgabe 019 nimmt keine juristische Bewertung vor. Eine spaetere fachliche und rechtliche Pruefung ist noetig.

### 7. Kontaktformular / Resend-Flow

- Der technische Resend-basierte Anfrage- und E-Mail-Flow ueber `components/service-inquiry-form.tsx`, `lib/contactForm.ts` und `lib/contactActions.ts` bleibt als technische Basis erhalten.
- Pruefbeduerftig sind Texte, Anfragearten und servicebezogene Begriffe in `components/contact-page-client.tsx`, `lib/contactForm.ts`, `lib/browser-storage.ts`, `lib/translations/contact.ts` und `lib/translations/service-details.ts`.
- Spaeter muessen Formulartexte, Anfragearten sowie Datenschutz-/Consent-Hinweise gegen die neue KFZ-Gutachten-Ausrichtung geprueft werden.
- Aus dem bestehenden Resend-Flow wird in Aufgabe 019 keine Supabase-, Upload- oder KI-Erweiterung abgeleitet.

### 8. Sonstige Artefakte

- `docs/audits/screenshots/...` enthaelt alte Audit-Screenshots zu alten Routen und Seiten. Diese sind Dokumentationsartefakte und keine aktive Website-Bereinigung.
- `.agents/skills/site-launch-audit/SKILL.md` nennt noch alte Pruefrouten wie `/leistungen/autovermietung` und `/leistungen/autoservice`.
- Alte Audit- und Reviewer-Routen sollten spaeter geprueft werden, aber Aufgabe 019 fuehrt daraus keine Cleanup-Umsetzung ab.

### 9. Wichtigste Risiken

- Alte URLs werden ohne Redirect- und SEO-Plan geloescht.
- Metadata oder Structured Data positionieren UNEXT weiter als Werkstatt, Autovermietung oder Fahrzeugservice.
- Deutsch, Englisch und Russisch widersprechen sich nach der Umstellung.
- Legal-Texte behalten alte Leistungsbereiche bei.
- Assets werden geloescht, obwohl sie noch referenziert werden.
- Der funktionierende Resend-Flow wird unnoetig ersetzt, obwohl nur Texte, Anfragearten und Hinweise geprueft werden muessen.

### 10. Empfehlung fuer weiteres Vorgehen

- Dieser Bericht reicht als Inventargrundlage fuer Aufgabe 019.
- Es werden jetzt keine neuen Task-Dateien pauschal erstellt.
- Aufgabe 020 sollte Homepage, Gutachten-Content, alte Service-Sektionen und CTAs beruecksichtigen.
- Aufgabe 021 sollte SEO, Metadata, Structured Data, alte Keywords, alte Service-URLs und Schema-Typen beruecksichtigen.
- Aufgabe 026 sollte Code- und Asset-Cleanup erst nach fachlichem Rework, Referenzpruefung und Redirect-/SEO-Entscheidungen behandeln.
- Moegliche spaetere Spezialtasks bleiben nur Vorschlaege: Routing/Redirects, i18n, Legal, Kontaktformular/Datenschutz und Asset-Referenzpruefung.
- In Aufgabe 019 wurden keine Inhalte geloescht, umgeschrieben, verschoben oder technisch umgesetzt.

## Akzeptanzkriterien

- Alte Routen und Seiten sind als Fundstellen dokumentiert.
- Alte Komponenten und Datenarrays sind als Fundstellen dokumentiert.
- Alte Uebersetzungen und Texte sind als Fundstellen dokumentiert.
- Alte SEO-, Metadata- und Structured-Data-Inhalte sind als Fundstellen dokumentiert.
- Alte Assets und Bildreferenzen sind als Fundstellen dokumentiert.
- Legal-Texte wie AGB, Datenschutz und Impressum sind auf alte Leistungsbezuege geprueft.
- Kontaktformular-Texte im bestehenden Resend-Flow sind auf alte Leistungsbezuege geprueft.
- Hinweise auf alte Leistungen wie Autovermietung, Autoservice, Detailing, Zulassung, Abschleppdienst/Pannenhilfe, Express/Kurier oder allgemeine Mobilitaet sind erfasst.
- Jede spaetere Entfernung oder Ersetzung ist begruendet.
- Keine Datei wurde im Rahmen dieser Planung geloescht.
- Keine Inhalte, Routen, Assets, Specs, Code-, UI-, Supabase-, Upload- oder KI-Dateien wurden geaendert.
- Spezialtasks wie Routing/Redirects, i18n, Legal, Kontaktformular/Datenschutz oder Asset-Cleanup wurden nur als moegliche Folgeaufgaben vorgeschlagen und nicht angelegt.
- Die Cleanup-Entscheidungen koennen spaeter in Umsetzungstasks ueberfuehrt werden.

## Status

Status: in Arbeit
