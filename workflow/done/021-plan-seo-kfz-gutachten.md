# Aufgabe 021 - SEO fuer KFZ-Gutachten planen

## Ziel

SEO auf die neue KFZ-Gutachten-Ausrichtung ausrichten.

## Kontext

Alte SEO-Fokusse zu Autovermietung, Fahrzeugservice, Werkstatt, Zulassung, Abschleppdienst und weiteren alten Leistungen gehoeren nicht mehr zum fachlichen Scope und muessen spaeter entfernt oder ersetzt werden.

## Vorgehen

- Freigegebene SEO-Spec pruefen.
- Fokus-Keywords planen: KFZ-Gutachten Berlin, Unfallgutachten Berlin, Schadengutachten Berlin, Wertgutachten / Fahrzeugbewertung Berlin, Kfz-Sachverstaendiger Berlin und digitale Schadenaufnahme.
- Bestehende Titles, Descriptions, strukturierte Daten und SEO-Texte inventarisieren.
- Alte SEO-Fokusse fuer spaeteren Ersatz dokumentieren.

## SEO-Plan fuer KFZ-Gutachten

### 1. Zielbild

- SEO wird auf eine reine KFZ-Gutachten-Webseite fuer Berlin ausgerichtet.
- Hauptfokus ist `KFZ-Gutachten Berlin`.
- Unterstuetzende Themen sind Unfallgutachten, Schadengutachten, Wertgutachten / Fahrzeugbewertung, Kfz-Sachverstaendiger Berlin und digitale Schadenaufnahme.
- Alte Leistungen wie Autovermietung, Mietwagen, Werkstatt, Fahrzeugservice, Zulassung, Abschleppdienst/Pannenhilfe, Detailing, Express/Kurier oder allgemeine Mobilitaet werden nicht mehr als SEO-Ziele geplant.
- Upload, Supabase und KI duerfen im SEO-Kontext nur als Roadmap oder geplante Ausbaustufe erscheinen, solange sie nicht technisch umgesetzt, datenschutzseitig geprueft und freigegeben sind.

### 2. Keyword- und Seitenstrategie

- Primaeres Keyword: `KFZ-Gutachten Berlin`.
- Ergaenzende Schreibweisen: `Kfz-Gutachten Berlin`, `KFZ Gutachten Berlin`, `Kfz Gutachten Berlin`.
- Bestaetigte Nebenkeywords: `Unfallgutachten Berlin`, `Schadengutachten Berlin`, `Wertgutachten Auto Berlin`, `Fahrzeugbewertung Berlin`, `Kfz-Sachverstaendiger Berlin`, `digitale Schadenaufnahme Berlin`.
- Nebenkeywords sollen Version 1 unterstuetzen, aber nicht automatisch eigene Landingpages ausloesen.
- Version 1 plant eine starke Hauptseite mit Gutachtenarten als Abschnitten.
- Spaetere Landingpages fuer Gutachtenarten oder digitale Schadenaufnahme brauchen eigenen Content-/SEO-/Routing-Plan und ausdrueckliche Freigabe.
- Bezirke, Berlin + Umgebung oder lokale Unterseiten bleiben offen und duerfen nicht ohne Entscheidung als SEO-Ziele geplant werden.

### 3. Titles, Descriptions, Keywords und OpenGraph

- Spaeterer Standard-Meta-Title fuer die Hauptseite: `KFZ-Gutachten Berlin | UNEXT`.
- Moegliche Alternativen duerfen die Hauptleistung nicht verwaessern und muessen weiter klar unter `KFZ-Gutachten Berlin` bleiben.
- Spaetere Meta-Descriptions sollen Unfallgutachten, Schadendokumentation, Fahrzeugbewertung, strukturierte Anfragevorbereitung und persoenliche Rueckmeldung sachlich verbinden.
- `lib/metadata.ts` ist spaeter zentral zu pruefen, weil dort aktuell alte Homepage-Metadata, Keywords und OpenGraph-Daten fuer alte Leistungsbereiche enthalten sind.
- Alte Keywords wie Autovermietung, Werkstatt, Detailing, Zulassung, Abschleppdienst, Expresslieferung und Kurierdienst muessen spaeter ersetzt werden.
- Mehrsprachige Meta-Texte duerfen in Englisch und Russisch nicht mehr versprechen als die freigegebene deutsche Zielrichtung.

### 4. Structured Data

