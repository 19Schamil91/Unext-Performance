# User Stories

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage:

- `specs/00-global-spec/global-spec.md`
- `specs/01-functional-map/functional-map.md`
- `specs/02-feature-specs/kfz-gutachten.md`
- `specs/02-feature-specs/digitale-schadenaufnahme.md`
- `specs/02-feature-specs/ki-voranalyse.md`
- `specs/02-feature-specs/contact-flow.md`
- `specs/02-feature-specs/seo.md`
- `specs/02-feature-specs/faq.md`
- `specs/02-feature-specs/mehrsprachigkeit.md`
- `specs/03-technical-specs/frontend.md`
- `specs/03-technical-specs/routing.md`
- `specs/03-technical-specs/data-model.md`
- `specs/03-technical-specs/supabase.md`
- `specs/03-technical-specs/ai-analysis.md`
- `specs/04-visual-rules/visual-rules.md`

Diese Spec erfindet keine neuen fachlichen Annahmen. Sie beschreibt fachliche Nutzerziele und Akzeptanzkriterien fuer die neue reine KFZ-Gutachten-Webseite.

## 1. Kurzueberblick / Executive Summary

Diese Datei beschreibt fachliche User Stories fuer die neue KFZ-Gutachten-Webseite.

Sie ist keine Code-, UI-, Content-, Upload-, Supabase-, KI-, Admin- oder Portal-Umsetzung.

Version 1 fokussiert auf KFZ-Gutachten Berlin, Kontakt, Anfragevorbereitung, FAQ, Standort und Mobile First.

Roadmap-Funktionen sind klar als spaeter markiert und setzen keine Live-Umsetzung voraus.

Keine User Story darf mehr versprechen als die freigegebenen Specs.

## 2. Version 1 und Roadmap

### Version 1 User Stories

Version 1 User Stories behandeln:

- KFZ-Gutachten Berlin
- Unfallgutachten / Schadengutachten
- Wertgutachten / Fahrzeugbewertung
- Kontaktwege Telefon, WhatsApp, E-Mail
- Anfragevorbereitung
- Unterlagen / Bilder ueber freigegebene Kontaktwege
- digitale Schadenaufnahme als Anfragevorbereitung
- FAQ
- Standort / Oeffnungszeiten
- Mobile First
- Mehrsprachigkeit nur soweit freigegeben

### Roadmap User Stories

Roadmap User Stories behandeln nur spaeter:

- Formular, falls nicht zum Launch freigegeben
- Website-Upload
- Supabase-Speicherung
- KI-Voranalyse
- Adminbereich
- Kundenportal
- Landingpages
- mehrsprachige technische Ausbaustufe

## 3. Nummerierung und Nachverfolgbarkeit

Die bestehenden User-Story-IDs bleiben zur Nachverfolgbarkeit erhalten.

Die Nummerierung trennt Version-1-Stories und Roadmap-Stories nicht rein fortlaufend.

Roadmap-Stories `US-06` bis `US-10` sind bewusst im Roadmap-Abschnitt gebuendelt.

Dadurch bleibt klar, dass Roadmap-Stories nicht Teil von Version 1 sind und dass keine Version-1-Stories versehentlich fehlen.

Die bestehenden IDs `US-01` bis `US-20` werden beibehalten und nicht auf `US-V1-*` oder `US-RM-*` umbenannt.

## 4. Allgemeine Akzeptanzregeln

Alle User Stories muessen folgende Regeln beachten:

- keine 24/7- oder Sofortdienst-Garantie
- keine konkrete Rueckmeldefrist ohne Bestaetigung
- keine finale Schadenhoehe
- keine verbindlichen Reparaturkosten
- keine Versicherungsentscheidung
- keine juristische Bewertung
- keine KI-Gutachten
- keine Upload-/Supabase-/KI-Livefunktion ohne Freigabe
- keine alten Nicht-Scope-Leistungen als aktive Leistungen
- keine Reviews, Sterne, Trust-Siegel oder Referenzen ohne Freigabe
- finale Bewertung erfolgt durch Gutachter
- Mobile First und Mehrsprachigkeit beruecksichtigen
- `Anfrage starten`, `Gutachten anfragen` oder `Schaden melden` bedeutet in Version 1 nur einen freigegebenen Anfrageweg.
- Wenn kein Formular umgesetzt und freigegeben ist, muss die Anfrage auf Telefon, WhatsApp, E-Mail oder einen anderen freigegebenen Kontaktweg ausweichen.
- Ein Formular darf in User Stories, Akzeptanzkriterien, CTAs oder spaeteren Tasks nicht als live vorausgesetzt werden, solange es nicht umgesetzt, geprueft und ausdruecklich freigegeben ist.
- Auch Roadmap-Stories zu Formular, Upload, Supabase oder KI duerfen keine Live-Verfuegbarkeit fuer Version 1 suggerieren.

