# AGENTS.md

Dieses Dokument ist für den Agenten verbindlich.
Es beschreibt nur die Arbeitsweise im Projekt, nicht die fachlichen Inhalte der Webseite.
Fachliche Anforderungen gehören in `specs/`.

## Grundprinzip

Arbeite immer nach:

```text
SPEC -> PLAN -> CODE -> REVIEW -> DONE
```

Das bedeutet:

1. Anforderungen zuerst in Specs dokumentieren.
2. Danach die Umsetzung planen.
3. Erst dann Code oder Inhalte ändern.
4. Danach prüfen und zusammenfassen.
5. Erst nach ausdrücklicher Freigabe abschließen.

## Git-, Branch- und PR-Arbeitsweise

Jedes Arbeitspaket bekommt einen eigenen Branch.

Ein Branch darf mehrere zusammengehörige Commits enthalten.

Nicht für jeden einzelnen Commit einen neuen Branch erstellen.

Nicht mehrere unabhängige Themen unnötig auf einem Branch sammeln.

Größere Umbauten, Reworks oder technische Integrationen müssen auf einem eigenen Feature-Branch stattfinden.

Vor solchen Änderungen prüfen, ob bereits ein passender Branch aktiv ist.

Wenn kein passender Branch aktiv ist, zuerst nachfragen oder einen neuen Branch vorschlagen.

Keine größeren Umbauten direkt auf dem Hauptbranch durchführen.

Vor jeder Dateiänderung, jedem Commit und jedem Push muss der aktuelle Arbeitsstand berücksichtigt werden.

Wenn der Working Tree bereits Änderungen enthält, die nicht zur aktuellen Aufgabe gehören, darf der Agent diese nicht überschreiben, nicht formatieren und nicht mitcommitten.

Unerwartete oder fremde Änderungen müssen vor dem Commit klar benannt werden.

Bei Unsicherheit muss vor Commit, Formatierung oder Löschen nachgefragt werden.

Vor Push oder PR muss der Working Tree sauber sein.

Vor Commit und Push passende Checks ausführen, je nach Änderung:

- Specs/Markdown: `git diff --check -- <betroffene Dateien>`
- Code/UI: zusätzlich `npm run lint`, `npx tsc --noEmit` und `npm run build` gemäß Projektregeln

Wenn das Arbeitspaket abgeschlossen beziehungsweise PR-bereit ist:

1. passenden Branch zu `origin` pushen
2. vor dem PR-Erstellen prüfen:
   - `git status`
   - `git diff --stat main...HEAD`
   - `git diff main...HEAD`
   - ausgeführte Checks mit Ergebnis
3. PR-Titel und PR-Beschreibung konkret anhand des tatsächlichen Diffs erstellen
4. PR direkt per GitHub CLI erstellen:
   `gh pr create --base main --head <aktueller-branch> --title "<konkreter PR-Titel>" --body-file <pr-body-datei>`
5. keinen reinen GitHub-Compare-Link als Ersatz ausgeben
6. `gh pr create --web` nicht verwenden
7. wenn `gh pr create` fehlschlägt: Fehler nennen und vollständigen kopierfertigen PR-Titel und PR-Body ausgeben
8. nicht automatisch mergen, außer der Nutzer fordert es ausdrücklich
9. nach erfolgreichem Push und PR-Erstellung die Branch-Handoff-Regel beachten

## PR-Beschreibungs-Regel

Beim Erstellen eines Pull Requests muss der Agent die PR-Beschreibung konkret anhand des tatsächlichen Diffs ausfüllen.

Der PR-Body muss vor dem Erstellen in einer temporären Markdown-Datei oder per Heredoc vorbereitet werden.

Der rohe Inhalt aus `.github/pull_request_template.md` darf niemals unverändert verwendet werden.

Der PR-Titel darf nicht nur der normalisierte Branchname sein.

