# Mehrsprachigkeit

Status: Freigegeben als Basis fuer die naechsten Planungsaufgaben.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitt 11, Aufgabe 017, `specs/00-global-spec/global-spec.md`, `specs/01-functional-map/functional-map.md`, `specs/02-feature-specs/kfz-gutachten.md`, `specs/02-feature-specs/digitale-schadenaufnahme.md`, `specs/02-feature-specs/ki-voranalyse.md`, `specs/02-feature-specs/contact-flow.md`, `specs/02-feature-specs/seo.md` und `specs/02-feature-specs/faq.md`.

## 1. Kurzueberblick / Executive Summary

Die V1-Website startet verbindlich dreisprachig:

- Deutsch
- Russisch
- Englisch

Deutsch ist die fachlich fuehrende Sprache.

Russisch und Englisch basieren auf freigegebenen deutschen Inhalten.

Übersetzungen müssen sinngleich und natürlich formuliert sein. Eine wortgetreue Übersetzung ist nicht erforderlich, solange Aussage, Leistungsgrenzen und Nutzerziel erhalten bleiben.

Mehrsprachigkeit darf in keiner Sprache staerkere Versprechen erzeugen als die freigegebene deutsche Fassung.

Diese Spec beschreibt fachliche Leitplanken fuer mehrsprachige Inhalte. Sie ist keine finale Uebersetzung und keine technische Internationalisierungs-, Locale- oder Routing-Umsetzung.

Diese Spec basiert auf den freigegebenen deutschen Inhalten und muss mit den anderen Specs synchron bleiben.

Deutsch, Russisch und Englisch müssen vor dem gemeinsamen V1-Launch inhaltlich gleichwertig, technisch vollständig, menschlich freigegeben und separat responsiv geprüft sein.

## 2. Version 1 und Zielversion

### Version 1 / erste veroeffentlichbare Website

Fuer Version 1 gilt:

- Deutsch, Russisch und Englisch gehen gemeinsam live.
- Nur freigegebene deutsche Inhalte dürfen übersetzt werden.
- Alle sichtbaren Inhalte, Kernseiten und zentralen Nutzerwege müssen in jeder Sprache vollständig, konsistent und fachlich geprüft sein.
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

Halbfertige oder ungeprüfte Sprachversionen dürfen nicht live gehen.

Der gemeinsame V1-Launch darf nicht freigegeben werden, solange ein dreisprachiger Launch-Blocker offen ist.

### Zielversion / Roadmap

Über den dreisprachigen V1-Launch hinaus umfasst die Zielversion:

- dauerhaft konsistent gepflegte Sprachversionen Deutsch, Russisch und Englisch
- sprachspezifische SEO- und Meta-Texte
- mehrsprachige FAQ
- mehrsprachige Kontakt- und CTA-Texte
- mehrsprachige Datenschutz-/Einwilligungstexte nach Freigabe
- spätere Erweiterungen nur mit vollständiger Sprach-, Routing- und Qualitätsparität

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
2. Sinngleicher und natürlicher EN/RU-Entwurf wird erstellt.
3. Fachliche Aussage und Leistungsgrenzen werden mit der deutschen Referenz verglichen.
4. Übersetzung wird durch eine sprachkundige Person geprüft.
5. Sensible und rechtliche Begriffe werden gesondert geprüft.
6. Sprachversion wird responsiv und technisch geprüft.
7. Sprachversion wird durch den Nutzer freigegeben.
8. Erst danach darf die Sprachversion gemeinsam mit den anderen V1-Sprachen live gehen.

Verbindliche Regeln:

- Keine freie automatische Übersetzung sensibler Begriffe ohne Prüfung.
- Sprachspezifische Kürzungen, Umstellungen und kürzere CTA-Texte sind erlaubt, wenn die fachliche Aussage erhalten bleibt.
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
- Labels, Platzhalter, Validierungs-, Serverfehler- und Erfolgsmeldungen müssen je Sprache vollständig und konsistent lokalisiert sein.
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

- jede Sprache separat bei 390 x 844, 768 x 1024 und 1440 x 1100
- Texte müssen mobil gut lesbar bleiben.
- Uebersetzungen duerfen Buttons und Layouts nicht sprengen.
- CTA-Texte muessen kurz und verstaendlich bleiben.
- CTA-Texte pro Sprache kurz halten.
- Russische und englische Texte muessen separat mobil geprueft werden.
- FAQ, Kontaktflow, Meta-Texte, Disclaimer und Buttons muessen pro Sprache auf Laenge und Umbruch geprueft werden.
- Keine unkontrollierten langen Woerter oder ueberfuellten Buttons.
- Sprachumschalter müssen mobil gut erreichbar sein und auf die fachlich entsprechende Seite wechseln.
- Sprachspezifische Textanpassung hat Vorrang vor globaler Schriftverkleinerung oder erzwungenen Zeilenumbrüchen.

