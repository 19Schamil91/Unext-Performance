# Aufgabe 020 - Homepage-Rework fuer KFZ-Gutachten planen

## Ziel

Das Homepage-Rework fuer eine reine KFZ-Gutachten-Webseite planen.

## Kontext

Die alte Homepage-Ausrichtung auf Autovermietung, Fahrzeugservice und weitere Fahrzeugleistungen ist fachlich ueberholt. Die neue Homepage soll UNEXT als Anbieter fuer KFZ-Gutachten in Berlin positionieren.

## Vorgehen

- Freigegebene Specs pruefen.
- Homepage-Struktur planen: Hero, Vertrauensbereich / Sachverstaendigenkompetenz, Gutachtenarten, digitale Schadenaufnahme, geplante oder spaetere KI-Voranalyse, Ablauf, Vorteile, FAQ und Kontakt.
- Alte Homepage-Inhalte dokumentieren, die ersetzt werden muessen.
- Telefon-CTA, WhatsApp-CTA und Anfrage-CTA mobil priorisieren.
- Mobile Zeilenumbrueche, Textlaengen und CTA-Erreichbarkeit von Anfang an planen.

## Homepage-Rework-Plan

### 1. Zielbild der neuen Homepage

- Die Homepage soll UNEXT klar als Anbieter fuer KFZ-Gutachten in Berlin positionieren.
- Die Hauptaussage lautet: KFZ-Gutachten, Unfallgutachten, Schadengutachten, Wertgutachten / Fahrzeugbewertung und digitale Schadenaufnahme als Kontakt- und Anfrageprozess.
- Nicht als aktive Leistungen geplant werden Autovermietung, Mietwagen, Werkstatt, Detailing, Zulassung, Abschleppdienst/Pannenhilfe, Express/Kurier oder allgemeiner Fahrzeugservice.
- Telefon, WhatsApp und Anfrage bleiben die zentralen Handlungswege.
- Upload, Supabase, Adminbereich, Kundenportal und KI bleiben Roadmap-Themen, solange sie nicht gesondert spezifiziert, freigegeben und umgesetzt sind.

### 1a. Design-Leitplanke

- Die Homepage soll fachlich neu auf KFZ-Gutachten ausgerichtet werden, aber die bestehende visuelle Grundrichtung der Webseite grundsaetzlich beibehalten.
- Der dunkle hochwertige Look sowie Schwarz/Rot als zentrale Designrichtung sollen erhalten bleiben.
- Es soll kein kompletter Redesign-Bruch geplant werden.
- Anpassungen an Struktur, Texten, CTAs und Inhaltsbereichen sollen innerhalb der bestehenden Design-Anmutung gedacht werden.
- Eine globale Design-Nachschaerfung fuer die gesamte Webseite sollte spaeter bei Bedarf in `specs/04-visual-rules/visual-rules.md` geprueft werden.
- Aufgabe 020 aendert keine Visual-Spec und fuehrt keine Design-Umsetzung aus.

### 2. Geplante Homepage-Struktur

| Abschnitt | Zweck | Wichtigste Aussage | CTA | Mobile-First-Hinweis |
| --- | --- | --- | --- | --- |
| Hero | Sofortige fachliche Einordnung der Seite | KFZ-Gutachten in Berlin mit schnellem Kontakt | Jetzt anrufen, WhatsApp senden, Gutachten anfragen | Kurze H1, direkte CTA-Reihenfolge, keine langen Textbloecke |
| Vertrauen / Sachverstaendigenkompetenz | Kompetenz und Sicherheit vermitteln | UNEXT unterstuetzt bei Gutachtenfragen nach Unfall oder Fahrzeugbewertung | Kontakt aufnehmen | Vertrauenselemente kurz und scanbar halten |
| Gutachtenarten / Leistungsfokus | Erlaubte Gutachtenbereiche erklaeren | Unfallgutachten, Schadengutachten, Wertgutachten und Beweissicherung statt alter Fahrzeugservices | Gutachten anfragen | Karten oder Abschnitte duerfen auf Mobile nicht ueberladen wirken |
| Digitale Schadenaufnahme | Anfrageprozess fuer Schadeninformationen planen | Schaden kann digital vorbereitet und an UNEXT uebermittelt werden | Schaden melden / Anfrage starten | Formular- oder Kontaktweg muss auf Mobile einfach erreichbar sein |
| KI-Voranalyse als Roadmap | Spaetere Option klar begrenzen | KI kann spaeter unterstuetzen, ersetzt aber kein Gutachten und ist jetzt keine Live-Leistung | Keine eigenstaendige KI-CTA | Keine Erwartung an automatische Bewertung erzeugen |
| Ablauf nach Unfall / Gutachtenprozess | Nutzerfuehrung nach Schadenfall erklaeren | Kontakt aufnehmen, Schaden schildern, Termin oder weiteres Vorgehen abstimmen | Anrufen oder WhatsApp senden | Schritte kurz halten, wichtigste Handlung zuerst |
| Vorteile / Warum UNEXT | Entscheidungshilfe geben | Fokus auf KFZ-Gutachten, digitale Anfragewege und klare Kommunikation | Gutachten anfragen | Vorteile als kurze Aussagen statt langer Absatze planen |
| FAQ | Haeufige Fragen vorab beantworten | Ablauf, Gutachtenarten, Kontaktwege, Unterlagen und digitale Schadenaufnahme klaeren | Frage klaeren / Kontakt aufnehmen | Akkordeon oder kurze Antworten fuer Mobile planen |
| Kontaktbereich | Abschluss und Conversion sichern | Telefon, WhatsApp und Anfrage sind die naechsten Schritte | Anrufen, WhatsApp, Anfrage | Kontaktbuttons sticky oder sehr gut erreichbar planen |

