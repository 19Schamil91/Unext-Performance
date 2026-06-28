# PROJECT_STRUCTURE.md

Diese Datei erklärt die Projektstruktur für Nutzer, Codex und Reviewende. Fachliche Anforderungen stehen weiterhin in `specs/`; konkrete Aufgaben werden über `workflow/` gesteuert.

## Anwendung

- `app/`: Next.js-App-Router-Struktur mit Seiten, Layouts und Routen.
- `components/`: wiederverwendbare React-Komponenten für die Oberfläche.
- `lib/`: gemeinsame Hilfslogik, Daten, Utilities und projektweite Funktionen.
- `hooks/`: React-Hooks, falls gemeinsame Hook-Logik benötigt wird.
- `styles/`: globale oder geteilte Styling-Dateien.
- `public/`: öffentlich ausgelieferte statische Dateien und Assets.

## Spezifikation und Planung

- `specs/`: verbindliche fachliche, funktionale, technische, visuelle und Launch-bezogene Spezifikationen.
- `workflow/todo/`: geplante Aufgaben, die noch nicht aktiv bearbeitet werden.
- `workflow/active/`: genau die aktuell aktive Aufgabe.
- `workflow/done/`: abgeschlossene, geprüfte und freigegebene Aufgaben.
- `workflow/replaced/`: ersetzte oder historische Aufgaben, falls vorhanden.

## Agenten und Prüfungen

- `.agents/`: lokale Agenten- und Skill-Struktur.
- `.agents/skills/`: lokale Skills mit jeweils eigener `SKILL.md`.
- `.codex/`: lokale Codex-Arbeitsdateien; nicht als fachliche Projektdokumentation behandeln.

## Wichtige Root-Dateien

- `AGENTS.md`: verbindliche Arbeitsregeln für Codex und Agenten.
- `ROADMAP.md`: großer Projektverlauf und Phasenübersicht.
- `CHANGELOG.md`: menschlich lesbare Änderungshistorie.
- `PROJECT_STRUCTURE.md`: Erklärung der Projektstruktur.
- `DECISIONS.md`: dokumentierte Entscheidungen, soweit vorhanden.
- `package.json`: Projekt-Skripte und Dependencies.
- `next.config.mjs`: Next.js-Konfiguration.
- `tsconfig.json`: TypeScript-Konfiguration.

## Arbeitsregel

Vor Änderungen immer zuerst die aktive Aufgabe in `workflow/active/`, die relevanten Specs und die Scope-Grenzen prüfen. Neue Umsetzungsschritte entstehen nicht aus dieser Strukturdatei, sondern aus freigegebenen Workflow-Aufgaben.