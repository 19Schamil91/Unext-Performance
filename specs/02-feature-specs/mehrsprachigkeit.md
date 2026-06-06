# Mehrsprachigkeit

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 11, Aufgabe 017, `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md` und `specs/02-feature-specs/faq.md`.

## 1. Kurzueberblick / Executive Summary

Die Webseite wird grundsaetzlich dreisprachig geplant:

- Deutsch
- Russisch
- Englisch

Deutsch ist die fachlich fuehrende Sprache.

Russisch und Englisch basieren auf freigegebenen deutschen Inhalten.

Mehrsprachigkeit darf in keiner Sprache staerkere Versprechen erzeugen als die freigegebene deutsche Fassung.

Diese Spec beschreibt fachliche Leitplanken fuer mehrsprachige Inhalte. Sie ist keine finale Uebersetzung und keine technische Internationalisierungs-, Locale- oder Routing-Umsetzung.

Diese Spec basiert auf den freigegebenen deutschen Inhalten und muss mit den anderen Specs synchron bleiben.

Die Launch-Reihenfolge der Sprachen bleibt offen.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Fuer Version 1 gilt:

- Launch-Sprachen bleiben offen: Deutsch zuerst oder alle drei Sprachen direkt.
- Nur freigegebene deutsche Inhalte duerfen uebersetzt werden.
- Wenn Deutsch zuerst live geht, duerfen Russisch und Englisch nicht halb fertig sichtbar sein.
- Wenn alle drei Sprachen live gehen, muessen alle sichtbaren Inhalte vollstaendig, konsistent und fachlich geprueft sein.
- Kontakt, FAQ, SEO, Meta-Texte, CTAs, Datenschutz-/Einwilligungshinweise und KI-Hinweise muessen pro Sprache geprueft werden.
- Formular nur sprachlich darstellen, wenn es zum Launch umgesetzt und freigegeben ist.
- Upload, Supabase und KI in keiner Sprache als live darstellen, solange sie nicht umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben sind.

Wenn eine Sprachversion nicht vollstaendig geprueft und freigegeben ist, darf sie nicht sichtbar oder erreichbar sein.

Nicht freigegebene Sprachversionen duerfen nicht erreichbar sein ueber:

- Navigation
- Sprachumschalter
- Sitemap
- interne Links
- Suchmaschinenindexierung

Halbfertige oder ungepruefte Sprachversionen duerfen nicht live gehen.

### Zielversion / Roadmap

Die Zielversion umfasst:

- vollstaendige Sprachversionen Deutsch, Russisch und Englisch
- sprachspezifische SEO- und Meta-Texte
- mehrsprachige FAQ
- mehrsprachige Kontakt- und CTA-Texte
- mehrsprachige Datenschutz-/Einwilligungstexte nach Freigabe
- technische Locale-/Routing-Struktur spaeter in Technical Specs klaeren

## 3. Fuehrende Sprache

Deutsch ist die fachlich fuehrende Sprache fuer:

- Specs
- Freigaben
- rechtlich sensible Formulierungen
- fachlich sensible Formulierungen
- KI-Kommunikation
- Datenschutz- und Einwilligungshinweise

Russisch und Englisch werden auf Basis freigegebener deutscher Inhalte erstellt.

Bei Abweichungen zwischen Sprachversionen gilt die freigegebene deutsche Fassung als fachliche Referenz.

Russisch und Englisch duerfen keine Inhalte ergaenzen, die im Deutschen nicht freigegeben sind.

## 4. Uebersetzungs- und Freigabeprozess

Der Prozess fuer jede Sprachversion:

1. Deutscher Inhalt wird fachlich freigegeben.
2. Uebersetzung wird erstellt.
3. Uebersetzung wird sprachlich und fachlich geprueft.
4. Sensible Begriffe werden gesondert geprueft.
5. Sprachversion wird freigegeben.
6. Erst danach darf die Sprachversion live gehen.

Verbindliche Regeln:

- Keine freie automatische Uebersetzung sensibler Begriffe ohne Pruefung.
- Keine halb fertigen Sprachversionen sichtbar machen.
- Keine Sprachversion darf mehr versprechen als die deutsche Version.
- Fachliche, rechtliche und KI-bezogene Begriffe muessen pro Sprache separat geprueft und freigegeben werden.
- Wenn deutsche Inhalte noch nicht freigegeben sind, duerfen daraus keine finalen russischen oder englischen Inhalte abgeleitet werden.