## 5. Version 1 User Stories und interne Launch-Sicherheits-Stories

### US-01 - Privatkunde nach Unfall

Als Privatkunde nach einem Unfall
moechte ich schnell erkennen, dass UNEXT KFZ-Gutachten in Berlin anbietet,
damit ich weiss, ob ich mich nach einem Fahrzeugschaden an UNEXT wenden kann.

Akzeptanzkriterien:

- Die Webseite positioniert UNEXT klar fuer KFZ-Gutachten in Berlin.
- Unfallgutachten und Schadengutachten werden verstaendlich erklaert.
- Telefon und WhatsApp sind schnell erreichbar.
- Es wird keine 24/7- oder Sofortdienst-Garantie kommuniziert.

### US-02 - Kunde mit Fahrzeugschaden

Als Kunde mit Fahrzeugschaden
moechte ich wissen, welche Informationen fuer eine erste Anfrage hilfreich sind,
damit UNEXT den Schaden sinnvoll einordnen und die naechsten Schritte abstimmen kann.

Akzeptanzkriterien:

- Hilfreiche Unterlagen wie Fahrzeugschein, Fotos, Unfallbeschreibung und Versicherungsdaten koennen genannt werden, duerfen aber nicht als zwingende Pflichtfelder fuer eine erste Kontaktaufnahme wirken.
- Es wird neutral kommuniziert, dass UNEXT sich zeitnah zur weiteren Abstimmung meldet.
- Es wird keine konkrete Rueckmeldefrist ohne Bestaetigung versprochen.
- Die finale Bewertung wird nicht durch Formular, Upload oder KI versprochen.

### US-03 - Kunde mit Wertgutachten- oder Fahrzeugbewertungsbedarf

Als Kunde mit Bedarf an Wertgutachten oder Fahrzeugbewertung
moechte ich verstehen, dass diese Leistung unter dem Oberbegriff KFZ-Gutachten angeboten wird,
damit ich keine kuenstlich getrennten oder doppelten Leistungen vergleichen muss.

Akzeptanzkriterien:

- KFZ-Gutachten bleibt der Hauptbegriff.
- Wertgutachten / Fahrzeugbewertung wird als Gutachtenart erklaert.
- `Kfz-Sachverstaendigengutachten` wird nur ergaenzend und nicht als zweite Hauptleistung verwendet.

### US-04 - Kunde am Smartphone

Als Kunde am Smartphone
moechte ich direkt anrufen, WhatsApp nutzen oder eine Anfrage starten koennen,
damit ich auch unterwegs nach einem Schaden schnell handeln kann.

Akzeptanzkriterien:

- Telefon- und WhatsApp-CTA sind mobil schnell erreichbar.
- CTA-Texte sind kurz und verstaendlich.
- Texte und FAQ sind mobil gut lesbar.
- Mobile Zeilenumbrueche werden bei spaeteren UI-Aufgaben geprueft.
- Sticky-CTAs oder mobile Kontaktleisten duerfen wichtige Inhalte nicht verdecken.

### US-05 - Kunde mit Bildern vom Schaden

Als Kunde mit Bildern vom Schaden
moechte ich wissen, wie ich Bilder ueber freigegebene Kontaktwege bereitstellen kann,
damit UNEXT die Schadenaufnahme vorbereiten kann.

Akzeptanzkriterien:

- Bildabstimmung ueber freigegebene Kontaktwege ist nicht gleich Website-Upload.
- In der ersten Webseitenversion kann WhatsApp als praktischer Kontaktweg fuer erste Bilduebermittlung beschrieben werden, sofern rechtlich sauber formuliert.
- Ein echter Upload wird nur als spaetere Funktion beschrieben, solange Supabase/Upload nicht umgesetzt und freigegeben ist.
- Hinweise zu Bildqualitaet und notwendigen Perspektiven werden fuer die spaetere digitale Schadenaufnahme geplant.

### US-11 - Mehrsprachiger Nutzer

Als Nutzer in Deutsch, Russisch oder Englisch
moechte ich die gleichen fachlichen Aussagen und Grenzen verstehen,
damit keine Sprachversion mehr verspricht als die deutsche Grundlage.

Akzeptanzkriterien:

- Deutsch ist fachlich fuehrend.
- Russisch und Englisch basieren auf freigegebenen deutschen Inhalten.
- Nicht freigegebene Sprachversionen duerfen nicht sichtbar oder im Sprachumschalter aktiv sein.
- KI-, Rechts- und Datenschutzformulierungen werden pro Sprache vorsichtig geprueft.
- CTA-Laengen und mobile Umbrueche werden pro Sprache geprueft.

### US-12 - Nutzer sucht nicht mehr aktive alte Leistungen

Als Nutzer, der nach Mietwagen, Werkstatt oder Fahrzeugservice sucht,
moechte ich nicht faelschlich den Eindruck bekommen, dass UNEXT diese Leistungen auf der neuen Webseite anbietet,
damit die Webseite fachlich sauber als KFZ-Gutachten-Webseite positioniert bleibt.

Akzeptanzkriterien:

- Autovermietung, Mietwagen, Ersatzwagen, Fahrzeugservice, Werkstatt und aehnliche alte Bereiche erscheinen nicht als aktive Leistungen.
- Alte Leistungen werden nicht als aktive CTAs, Navigation, FAQ oder SEO-Ziele dargestellt.
- Alte Inhalte werden nur ueber freigegebenen Cleanup-Plan entfernt oder ersetzt.
- Navigation, FAQ, SEO und CTAs werden spaeter auf Nicht-Scope-Inhalte geprueft.

### US-13 - Nutzer sucht klare Kontaktmoeglichkeiten

Als Nutzer
moechte ich schnell erkennen, wie ich UNEXT kontaktieren kann,
damit ich ohne langes Suchen anrufen, WhatsApp nutzen oder eine E-Mail schreiben kann.

Akzeptanzkriterien:

- Telefon und WhatsApp sind primaer sichtbar.
- E-Mail ist ergaenzend sichtbar.
- Anfrage fuehrt nur auf freigegebene Anfragewege.
- Keine nicht freigegebenen Formular-, Upload-, Supabase- oder KI-CTAs.

### US-14 - Nutzer liest FAQ

Als Nutzer mit typischen Fragen
moechte ich kurze, verstaendliche FAQ-Antworten lesen,
damit ich Ablauf, Unterlagen, Kontaktwege, Gutachtenarten und Grenzen verstehe.

Akzeptanzkriterien:

- FAQ behandelt nur bestaetigte Inhalte.
- FAQ verspricht keine Rueckmeldefrist, finale Schadenhoehe, Reparaturkosten oder KI-Ergebnisse.
- FAQ ist mobil gut lesbar.
- FAQPage strukturierte Daten nur nach Freigabe.

### US-15 - Nutzer achtet auf Vertrauen und Qualifikation

Als Nutzer
moechte ich sachliche Hinweise zur Sachverstaendigenkompetenz sehen,
damit ich Vertrauen aufbauen kann, ohne durch uebertriebene oder unbestaetigte Aussagen getaeuscht zu werden.

Akzeptanzkriterien:

- Trust-Bereich bleibt sachlich.
- Keine nicht bestaetigten Qualifikationen.
- Keine erfundenen Reviews, Sterne, Siegel oder Referenzen.
- Keine Erfolgsgarantien oder Versicherungsversprechen.

### US-16 - Nutzer nutzt die Seite mit Einschraenkungen

Als Nutzer mit Barrierefreiheitsbedarf
moechte ich Inhalte, Links, Buttons und FAQ gut bedienen und verstehen koennen,
damit ich die wichtigsten Kontakt- und Informationswege nutzen kann.

Akzeptanzkriterien:

- Klare Ueberschriftenstruktur ist geplant.
- Links und Buttons sind ausreichend unterscheidbar.
- Grosse Touch-Ziele werden beruecksichtigt.
- FAQ/Accordion wird zugaenglich geplant.
- Bilder erhalten passende Alt-Texte oder werden dekorativ behandelt.
- Informationen werden nicht rein farblich vermittelt.

### Klarstellung zu internen Betreiber-Stories

Interne Betreiber-Stories in diesem Abschnitt gehoeren zur Version-1-Planung, wenn sie Launch-Sicherheit, Datenschutz, Cleanup, fachliche Abgrenzung, Nicht-Scope-Bereinigung oder technische Pruefungen betreffen.

Sie sind keine kundensichtbaren Funktionen und duerfen nicht als zusaetzliche Website-Leistung verstanden werden.

Betreiber-Stories duerfen keine neuen Leistungen, Funktionen oder technischen Umsetzungen ausloesen, wenn diese nicht durch freigegebene Specs, technische Planung, Workflow-Aufgabe und ausdrueckliche Freigabe abgesichert sind.

### US-17 - Betreiber schuetzt Datenschutz und sensible Daten

