# Aufgabe 018 - KFZ-Rework-Plan erstellen

## Ziel

Einen konkreten Umsetzungsplan fuer die reine KFZ-Gutachten-Webseite erstellen, bevor Code, UI, Inhalte, Routing, Assets, Supabase oder KI geaendert werden.

Aufgabe 018 ist eine reine Planungs- und Strukturabgleich-Aufgabe.

Sie fuehrt keine Code-, UI-, Content-, Routing-, Asset-, Supabase-, Upload-, KI-, Admin- oder Kundenportal-Umsetzung aus.

## Kontext

Der Rework darf erst nach freigegebenen finalen Specs geplant werden.

Der Plan muss aus den freigegebenen Specs abgeleitet werden und darf keine neuen fachlichen Annahmen erfinden.

Vor dem eigentlichen Rework-Plan muss der aktuelle Arbeitsbaum, Workflow und alte Code-/Content-Bestand sauber abgeglichen werden.

Der Plan soll Umsetzungsschritte, Risiken, Abhaengigkeiten, Pruefungen und spaetere Cleanup-Aufgaben sauber trennen.

Alte Inhalte duerfen in dieser Aufgabe nur inventarisiert und bewertet werden.

Sie duerfen nicht geloescht, verschoben, umbenannt oder inhaltlich umgebaut werden.

## Strukturabgleich vor dem Rework-Plan

Vor dem Rework-Plan muss dokumentiert werden:

- aktuelle Root-Struktur des Projekts
- `specs/`-Struktur
- `workflow/`-Struktur mit `todo/`, `done/` und `replaced/`
- `workflow/active/` ist bereits eingefuehrt
- Aufgabe 018 liegt aktiv unter `workflow/active/018-create-kfz-rework-plan.md`
- vorhandene `.agents/skills/`
- ob ein eigener Spec-Review-Skill sinnvoll waere
- alte Leistungsrouten unter `app/`
- alte Service-Komponenten unter `components/`
- alte Uebersetzungs- und Content-Dateien unter `lib/translations/`
- alte SEO-, Metadata- und Structured-Data-Bereiche unter `lib/`
- alte Assets unter `public/images/`
- durch den Struktur-/Cleanup-PR bereits nach `docs/audits/` geordnete Root- und Audit-Artefakte als moegliche Rework-Abhaengigkeit
- keine neue Cleanup-Umsetzung fuer Root-/Audit-Artefakte in Aufgabe 018

## Vorgehen

- Freigegebene Specs pruefen.
- Strukturabgleich des aktuellen Arbeitsbaums dokumentieren.
- Workflow-Struktur pruefen und festhalten, dass Aufgabe 018 aktiv unter `workflow/active/018-create-kfz-rework-plan.md` liegt.
- Vorhandene `.agents/skills/` pruefen und moeglichen Spec-Review-Skill bewerten.
- Betroffene Dateien, Komponenten, Inhalte, Assets und Routen erfassen.
- Alte Inhalte dokumentieren, die ersetzt, ausgeblendet, archiviert oder spaeter kontrolliert entfernt werden muessen.
- Alte Inhalte nur inventarisieren und bewerten, nicht bereinigen.
- Neue Seitenstruktur und Reihenfolge der Umsetzung planen.
- Risiken, Abhaengigkeiten und Pruefschritte dokumentieren.
- Mobile-First-Anforderungen fuer alle UI- und Kontaktbereiche aufnehmen.
- Spaetere Cleanup-Aufgaben vorschlagen, aber nicht selbst ausfuehren.
- Vor Abschluss zusammenfassen und fragen, ob Aufgabe 018 nach `workflow/done/` verschoben werden soll.

## Reihenfolge der Planung

Der Rework-Plan muss die folgenden Bereiche getrennt betrachten:

- Content
- UI
- Routing
- SEO, Metadata und Structured Data
- Assets
- Root-/Audit-Artefakt-Abhaengigkeiten
- Supabase
- Upload
- KI
- Adminbereich
- Kundenportal
- Cleanup

Supabase, Upload, KI, Adminbereich und Kundenportal duerfen in Aufgabe 018 nur als Roadmap, Abhaengigkeit oder spaetere eigene Aufgabe geplant werden.

Sie duerfen nicht technisch umgesetzt werden.

## Rework-Masterplan aus dem Struktur- und Bestandsabgleich

### 1. Kurzfassung Ist-Zustand

Das Projekt ist aktuell eine mehrsprachige Next.js-Webseite mit deutscher Default-Struktur und lokalisierten `en`- und `ru`-Routen.

