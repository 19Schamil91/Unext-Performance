# Aufgabe 015 - Workflow nach Kurswechsel bereinigen

## Ziel

Den bestehenden Workflow nach Abschluss von Aufgabe 014 pruefen und einordnen, ohne Code, UI, Inhalte, Supabase, KI-Integration oder fachliche Specs umzubauen.

Es soll klar dokumentiert werden:

- welche Aufgaben faktisch erledigt wirken
- welche Aufgaben weiterhin relevant sind
- welche Aufgaben wegen des Kurswechsels angepasst werden muessen
- welche Aufgaben fachlich veraltet sind
- welche Reihenfolge nach der neuen KFZ-Gutachten-Ausrichtung sinnvoll ist

## Kontext

Aufgabe 014 wurde abgeschlossen und nach `workflow/done/014-realign-specs-to-kfz-gutachten.md` verschoben.

Die neue fachliche Richtung lautet:

- reine KFZ-Gutachten-Webseite
- digitale Schadenaufnahme
- spaetere KI-gestuetzte Voranalyse
- finale Pruefung durch einen Gutachter

Autovermietung, Mietwagen, Fahrzeugservice, Werkstatt und Service-rund-ums-Fahrzeug gehoeren nicht mehr zum fachlichen Scope dieser Webseite.

## Vorgehen

1. Alle Aufgaben in `workflow/todo/` von 001 bis 013 pruefen.
2. Pruefen, dass Aufgabe 014 in `workflow/done/` liegt.
3. Aufgaben nach Status und Relevanz einordnen.
4. Keine alten Aufgaben loeschen.
5. Nur Aufgaben nach `workflow/done/` verschieben, die eindeutig erledigt und freigegeben sind.
6. Neue Reihenfolge und Ersatz-/Anpassungsvorschlaege dokumentieren.
7. Danach stoppen und Freigabe einholen.

## Pruefergebnis

### Bestaetigt erledigt und bereits in done

- `014-realign-specs-to-kfz-gutachten.md`
  - Liegt in `workflow/done/`.
  - Wurde vom User geprueft und freigegeben.

### Faktisch erledigt, aber nicht nach done verschoben

Diese Aufgaben wirken anhand des Projektstands faktisch erledigt, sind aber in den Dateien noch als `Todo` markiert. Da keine ausdrueckliche Freigabe fuer das Verschieben dieser alten Aufgaben dokumentiert ist, wurden sie nicht nach `done` verschoben.

Die Aufgaben 001 bis 004 bleiben bis zur ausdruecklichen nachtraeglichen Pruefung und Freigabe in `workflow/todo/`. Sie sollen in einem naechsten Schritt separat geprueft und nur bei Freigabe nach `workflow/done/` verschoben werden.

- `001-update-agents-md.md`
  - `AGENTS.md` enthaelt die verbindlichen Arbeitsregeln.
  - Empfehlung: nach User-Freigabe nach `done` verschieben oder Status separat bestaetigen lassen.

- `002-create-workflow-structure.md`
  - `workflow/todo/`, `workflow/done/` und `workflow/README.md` sind vorhanden.
  - Empfehlung: nach User-Freigabe nach `done` verschieben.

- `003-create-spec-structure.md`
  - `specs/`, `specs/features/`, `specs/technical/` und `specs/plans/` sind vorhanden.
  - Empfehlung: nach User-Freigabe nach `done` verschieben.

- `004-create-questions.md`
  - `specs/01-questions.md` existiert und wurde durch Aufgabe 014 neu ausgerichtet.
  - Die urspruengliche Aufgabe war noch auf alte Themen ausgerichtet.
  - Empfehlung: als durch Aufgabe 014 ueberholt markieren oder nach Freigabe nach `done` verschieben, wenn der Zweck "Fragenkatalog vorhanden" als erledigt gilt.

### Weiterhin relevant, aber auf neue Richtung anzupassen

- `005-answer-questions-before-specs.md`
  - Weiterhin relevant.
  - Muss auf die neuen Fragen in `specs/01-questions.md` ausgerichtet werden.
  - Alte Akzeptanzkriterien zu Autovermietung und Service muessen ersetzt werden.

- `006-create-final-specs.md`
  - Weiterhin relevant.
  - Muss auf KFZ-Gutachten, digitale Schadenaufnahme, KI-Grenzen, Kontaktflow, SEO und spaetere Supabase-/Upload-Planung ausgerichtet werden.

