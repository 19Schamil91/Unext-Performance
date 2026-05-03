---
name: site-launch-audit
description: "Use this skill when the user asks for a launch audit, premium website review, mobile/desktop visual QA, typography review, conversion review, local SEO review, legal/trust review, performance budget review, content consistency review, or a coordinated pre-launch checklist for the UNEXT website. It tells Codex which local read-only subagents to run, which Playwright screenshots to collect, how to order the checks, and how to request approval before preparing code changes."
---

# site-launch-audit

## Zweck

Dieser Skill koordiniert die professionelle Launch-Pruefung der UNEXT-Website.
Er nutzt getrennte read-only Spezialagenten und fuehrt deren Ergebnisse am Ende zusammen.

## Grundregel

Alle Spezialagenten pruefen und berichten nur. Sie schreiben keine Dateien.
Code-Aenderungen werden erst vorbereitet, wenn der User die Findings freigibt.

## Empfohlene Reihenfolge

1. **Technische Basis pruefen**
   - `npm run lint`
   - `npx tsc --noEmit`
   - `npm run build`

2. **Screenshots vorbereiten**
   - Mobile: 390x844 und 430x932
   - Desktop: 1440x1100 und 2048x996
   - Wichtige Routen: `/`, `/leistungen`, `/leistungen/autovermietung`, `/leistungen/autoservice`, `/leistungen/unfallgutachten`, `/kontakt`, `/impressum`, `/datenschutz`

3. **Spezialagenten starten**
   - `typography_checker`
   - `mobile_visual_checker`
   - `desktop_visual_checker`
   - `conversion_reviewer`
   - `local_seo_reviewer`
   - `legal_trust_reviewer`
   - `performance_budget_reviewer`
   - `content_consistency_reviewer`
   - `premium_reviewer`

4. **Bestehende Pflichtpruefer ergaenzen**
   - `a11y_checker`, wenn UI oder interaktive Elemente betroffen sind.
   - `quality_reviewer`, wenn Dateien geaendert wurden oder Aenderungen vorbereitet werden.
   - `next-router-check`, wenn `/app`-Routen betroffen sind.

5. **Final zusammenfuehren**
   - `launch_reviewer` mit allen Spezialreports fuettern.
   - Ergebnis nach P0/P1/P2/P3 priorisieren.

## Wann einzelne Agenten reichen

- Nur Schrift/Lesbarkeit: `typography_checker`
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
- **P2 Vor Launch empfohlen:** Verbessert Qualitaet, ist aber kein harter Blocker.
- **P3 Nach Launch moeglich:** Sinnvolle Optimierung ohne akuten Launch-Druck.
- **Freigabe-Frage:** Der User entscheidet, welche Punkte umgesetzt werden.

## Code-Aenderungen nach Freigabe

Wenn der User eine Umsetzung freigibt:

1. Bestehende Komponenten, Utilities und Types suchen.
2. AGENTS.md §13 auf Pflicht-Rueckfragen pruefen.
3. Geplante Dateien und Aenderungen nennen.
4. Aenderungen umsetzen.
5. `quality_reviewer` und, bei UI, `a11y_checker` starten.
6. Pflicht-Checks aus AGENTS.md §14 ausfuehren.
7. Kurz berichten, was geaendert wurde und warum.

## Beispiel-Prompts

- "Nutze site-launch-audit und pruefe die komplette Website vor Launch."
- "Nutze den mobile_visual_checker fuer Startseite, Leistungen und Kontakt."
- "Starte typography_checker und desktop_visual_checker fuer die Leistungsseiten."
- "Fuehre alle Spezialreports im launch_reviewer zusammen."
- "Bereite nach Freigabe Fixes fuer die P1-Probleme vor."
