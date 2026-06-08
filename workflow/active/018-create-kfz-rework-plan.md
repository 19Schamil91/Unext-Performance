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
- ob `workflow/active/` sinnvoll waere
- vorhandene `.agents/skills/`
- ob ein eigener Spec-Review-Skill sinnvoll waere
- alte Leistungsrouten unter `app/`
- alte Service-Komponenten unter `components/`
- alte Uebersetzungs- und Content-Dateien unter `lib/translations/`
- alte SEO-, Metadata- und Structured-Data-Bereiche unter `lib/`
- alte Assets unter `public/images/`
- Root-Screenshot- und Audit-Dateien
- Log-Dateien
- ungewoehnliche Datei `-`

## Vorgehen

- Freigegebene Specs pruefen.
- Strukturabgleich des aktuellen Arbeitsbaums dokumentieren.
- Workflow-Struktur pruefen und `workflow/active/` bewerten.
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
- Root-Artefakte
- Supabase
- Upload
- KI
- Adminbereich
- Kundenportal
- Cleanup

Supabase, Upload, KI, Adminbereich und Kundenportal duerfen in Aufgabe 018 nur als Roadmap, Abhaengigkeit oder spaetere eigene Aufgabe geplant werden.

Sie duerfen nicht technisch umgesetzt werden.

## Akzeptanzkriterien

- Der Strukturabgleich ist dokumentiert.
- Der Plan nennt betroffene Dateien, Komponenten, Inhalte, Assets und Routen.
- Alte Routen, Komponenten, Uebersetzungen, Assets und Root-Artefakte sind inventarisiert.
- Alte SEO-, Metadata- und Structured-Data-Bereiche sind als Pruefpunkte erfasst.
- Keine Dateien wurden geloescht, verschoben oder inhaltlich umgebaut.
- Keine Code-, UI-, Content-, Routing-, Asset-, Supabase-, Upload-, KI-, Admin- oder Kundenportal-Aenderungen wurden ausgefuehrt.
- `workflow/active/` wurde bewertet, aber nicht ohne Freigabe eingefuehrt.
- Ein moeglicher Spec-Review-Skill wurde bewertet, aber nicht ohne Freigabe eingefuehrt.
- Die Reihenfolge trennt Content, UI, Routing, SEO/Metadata/Structured Data, Assets, Root-Artefakte, Supabase, Upload, KI, Adminbereich, Kundenportal und Cleanup.
- Supabase, Upload, KI, Adminbereich und Kundenportal sind nur als Roadmap oder Abhaengigkeit geplant.
- Der Plan unterscheidet zwischen sofortiger Rework-Planung, spaeterem Content-Cleanup, spaeterem Code-Cleanup und spaeterem Root-Artefakt-Cleanup.
- Der Plan nennt konkrete spaetere Aufgaben fuer Cleanup und Rework.
- Mobile First ist als Planungs- und Pruefkriterium enthalten.
- Der Plan ist vor Code-Aenderungen freigegeben.
- `git diff --check -- workflow/todo/018-create-kfz-rework-plan.md` ist erfolgreich.
- Vor dem Verschieben nach `workflow/done/` wurde gefragt, ob Aufgabe 018 abgeschlossen und nach `done` verschoben werden soll.

## Status

in Arbeit