- `007-create-rework-plan.md`
  - Weiterhin relevant.
  - Muss nach finalen Specs einen Rework-Plan fuer die reine KFZ-Gutachten-Webseite beschreiben.

- `008-content-cleanup-plan.md`
  - Weiterhin relevant.
  - Muss den alten Scope Autovermietung, Mietwagen, Fahrzeugservice, Werkstatt, Zulassung, Abschleppdienst, Pannenhilfe und Fahrzeugaufbereitung als zu pruefenden Cleanup-Scope erfassen.
  - Der bisherige Kontext ist fachlich ueberholt, weil "Gutachten" dort noch als alter Inhalt genannt wird.

- `010-code-cleanup.md`
  - Weiterhin relevant, aber erst nach freigegebenem Rework und Content-Cleanup.
  - Muss auf Entfernung nicht mehr genutzter alter Leistungsinhalte, Routen, Komponenten, Imports, Datenarrays, SEO-Texte und Assets nach Verwendungspruefung ausgerichtet werden.

- `012-supabase-planning.md`
  - Weiterhin relevant.
  - Muss auf Upload, Schadenanfragen, Fahrzeugdaten, Bildspeicherung, Datenschutz, interne Pruefung und spaetere KI-Voranalyse ausgerichtet werden.

- `013-supabase-implementation-later.md`
  - Weiterhin relevant als spaeterer Sperr-/Umsetzungsschritt.
  - Muss aber alte Beispiele wie Fahrzeuge, Mietanfragen und Admin-Logik fuer Autovermietung ersetzen.
  - Umsetzung erst nach freigegebener Supabase-Spec, ausdruecklicher Freigabe, Dependency-/Env-Freigabe und Datenschutzklaerung.

### Fachlich veraltet und zu ersetzen oder umzuschreiben

- `009-homepage-rework.md`
  - Veraltet, weil Ziel und Kontext auf Autovermietung und Service rund ums Fahrzeug ausgerichtet sind.
  - Darf in der alten fachlichen Ausrichtung nicht weiterverwendet werden.
  - Empfehlung: nicht loeschen, sondern durch eine neue oder umgeschriebene Aufgabe "Homepage-Rework fuer reine KFZ-Gutachten-Webseite" ersetzen.

- `011-seo-rework.md`
  - Veraltet, weil der erwartete SEO-Fokus auf Autovermietung Berlin und Service rund ums Fahrzeug Berlin liegt.
  - Darf in der alten fachlichen Ausrichtung nicht weiterverwendet werden.
  - Empfehlung: nicht loeschen, sondern durch eine neue oder umgeschriebene Aufgabe "SEO-Rework fuer KFZ-Gutachten Berlin" ersetzen.

Diese beiden Aufgaben muessen spaeter entweder ersetzt oder vollstaendig auf die neue reine KFZ-Gutachten-Ausrichtung umgeschrieben werden.

## Mobile-First-Pflicht fuer spaetere Aufgaben

Alle zukuenftigen UI-, Homepage-, Kontaktflow-, Formular-, Upload- und Launch-Aufgaben muessen Mobile First geplant und geprueft werden.

Das ist besonders relevant fuer:

- Homepage-Rework
- Kontaktflow
- digitale Schadenaufnahme
- Upload-Formular
- Telefon-CTA
- WhatsApp-CTA
- mobile Zeilenumbrueche
- Bild-Upload vom Handy
- spaetere Kundenportal-/Web-App-Planung

Mobile First muss in den spaeteren Tasks als Akzeptanzkriterium auftauchen und darf nicht erst als nachtraegliche Pruefung ergaenzt werden.

## Vorgeschlagene neue Reihenfolge

1. Aufgabe 015 freigeben und nach `done` verschieben.
2. Alte Basisaufgaben 001 bis 004 pruefen und bei ausdruecklicher Freigabe nach `done` verschieben oder als durch 014 ueberholt markieren.
3. Aufgabe 005 anpassen: Fragen aus `specs/01-questions.md` beantworten.
4. Aufgabe 006 anpassen: finale Specs fuer KFZ-Gutachten, digitale Schadenaufnahme, KI-Grenzen, Kontaktflow, SEO und technische Planung erstellen.
5. Aufgabe 007 anpassen: Rework-Plan fuer reine KFZ-Gutachten-Webseite erstellen.
6. Aufgabe 008 anpassen: Content-Cleanup-Plan fuer alte Autovermietung-/Service-Inhalte erstellen.
7. Aufgabe 009 ersetzen: Homepage-Rework fuer KFZ-Gutachten-Webseite planen und spaeter umsetzen.
8. Aufgabe 011 ersetzen: SEO-Rework fuer KFZ-Gutachten, Unfallgutachten, Schadengutachten, Wertgutachten und lokale Suche planen.
9. Aufgabe 012 anpassen: Supabase-Planung fuer Upload, Schadenanfragen und interne Pruefung erstellen.
10. Neue Aufgabe vorschlagen: KI-Voranalyse-Planung als eigener fachlicher und technischer Planungsschritt.
11. Aufgabe 013 anpassen: Supabase-/Upload-Umsetzung erst nach freigegebenen Specs und ausdruecklicher Freigabe.
12. Aufgabe 010 spaeter ausfuehren: Code-Cleanup erst nach Rework, Content-Cleanup und Verwendungspruefung.

