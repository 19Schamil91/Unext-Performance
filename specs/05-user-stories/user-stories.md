# User Stories

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, `specs/00-global-spec/global-spec.md`, Aufgabe 017.

## Ziel

Diese Datei beschreibt fachliche User Stories fuer die reine KFZ-Gutachten-Webseite. Roadmap-Funktionen sind klar als spaeter markiert und setzen keine Live-Umsetzung voraus.

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
- Hilfreiche Unterlagen wie Fahrzeugschein, Fotos, Unfallbeschreibung und Versicherungsdaten werden genannt.
- Es wird neutral kommuniziert, dass UNEXT sich zeitnah zur weiteren Abstimmung meldet.
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

### US-05 - Kunde mit Bildern vom Schaden

Als Kunde mit Bildern vom Schaden
moechte ich wissen, wie ich Bilder bereitstellen kann,
damit UNEXT die Schadenaufnahme vorbereiten kann.

Akzeptanzkriterien:
- In der ersten Webseitenversion kann WhatsApp als praktischer Kontaktweg fuer erste Bilduebermittlung beschrieben werden, sofern rechtlich sauber formuliert.
- Ein echter Upload wird nur als spaetere Funktion beschrieben, solange Supabase/Upload nicht umgesetzt ist.
- Hinweise zu Bildqualitaet und notwendigen Perspektiven werden fuer die spaetere digitale Schadenaufnahme geplant.

### US-06 - Roadmap: Kunde nutzt spaeter Foto-Upload

Als Kunde in einer spaeteren Upload-Version
moechte ich Schadenbilder direkt vom Handy aufnehmen oder aus der Galerie hochladen,
damit UNEXT eine strukturierte digitale Schadenaufnahme vorbereiten kann.

Akzeptanzkriterien:
- Diese User Story ist als Roadmap-Funktion markiert.
- Upload setzt eigene Spec, Datenschutzklaerung, Supabase-/Storage-Planung und Freigabe voraus.
- Die Upload-Strecke wird Mobile First fuer Kamera und Galerie geplant.
- Upload ersetzt kein Gutachten und keine finale Bewertung.

### US-07 - Gutachter / interner Bearbeiter

Als Gutachter oder interner Bearbeiter
moechte ich spaeter Anfrage, Fahrzeugdaten, Schadenbeschreibung und Bilder gebuendelt pruefen koennen,
damit ich die gutachterliche Bewertung nachvollziehbar vorbereiten kann.

Akzeptanzkriterien:
- Interne Pruefung ist Teil der Zielversion.
- Zugriff auf Anfragen, Uploads und KI-Ergebnisse ist nicht oeffentlich.
- Rollen, Rechte und Sicherheitsregeln werden in einer spaeteren Supabase-Spec geklaert.
- Die finale Bewertung erfolgt durch einen Gutachter.

### US-08 - Roadmap: Spaeterer Admin

Als spaeterer Admin
moechte ich Schadenanfragen, Status, Bilder und interne Notizen verwalten koennen,
damit interne Bearbeitung und Rueckfragen nachvollziehbar bleiben.

Akzeptanzkriterien:
- Diese User Story ist als Roadmap-Funktion markiert.
- Adminfunktionen werden nicht als Teil der ersten reinen Webseitenversion vorausgesetzt.
- Datenschutz, Rollen, Rechte und Zugriffskonzept werden vor Umsetzung separat spezifiziert.
- Adminfunktionen duerfen keine oeffentliche Einsicht in Kundendaten erzeugen.

### US-09 - Roadmap: Spaeterer Kunde im Kundenportal

Als spaeterer Kunde im Kundenportal
moechte ich Statusinformationen, hochgeladene Bilder oder Rueckfragen mobil einsehen koennen,
damit ich den Ablauf nach der Schadenmeldung nachvollziehen kann.

Akzeptanzkriterien:
- Diese User Story ist als spaetere Portal-/Web-App-Funktion markiert.
- Kundenportal oder Web-App werden Mobile First geplant.
- Datenschutz, Authentifizierung, Rollen und Zugriff werden separat spezifiziert.
- Es werden keine kundensichtbaren KI-Ergebnisse ohne gesonderte Freigabe angezeigt.

### US-10 - Roadmap: KI als unterstuetzender Prozess

Als spaeterer unterstuetzender Prozess
soll KI Schadenbilder und Angaben intern voranalysieren koennen,
damit der Gutachter eine strukturierte Vorinformation fuer die weitere Pruefung erhaelt.

Akzeptanzkriterien:
- KI wird nicht als handelnde Person, Entscheider oder Gutachter dargestellt.
- KI-Ergebnisse bleiben zunaechst intern.
- KI liefert keine finale Schadenhoehe, kein vollstaendiges Gutachten und keine verbindliche Bewertung.
- Die finale Bewertung erfolgt immer durch einen Gutachter.
- Umsetzung erst nach eigener Spec, Datenschutzklaerung, Upload-/Supabase-Planung und Freigabe.

### US-11 - Mehrsprachiger Nutzer

Als Nutzer in Deutsch, Russisch oder Englisch
moechte ich die gleichen fachlichen Aussagen und Grenzen verstehen,
damit keine Sprachversion mehr verspricht als die deutsche Grundlage.

Akzeptanzkriterien:
- Deutsch ist fachlich fuehrend.
- Russisch und Englisch basieren auf freigegebenen deutschen Inhalten.
- KI-, Rechts- und Datenschutzformulierungen werden pro Sprache vorsichtig geprueft.
- CTA-Laengen und mobile Umbrueche werden pro Sprache geprueft.

### US-12 - Nutzer sucht nicht mehr aktive alte Leistungen

Als Nutzer, der nach Mietwagen, Werkstatt oder Fahrzeugservice sucht,
moechte ich nicht faelschlich den Eindruck bekommen, dass UNEXT diese Leistungen auf der neuen Webseite anbietet,
damit die Webseite fachlich sauber als KFZ-Gutachten-Webseite positioniert bleibt.

Akzeptanzkriterien:
- Autovermietung, Mietwagen, Ersatzwagen, Fahrzeugservice, Werkstatt und aehnliche alte Bereiche erscheinen nicht als aktive Leistungen.
- Alte Inhalte werden nur ueber freigegebenen Cleanup-Plan entfernt oder ersetzt.
- Navigation, FAQ, SEO und CTAs werden spaeter auf Nicht-Scope-Inhalte geprueft.