Die bestehende Seite enthaelt noch eine breite Fahrzeugservice-Ausrichtung mit Autovermietung, Autoservice, Fahrzeugaufbereitung, Zulassungsservice, Abschleppdienst/Pannenhilfe, Express-/Kurierbezug und Unfallgutachten.

Die neue fachliche Zielrichtung ist dagegen eine fokussierte KFZ-Gutachten-Webseite. Aufgabe 018 dient nur dazu, den dafuer notwendigen Rework zu planen und den Bestand zu inventarisieren.

In Aufgabe 018 werden keine Code-, UI-, Routing-, Content-, Asset-, Supabase-, Upload-, KI-, Admin- oder Kundenportal-Aenderungen umgesetzt.

### 2. Erkannte alte Scope-Bereiche

Folgende Bereiche gehoeren erkennbar noch zur alten oder zu breiten Website-Struktur und muessen spaeter im Rework-Plan beruecksichtigt werden:

- alte Leistungsrouten unter `app/` fuer Autovermietung, Autoservice, Detailing, Zulassungsservice und Abschleppdienst/Pannenhilfe
- breite Leistungsuebersicht unter `/leistungen`
- alte Service-Detailkomponenten unter `components/`
- Homepage-Abschnitte mit breitem Fahrzeugservice-, Express-/Kurier- oder Mehrleistungsbezug
- Header-, Footer- und Service-Anker mit alten Leistungslinks
- alte Uebersetzungen in `lib/translations*`
- alte SEO-, Metadata- und Structured-Data-Begriffe unter `lib/`
- alte Service-Bilder unter `public/images/`
- historische Audit- und Screenshot-Artefakte unter `docs/`

Diese Bereiche werden in Aufgabe 018 nur erfasst und bewertet. Sie werden nicht geloescht, verschoben, umgeschrieben oder technisch angepasst.

### 3. Bereiche, die wahrscheinlich bleiben koennen

Folgende Bereiche wirken grundsaetzlich weiterverwendbar, muessen aber spaeter gegen die finalen Rework-Specs geprueft werden:

- Grundstruktur von Next.js App Router
- Mehrsprachigkeitsmodell mit Deutsch, Englisch und Russisch
- Kontaktseiten und rechtliche Seiten als Seitentypen
- bestehende UI-Basis unter `components/ui/`
- Logo und eventuell passende Gutachten- oder Team-Bilder nach Referenz- und Bildpruefung
- bestehende Workflow- und Spec-Struktur
- bestehender Resend-basierter Anfrage- und E-Mail-Flow

Der bestehende Kontakt-/Anfrageflow ueber `components/service-inquiry-form.tsx`, `lib/contactForm.ts` und `lib/contactActions.ts` ist keine Altlast und kein Cleanup-Kandidat.

Dieser Resend-basierte E-Mail-Flow soll fuer die zukuenftige KFZ-Gutachten-Seite grundsaetzlich erhalten bleiben, solange keine neue fachliche Entscheidung dagegen getroffen wird.

Inhalte, Formularfelder, Texte, Consent-/Datenschutz-Hinweise und fachliche Begriffe des Formulars muessen spaeter gegen die neuen KFZ-Gutachten-Specs geprueft werden.

Aus dem bestehenden Kontaktformular wird in Aufgabe 018 keine Supabase-, Upload- oder KI-Erweiterung abgeleitet.

### 4. Routing- und Redirect-Themen

Aktuell existieren Routen fuer:

- Startseite
- Kontakt
- Leistungen
- Unfallgutachten
- Autovermietung
- Autoservice
- Detailing
- Zulassungsservice
- Abschleppdienst/Pannenhilfe
- Ueber uns
- Impressum
- Datenschutz
- AGB
- lokalisierte Varianten fuer Englisch und Russisch

Die spaetere Zielstruktur muss klaeren:

- ob `/leistungen/unfallgutachten` bestehen bleibt, ersetzt oder in eine neue Gutachten-Route ueberfuehrt wird
- ob `/leistungen` als breite Uebersicht entfernt, umgeschrieben oder redirectet wird
- wohin alte Service-Routen redirectet werden
- welche Routen fuer SEO und Nutzerfuehrung wirklich noetig sind
- wie Deutsch, Englisch und Russisch parallel behandelt werden

Alte Service-Routen duerfen spaeter nicht einfach geloescht werden. Vor dem Entfernen braucht es eine Referenzpruefung, eine Redirect-Entscheidung und einen SEO-Plan.