## Vorgeschlagene neue oder ersetzende Aufgaben

Diese Aufgaben wurden noch nicht als separate Dateien erstellt, weil zuerst die Workflow-Bereinigung freigegeben werden soll.

- `016-answer-kfz-questions.md`
  - Ersatz oder Anpassung fuer Aufgabe 005.
  - Zweck: offene Fragen aus `specs/01-questions.md` beantworten.

- `017-create-kfz-final-specs.md`
  - Ersatz oder Anpassung fuer Aufgabe 006.
  - Zweck: finale Specs fuer reine KFZ-Gutachten-Webseite erstellen.

- `018-create-kfz-rework-plan.md`
  - Ersatz oder Anpassung fuer Aufgabe 007.
  - Zweck: Umsetzungsplan vor Code-/UI-Aenderungen erstellen.

- `019-plan-old-scope-content-cleanup.md`
  - Ersatz oder Anpassung fuer Aufgabe 008.
  - Zweck: alte Autovermietung-/Service-Inhalte kontrolliert erfassen.

- `020-plan-homepage-kfz-gutachten-rework.md`
  - Ersatz fuer Aufgabe 009.
  - Zweck: Homepage-Rework fuer KFZ-Gutachten planen.

- `021-plan-seo-kfz-gutachten.md`
  - Ersatz fuer Aufgabe 011.
  - Zweck: SEO auf KFZ-Gutachten und lokale Suchintention ausrichten.

- `022-plan-supabase-damage-upload.md`
  - Ersatz oder Anpassung fuer Aufgabe 012.
  - Zweck: Supabase fuer Schadenanfragen, Uploads und interne Pruefung planen.

- `023-plan-ki-voranalyse.md`
  - Neue Aufgabe.
  - Zweck: KI-Voranalyse fachlich, rechtlich und technisch planen, ohne Integration umzusetzen.

- `024-implement-after-approved-specs.md`
  - Spaeterer Sammelrahmen oder Aufteilung in einzelne Umsetzungstasks.
  - Zweck: Umsetzung erst nach freigegebenen Specs, Rework-Plan und ausdruecklicher Freigabe.

## Verschobene Aufgaben

Keine.

Begruendung: Aus `workflow/todo/` wurden keine Aufgaben nach `workflow/done/` verschoben, weil fuer 001 bis 013 keine ausdrueckliche Verschiebefreigabe dokumentiert ist. Aufgabe 014 lag bereits in `workflow/done/`.

## Offene Entscheidungen

- Sollen 001 bis 004 als erledigt bestaetigt und nach `done` verschoben werden?
- Sollen 005 bis 008, 010, 012 und 013 direkt umgeschrieben oder durch neue nummerierte Aufgaben ersetzt werden?
- Sollen 009 und 011 archiviert, umbenannt oder durch neue Aufgaben ersetzt werden?
- Soll eine eigene Aufgabe fuer KI-Voranalyse-Planung angelegt werden?
- Soll fuer veraltete Aufgaben ein Archivordner innerhalb `workflow/` entstehen oder sollen sie in `todo/` bleiben, bis sie ersetzt sind?

## Checks

- Keine Code-Aenderungen.
- Keine UI-Aenderungen.
- Keine Spec-Aenderungen.
- Keine Supabase-Integration.
- Keine KI-Integration.
- Build-, Typecheck- und Lint-Checks sind fuer diese reine Workflow-Dokumentation nicht erforderlich.
- Reviewer wurden nicht genutzt, weil keine UI-, Content-, SEO-, Performance- oder Launch-Aenderung umgesetzt wurde.

## Status

Umgesetzt, wartet auf Freigabe.
