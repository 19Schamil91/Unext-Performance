# AGENTS.md

Dieses Dokument ist fuer den Agenten verbindlich.
Es beschreibt nur die Arbeitsweise im Projekt, nicht die fachlichen Inhalte der Webseite.
Fachliche Anforderungen gehoeren in `specs/`.

## Grundprinzip

Arbeite immer nach:

```text
SPEC -> PLAN -> CODE -> REVIEW -> DONE
```

Das bedeutet:

1. Anforderungen zuerst in Specs dokumentieren.
2. Danach die Umsetzung planen.
3. Erst dann Code oder Inhalte aendern.
4. Danach pruefen und zusammenfassen.
5. Erst nach ausdruecklicher Freigabe abschliessen.

## Branch-Regel

Groessere Umbauten, Reworks oder technische Integrationen muessen auf einem eigenen Feature-Branch stattfinden.

Vor solchen Aenderungen pruefen, ob bereits ein passender Branch aktiv ist.

Wenn kein passender Branch aktiv ist, zuerst nachfragen oder einen neuen Branch vorschlagen.

Keine groesseren Umbauten direkt auf dem Hauptbranch durchfuehren.

## Git- und PR-Arbeitsweise

Jedes Arbeitspaket bekommt einen eigenen Branch.

Ein Branch darf mehrere zusammengehoerige Commits enthalten.

Nicht fuer jeden einzelnen Commit einen neuen Branch erstellen.

Nicht mehrere unabhaengige Themen unnoetig auf einem Branch sammeln.

Vor Push oder PR muss der Working Tree sauber sein.

Vor Commit und Push passende Checks ausfuehren, je nach Aenderung:

- Specs/Markdown: `git diff --check -- <betroffene Dateien>`
- Code/UI: zusaetzlich `npm run lint`, `npx tsc --noEmit` und `npm run build` gemaess Projektregeln

Wenn das Arbeitspaket abgeschlossen beziehungsweise PR-bereit ist:

1. aktuellen Branch zu `origin` pushen
2. PR gegen `main` erstellen oder PR-Text vorbereiten
3. nicht automatisch mergen, ausser der Nutzer fordert es ausdruecklich

Nach Merge:

1. lokal auf `main` wechseln
2. `git pull origin main`
3. neuen Branch fuer das naechste Arbeitspaket erstellen

Unerwartete Dateiaenderungen, zum Beispiel generierte Dateien wie `next-env.d.ts`, muessen vor Commit geprueft und duerfen nicht unbeachtet mitcommitted werden.

Codex soll den Nutzer aktiv darauf hinweisen, wann ein neuer Branch sinnvoll ist.

Vor Aenderungen muss der Agent den aktuellen Arbeitsstand beruecksichtigen.

Wenn der Working Tree bereits Aenderungen enthaelt, die nicht zur aktuellen Aufgabe gehoeren, darf der Agent diese nicht ueberschreiben, nicht formatieren und nicht mitcommitten.

Unerwartete oder fremde Aenderungen muessen vor dem Commit klar benannt werden.

Der Agent darf nur Dateien committen, die eindeutig zur aktuellen Aufgabe gehoeren.

Bei Unsicherheit muss vor Commit, Formatierung oder Loeschen nachgefragt werden.

## Arbeitsregeln

- Arbeite immer nach Specs.
- Keine groesseren Code-Aenderungen ohne vorherige Spec.
- Keine spontanen Verbesserungen ausserhalb der aktuellen Aufgabe.
- Bestehende Komponenten, Utilities und Muster zuerst pruefen und wiederverwenden, bevor neue erstellt werden.
- Wenn etwas unklar ist, stelle eine gezielte Rueckfrage.
- Wenn Informationen fehlen, nichts erfinden.
- Wenn eine Leistung nicht bestaetigt ist, nicht bewerben.
- UNEXT nicht als KFZ-Meisterwerkstatt, Meisterbetrieb oder Vollservice-Werkstatt darstellen, solange das nicht ausdruecklich bestaetigt ist.
- Wenn eine Aenderung riskant ist, vorher nachfragen.
- Nach jeder Aufgabe kurz zusammenfassen, was geaendert wurde.
- Eine Aufgabe darf erst nach ausdruecklicher Freigabe abgeschlossen werden.

## Scope-Regel

Pro Aufgabe nur das bearbeiten, was in der jeweiligen Task-Datei oder Spec beschrieben ist.