Als Betreiber
moechte ich keine sensiblen Daten ohne klare Freigabe erheben, speichern oder verarbeiten,
damit Upload, Supabase und KI nicht vor Datenschutz- und Einwilligungspruefung live gehen.

Akzeptanzkriterien:

- Version 1 speichert keine Supabase-/Upload-/KI-Daten ohne Freigabe.
- Sensible Daten wie Kennzeichen, FIN, Versicherungsdaten, Bilder und Dokumente werden nur erforderlichkeitabhaengig geplant.
- Einwilligung, Speicherfristen, Zugriff, Loeschung und Auskunft bleiben vor Umsetzung zu klaeren.
- Keine echten Kundendaten fuer Tests oder KI-Experimente ohne Freigabe.

### US-18 - Betreiber moechte alte Inhalte sauber zurueckbauen

Als Betreiber
moechte ich alte Autovermietung-, Mietwagen-, Werkstatt- und Service-Inhalte kontrolliert entfernen oder ersetzen,
damit die neue Webseite eindeutig auf KFZ-Gutachten Berlin ausgerichtet ist.

Akzeptanzkriterien:

- Alte Inhalte werden nicht blind geloescht.
- Alte Routen, Navigation, Footer, FAQ, SEO und CTAs werden geprueft.
- Keine irrefuehrenden Redirects.
- Cleanup erfolgt ueber eigenen Plan / eigene Aufgabe.

### US-19 - Nutzer erreicht rechtliche Pflichtseiten

Als Nutzer
moechte ich Impressum und Datenschutz leicht erreichen koennen,
damit ich Anbieterinformationen und Datenschutzinformationen finde.

Akzeptanzkriterien:

- Impressum und Datenschutz sind erreichbar.
- Sie werden nicht durch Navigation, Routing, Middleware, Locale-Regeln oder Sticky-Elemente verdeckt oder unerreichbar.
- Keine Aenderungen an diesen Seiten ohne Pruefung und Freigabe.

### US-20 - Nutzer sieht konsistente mobile Darstellung

Als mobiler Nutzer
moechte ich CTAs, Texte, FAQ und Kontaktinformationen ohne Layoutprobleme nutzen koennen,
damit ich auch unterwegs schnell handeln kann.

Akzeptanzkriterien:

- Mobile First ist beruecksichtigt.
- Sticky-CTAs verdecken keine wichtigen Inhalte.
- Mehrsprachige Textlaengen werden geprueft.
- Performance und schnelle Kontakt-CTAs werden beruecksichtigt.

## 6. Roadmap User Stories

### US-06 - Roadmap: Kunde nutzt spaeter Foto-Upload

Als Kunde in einer spaeteren Upload-Version
moechte ich Schadenbilder direkt vom Handy aufnehmen oder aus der Galerie hochladen,
damit UNEXT eine strukturierte digitale Schadenaufnahme vorbereiten kann.

Akzeptanzkriterien:

- Diese User Story ist als Roadmap-Funktion markiert.
- Upload setzt eigene Spec, Datenschutzklaerung, Supabase-/Storage-Planung und Freigabe voraus.
- Die Upload-Strecke wird Mobile First fuer Kamera und Galerie geplant.
- Upload ersetzt kein Gutachten und keine finale Bewertung.
- Upload suggeriert keine Live-Verfuegbarkeit in Version 1.

### US-07 - Roadmap: Gutachter / interner Bearbeiter

Als Gutachter oder interner Bearbeiter
moechte ich spaeter Anfrage, Fahrzeugdaten, Schadenbeschreibung und Bilder gebuendelt pruefen koennen,
damit ich die gutachterliche Bewertung nachvollziehbar vorbereiten kann.

Akzeptanzkriterien:

- Interne Pruefung ist Teil der Zielversion.
- Zugriff auf Anfragen, Uploads und KI-Ergebnisse ist nicht oeffentlich.
- Rollen, Rechte, RLS und Sicherheitsregeln bleiben Roadmap und werden in einer spaeteren Supabase-Spec geklaert.
- Die finale Bewertung erfolgt durch einen Gutachter.

### US-08 - Roadmap: Spaeterer Admin

Als spaeterer Admin
moechte ich Schadenanfragen, Status, Bilder und interne Notizen verwalten koennen,
damit interne Bearbeitung und Rueckfragen nachvollziehbar bleiben.

Akzeptanzkriterien:

- Diese User Story ist als Roadmap-Funktion markiert.
- Adminfunktionen sind nicht Teil von Version 1.
- Datenschutz, Rollen, Rechte und Zugriffskonzept werden vor Umsetzung separat spezifiziert.
- Adminfunktionen duerfen keine oeffentliche Einsicht in Kundendaten erzeugen.

