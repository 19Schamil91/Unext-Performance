# Aufgabe 014 - Specs auf reine KFZ-Gutachten-Webseite neu ausrichten

## Ziel

Die fachliche Planungsgrundlage des Projekts wird auf eine reine Webseite fuer KFZ-Gutachten, digitale Schadenaufnahme und spaetere KI-gestuetzte Voranalyse ausgerichtet.

Die bisherige Richtung Autovermietung, Fahrzeugservice, Werkstatt und weitere Service-rund-ums-Fahrzeug-Themen wird fuer diese Webseite verworfen und nur noch als spaeter zu bereinigender Alt-Scope dokumentiert.

## Kontext

Die Webseite soll kuenftig ausschliesslich fuer UNEXT als Anbieter von KFZ-Gutachten positioniert werden.

Offizielle Firmendaten aus der Aufgabe:

- Rechtlicher Firmenname: Unext GmbH
- Branding / Marke: UNEXT
- Adresse: Luebarser Str. 25, 13435 Berlin
- Register: Amtsgericht Charlottenburg (Berlin), HRB 265091 B

Neue fachliche Hauptbereiche:

- KFZ-Gutachten
- Unfallgutachten
- Schadengutachten
- Wertgutachten / Fahrzeugbewertung
- Beweissicherung
- digitale Schadenaufnahme
- spaetere KI-gestuetzte Voranalyse von Fahrzeugschaeden
- finale Pruefung durch einen Gutachter

KI darf nur als unterstuetzender digitaler Prozess beschrieben werden. Die finale Bewertung erfolgt immer durch einen Gutachter.

## Vorgehen

1. Aktiven Branch pruefen.
2. Task-Datei `workflow/todo/014-realign-specs-to-kfz-gutachten.md` erstellen oder aktualisieren.
3. `specs/01-questions.md` auf die neue fachliche Richtung umstellen.
4. Bestehende Spec-Struktur pruefen und notwendige Anpassungen, neue Dateien oder Archivierungen vorschlagen.
5. Vorhandene Altbereiche nur dokumentieren, nicht loeschen, nicht umbauen und nicht ersetzen.
6. Danach stoppen und Freigabe einholen.

## Akzeptanzkriterien

- Der aktive Branch ist `feature/kfz-gutachten-rework`.
- Die Task-Datei enthaelt Ziel, Kontext, Vorgehen, Akzeptanzkriterien und Status.
- `specs/01-questions.md` enthaelt nur noch Fragen zur neuen Ausrichtung.
- Autovermietung und Fahrzeugservice werden nicht als Nebenleistungen eingeplant.
- Alte Scope-Bereiche werden nur unter Nicht-Scope / spaeterer Cleanup dokumentiert.
- Es werden keine Code-, UI-, Supabase- oder KI-Integrationsaenderungen vorgenommen.
- Der `AGENTS.md` wird nicht geaendert.
- Vor einem Verschieben nach `workflow/done/` wird ausdruecklich gefragt.

## Spec-Strukturvorschlag

### Neu erstellen

- `specs/features/kfz-gutachten.md`
- `specs/features/digitale-schadenaufnahme.md`
- `specs/features/ki-voranalyse.md`
- `specs/technical/ai-analysis.md`

### Anpassen

- `specs/00-global-spec.md` auf reine KFZ-Gutachten-Webseite ausrichten.
- `specs/02-functional-map.md` auf Gutachten, Kontaktflow, digitale Schadenaufnahme und spaetere KI-Voranalyse ausrichten.
- `specs/03-user-stories.md` auf Kunden fuer KFZ-Gutachten, Schadenaufnahme und interne Gutachterpruefung ausrichten.
- `specs/features/contact-flow.md` auf Telefon, WhatsApp, Anfrage und spaetere Upload-Strecke ausrichten.
- `specs/features/seo.md` auf KFZ-Gutachten, Unfallgutachten, Schadengutachten, Wertgutachten und lokale Suche ausrichten.
- `specs/features/faq.md` auf Gutachten, Schadenaufnahme, Qualifikation, Ablauf und KI-Grenzen ausrichten.
- `specs/technical/supabase.md` spaeter nur nach eigener Supabase-Spec auf Upload, Anfragen, Bilder, Voranalyse und interne Pruefung ausrichten.
- `specs/technical/data-model.md` spaeter auf Schadenanfragen, Uploads, Fahrzeugdaten und Voranalyse ausrichten.

### Spaeter archivieren oder entfernen

Nicht sofort loeschen. Diese Dateien gehoeren fachlich nicht mehr zum Scope der Webseite und sollten ueber einen separaten Cleanup-Task archiviert oder entfernt werden:

- `specs/features/autovermietung.md`
- `specs/features/service-rund-ums-fahrzeug.md`

## Dokumentierte Altinhalte fuer spaeteren Cleanup

Bei der ersten Suche wurden alte Scope-Begriffe in folgenden Bereichen gefunden. Diese Inhalte wurden nicht geaendert:

- `lib/metadata.ts`: Autovermietung, Autoservice, Werkstatt, Zulassungsservice, Abschleppdienst, Detailing
- `lib/translations/*`: Autovermietung, Werkstatt & Service, Mietwagen, Pannenhilfe & Abschleppen, Zulassung, Fahrzeugservice
- `components/*ServiceDetailContent.tsx`: Detailinhalte zu Autovermietung, Werkstatt & Service, Pannenhilfe & Abschleppen
- `app/(de)/leistungen/*` und `app/(localized)/[locale]/leistungen/*`: alte Leistungsrouten fuer Autovermietung, Autoservice, Zulassung, Abschleppdienst / Pannenhilfe
- `components/sections/*`: alte Homepage- und Serviceformulierungen zu Mietwagen, Werkstatt, Zulassung und Pannenhilfe
- `workflow/todo/008-content-cleanup-plan.md`, `009-homepage-rework.md`, `011-seo-rework.md`: alte Planungsrichtung mit Autovermietung oder Service rund ums Fahrzeug
- `specs/features/autovermietung.md` und `specs/features/service-rund-ums-fahrzeug.md`: alte Feature-Spec-Platzhalter

Diese Fundstellen sind nur als Hinweis fuer einen spaeteren, separat freizugebenden Content- und Code-Cleanup dokumentiert.

## Status

Abgeschlossen und freigegeben.

Code-, UI-, Supabase- und KI-Integration sind nicht Teil dieser Aufgabe.