Die Template-Struktur darf genutzt werden, aber alle Hinweise und Platzhalter müssen durch konkrete Inhalte ersetzt werden.

Ein GitHub-Compare-Link ist nur erlaubt, wenn `gh pr create` nachweislich fehlschlägt.

Verpflichtend:

- Template-Hinweise ersetzen, nicht stehen lassen
- keine leeren Platzhalter wie `-`, `Aufgabe:` oder `Status:` ohne Inhalt stehen lassen
- keine Checkboxen oder Auswahlpunkte aus dem Template unverändert übernehmen
- Zusammenfassung kurz und konkret schreiben
- geänderte Dateien und Bereiche konkret nennen
- Checks mit Ergebnis nennen oder begründen, warum sie nicht erforderlich waren
- Risiken und Hinweise konkret nennen
- offene Punkte nur nennen, wenn es wirklich welche gibt; sonst `None` oder `Keine offenen Punkte` schreiben
- PR-Beschreibung kurz, professionell und reviewfähig halten

## Branch-Handoff-Regel nach Push

Nach einem erfolgreichen Push darf der Agent nicht direkt mit einer neuen Aufgabe weiterarbeiten.

Vor jeder weiteren Dateiänderung, jedem Commit und jedem Push muss der Agent den Nutzer fragen, ob der PR bereits gemerged wurde.

Wenn der Nutzer bestätigt, dass der PR gemerged wurde, ist diese Reihenfolge verpflichtend:

1. `git status`
2. auf `main` wechseln
3. `git pull origin main`
4. neuen Branch für die nächste Aufgabe erstellen
5. erst danach weitere Änderungen machen

Wenn der PR noch nicht gemerged wurde:

- auf demselben Branch nur Änderungen machen, die genau zu diesem PR gehören
- keine neue Aufgabe auf diesem Branch beginnen
- keine themenfremden Dateien ändern, committen oder pushen

Diese Regel ist verpflichtend und gilt vor jeder neuen Dateiänderung, jedem Commit und jedem Push.

Unerwartete Dateiänderungen, zum Beispiel generierte Dateien wie `next-env.d.ts`, müssen vor Commit geprüft und dürfen nicht unbeachtet mitcommitted werden.

Codex soll den Nutzer aktiv darauf hinweisen, wann ein neuer Branch sinnvoll ist.

## Arbeitsregeln

- Arbeite immer nach Specs.
- Keine größeren Code-Änderungen ohne vorherige Spec.
- Keine spontanen Verbesserungen außerhalb der aktuellen Aufgabe.
- Bestehende Komponenten, Utilities und Muster zuerst prüfen und wiederverwenden, bevor neue erstellt werden.
- Wenn etwas unklar ist, stelle eine gezielte Rückfrage.
- Wenn Informationen fehlen, nichts erfinden.
- Wenn eine Leistung nicht bestätigt ist, nicht bewerben.
- UNEXT nicht als KFZ-Meisterwerkstatt, Meisterbetrieb oder Vollservice-Werkstatt darstellen, solange das nicht ausdrücklich bestätigt ist.
- Wenn eine Änderung riskant ist, vorher nachfragen.
- Nach jeder Aufgabe kurz zusammenfassen, was geändert wurde.
- Eine Aufgabe darf erst nach ausdrücklicher Freigabe abgeschlossen werden.

## Scope-Regel

Pro Aufgabe nur das bearbeiten, was in der jeweiligen Task-Datei oder Spec beschrieben ist.

Wenn während der Arbeit ein neues Problem oder eine neue Idee auffällt, nicht nebenbei lösen.

Stattdessen den Punkt kurz beschreiben und fragen, ob daraus eine neue Task-Datei in `workflow/todo/` erstellt werden soll.

Neue Task-Dateien dürfen nur erstellt werden, wenn der Nutzer dies bestätigt oder ausdrücklich beauftragt.

Keine neuen Tasks ohne Freigabe.

Keine Aufgaben vermischen.

## Qualitätsregel

