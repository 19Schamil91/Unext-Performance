# Aufgabe 033 - Launch-Quality-Check

## Ziel

Vor Launch technische und visuelle Qualitaet pruefen.

## Kontext

Nach SEO, Routing, Kontakt/Legal und i18n-Entscheidung braucht Version 1 einen umfassenden Qualitaetscheck, damit die Webseite nicht mit sichtbaren Fehlern, kaputten CTAs oder technischen Problemen live geht.

## Globale Formularsemantik und Autocomplete zentral verbessern

### Bestätigter Ausgangsbefund

Die gemeinsame Formular-Komponente `components/service-inquiry-form.tsx` weist einen bereits vor Aufgabe 046 bestehenden globalen Accessibility- und Semantikpunkt auf:

- Der sichtbare `CardTitle` wird durch die gemeinsame Card-Komponente als `<div>` statt als echte semantische Überschrift ausgegeben.
- Das `<form>` besitzt keine eigene zugängliche Bezeichnung über `aria-label` oder `aria-labelledby`.
- Es wird derzeit kein `fieldset` mit `legend` verwendet.
- Für die Felder Name, Telefon und E-Mail fehlen passende `autocomplete`-Tokens.
- Die einzelnen sichtbaren Feldlabels sind bereits korrekt mit den Eingabefeldern verbunden.
- `required`, `aria-invalid`, `aria-describedby` und `role` mit dem Wert `alert` funktionieren bereits und dürfen durch die Korrektur nicht beschädigt werden.
- Der Befund wurde nicht durch Aufgabe 046 verursacht und nicht durch Aufgabe 046 verschlechtert.
- Weil die gemeinsame Komponente mehrere Seiten betrifft, darf die Korrektur nicht isoliert innerhalb einer einzelnen Leistungsseite erfolgen.

Aufgabe 033 muss diesen Punkt zentral technisch beheben und darf ihn nicht nur erneut prüfen oder dokumentieren. Der Punkt darf nicht mit der Begründung übersprungen werden, dass er bereits vor Aufgabe 046 bestand.

### Semantische Formularüberschrift

- Die sichtbare Formularüberschrift muss eine passende echte Überschriftenebene erhalten oder semantisch gleichwertig korrekt ausgezeichnet werden.
- Die Überschriftenhierarchie der jeweiligen Seite muss erhalten bleiben; es darf keine falsche oder doppelte `h1` entstehen.
- Die Lösung muss mit den bestehenden Card-Komponenten kompatibel sein und darf keine unnötige sichtbare Designänderung verursachen.

### Zugängliche Bezeichnung des Formulars

Das `<form>` muss einen eindeutigen und verständlichen zugänglichen Namen erhalten. Bevorzugt ist `aria-labelledby` mit einer stabilen ID der sichtbaren Formularüberschrift zu prüfen. `aria-label` oder eine geeignete `fieldset`-/`legend`-Struktur sind nur mit nachvollziehbarer Begründung als Alternative zu verwenden.

Die Lösung muss:

- für Screenreader einen verständlichen Formularnamen bereitstellen,
- bei mehrfach vorhandenen Formularen eindeutige IDs verwenden,
- doppelte, ungültige oder instabile IDs vermeiden,
- serverseitig und clientseitig stabil bleiben,
- Hydration-Probleme ausschließen.

### Autocomplete-Attribute

Mindestens sind folgende standardisierte Tokens sinnvoll zu ergänzen:

- Name: `autocomplete` mit dem Wert `name`
- Telefonnummer: `autocomplete` mit dem Wert `tel`
- E-Mail: `autocomplete` mit dem Wert `email`

Weitere Felder erhalten nur dann ein Attribut, wenn ein semantisch passender standardisierter Token vorhanden ist. Unpassende oder erfundene Werte sind nicht zulässig.

### Bestehende Label-, Fehler- und Formularlogik erhalten

Nach der zentralen Korrektur müssen weiterhin korrekt funktionieren:

- sichtbare Labels und ihre Verbindung zum jeweiligen Eingabefeld,
- Pflichtfeldkennzeichnung und `required`,
- `aria-invalid` und `aria-describedby`,
- Fehlermeldungen und `role` mit dem Wert `alert`,
- Fokusführung und vollständige Tastaturbedienung,
- bestehende Validierungs- und Versandlogik,
- der bestehende Resend-Prozess.

### Betroffene Seiten und Regression

