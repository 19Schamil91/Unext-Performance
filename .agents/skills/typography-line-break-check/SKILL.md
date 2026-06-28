---
name: typography-line-break-check
description: "Use this skill when reviewing visible website text, typography, line breaks, CTA text, hero headings, card headings, trust statements, German umlauts, and text layout balance across desktop, tablet, and mobile for the UNEXT website."
---

# typography-line-break-check

## Zweck

Dieser Skill prüft sichtbare Website-Texte, Typografie, Zeilenumbrüche und Textlayout für UNEXT. Er bewertet vor allem die optische Wirkung von Texten im Layout auf Desktop, Tablet und Mobile.

Der Skill ist ein Reviewer-Skill. Er berichtet Findings und macht konkrete Vorschläge, baut aber nicht eigenständig um, außer eine aktive Aufgabe fordert ausdrücklich eine Umsetzung.

## Prüffokus

- optische Wirkung sichtbarer Texte im Layout
- Desktop-, Tablet- und Mobile-Darstellung
- Hero-Überschriften
- Hero-Unterzeilen
- CTA-Texte und Button-Beschriftungen
- Kartenüberschriften
- kurze Trust-Sätze
- wichtige sichtbare Aussagen, die durch schlechte Umbrüche schwach wirken
- einzelne wichtige Wörter, die allein in einer neuen Zeile stehen
- unruhige oder unausgewogene Zeilenumbrüche
- überlange oder zu kurze Zeilen
- ungünstige Trennung von Begriffen wie `KFZ-Gutachten`
- echte deutsche Umlaute in sichtbaren deutschen Texten
- keine ASCII-Umschreibungen wie `ae`, `oe` oder `ue`, wenn echte Umlaute gemeint sind

## Grenzen

Dieser Skill erfindet keine fachlichen Aussagen, Trust-Claims, rechtlichen Aussagen, Qualifikationen oder Leistungsversprechen.

Bei fachlich unklaren, unbelegten oder rechtlich riskanten Aussagen markiert der Skill eine Rückfrage. Er korrigiert solche Aussagen nicht eigenständig.

Der Skill ändert keine Dateien, außer eine aktive Aufgabe fordert ausdrücklich eine Umsetzung. Grundsätzlich berichtet er als Reviewer.

## Vorgehen

1. Relevante sichtbare Texte, Screenshots, Komponenten oder Specs lesen.
2. Textwirkung auf Desktop, Tablet und Mobile getrennt bewerten.
3. Hero-Texte, CTA-Texte, Kartenüberschriften, Trust-Sätze und wichtige Aussagen gezielt prüfen.
4. Kritische Zeilenumbrüche, zu lange oder zu kurze Zeilen und isolierte Einzelwörter markieren.
5. Deutsche Umlaute und vermeidbare ASCII-Umschreibungen prüfen.
6. Findings nach Schwere sortieren und konkrete Korrekturvorschläge nennen.

## Bericht

Der Bericht soll kurz und prüfbar sein:

- **Gefundene Probleme:** konkrete Stelle, Viewport oder Textbereich und Problem.
- **Layout-Wirkung:** warum der Text optisch schwach, unruhig oder schwer lesbar wirkt.
- **Empfohlene Korrektur:** bessere Formulierung, Umbruch-Hinweis oder Layout-Hinweis.
- **Offene Rückfragen:** nur wenn fachliche oder rechtliche Freigabe nötig ist.
- **Nicht geprüft:** falls Screenshots, Viewports oder Dateien fehlen.