### US-09 - Roadmap: Spaeterer Kunde im Kundenportal

Als spaeterer Kunde im Kundenportal
moechte ich Statusinformationen, hochgeladene Bilder oder Rueckfragen mobil einsehen koennen,
damit ich den Ablauf nach der Schadenmeldung nachvollziehen kann.

Akzeptanzkriterien:

- Diese User Story ist als spaetere Portal-/Web-App-Funktion markiert.
- Kundenportal ist nicht Teil von Version 1.
- Kundenportal oder Web-App werden Mobile First geplant.
- Datenschutz, Authentifizierung, Rollen und Zugriff werden separat spezifiziert.
- Es werden keine kundensichtbaren KI-Ergebnisse ohne gesonderte Freigabe angezeigt.

### US-10 - Roadmap: KI als unterstuetzender Prozess

Als spaeterer unterstuetzender Prozess
soll KI Schadenbilder und Angaben intern voranalysieren koennen,
damit der Gutachter eine strukturierte Vorinformation fuer die weitere Pruefung erhaelt.

Akzeptanzkriterien:

- KI ist intern, unterstuetzend und unverbindlich.
- KI wird nicht als handelnde Person, Entscheider oder Gutachter dargestellt.
- KI-Ergebnisse bleiben zunaechst intern.
- KI liefert keine finale Schadenhoehe, kein vollstaendiges Gutachten und keine verbindliche Bewertung.
- KI braucht Human Review; die finale Bewertung erfolgt immer durch einen Gutachter.
- Umsetzung erst nach eigener Spec, Datenschutzklaerung, Upload-/Supabase-Planung und Freigabe.

## 7. Roadmap-Markierung

Roadmap User Stories muessen klar als spaeter markiert werden.

Roadmap Stories duerfen keine Live-Verfuegbarkeit suggerieren.

Roadmap Stories duerfen nicht als Umsetzungsvoraussetzung fuer Version 1 verstanden werden.

## 8. Pruefungen vor Umsetzung

Vor Umsetzung aus User Stories pruefen:

- freigegebene Feature Specs
- freigegebene Technical Specs
- Visual Rules
- Version 1 vs. Roadmap
- CTA-Verfuegbarkeit
- Kontaktwege
- Formular-/Upload-/Supabase-/KI-Status
- Datenschutz/Einwilligung
- Mehrsprachigkeit
- Mobile First
- Accessibility
- SEO/FAQ
- Nicht-Scope
- Reviewer/Checker

Akzeptanzkriterien aus User Stories muessen spaeter in Work Plans oder Task-Dateien in konkrete pruefbare Umsetzungspunkte uebersetzt werden.

Allgemeine Kriterien wie `Mobile First ist beruecksichtigt`, `Accessibility ist geplant` oder `SEO wird beachtet` muessen in spaeteren Aufgaben konkretisiert werden, zum Beispiel durch:

- mobile Ansicht pruefen
- CTA-Reihenfolge pruefen
- Zeilenumbrueche pruefen
- FAQ mobil testen
- Links und Buttons pruefen
- Alt-Texte pruefen
- nicht freigegebene Funktionen entfernen oder ausblenden
- keine alten Nicht-Scope-Leistungen sichtbar halten
- passende Reviewer oder Checker nutzen

User Stories beschreiben fachliche Ziele und Akzeptanzkriterien, ersetzen aber keinen konkreten Work Plan und keine technische Umsetzungsaufgabe.

## 9. Grenzen / Nicht-Scope dieser Spec

Diese Spec ist keine:

- UI-Umsetzung
- Code-Umsetzung
- finale Content-Ausarbeitung
- Formular-Implementierung
- Upload-Implementierung
- Supabase-Integration
- KI-Integration
- Admin-/Portal-Implementierung
- finale Rechts- oder Datenschutzpruefung

## 10. Offene Entscheidungen

- finale Version-1-User-Stories
- finale Einordnung von Version-1- und Roadmap-Stories, falls sich der Launch-Scope aendert
- finale Roadmap-Priorisierung
- Formular zum Launch
- Upload/Supabase/KI zum Launch
- Adminbereich
- Kundenportal
- Landingpages
- mehrsprachiger Launch
- finale FAQ-Fragen und Antworten
- Reviews/Bewertungen
- spaetere Uebersetzung der Akzeptanzkriterien in konkrete Work Plans / Tasks
- konkrete Accessibility-/Performance-Pruefungen
- Reviewer/Checker pro spaeterer Aufgabe
