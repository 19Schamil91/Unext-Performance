---
name: site-launch-audit
description: "Use this skill when the user asks for a launch audit, premium website review, mobile/desktop visual QA, typography review, conversion review, local SEO review, legal/trust review, performance budget review, content consistency review, or a coordinated pre-launch checklist for the UNEXT website. It tells Codex which local read-only subagents to run, which Playwright screenshots to collect, how to order the checks, and how to request approval before preparing code changes."
---

# site-launch-audit

## Zweck

Dieser Skill koordiniert die professionelle Launch-Prüfung der UNEXT-Website.
Er nutzt getrennte read-only Spezialagenten und führt deren Ergebnisse am Ende zusammen.

## Grundregel

Alle Spezialagenten prüfen und berichten nur. Sie schreiben keine Dateien.
Code-Änderungen werden erst vorbereitet, wenn der User die Findings freigibt.

## Lokale Skills und Audit-Rollen

Lokal vorhanden sind aktuell `site-launch-audit`, `next-router-check` und `typography-line-break-check`.

`typography-line-break-check` ist der lokale Skill für Typografie, sichtbare deutsche Texte, Umlaute, CTA-Texte, Zeilenumbrüche und Textlayout auf Desktop, Tablet und Mobile.

Andere in diesem Skill genannte Reviewer-Namen sind Audit-Rollen oder Prüfpunkte, solange keine passende Datei unter `.agents/skills/<name>/SKILL.md` existiert. Sie dürfen nicht als vorhandene lokale Skills dargestellt werden.

## Empfohlene Reihenfolge

1. **Technische Basis prüfen**
   - `npm run lint`
   - `npx tsc --noEmit`
   - `npm run build`

2. **Screenshots vorbereiten**
   - Mobile: 390x844 und 430x932
   - Tablet: 768x1024 oder ein vergleichbarer Tablet-Viewport
   - Desktop: 1440x1100 und 2048x996
   - Aktuelle wichtige Routen nur aus dem freigegebenen Launch-Scope ableiten.
   - Alte Leistungsrouten wie `/leistungen/autovermietung` oder `/leistungen/autoservice` nur prüfen, wenn Aufgabe 030 Routing/Redirects oder eine ausdrücklich freigegebene Alt-Routen-Prüfung aktiv ist.

3. **Spezialprüfungen und Audit-Rollen durchführen**
   - `typography-line-break-check`
   - `mobile_visual_checker`
   - `desktop_visual_checker`
   - `conversion_reviewer`
   - `local_seo_reviewer`
   - `legal_trust_reviewer`
   - `performance_budget_reviewer`
   - `content_consistency_reviewer`
   - `premium_reviewer`

4. **Bestehende Pflichtprüfer ergänzen**
   - `a11y_checker`, wenn UI oder interaktive Elemente betroffen sind.
   - `quality_reviewer`, wenn Dateien geändert wurden oder Änderungen vorbereitet werden.
   - `next-router-check`, wenn `/app`-Routen betroffen sind.

5. **Final zusammenführen**
   - `launch_reviewer` mit allen Spezialreports füttern.
   - Ergebnis nach P0/P1/P2/P3 priorisieren.

## Wann einzelne Agenten reichen

- Nur Schrift/Lesbarkeit: `typography-line-break-check`
- Nur Handy-Darstellung: `mobile_visual_checker`
- Nur Desktop-Eindruck: `desktop_visual_checker`
- Nur Kontaktwege und Anfragen: `conversion_reviewer`
- Nur Google/Local SEO: `local_seo_reviewer`
- Nur Impressum/Datenschutz/Vertrauen: `legal_trust_reviewer`
- Nur Ladezeit/Budget: `performance_budget_reviewer`
- Nur Texte/Konsistenz: `content_consistency_reviewer`
- Nur Gesamtwirkung: `premium_reviewer`

## Bericht-Standard

Der Hauptagent fasst Ergebnisse so zusammen:

- **P0/P1 Launch-Blocker:** Muss vor Launch behoben werden.
- **P2 Vor Launch empfohlen:** Verbessert Qualität, ist aber kein harter Blocker.
- **P3 Nach Launch möglich:** Sinnvolle Optimierung ohne akuten Launch-Druck.
- **Freigabe-Frage:** Der User entscheidet, welche Punkte umgesetzt werden.

## Code-Änderungen nach Freigabe

Wenn der User eine Umsetzung freigibt:

1. Bestehende Komponenten, Utilities und Types suchen.
2. AGENTS.md §13 auf Pflicht-Rückfragen prüfen.
3. Geplante Dateien und Änderungen nennen.
4. Änderungen umsetzen.
5. `quality_reviewer` und, bei UI, `a11y_checker` starten.
6. Pflicht-Checks aus AGENTS.md §14 ausführen.
7. Kurz berichten, was geändert wurde und warum.

## Beispiel-Prompts

- "Nutze site-launch-audit und prüfe die komplette Website vor Launch."
- "Nutze den mobile_visual_checker für Startseite, Leistungen und Kontakt."
- "Starte typography-line-break-check und desktop_visual_checker für die Leistungsseiten."
- "Führe alle Spezialreports im launch_reviewer zusammen."
- "Bereite nach Freigabe Fixes für die P1-Probleme vor."