### 5. Content- und Uebersetzungs-Themen

Die bestehenden Texte enthalten alte Themen wie Autovermietung, Werkstatt, Autoservice, Zulassung, Abschleppdienst, Detailing, Express/Kurier und allgemeine Mobilitaet.

Diese Inhalte sind ueber Seiten, Komponenten, Header, Footer, Formularumfeld, Legal-Texte und Uebersetzungsdateien verteilt.

Fuer den Rework muss spaeter geplant werden:

- neue deutsche Kerntexte fuer die KFZ-Gutachten-Ausrichtung
- konsistente englische und russische Varianten
- Bereinigung alter Leistungsversprechen
- Pruefung rechtlicher Texte auf alte Leistungsbezuege
- mobile-first geeignete Textlaengen und CTA-Texte
- Formulartexte auf Basis des bestehenden Resend-Flows

Content- und Uebersetzungsdateien werden in Aufgabe 018 nicht geaendert.

### 6. SEO-, Metadata- und Structured-Data-Themen

Aktuell enthalten Metadata und strukturierte Daten noch alte oder zu breite Begriffe wie Fahrzeugservice, Autovermietung, Werkstatt, Zulassung, Abschleppdienst, Detailing und Kurierdienst.

Besonders zu pruefen sind spaeter:

- Seitentitel und Descriptions
- Keywords und lokale SEO-Begriffe
- OpenGraph- und Social-Metadata
- LocalBusiness- und Service-Schema
- moegliche Werkstatt- oder AutoRepair-Fehlpositionierung
- Umgang mit alten Service-URLs
- Sitemap- und Robots-Strategie, falls im Projekt ergaenzt oder angepasst

SEO, Metadata und Structured Data werden in Aufgabe 018 nur als Planungs- und Pruefpunkte dokumentiert.

### 7. Asset-Themen

Unter `public/images/` liegen alte Service-Bilder und mehrere Hero-, Team-, Office- oder Platzhalterbilder.

Alte Asset-Gruppen betreffen insbesondere:

- Autovermietung
- Werkstatt/Autoservice
- Detailing/Fahrzeugaufbereitung
- Zulassung
- Abschleppen/Pannenhilfe
- Express/Kurier
- breite allgemeine Fahrzeugservice-Darstellung

Alte Assets duerfen spaeter nicht einfach geloescht werden.

Vor einem Asset-Cleanup braucht es:

- Referenzpruefung in Code, CSS, Metadata, Markdown und Dokumentation
- Entscheidung, ob ein Bild fachlich noch zur Gutachten-Ausrichtung passt
- Ersatz- oder Redirect-Plan fuer Bilder, die in SEO/Social-Kontexten genutzt werden
- getrennte Cleanup-Aufgabe fuer ungenutzte Assets

In Aufgabe 018 werden keine Assets geaendert, verschoben oder geloescht.

### 8. Technische Abhaengigkeiten und gesperrte spaetere Themen

Der bestehende Resend-basierte Anfrage- und E-Mail-Flow ist bereits eingerichtet und soll als technische Basis fuer den zukuenftigen Kontakt-/Anfrageflow erhalten bleiben.

Folgende Themen bleiben jedoch gesperrt und werden jetzt nicht umgesetzt:

- Supabase
- Datei-Upload
- KI-Voranalyse
- Adminbereich
- Kundenportal
- Authentifizierung
- Datenbankstruktur
- Storage/Buckets

Diese Themen duerfen in Aufgabe 018 nur als Roadmap, Abhaengigkeit, Risiko oder spaetere eigene Aufgabe genannt werden.

Es wird keine Supabase-, Upload- oder KI-Erweiterung aus dem bestehenden Kontaktformular abgeleitet.

### 9. Risiken fuer spaetere Umsetzung

Wichtige Risiken fuer den spaeteren Rework:

- alte Services sind ueber Routing, Navigation, Footer, Komponenten, Uebersetzungen, Metadata und Assets verteilt
- alte URLs koennen SEO-Wert oder externe Links haben
- mehrsprachige Inhalte muessen synchron und fachlich konsistent umgestellt werden
- rechtliche Texte und Formularhinweise muessen zum neuen Anfragefluss passen
- Structured Data darf UNEXT nicht falsch als Werkstatt oder Meisterbetrieb positionieren
- Asset-Loeschungen koennen ungewollt Bilder, Metadata oder Dokumentation brechen
- Kontaktformular-Inhalte muessen angepasst werden, ohne den funktionierenden Resend-Flow unnoetig zu ersetzen
- Supabase, Upload, KI, Adminbereich und Kundenportal duerfen nicht nebenbei in den Rework rutschen

