# Aufgabe 025 - Umsetzung erst nach freigegebenen Specs

## Ziel

Als Sperr- und Rahmenaufgabe sicherstellen, dass Code erst nach freigegebenen Fragen, Specs, Rework-Plan und konkreten Umsetzungstasks geaendert wird.

## Kontext

Diese Aufgabe ist kein Freifahrtschein fuer Umsetzung. Sie dokumentiert die Bedingungen, die vor jeder spaeteren Code-, UI-, Supabase-, KI- oder Launch-Umsetzung erfuellt sein muessen.

## Vorgehen

- Pruefen, ob Fragen beantwortet sind.
- Pruefen, ob finale Specs erstellt und freigegeben sind.
- Pruefen, ob ein Rework-Plan erstellt und freigegeben ist.
- Konkrete Umsetzungstasks erstellen.
- Mobile-First-Anforderungen in allen relevanten Umsetzungstasks aufnehmen.
- Riskante Aenderungen gemaess `AGENTS.md` vorher bestaetigen lassen.

## Akzeptanzkriterien

- Es ist geprueft, ob die freigegebenen Specs und erledigten Aufgaben 019, 020 und 021 fuer den ersten Homepage-Umsetzungsschritt ausreichen.
- Es ist geprueft, ob die Roadmap-Aufgaben 022, 023 und 024 fuer die erste Homepage-Umsetzung nicht zwingend vorher erledigt werden muessen.
- Ein klar begrenzter erster Homepage-Umsetzungstask kann aus den freigegebenen Grundlagen abgeleitet werden.
- Fuer den ersten Umsetzungstask ist festgelegt, welche Bereiche bearbeitet werden duerfen und welche Bereiche weiterhin tabu sind.
- In Aufgabe 025 selbst findet keine Code-, UI-, Routing-, Content-, Asset-, Config-, Supabase-, Upload- oder KI-Umsetzung statt.
- Supabase, KI, Dependencies, Environment-Variablen und Routen-Aenderungen werden nur nach spaeterer ausdruecklicher Freigabe umgesetzt.

## Umsetzungsgate fuer ersten Homepage-Rework

### 1. Ergebnis der Gate-Pruefung

- Die erledigten Aufgaben 019, 020 und 021 reichen als Grundlage fuer einen ersten klar begrenzten Homepage-Umsetzungstask aus.
- Die Visual-Spec-Leitplanke ist vorhanden und muss bei der spaeteren Umsetzung beachtet werden.
- Die Aufgaben 022, 023 und 024 sind fuer die erste Homepage-Umsetzung nicht zwingend noetig.
- Supabase, Upload, KI und Kundenportal bleiben Roadmap-Themen und duerfen nicht Teil der ersten Homepage-Umsetzung werden.

### 2. Erster empfohlener Umsetzungstask

- Vorgeschlagener Taskname: `027-implement-homepage-kfz-gutachten-rework.md`
- Der Task wird in Aufgabe 025 nur empfohlen und noch nicht angelegt.
- Der Task soll die erste sichtbare Homepage-Umsetzung aus den freigegebenen Grundlagen ableiten.

### 3. Erlaubter Scope fuer den ersten Umsetzungstask

- Homepage-Struktur und sichtbare Sektionen.
- Hero auf `KFZ-Gutachten Berlin`.
- Gutachtenarten und Leistungsfokus.
- Ablauf und Anfrage.
- Digitale Schadenaufnahme nur als Anfragevorbereitung, nicht als Upload.
- Trust- und Kompetenzbereich sachlich.
- FAQ- und Kontaktbereich nur innerhalb freigegebener Inhalte.
- CTAs fuer Telefon, WhatsApp und freigegebene Anfragewege.
- Bestehende Komponenten und Layouts wiederverwenden, soweit passend.
- Bestehende Schwarz/Rot-Designrichtung beibehalten.

### 4. Tabu fuer den ersten Umsetzungstask

- Supabase.
- Upload.
- KI.
- Kundenportal.
- Adminbereich.
- Neue Dependencies.
- Environment-Variablen.
- Datenbankaenderungen.
- Routenloeschungen.
- Redirects ohne eigenen Routing- oder Redirect-Task.
- SEO-, Metadata- oder Structured-Data-Umsetzung ohne eigenen SEO-Umsetzungstask.
- Alte Services endgueltig loeschen ohne Referenz-, Routing- und SEO-Pruefung.
- Komplettes Redesign.

### 5. Voraussichtliche Checks nach erster Umsetzung

- Typecheck.
- Lint.
- Build.
- Mobile-Ansicht pruefen.
- Desktop-Ansicht pruefen.
- CTA-Wege pruefen.
- Keine alten Nicht-Scope-Leistungen sichtbar priorisiert.
- Keine Upload-, Supabase- oder KI-Livefunktion suggeriert.

## Status

Status: in Arbeit