Wenn waehrend der Arbeit ein neues Problem oder eine neue Idee auffaellt, nicht nebenbei loesen.

Stattdessen den Punkt kurz beschreiben und fragen, ob daraus eine neue Task-Datei in `workflow/todo/` erstellt werden soll.

Neue Task-Dateien duerfen nur erstellt werden, wenn der Nutzer dies bestaetigt oder ausdruecklich beauftragt.

Keine neuen Tasks ohne Freigabe.

Keine Aufgaben vermischen.

## Qualitaetsregel

- Nach Code-Aenderungen `npm run lint`, `npx tsc --noEmit` und `npm run build` ausfuehren.
- Wenn ein Check nicht ausgefuehrt werden kann oder fehlschlaegt, den Grund klar nennen.
- Groessere Komponenten und komplexe Logik bekommen sinnvolle Kommentare, die Zweck und Verhalten erklaeren.

## Mobile-First-Regel

- Neue und geaenderte UI muss zuerst fuer mobile Nutzung funktionieren.
- Layouts, Zeilenumbrueche, CTA-Buttons und Kontaktwege muessen auf kleinen Bildschirmen geprueft werden.
- Texte duerfen auf Mobile nicht unkontrolliert umbrechen oder wichtige Aussagen zerreissen.
- Buttons fuer Telefon, WhatsApp und Anfrage muessen auf Mobile schnell erreichbar sein.
- Responsive Verhalten muss bei jeder UI-Aenderung mitgedacht werden, nicht erst nachtraeglich.

## Reviewer-Regel

Vor dem Abschluss groesserer UI-, Content-, SEO-, Performance- oder Launch-Aufgaben muessen passende vorhandene Reviewer oder Checker genutzt oder bewusst als nicht erforderlich begruendet werden.

Beispiele:

- Mobile UI: `mobile_visual_checker`
- Desktop UI: `desktop_visual_checker`
- Typografie und Zeilenumbrueche: `typography_checker`
- Accessibility: `a11y_checker`
- SEO: `local_seo_reviewer`
- Performance: `performance_budget_reviewer`
- Launch: `launch_reviewer`
- allgemeine Codequalitaet: `quality_reviewer`

Reviewer ersetzen nicht die Freigabe durch den User.

Technische Checks und Reviewer koennen eine Aufgabe pruefen, ersetzen aber niemals die ausdrueckliche Freigabe durch den Nutzer.

## Workflow-Regel

Im Projekt wird ein einfacher Workflow-Ordner genutzt:

```text
workflow/
├── todo/
└── done/
```

In `workflow/todo/` liegen alle geplanten Aufgaben.

In `workflow/done/` liegen nur Aufgaben, die umgesetzt, geprueft und ausdruecklich freigegeben wurden.

Jede groessere Aufgabe braucht eine eigene Task-Datei in `workflow/todo/`.

Eine Task-Datei soll mindestens enthalten:

- Ziel
- Kontext
- Vorgehen
- Akzeptanzkriterien
- Status

Task-Dateien sollen einen klaren Status enthalten.

Erlaubte Statuswerte sind:

- `offen`
- `in Arbeit`
- `wartet auf Review`
- `wartet auf Freigabe`
- `abgeschlossen`

Statuswerte duerfen nicht frei erfunden werden.

Eine Aufgabe gilt erst als `abgeschlossen`, wenn sie umgesetzt, geprueft, zusammengefasst und vom Nutzer ausdruecklich freigegeben wurde.

Aufgaben duerfen nicht uebersprungen oder zusammengelegt werden, wenn dadurch wichtige Pruefschritte verloren gehen.

Eine Aufgabe darf nicht eigenstaendig nach `done/` verschoben werden.

Eine Aufgabe darf auch nach erfolgreichen Checks nicht automatisch nach `workflow/done/` verschoben werden.

Vor dem Verschieben nach `done/` gilt die Done-Regel.

## Commit-Regel

Commits duerfen nur zu klar zugeordneten Aufgaben erfolgen.

Vor einem Commit muss klar sein:

- welche Task bearbeitet wurde
- welche Dateien geaendert wurden
- welche Checks ausgefuehrt wurden
- ob die Aufgabe abgeschlossen oder noch offen ist

Keine Sammel-Commits mit unzusammenhaengenden Aenderungen.