### 10. Empfohlene Rework-Reihenfolge

Die spaetere Planung sollte in dieser Reihenfolge erfolgen:

1. Ziel-Routing und Redirect-Strategie fuer alte Service-Routen klaeren.
2. Content-Zielstruktur fuer Startseite, Gutachtenbereich, Kontakt und rechtliche Seiten planen.
3. Bestehenden Resend-Kontaktflow fachlich gegen neue Gutachten-Specs abgleichen.
4. Mehrsprachige Content-Migration fuer Deutsch, Englisch und Russisch planen.
5. SEO-, Metadata- und Structured-Data-Zielbild planen.
6. Asset-Referenzen pruefen und Asset-Cleanup separat planen.
7. UI- und Mobile-First-Umsetzung planen.
8. Code-Cleanup nach fachlicher Umsetzung separat planen.
9. Supabase, Upload, KI, Adminbereich und Kundenportal nur als spaetere eigene Roadmap-Aufgaben behandeln.

### 11. Moegliche spaetere Unteraufgaben aus Aufgabe 018

Moegliche spaetere Unteraufgaben, die aus Aufgabe 018 abgeleitet werden koennten:

- Routing- und Redirect-Plan fuer alte Service-Routen
- Homepage- und Gutachten-Content-Plan
- Kontaktformular- und Datenschutz-Abgleich auf Basis des bestehenden Resend-Flows
- i18n-Migrationsplan fuer Deutsch, Englisch und Russisch
- SEO-, Metadata- und Structured-Data-Plan fuer KFZ-Gutachten
- Asset-Referenz- und Cleanup-Plan
- Legal-Text-Abgleich fuer AGB, Datenschutz und Impressum
- Code-Cleanup-Plan nach abgeschlossenem Rework
- Roadmap-Plan fuer Supabase, Upload, KI, Adminbereich und Kundenportal

Diese Unteraufgaben werden in Aufgabe 018 nur vorgeschlagen.

Es werden keine neuen Task-Dateien automatisch erstellt.

## Akzeptanzkriterien

- Der Strukturabgleich ist dokumentiert.
- Der Plan nennt betroffene Dateien, Komponenten, Inhalte, Assets und Routen.
- Alte Routen, Komponenten, Uebersetzungen und Assets sind inventarisiert.
- Root- und Audit-Artefakte sind nur als moegliche Rework-Abhaengigkeit geprueft.
- Alte SEO-, Metadata- und Structured-Data-Bereiche sind als Pruefpunkte erfasst.
- Keine Dateien wurden geloescht, verschoben oder inhaltlich umgebaut.
- Keine Code-, UI-, Content-, Routing-, Asset-, Supabase-, Upload-, KI-, Admin- oder Kundenportal-Aenderungen wurden ausgefuehrt.
- `workflow/active/` ist bereits eingefuehrt und Aufgabe 018 liegt aktiv unter `workflow/active/018-create-kfz-rework-plan.md`.
- Aufgabe 018 darf erst nach Review und ausdruecklicher Freigabe nach `workflow/done/` verschoben werden.
- Ein moeglicher Spec-Review-Skill wurde bewertet, aber nicht ohne Freigabe eingefuehrt.
- Die Reihenfolge trennt Content, UI, Routing, SEO/Metadata/Structured Data, Assets, Root-/Audit-Artefakt-Abhaengigkeiten, Supabase, Upload, KI, Adminbereich, Kundenportal und Cleanup.
- Supabase, Upload, KI, Adminbereich und Kundenportal sind nur als Roadmap oder Abhaengigkeit geplant.
- Der Plan unterscheidet zwischen sofortiger Rework-Planung, spaeterem Content-Cleanup, spaeterem Code-Cleanup und spaeterem Root-Artefakt-Cleanup.
- Der Plan nennt konkrete spaetere Aufgaben fuer Cleanup und Rework.
- Mobile First ist als Planungs- und Pruefkriterium enthalten.
- Der Plan ist vor Code-Aenderungen freigegeben.
- `git diff --check -- workflow/active/018-create-kfz-rework-plan.md` ist erfolgreich.
- Vor dem Verschieben nach `workflow/done/` wurde gefragt, ob Aufgabe 018 abgeschlossen und nach `done` verschoben werden soll.

## Status

in Arbeit