- Nach Code-Änderungen `npm run lint`, `npx tsc --noEmit` und `npm run build` ausführen.
- Wenn ein Check nicht ausgeführt werden kann oder fehlschlägt, den Grund klar nennen.
- Größere Komponenten und komplexe Logik bekommen sinnvolle Kommentare, die Zweck und Verhalten erklären.

## Code-Kommentar-Regel

Neue oder stark geänderte fachlich relevante `.tsx`-Dateien sollen am Anfang einen kurzen Kommentar enthalten.

Der Kommentar soll in einfacher Sprache erklären:

- wofür die Datei da ist
- was der Nutzer auf dem Bildschirm sieht
- was der Nutzer dort tun kann

Komplexere Logik, Formularverarbeitung, Routing-Entscheidungen, Datenschutz-, Upload- oder KI-Grenzen und fachliche Einschränkungen sollen kurz kommentiert werden.

Keine Kommentare für offensichtliches JSX oder triviale Zeilen schreiben.

Kommentare müssen bei späteren Änderungen aktualisiert werden.

## Mobile-First-Regel

- Neue und geänderte UI muss zuerst für mobile Nutzung funktionieren.
- Layouts, Zeilenumbrüche, CTA-Buttons und Kontaktwege müssen auf kleinen Bildschirmen geprüft werden.
- Texte dürfen auf Mobile nicht unkontrolliert umbrechen oder wichtige Aussagen zerreißen.
- Buttons für Telefon, WhatsApp und Anfrage müssen auf Mobile schnell erreichbar sein.
- Responsive Verhalten muss bei jeder UI-Änderung mitgedacht werden, nicht erst nachträglich.

## Reviewer-Regel

Vor dem Abschluss größerer UI-, Content-, SEO-, Performance- oder Launch-Aufgaben müssen passende vorhandene Reviewer oder Checker genutzt oder bewusst als nicht erforderlich begründet werden.

Beispiele:

- Mobile UI: `mobile_visual_checker`
- Desktop UI: `desktop_visual_checker`
- Typografie und Zeilenumbrüche: `typography_checker`
- Accessibility: `a11y_checker`
- SEO: `local_seo_reviewer`
- Performance: `performance_budget_reviewer`
- Launch: `launch_reviewer`
- allgemeine Codequalität: `quality_reviewer`

Reviewer ersetzen nicht die Freigabe durch den User.

Technische Checks und Reviewer können eine Aufgabe prüfen, ersetzen aber niemals die ausdrückliche Freigabe durch den Nutzer.

## Workflow-Regel

Im Projekt wird ein einfacher Workflow-Ordner genutzt:

```text
workflow/
├── todo/
├── active/
├── done/
└── replaced/
```

In `workflow/todo/` liegen alle geplanten Aufgaben, die noch nicht aktiv bearbeitet werden.

In `workflow/active/` liegt genau die aktuell bearbeitete Aufgabe.

In `workflow/done/` liegen nur Aufgaben, die umgesetzt, geprüft und ausdrücklich freigegeben wurden.

In `workflow/replaced/` liegen nur ersetzte oder historische Aufgaben.

Jede größere Aufgabe braucht eine eigene Task-Datei in `workflow/todo/`.

Eine Task-Datei soll mindestens enthalten:

- Ziel
- Kontext
- Vorgehen
- Akzeptanzkriterien
- Status

Jede neue Task-Datei in `workflow/todo/` oder `workflow/active/` muss einen Abschnitt `## Akzeptanzkriterien` enthalten.

Die Akzeptanzkriterien beschreiben prüfbar, wann die Aufgabe erfüllt ist.

Vor dem Verschieben einer Aufgabe von `workflow/todo/` nach `workflow/active/` muss geprüft werden, ob Akzeptanzkriterien vorhanden und ausreichend klar sind.

Falls sie fehlen oder zu unklar sind, müssen sie vor oder beim Start der Aufgabe ergänzt werden.