### 3. Zu ersetzende alte Homepage-Bereiche

- Alte Service-Uebersichten und Service-Karten aus `components/sections/services-section.tsx` sind durch KFZ-Gutachten-Fokus zu ersetzen.
- Express-/Kurierbezuege aus `components/sections/express-courier-section.tsx` gehoeren nicht mehr zur Homepage-Zielausrichtung.
- Alte Fahrzeugservice-, Werkstatt-, Mehrleistungs- oder Mobilitaetsbezuege in `components/sections/hero-section.tsx` und `components/sections/about-section.tsx` sind spaeter fachlich zu ersetzen.
- Header, Footer, Service-Menues und Service-Anker mit alten Leistungslinks muessen spaeter gegen die Zielstruktur geprueft werden.
- Alte Homepage-Bilder oder Service-Bildreferenzen duerfen nicht ohne Referenzpruefung geloescht werden.

### 4. Kontakt- und CTA-Plan

- Mobile Prioritaet: zuerst Telefon, danach WhatsApp, danach Anfrage.
- E-Mail kann ergaenzend bleiben, soll aber nicht der primaere Mobile-CTA sein.
- Ein Formular darf nur auf Basis des bestehenden Resend-Flows geplant werden, solange keine neue technische Entscheidung freigegeben ist.
- Texte, Anfragearten und Consent-/Datenschutz-Hinweise muessen spaeter zum KFZ-Gutachten-Fokus passen.
- In Aufgabe 020 wird keine Supabase-, Upload- oder KI-Erweiterung aus dem Kontaktweg abgeleitet.

### 5. Mobile-First-Planung

- Deutsche Kerntexte werden zuerst geplant; Englisch und Russisch muessen spaeter konsistent folgen.
- Ueberschriften sollen kurz bleiben und auf kleinen Displays kontrolliert umbrechen.
- CTA-Buttons duerfen auf Mobile nicht unter langen Texten verschwinden.
- Telefon und WhatsApp muessen schnell erreichbar sein.
- FAQ-, Ablauf- und Vorteilstexte sollen kurz genug fuer mobile Nutzung bleiben.

### 6. Grenzen und Roadmap

- Digitale Schadenaufnahme wird als Anfrage- und Kontaktprozess geplant, nicht technisch umgesetzt.
- KI-Voranalyse wird nur als moegliches spaeteres Roadmap-Thema beschrieben, nicht als aktive Funktion.
- Supabase, Upload, Adminbereich, Kundenportal und KI werden in Aufgabe 020 nicht umgesetzt.
- Aufgabe 020 trifft keine finalen SEO-, Metadata- oder Structured-Data-Detailentscheidungen. Diese gehoeren in Aufgabe 021.
- Routing- und Redirect-Fragen werden nur als Abhaengigkeit benannt und nicht in Aufgabe 020 umgesetzt.

### 7. Hinweise fuer spaetere Umsetzungstasks

- Eine spaetere Homepage-Umsetzung muss Hero, Service-Sektionen, Express-/Kurierbereich, Vertrauensbereich, FAQ, Kontaktbereich und relevante Navigationstexte fachlich ersetzen.
- Aufgabe 021 muss Titles, Descriptions, Keywords, OpenGraph und Structured Data auf den KFZ-Gutachten-Fokus pruefen.
- Aufgabe 026 darf Code- und Asset-Cleanup erst nach fachlichem Rework, Referenzpruefung sowie Redirect-/SEO-Entscheidungen planen.
- Eine eigene spaetere Routing-/Redirect-Aufgabe kann sinnvoll werden, wenn alte Service-URLs entfernt oder umgeleitet werden sollen.
- In Aufgabe 020 werden keine Inhalte geloescht, keine Routen geaendert und keine neuen Task-Dateien erstellt.

## Akzeptanzkriterien

- Die Homepage-Planung ist vollstaendig auf KFZ-Gutachten ausgerichtet.
- Autovermietung, Mietwagen, Werkstatt und Fahrzeugservice werden nicht als Leistungen geplant.
- Alte Homepage-Service-Sektionen aus Aufgabe 019 sind als zu ersetzende oder zu pruefende Bereiche beruecksichtigt.
- CTAs und Kontaktwege sind auf Telefon, WhatsApp und Anfrage ausgerichtet.
- Navigation und Leistungsstruktur werden nur als Planung betrachtet.
- Die bestehende dunkle Schwarz/Rot-Designrichtung ist als Planungsleitplanke fuer die Homepage beruecksichtigt.
- Mobile First ist als Akzeptanzkriterium enthalten.
- Telefon- und WhatsApp-CTA sind fuer Mobile gut erreichbar geplant.
- Keine Code-, UI-, Routing-, Content-, Asset-, Supabase-, Upload- oder KI-Umsetzung erfolgt in Aufgabe 020.

## Status

Status: in Arbeit