## 5. Sensible Begriffe

Besonders vorsichtig zu uebersetzen:

- KFZ-Gutachten
- Kfz-Sachverstaendiger
- Schadengutachten
- Unfallgutachten
- Wertgutachten
- Fahrzeugbewertung
- Beweissicherung
- digitale Schadenaufnahme
- KI-gestuetzte Voranalyse
- finale Bewertung durch Gutachter
- Kontaktwege
- Formular
- Website-Upload
- Supabase-Speicherung
- KI-Voranalyse
- Rueckmeldung / Abstimmung
- Sofortdienst / 24/7
- Vor-Ort-Dokumentation
- Reparaturkosten
- Schadenhoehe
- Datenschutz
- Einwilligung
- Haftungsausschluesse
- rechtliche Hinweise

Begriffe duerfen nicht woertlich uebersetzt werden, wenn dadurch fachlich oder rechtlich eine andere Bedeutung entsteht.

## 6. Kontakt, Formular und digitale Schadenaufnahme

- Telefon und WhatsApp bleiben primaere Kontaktwege.
- E-Mail bleibt ergaenzender Kontaktweg.
- Formular nur in einer Sprache sichtbar oder kommuniziert darstellen, wenn es technisch umgesetzt und freigegeben ist.
- Digitale Schadenaufnahme bedeutet in Version 1 strukturierte Kontaktaufnahme beziehungsweise Anfragevorbereitung.
- Digitale Schadenaufnahme darf in keiner Sprache automatisch als Website-Upload verstanden werden.
- Bildabstimmung ueber freigegebene Kontaktwege ist nicht Website-Upload.
- Kontakt- und CTA-Texte duerfen keine Sofortgarantie, keinen 24/7-Notdienst, keine konkrete Rueckmeldefrist und keine automatische Schadenbewertung versprechen, solange dies nicht ausdruecklich bestaetigt und freigegeben ist.

## 7. Upload, Supabase und KI in allen Sprachen

Upload, Supabase und KI duerfen in keiner Sprache als live oder aktiv verfuegbar dargestellt werden, solange sie nicht technisch umgesetzt, datenschutzseitig geprueft und ausdruecklich freigegeben sind.

KI-Kommunikation muss in Deutsch, Russisch und Englisch gleich vorsichtig formuliert werden.

KI ersetzt in keiner Sprache Gutachten oder Gutachter.

Keine finale Schadenhoehe, Reparaturkosten, Versicherungsentscheidung oder juristische Bewertung durch KI.

In keiner Sprache verwenden:

- KI-Gutachten
- vollautomatisches Gutachten
- KI ersetzt den Gutachter
- verbindliche KI-Schadenanalyse
- finale Schadenhoehe durch KI
- rechtssicheres KI-Gutachten
- automatische Gutachtenerstellung durch KI
- KI-Sachverstaendiger
- Gutachten per KI
- KI entscheidet den Schaden
- KI berechnet den Schaden verbindlich

Pflichtgedanke in allen Sprachen:

> Die finale Bewertung erfolgt immer durch einen Gutachter.

Solange KI technisch nicht umgesetzt und freigegeben ist, darf sie in keiner Sprache als live oder aktiv verfuegbar dargestellt werden.

Kundensichtbare KI-Ergebnisse sind nur nach gesonderter fachlicher, technischer, datenschutzseitiger und rechtlicher Freigabe erlaubt.

## 8. SEO und Meta-Texte pro Sprache

- Deutsch ist SEO-Referenz.
- Russische und englische Meta-Texte duerfen nicht mehr versprechen als Deutsch.
- Keyword-Strategie pro Sprache spaeter separat pruefen.
- `KFZ-Gutachten Berlin` bleibt deutsche Hauptausrichtung.
- Alte SEO-Ziele duerfen auch in Russisch und Englisch nicht als aktive Leistungen wiederbelebt werden.
- Meta-Texte muessen launchabhaengig formuliert werden.
- Upload, Supabase und KI duerfen auch in mehrsprachigen Meta-Texten nicht als live erscheinen, solange sie nicht umgesetzt und freigegeben sind.
- Formular darf in Meta-Texten nur erwaehnt werden, wenn es zum Launch umgesetzt und freigegeben ist.
- Keine 24/7-, Sofortdienst-, Schadenhoehen- oder Reparaturkostenversprechen in irgendeiner Sprache.