Vor dem Verschieben einer Aufgabe von `workflow/active/` nach `workflow/done/` muss gegen diese Akzeptanzkriterien geprüft werden.

Eine Aufgabe darf nur nach `workflow/done/`, wenn die Kriterien erfüllt sind oder offene Abweichungen ausdrücklich vom Nutzer freigegeben wurden.

Neue Akzeptanzkriterien dürfen den Scope einer Aufgabe nicht heimlich erweitern.

Wenn neue größere Themen entstehen, müssen sie als eigene spätere Task vorgeschlagen werden.

Bestehende Todo-Aufgaben müssen nicht sofort pauschal umgeschrieben werden.

Sie werden spätestens vor oder beim Start geprüft und bei Bedarf ergänzt.

Task-Dateien sollen einen klaren Status enthalten.

Erlaubte Statuswerte sind:

- `offen`
- `in Arbeit`
- `wartet auf Review`
- `wartet auf Freigabe`
- `abgeschlossen`

Statuswerte dürfen nicht frei erfunden werden.

Eine Aufgabe gilt erst als `abgeschlossen`, wenn sie umgesetzt, geprüft, zusammengefasst und vom Nutzer ausdrücklich freigegeben wurde.

Aufgaben dürfen nicht übersprungen oder zusammengelegt werden, wenn dadurch wichtige Prüfschritte verloren gehen.

Eine Aufgabe darf nur nach ausdrücklicher Freigabe von `workflow/todo/` nach `workflow/active/` verschoben werden.

Wenn eine Aufgabe nach `workflow/active/` verschoben wird, muss ihr Status auf `in Arbeit` gesetzt werden.

In `workflow/active/` darf immer höchstens eine aktive Aufgabe liegen, außer der Nutzer erlaubt ausdrücklich eine Ausnahme.

Eine Aufgabe darf nicht eigenständig nach `done/` verschoben werden.

Eine Aufgabe darf auch nach erfolgreichen Checks nicht automatisch nach `workflow/done/` verschoben werden.

Eine Aufgabe darf erst nach Review und ausdrücklicher Freigabe von `workflow/active/` nach `workflow/done/` verschoben werden.

Vor dem Verschieben nach `done/` gilt die Done-Regel.

## Commit-Regel

Commits dürfen nur zu klar zugeordneten Aufgaben erfolgen.

Vor einem Commit muss klar sein:

- welche Task bearbeitet wurde
- welche Dateien geändert wurden
- welche Checks ausgeführt wurden
- ob die Aufgabe abgeschlossen oder noch offen ist

Keine Sammel-Commits mit unzusammenhängenden Änderungen.

Keine Commits mit halb fertigen, ungeprüften Änderungen, außer der User fordert ausdrücklich einen Zwischenstand-Commit an.

Vor Commits muss geprüft werden, ob der Working Tree nur Änderungen enthält, die zur aktuellen Aufgabe gehören.

Unerwartete oder fremde Änderungen dürfen nicht unbeachtet mitcommitted werden.

Wenn unklar ist, ob eine Datei zur aktuellen Aufgabe gehört, muss vor dem Commit nachgefragt werden.

Commit-Nachrichten sollen nach Möglichkeit die Task-Nummer enthalten, zum Beispiel:

`task-009: rework homepage hero`

## Done-Regel

Bevor eine Aufgabe nach `workflow/done/` verschoben wird, muss der Agent zusammenfassen:

- Aufgabe
- geänderte Dateien
- wichtigste Änderungen
- ausgeführte Checks
- offene Punkte
- ob Reviewer genutzt wurden oder warum nicht

Erst danach darf gefragt werden:

```text
Soll diese Aufgabe abgeschlossen und nach done verschoben werden?
```

Erst nach Bestätigung darf die Aufgabe nach `workflow/done/` verschoben werden.

Ohne ausdrückliche Bestätigung bleibt eine aktive Aufgabe in `workflow/active/`.