Vor der Korrektur müssen alle tatsächlichen Imports und Verwendungen von `ServiceInquiryForm` beziehungsweise der gemeinsamen Formular-Komponente per Quelltextsuche ermittelt werden. Die historische Liste ersetzt diese Inventur nicht.

Mindestens einer Regressionsprüfung zu unterziehen sind:

- `/leistungen/unfallgutachten`
- `/leistungen/fahrzeugbewertung`
- `/leistungen/schadendokumentation`

Zusätzlich sind alle zu diesem Zeitpunkt noch vorhandenen Verwendungen stichprobenartig zu prüfen, insbesondere Autovermietung, Autoservice, Detailing, Zulassungsservice, Abschleppdienst beziehungsweise Pannenhilfe sowie EN/RU-Seiten mit derselben Komponente, sofern sie weiterhin im Repository oder Launch-Scope enthalten sind.

### Verbindliche Prüfungen nach der Korrektur

Zu prüfen sind mindestens:

- sichtbare Überschriftenhierarchie,
- zugänglicher Name des Formulars im Accessibility Tree,
- eindeutige IDs und korrekte `aria-labelledby`-Beziehungen,
- korrekte Labels aller Felder,
- passende `autocomplete`-Tokens,
- Pflichtfeld- und Fehlermeldungssemantik,
- Screenreader-Nachvollziehbarkeit,
- vollständige Tastaturbedienung und sichtbare Fokuszustände,
- keine visuellen Regressionen oder abgeschnittenen Formulartexte,
- kein horizontaler Overflow,
- keine Browser-Console- oder Hydration-Fehler,
- keine Veränderung der Versand-, Resend- oder Validierungslogik.

Die responsive Prüfung erfolgt bei 390 px, 768 px und 1440 px. Danach sind mindestens `git diff --check`, `npm run lint`, `npx tsc --noEmit` und `npm run build` auszuführen.

### Abgrenzung zu Aufgabe 048

Aufgabe 048 darf die Formularwirkung im Rahmen der deutschen Kernseiten visuell und typografisch prüfen. Die verbindliche zentrale technische Behebung der Formularsemantik und der `autocomplete`-Attribute erfolgt jedoch spätestens in Aufgabe 033. Aufgabe 033 muss die zentrale Behebung und die Regression abschließend nachweisen.

## Vorgehen

- Lint ausfuehren.
- Typecheck ausfuehren.
- Build ausfuehren.
- Mobile-Ansicht pruefen.
- Desktop-Ansicht pruefen.
- Accessibility-Basischeck durchfuehren.
- Performance/Lighthouse pruefen, falls moeglich.
- Console Errors pruefen.
- CTAs testen.
- Kontaktformular testen.
- Keine neuen Features umsetzen.

## Akzeptanzkriterien

- Lint erfolgreich oder Abweichungen dokumentiert.
- Typecheck erfolgreich oder Abweichungen dokumentiert.
- Build erfolgreich oder Blocker dokumentiert.
- Mobile und Desktop geprueft.
- CTAs geprueft.
- Kontaktformular geprueft.
- Keine offensichtlichen Console Errors.
- Performance-/Accessibility-Risiken sind dokumentiert.
- Keine Supabase-, Upload-, KI- oder Portal-Funktion wurde umgesetzt.
- Die gemeinsame Formularüberschrift ist semantisch korrekt ausgezeichnet.
- Jedes Formular besitzt einen verständlichen zugänglichen Namen.
- Formulare verwenden keine doppelten oder instabilen IDs.
- Name, Telefon und E-Mail besitzen passende `autocomplete`-Attribute.
- Sichtbare Labels und Fehlermeldungen bleiben korrekt verbunden.
- Bestehende Validierungs-, Resend- und Versandlogik bleibt unverändert funktionsfähig.
- Unfallgutachten, Fahrzeugbewertung und Schadendokumentation wurden nach der zentralen Änderung regressionsgeprüft.
- Alle weiteren tatsächlichen Verwendungen der gemeinsamen Formular-Komponente wurden inventarisiert und stichprobenartig geprüft.
- Mobile, Tablet und Desktop sind ohne visuelle Regression.
- Es bestehen keine Console-, Hydration-, Lint-, TypeScript- oder Buildfehler.
- Der globale Formularpunkt ist in Aufgabe 033 tatsächlich zentral behoben und nicht nur erneut dokumentiert.

## Status

Status: offen