## 9. FAQ pro Sprache

- FAQ-Inhalte basieren auf freigegebenen deutschen FAQ-Inhalten.
- Keine neuen FAQ-Fragen oder Antworten in Russisch oder Englisch erfinden, die im Deutschen nicht freigegeben sind.
- FAQ darf in keiner Sprache Upload, KI, Sofortdienst, Rueckmeldefrist, Schadenhoehe oder Reparaturkosten versprechen.
- FAQPage strukturierte Daten nur verwenden, wenn sichtbare Inhalte freigegeben sind.
- Mehrsprachige FAQ-Texte muessen mit Global Spec, Functional Map und freigegebenen Feature Specs uebereinstimmen.

## 10. Nicht-Scope in allen Sprachen

Nicht als aktive Leistung in irgendeiner Sprache darstellen:

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

Diese Begriffe duerfen nur im Cleanup-Kontext oder zur klaren Abgrenzung vorkommen.

Sie duerfen nicht als aktive SEO-Ziele, Meta-Titel, Meta-Descriptions, FAQ-Ziele, strukturierte Daten, Navigation oder CTA-Ziele fuer irgendeine Sprache verwendet werden.

## 11. Mobile First pro Sprache

Mobile First gilt fuer alle Sprachversionen.

Pruefen:

- Texte muessen mobil gut lesbar bleiben.
- Uebersetzungen duerfen Buttons und Layouts nicht sprengen.
- CTA-Texte muessen kurz und verstaendlich bleiben.
- CTA-Texte pro Sprache kurz halten.
- Russische und englische Texte muessen separat mobil geprueft werden.
- FAQ, Kontaktflow, Meta-Texte, Disclaimer und Buttons muessen pro Sprache auf Laenge und Umbruch geprueft werden.
- Keine unkontrollierten langen Woerter oder ueberfuellten Buttons.
- Sprachumschalter spaeter mobil gut erreichbar planen.

## 12. Bestehende Struktur

Falls das Projekt bereits mehrsprachige Strukturen enthaelt, sollen diese spaeter im Rework-Plan geprueft und nach Moeglichkeit weiterverwendet werden.

Keine bestehende Mehrsprachigkeitsstruktur blind loeschen.

Keine neue technische i18n-Struktur ohne Technical Spec, Rework-Plan und ausdrueckliche Freigabe.

URLs, Locale-Strukturen und Routing werden spaeter technisch geklaert.

Hreflang, Canonical-Regeln, Sprach-Routing und Sitemap-Strategie werden spaeter in einer Technical Spec oder SEO-Umsetzungsaufgabe geplant.

## 13. Datenschutz / Einwilligung / rechtliche Texte

- Datenschutz- und Einwilligungstexte muessen pro Sprache fachlich und rechtlich geprueft werden.
- Uebersetzungen duerfen Datenschutzrechte, Einwilligung, Speicherfristen, Zugriff oder Loeschung nicht ungenau darstellen.
- Solange Datenschutz- oder Einwilligungstexte in einer Sprache nicht geprueft und freigegeben sind, duerfen sie in dieser Sprache nicht live gehen.
- Datenschutz- und Einwilligungstexte duerfen Upload, Supabase oder KI nicht als live darstellen, solange diese Funktionen nicht umgesetzt und freigegeben sind.

## 14. Offene Entscheidungen

Offen:

- Ob Deutsch, Russisch und Englisch direkt zum Launch live gehen.
- Ob Deutsch zuerst live geht und Russisch/Englisch danach folgen.
- Wer die russischen und englischen fachlichen Formulierungen prueft.
- Ob KI-, Datenschutz- und Einwilligungstexte extern rechtlich oder fachlich geprueft werden.
- Welche URLs oder Locale-Strukturen spaeter fuer die neue KFZ-Gutachten-Webseite genutzt werden.
- Mehrsprachige SEO-Keyword-Strategie.
- Mehrsprachige FAQ-Freigabe.
- Mehrsprachige Datenschutz-/Einwilligungstexte.
- Ob alle drei Sprachen denselben Funktionsumfang zum Launch haben.
- Ob Formular direkt zum Launch live ist.
- Ob Upload, Supabase oder KI beim ersten Launch live sind oder spaeter aktiviert werden.