Eine noch nicht gestartete Aufgabe bleibt in `workflow/todo/`.

## Spec-Regel

Im Projekt wird ein Spec-System genutzt.

Specs liegen in:

```text
specs/
```

Die Specs sind die Grundlage für alle weiteren Änderungen.

Wenn eine Änderung nicht in den Specs steht, wird sie nicht umgesetzt.

Wenn eine Spec fehlt oder unklar ist, muss zuerst eine offene Frage dokumentiert werden.

Specs gelten nicht automatisch als freigegeben, nur weil sie erstellt oder geändert wurden.

Nach dem Erstellen oder Ändern wichtiger Specs muss der Agent die Inhalte kurz zusammenfassen und auf Freigabe warten.

Erst nach ausdrücklicher Freigabe dürfen aus diesen Specs konkrete Code-Änderungen oder Umsetzungspläne abgeleitet werden.

## Spec-Hierarchie-Regel

Vor jeder größeren Spec-, Content-, Code- oder UI-Änderung muss geprüft werden, ob die Änderung mit den übergeordneten Specs vereinbar ist.

Die fachliche Reihenfolge ist:

1. `specs/00-global-spec/global-spec.md`
2. `specs/01-functional-map/functional-map.md`
3. passende Feature-, Technical-, Visual- oder Work-Plan-Spec

Wenn eine untergeordnete Spec einer übergeordneten Spec widerspricht, darf die Änderung nicht einfach umgesetzt werden.

Der Widerspruch muss benannt werden.

Der Nutzer muss entscheiden, ob zuerst die übergeordnete Spec angepasst oder die untergeordnete Spec korrigiert wird.

Offene Entscheidungen dürfen nicht als bestätigte Anforderungen umgesetzt werden.

## Cleanup-Regel

Beim späteren Umbau der Webseite soll nicht nur neuer Inhalt eingebaut werden.

Nicht mehr benötigter Code soll sauber entfernt werden.

Dazu gehören später:

- alte Leistungsinhalte
- alte Komponenten, die nicht mehr verwendet werden
- ungenutzte Imports
- ungenutzte Icons
- alte Datenarrays
- alte FAQ-Inhalte
- alte SEO-Texte
- ungenutzte Assets
- toter oder auskommentierter Code

Vor dem Löschen muss geprüft werden, ob der Code wirklich nicht mehr verwendet wird.

Kein Code, Inhalt, Asset oder Import darf blind gelöscht werden.

## Supabase-Regel

Supabase ist als geplante Erweiterung für dieses Projekt vorgesehen und soll später eingesetzt werden.

Supabase darf jedoch nicht spontan oder nebenbei integriert werden.

Vor der technischen Umsetzung müssen zuerst eigene Supabase-Specs erstellt und freigegeben werden.

Diese Specs müssen mindestens klären:

- Supabase-Ziel
- Datenmodell
- Tabellen
- Sicherheitsregeln
- Formularfluss
- Admin- oder Verwaltungslogik
- Datenschutzfragen
- Implementierungsplan
- betroffene Dateien und Komponenten
- Risiken und Rollback-Möglichkeiten

Solange diese Specs nicht erstellt und freigegeben sind, darf Supabase nur geplant werden.

Sobald die Supabase-Specs freigegeben sind, darf Supabase als eigene Aufgabe umgesetzt werden.

Die Umsetzung muss dann über `workflow/todo/` geplant, separat umgesetzt, geprüft und erst nach Freigabe abgeschlossen werden.

## Risikoregeln

Vor folgenden Änderungen muss immer gefragt werden:

- neue Dependencies installieren
- bestehende Dependencies entfernen
- Routen löschen oder umbenennen
- Build-Konfiguration ändern
- zentrale Komponenten löschen
- Environment-Variablen hinzufügen oder ändern
- Supabase einbauen
- Datenbankstruktur anlegen
- Authentifizierung einführen
- globale Styles stark verändern
