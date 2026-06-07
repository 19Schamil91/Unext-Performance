# Frontend

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md`, `specs/02-feature-specs/faq.md`, `specs/02-feature-specs/mehrsprachigkeit.md`, `specs/04-visual-rules/visual-rules.md` und `specs/05-user-stories/user-stories.md`.

## 1. Kurzueberblick / Executive Summary

Diese Spec beschreibt technische Frontend-Leitplanken fuer den spaeteren Website-Rework.

Diese Aufgabe ist keine Code-Umsetzung. Es werden keine Code-, UI- oder Routing-Dateien geaendert.

Vor spaeteren Frontend-Aenderungen muessen bestehende Komponenten, Layouts, Utilities, Inhalte und technische Muster geprueft und wenn moeglich wiederverwendet werden.

Mobile First ist fuer die spaetere Frontend-Umsetzung verbindlich.

Upload, Supabase und KI duerfen im Frontend nicht als live dargestellt, verlinkt oder technisch eingebaut werden, solange sie nicht durch eigene Specs, Datenschutzpruefung, technischen Umsetzungsplan und ausdrueckliche Freigabe abgesichert sind.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Version 1 umfasst technisch als Planungsgrundlage:

- starke KFZ-Gutachten-Hauptseite
- Hero mit klarer Leistungsbeschreibung
- mobil sichtbare Telefon- und WhatsApp-CTAs
- E-Mail als ergaenzender Kontaktweg
- Formular nur, wenn es zum Launch umgesetzt und freigegeben ist
- Gutachtenarten als Abschnitte
- Ablauf / Anfrage
- digitale Schadenaufnahme als Anfragevorbereitung
- Unterlagen / Bilder als Vorbereitung
- Vertrauen / Qualifikation
- FAQ
- Kontakt / Standort / Oeffnungszeiten
- erreichbar verlinktes Impressum und erreichbarer Datenschutz
- keine Upload-/Supabase-/KI-Livefunktion

### Zielversion / Roadmap

Die Zielversion kann spaeter umfassen:

- Formular-/Upload-Flow
- Supabase-Speicherung
- interne KI-Voranalyse
- Admin- oder Portal-Funktionen
- mehrsprachige technische Struktur
- Landingpages nach Routing- und SEO-Plan

Roadmap-Funktionen duerfen nicht als Bestandteil von Version 1 dargestellt werden.

## 3. Bestehenden Code zuerst pruefen

Vor Frontend-Aenderungen muss geprueft werden:

- vorhandene Seitenstruktur
- vorhandene Komponenten
- vorhandene Layouts
- vorhandene CTA-Komponenten
- vorhandene Navigation und Footer
- vorhandene i18n-/Locale-Struktur, falls vorhanden
- vorhandene SEO-/Metadata-Struktur
- vorhandene Formulare oder Kontaktkomponenten
- vorhandene Assets, Bilder und Icons
- ungenutzte oder alte Autovermietung-/Service-Komponenten

Nichts darf blind geloescht, dupliziert oder neu gebaut werden, ohne vorher die bestehende Verwendung und passende Wiederverwendungsmoeglichkeiten zu pruefen.

## 4. Empfohlene Version-1-Seitenstruktur

Empfohlene Version-1-Seitenstruktur:

- H1: `KFZ-Gutachten Berlin`
- Hero mit kurzer Leistungsbeschreibung und Telefon-/WhatsApp-CTA
- Abschnitt Gutachtenarten
- Abschnitt Ablauf / Anfrage
- Abschnitt digitale Schadenaufnahme als Anfragevorbereitung
- Abschnitt benoetigte Unterlagen und Bilder
- Abschnitt Vertrauen / Qualifikation
- FAQ
- Kontakt / Standort / Oeffnungszeiten

Diese Struktur ist eine Planungsgrundlage, kein sofortiger Codeauftrag.

Die finale Umsetzung erfolgt erst im Rework-Plan.

Alte Autovermietung-/Service-Inhalte duerfen nicht in der aktiven Version-1-Struktur bleiben.

## 5. Komponenten-Leitplanken

Moegliche Komponentenbereiche, ohne konkrete Implementierung zu erzwingen:

- Hero / Intro
- CTA-Gruppe
- Gutachtenarten-Karten oder Gutachtenarten-Abschnitte
- Ablauf-Schritte
- digitale Schadenaufnahme-Hinweis
- Unterlagen-/Bilder-Hinweis
- Trust-/Qualifikationsbereich
- FAQ/Accordion
- Kontaktbereich
- Footer
- Sprachumschalter spaeter, falls Mehrsprachigkeit aktiv ist

Bestehende Komponenten muessen bevorzugt geprueft und wiederverwendet werden.

Neue Komponenten sollen nur erstellt werden, wenn bestehende Komponenten fachlich, technisch oder gestalterisch nicht passend sind.

Grosse Komponenten duerfen nicht ohne Plan dupliziert werden.

## 6. CTA- und Kontakt-Frontend

Telefon und WhatsApp sind die primaeren Kontaktwege.

E-Mail ist ein ergaenzender Kontaktweg.

Ein Formular darf nur sichtbar angeboten werden, wenn es umgesetzt, geprueft und freigegeben ist.

Eine Formular-CTA darf nicht sichtbar sein, wenn das Formular nicht freigegeben ist.

Upload-, Supabase- oder KI-CTAs duerfen nicht sichtbar sein, solange diese Funktionen nicht umgesetzt, geprueft und freigegeben sind.

Das Frontend darf keine 24/7-, Sofortdienst-, Schadenhoehen- oder Reparaturkostenversprechen darstellen.

Die mobile CTA-Reihenfolge lautet:

1. Anrufen
2. WhatsApp
3. Anfrage

`Anfrage` darf nur auf einen freigegebenen Anfrageweg fuehren.

Wenn kein Formular freigegeben ist, muss Anfrage auf Telefon, WhatsApp, E-Mail oder einen anderen freigegebenen Kontaktweg ausweichen.

## 7. Upload, Supabase und KI im Frontend

Keine Upload-Komponente darf ohne freigegebene Upload-/Supabase-Spec, Datenschutzpruefung, technischen Umsetzungsplan, Workflow-Aufgabe und ausdrueckliche Freigabe erstellt werden.

Diese Frontend-Spec beschreibt keine Supabase-Integration.

Keine KI-Komponente und keine kundensichtbaren KI-Ergebnisse duerfen ohne Freigabe dargestellt werden.

Digitale Schadenaufnahme wird in Version 1 als Anfragevorbereitung dargestellt.

Bildabstimmung ueber freigegebene Kontaktwege ist kein Website-Upload.

Roadmap-Hinweise zu Upload, Supabase oder KI muessen vorsichtig formuliert werden und duerfen nicht wie Live-Funktionen wirken.

## 8. Mehrsprachigkeit im Frontend

Keine neue technische i18n- oder Routing-Struktur darf ohne eigene Technical Spec und Freigabe umgesetzt werden.

Eine bestehende Mehrsprachigkeitsstruktur muss geprueft und moeglichst wiederverwendet werden.

Nicht freigegebene Sprachversionen duerfen nicht sichtbar, verlinkt oder indexierbar sein.

Ein Sprachumschalter darf nur fuer freigegebene Sprachversionen angezeigt werden.

Mobile Textlaengen, Umbrueche und Buttonbreiten muessen pro Sprache geprueft werden.

## 9. SEO- und Metadata-Frontend

H1 und Metadata muessen mit der SEO-Spec uebereinstimmen.

Standard-H1 fuer Version 1:

```text
KFZ-Gutachten Berlin
```

Meta-Texte sind launchabhaengig zu formulieren.

Alte SEO-Ziele wie Autovermietung, Mietwagen, Ersatzwagen, Fahrzeugservice, Werkstatt und aehnliche Service-Ziele duerfen nicht als aktive Frontend- oder Metadata-Ziele bestehen bleiben.

Strukturierte Daten duerfen nur nach Freigabe und passend zu sichtbaren Inhalten umgesetzt werden.

`FAQPage` darf nur verwendet werden, wenn die FAQ sichtbar und freigegeben ist.

Google-Bewertungen, Reviews oder Referenzen duerfen im Frontend nur eingebunden werden, wenn sie ausdruecklich freigegeben sind.

Landingpages duerfen erst nach Routing- und SEO-Plan umgesetzt werden.

## 10. Mobile First und Responsive Verhalten

Die mobile Ansicht wird zuerst geplant.

CTAs muessen auf Mobile schnell erreichbar sein.

Interaktive Elemente brauchen ausreichend grosse Touch-Ziele.

Lange Textbloecke sind zu vermeiden.

FAQ/Accordion muss mobil lesbar und bedienbar sein.

Der Kontaktbereich muss mobil klar strukturiert sein.

Mehrsprachige Texte muessen auf Umbruch, Laenge und Buttonbreite geprueft werden.

Der Hero darf auf Mobile nicht ueberladen sein.

Bilder und Icons duerfen das Layout nicht sprengen.

## 11. Performance-Leitplanken

Die spaetere Frontend-Umsetzung muss auf gute mobile Performance achten.

Besonders zu pruefen sind:

- unnoetig grosse Bilder vermeiden
- Bilder und Icons passend optimieren
- keine unnoetigen Libraries einbauen
- keine schweren Animationen ohne klaren Nutzen
- keine Roadmap-Funktionen laden, solange sie nicht aktiv sind
- wichtige Kontakt-CTAs schnell sichtbar und nutzbar halten
- keine unnoetigen Client-Komponenten verwenden, wenn statische oder serverseitige Umsetzung ausreicht
- keine alten, ungenutzten Komponenten oder Assets im aktiven Bundle behalten
- Ladeverhalten auf mobilen Geraeten mitdenken

Performance-Optimierungen duerfen nicht dazu fuehren, dass Inhalte, Barrierefreiheit, Kontaktwege oder SEO-Anforderungen beschaedigt werden.

## 12. Accessibility und UX

Die spaetere Umsetzung muss eine semantische Ueberschriftenstruktur verwenden.

Buttons und Links muessen klar unterscheidbar sein.

Telefon- und WhatsApp-Elemente muessen korrekt als Links umgesetzt werden.

Kontraste muessen ausreichend sein.

Interaktive Elemente muessen per Tastatur bedienbar geplant werden.

FAQ/Accordion muss zugaenglich geplant werden.

Formulare muessen spaeter mit Labels, Fehlermeldungen und Datenschutz-Hinweisen umgesetzt werden.

## 13. Content-Cleanup im Frontend

Alte aktive Inhalte muessen spaeter entfernt oder ersetzt werden, wenn sie noch im Frontend vorkommen:

- Autovermietung
- Mietwagen
- Ersatzwagen
- Fahrzeugservice
- Autoservice
- Werkstatt
- Service rund ums Fahrzeug
- Reifenservice
- Reifenwechsel
- Dashcam-Einbau
- Zulassungsservice
- Abschleppdienst
- Pannenhilfe
- Fahrzeugaufbereitung
- Detailing

Diese Inhalte duerfen nicht blind geloescht werden.

Vor dem Entfernen muss die Verwendung geprueft werden.

Ungenutzte Komponenten, Assets und Imports sollen spaeter sauber entfernt werden.

Cleanup erfolgt im Rework- oder Cleanup-Plan.

## 14. Pruefungen vor und nach Umsetzung

Vor spaeterer Code-Umsetzung muessen geprueft werden:

- betroffene Dateien
- bestehende Komponenten
- bestehende Routen
- bestehende Styles
- bestehende Assets
- mobile Darstellung
- SEO/Metadata
- Mehrsprachigkeit
- Datenschutz-/Kontakttexte
- nicht freigegebene Roadmap-Funktionen

Die Pruefung muss vor groesseren Frontend-Aenderungen dokumentiert oder im jeweiligen Umsetzungsplan nachvollziehbar sein.

Nach spaeteren Frontend-Code- oder UI-Aenderungen muessen abhaengig vom Umfang passende Checks ausgefuehrt werden.

Standard-Checks fuer Code-/UI-Aenderungen:

- `git diff --check -- <betroffene Dateien>`
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Wenn ein Check nicht ausgefuehrt werden kann oder fehlschlaegt, muss der Grund klar dokumentiert werden.

Bei reinen Spec- oder Markdown-Aenderungen reicht in der Regel:

- `git diff --check -- <betroffene Dateien>`

Checks ersetzen nicht die fachliche Pruefung und nicht die ausdrueckliche Freigabe durch den Nutzer.

## 15. Reviewer-Regel fuer Frontend-Umsetzung

Vor Abschluss groesserer Frontend-, UI-, Mobile-, Accessibility-, SEO-, Performance- oder Launch-Aenderungen muessen passende Reviewer oder Checker genutzt oder bewusst als nicht erforderlich begruendet werden.

Moegliche Reviewer:

- `mobile_visual_checker`
- `desktop_visual_checker`
- `typography_checker`
- `a11y_checker`
- `local_seo_reviewer`
- `performance_budget_reviewer`
- `launch_reviewer`
- `quality_reviewer`

Reviewer ersetzen nicht die ausdrueckliche Freigabe durch den Nutzer.

Wenn kein Reviewer genutzt wurde, muss kurz begruendet werden, warum fuer diese Aufgabe kein Reviewer erforderlich war.

## 16. Abschlussregel fuer spaetere Frontend-Aufgaben

Vor Abschluss einer Frontend-Aufgabe muss zusammengefasst werden:

- welche Dateien geaendert wurden
- welche Komponenten, Seiten oder Styles betroffen sind
- welche Inhalte entfernt, ersetzt oder neu eingefuegt wurden
- welche Checks ausgefuehrt wurden
- ob Mobile, Accessibility, SEO und Performance geprueft wurden
- ob Reviewer genutzt wurden oder warum nicht
- welche offenen Punkte bleiben

Eine Frontend-Aufgabe darf erst nach ausdruecklicher Freigabe abgeschlossen oder nach `workflow/done/` verschoben werden.

## 17. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- Code-Umsetzung
- UI-Implementierung
- Supabase-Integration
- KI-Integration
- Upload-Implementierung
- Routing-Umsetzung
- finale Content-Ausarbeitung
- finale Design-Spezifikation
- i18n-Technical-Spec

## 18. Offene Entscheidungen

Offen bleiben:

- konkreter Codebestand / Komponentenstruktur
- Formular zum Launch
- Upload, Supabase und KI zum Launch
- technische i18n-/Routing-Struktur
- Landingpages / Routen
- strukturierte Daten
- finale Homepage-Sektionierung
- finale CTA-Texte
- Bilder, Icons und Assets
- aufgabenspezifische Reviewer- und Check-Auswahl fuer spaetere UI-Umsetzung