Keine Commits mit halb fertigen, ungeprueften Aenderungen, ausser der User fordert ausdruecklich einen Zwischenstand-Commit an.

Vor Commits muss geprueft werden, ob der Working Tree nur Aenderungen enthaelt, die zur aktuellen Aufgabe gehoeren.

Unerwartete oder fremde Aenderungen duerfen nicht unbeachtet mitcommitted werden.

Wenn unklar ist, ob eine Datei zur aktuellen Aufgabe gehoert, muss vor dem Commit nachgefragt werden.

Commit-Nachrichten sollen nach Moeglichkeit die Task-Nummer enthalten, zum Beispiel:

`task-009: rework homepage hero`

## Done-Regel

Bevor eine Aufgabe nach `workflow/done/` verschoben wird, muss der Agent zusammenfassen:

- Aufgabe
- geaenderte Dateien
- wichtigste Aenderungen
- ausgefuehrte Checks
- offene Punkte
- ob Reviewer genutzt wurden oder warum nicht

Erst danach darf gefragt werden:

```text
Soll diese Aufgabe abgeschlossen und nach done verschoben werden?
```

Erst nach Bestaetigung darf die Aufgabe nach `workflow/done/` verschoben werden.

Ohne ausdrueckliche Bestaetigung bleibt die Aufgabe in `workflow/todo/`.

## Spec-Regel

Im Projekt wird ein Spec-System genutzt.

Specs liegen in:

```text
specs/
```

Die Specs sind die Grundlage fuer alle weiteren Aenderungen.

Wenn eine Aenderung nicht in den Specs steht, wird sie nicht umgesetzt.

Wenn eine Spec fehlt oder unklar ist, muss zuerst eine offene Frage dokumentiert werden.

Specs gelten nicht automatisch als freigegeben, nur weil sie erstellt oder geaendert wurden.

Nach dem Erstellen oder Aendern wichtiger Specs muss der Agent die Inhalte kurz zusammenfassen und auf Freigabe warten.

Erst nach ausdruecklicher Freigabe duerfen aus diesen Specs konkrete Code-Aenderungen oder Umsetzungsplaene abgeleitet werden.

## Cleanup-Regel

Beim spaeteren Umbau der Webseite soll nicht nur neuer Inhalt eingebaut werden.

Nicht mehr benoetigter Code soll sauber entfernt werden.

Dazu gehoeren spaeter:

- alte Leistungsinhalte
- alte Komponenten, die nicht mehr verwendet werden
- ungenutzte Imports
- ungenutzte Icons
- alte Datenarrays
- alte FAQ-Inhalte
- alte SEO-Texte
- ungenutzte Assets
- toter oder auskommentierter Code

Vor dem Loeschen muss geprueft werden, ob der Code wirklich nicht mehr verwendet wird.

Kein Code, Inhalt, Asset oder Import darf blind geloescht werden.

## Supabase-Regel

Supabase ist als geplante Erweiterung fuer dieses Projekt vorgesehen und soll spaeter eingesetzt werden.

Supabase darf jedoch nicht spontan oder nebenbei integriert werden.

Vor der technischen Umsetzung muessen zuerst eigene Supabase-Specs erstellt und freigegeben werden.

Diese Specs muessen mindestens klaeren:

- Supabase-Ziel
- Datenmodell
- Tabellen
- Sicherheitsregeln
- Formularfluss
- Admin- oder Verwaltungslogik
- Datenschutzfragen
- Implementierungsplan
- betroffene Dateien und Komponenten
- Risiken und Rollback-Moeglichkeiten

Solange diese Specs nicht erstellt und freigegeben sind, darf Supabase nur geplant werden.

Sobald die Supabase-Specs freigegeben sind, darf Supabase als eigene Aufgabe umgesetzt werden.

Die Umsetzung muss dann ueber `workflow/todo/` geplant, separat umgesetzt, geprueft und erst nach Freigabe abgeschlossen werden.

## Risikoregeln

Vor folgenden Aenderungen muss immer gefragt werden:

- neue Dependencies installieren
- bestehende Dependencies entfernen
- Routen loeschen oder umbenennen
- Build-Konfiguration aendern
- zentrale Komponenten loeschen
- Environment-Variablen hinzufuegen oder aendern
- Supabase einbauen
- Datenbankstruktur anlegen
- Authentifizierung einfuehren
- globale Styles stark veraendern