## 12. Bestehende Struktur und verbindliches Routenziel

Die bestehende URL-basierte Locale-Struktur wird weiterverwendet: Deutsch bleibt ohne Sprachpräfix, Englisch verwendet `/en` und Russisch `/ru`.

Aktueller deutscher Ist-Stand nach Aufgabe 050:

- `/gutachtenarten/unfallgutachten`
- `/gutachtenarten/fahrzeugbewertung`
- `/gutachtenarten/schadendokumentation`

Die früheren deutschen Detailrouten unter `/leistungen/...` leiten permanent und direkt auf diese Ziele weiter. `/leistungen` bleibt als eigenständige Übersichtsroute bestehen.

Aktueller EN/RU-Stand:

- Die bestehende Unfallgutachtenseite liegt noch unter `/en/leistungen/unfallgutachten` beziehungsweise `/ru/leistungen/unfallgutachten`.
- Gleichwertige EN/RU-Seiten für Fahrzeugbewertung und Schadendokumentation fehlen noch.
- Die EN/RU-Gutachtenartenmigration wurde in Aufgabe 050 bewusst nicht umgesetzt.

Verbindliches Ziel der später gesondert freizugebenden EN/RU-Umsetzung:

- `/en/gutachtenarten/unfallgutachten`
- `/en/gutachtenarten/fahrzeugbewertung`
- `/en/gutachtenarten/schadendokumentation`
- `/ru/gutachtenarten/unfallgutachten`
- `/ru/gutachtenarten/fahrzeugbewertung`
- `/ru/gutachtenarten/schadendokumentation`

Der Sprachwechsel muss die fachlich entsprechende Seite in der Zielsprache öffnen und den Seitenkontext erhalten. Solange ein fachlich entsprechendes Sprachziel fehlt, darf die betreffende Sprachoption nicht als funktionierender Link auf eine andere Seite angeboten werden. Sie wird vorübergehend ausgeblendet oder barrierearm als nicht verfügbar gekennzeichnet. Zum gemeinsamen V1-Launch müssen alle freigegebenen Kernziele vorhanden und geprüft sein.

Keine bestehende Mehrsprachigkeitsstruktur darf blind gelöscht werden. Hreflang, Canonical-Regeln, Sitemap, Robots und sprachspezifische Metadata bleiben der späteren SEO-Umsetzung in Aufgabe 029 zugeordnet.

## 13. Datenschutz / Einwilligung / rechtliche Texte

- Datenschutz- und Einwilligungstexte müssen pro Sprache fachlich und rechtlich geprüft werden.
- Impressum, Datenschutz und AGB benötigen je Sprache eine menschliche Sprachprüfung und eine geeignete qualifizierte rechtliche Freigabe.
- Uebersetzungen duerfen Datenschutzrechte, Einwilligung, Speicherfristen, Zugriff oder Loeschung nicht ungenau darstellen.
- Solange Datenschutz- oder Einwilligungstexte in einer Sprache nicht geprueft und freigegeben sind, duerfen sie in dieser Sprache nicht live gehen.
- Datenschutz- und Einwilligungstexte duerfen Upload, Supabase oder KI nicht als live darstellen, solange diese Funktionen nicht umgesetzt und freigegeben sind.

## 14. Offene Entscheidungen

Offen:

- Wer die russischen und englischen fachlichen Formulierungen prueft.
- Ob KI-, Datenschutz- und Einwilligungstexte extern rechtlich oder fachlich geprueft werden.
- Technische Umsetzung der freigegebenen EN/RU-Zielrouten und fachlichen Seitenzuordnung.
- Konkrete barrierearme UI-Ausführung für vorübergehend nicht verfügbare Sprachziele.
- Mehrsprachige SEO-Keyword-Strategie.
- Mehrsprachige FAQ-Freigabe.
- Mehrsprachige Datenschutz-/Einwilligungstexte.
- Ob Formular direkt zum Launch live ist.
- Ob Upload, Supabase oder KI beim ersten Launch live sind oder spaeter aktiviert werden.