- `lib/structuredData.ts` ist spaeter zentral zu pruefen.
- Der aktuelle Schema-Typ `AutoRepair` ist pruefbeduerftig, weil UNEXT nicht als Werkstatt oder Reparaturbetrieb positioniert werden soll.
- Spaeter zu planen sind Organization, LocalBusiness oder ProfessionalService, PostalAddress, OpeningHoursSpecification, ContactPoint, BreadcrumbList und FAQPage nur bei sichtbaren freigegebenen Inhalten.
- Strukturierte Daten muessen mit sichtbaren Website-Inhalten, Global Spec und Firmendaten uebereinstimmen.
- Keine alten Nicht-Scope-Leistungen, keine Reviews ohne Freigabe und keine Upload-/Supabase-/KI-Livefunktionen in Structured Data planen.

### 5. Alte SEO-Fundstellen und Risiken

- `lib/metadata.ts` enthaelt alte Titles, Descriptions und Keywords fuer breite Fahrzeugservice-Positionierung.
- `lib/structuredData.ts` enthaelt eine moegliche Werkstatt-/AutoRepair-Positionierung.
- Alte Service-Routen unter `app/(de)/leistungen/` und `app/(localized)/[locale]/leistungen/` behalten potenziell SEO-Wert und duerfen nicht ohne Redirect-Plan entfernt werden.
- Alte Service-Komponenten mit eigener Metadata-Erzeugung, zum Beispiel Rental, Workshop, Detailing, Registration und Towing, sind spaeter zu pruefen.
- Uebersetzungsdateien unter `lib/translations/` enthalten alte SEO-relevante Begriffe in sichtbaren Texten, Header, Footer, Legal und Kontakt.
- Alte Audit-/Reviewer-Routen und Dokumentationsartefakte sind kein direkter SEO-Umsetzungsbereich, koennen aber spaeter Prueflisten beeinflussen.

### 6. Bezug zu Homepage, Visual Spec und Mobile SEO

- Der Homepage-Plan aus Aufgabe 020 gibt die sichtbare Struktur vor: Hero, Gutachtenarten, digitale Schadenaufnahme, Ablauf, Vertrauen, FAQ und Kontakt.
- SEO darf die sichtbare Struktur nicht in Richtung alter Leistungen zurueckziehen.
- Die Visual-Spec-Leitplanke bleibt relevant: dunkler hochwertiger Schwarz/Rot-Look, kein Redesign-Bruch, keine visuelle Werkstatt- oder Autovermietungswirkung.
- Mobile SEO muss kurze H1/H2, scanbare Abschnitte, mobile CTAs, Telefon, WhatsApp und Anfrage priorisieren.
- FAQ-SEO darf nur bestaetigte Inhalte behandeln und keine 24/7-, Sofortdienst-, Upload-, KI- oder Schadenhoehenversprechen machen.

### 7. Umsetzungsgrenzen und spaetere Abhaengigkeiten

- Aufgabe 021 plant SEO, Metadata und Structured Data nur fachlich.
- Keine Datei in `lib/`, `app/`, `components/`, `public/` oder `specs/` wird in Aufgabe 021 umgesetzt.
- Alte Service-URLs brauchen vor Entfernung oder Umleitung eine eigene Redirect-/Routing-Entscheidung.
- I18n-Metadata und sichtbare mehrsprachige Inhalte muessen spaeter gemeinsam geprueft werden.
- Code-/Asset-Cleanup gehoert erst nach fachlichem Rework und Referenzpruefung in spaetere Cleanup-Aufgaben.
- Falls die Planung zeigt, dass eigene Landingpages sinnvoll sein koennten, werden sie nur als spaetere Vorschlaege genannt und nicht in Aufgabe 021 angelegt.

## Akzeptanzkriterien

- Die SEO-Planung passt zur reinen KFZ-Gutachten-Webseite und fokussiert `KFZ-Gutachten Berlin`.
- Alte SEO-/Metadata-/Structured-Data-Inhalte aus Aufgabe 019 sind als zu ersetzende oder zu pruefende Bereiche beruecksichtigt.
- Der Homepage-Plan aus Aufgabe 020 ist als Grundlage fuer sichtbare Struktur, CTA-Bezug und Seitenfokus beruecksichtigt.
- Die Visual-Spec-Leitplanke zur dunklen Schwarz/Rot-Designrichtung ist beruecksichtigt, soweit SEO-Darstellung und sichtbare Struktur betroffen sind.
- Titles, Descriptions, Keywords, OpenGraph und Structured Data werden nur geplant, nicht umgesetzt.
- Alte Service-URLs und alte Service-Metadata werden nur als Risiko oder Abhaengigkeit erfasst.
- Lokale Suchintention fuer Berlin ist beruecksichtigt.
- Keine Code-, UI-, Routing-, Content-, Asset-, Supabase-, Upload- oder KI-Umsetzung erfolgt in Aufgabe 021.
- Keine SEO-, Metadata- oder Structured-Data-Dateien werden in Aufgabe 021 geaendert.

## Status

Status: abgeschlossen
