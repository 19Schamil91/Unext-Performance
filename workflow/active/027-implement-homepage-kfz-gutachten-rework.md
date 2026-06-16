# Aufgabe 027 - Homepage-Rework fuer KFZ-Gutachten umsetzen

## Ziel

Die erste sichtbare Homepage-Umsetzung fuer die reine KFZ-Gutachten-Ausrichtung vorbereiten und spaeter in einem klar begrenzten Code-/UI-Schritt umsetzen.

Die Homepage soll klar als `KFZ-Gutachten Berlin`-Seite wirken und alte Autovermietung-, Werkstatt-, Fahrzeugservice- oder sonstige Nicht-Scope-Wirkung zurueckbauen.

## Kontext

Aufgabe 027 baut auf folgenden abgeschlossenen Grundlagen auf:

- Aufgabe 019: alte Scope-/Service-Inhalte und Risiken inventarisiert
- Aufgabe 020: Homepage-Rework fuer KFZ-Gutachten geplant
- Aufgabe 021: SEO fuer KFZ-Gutachten geplant
- Aufgabe 025: Umsetzungsgate abgeschlossen und 027 als erster Homepage-Umsetzungstask vorgeschlagen
- Visual-Spec: bestehender dunkler hochwertiger Schwarz/Rot-Look bleibt globale Designbasis

Aufgabe 022, 023 und 024 sind spaetere Roadmap-Themen und fuer diese erste Homepage-Umsetzung nicht erforderlich.

## Vorgehen

- Relevante Homepage-Dateien und Komponenten inventarisieren.
- Bestehende UI-/Layout-/Designmuster pruefen und nach Moeglichkeit wiederverwenden.
- Homepage-Struktur auf `KFZ-Gutachten Berlin` ausrichten.
- Hero, sichtbare Sektionen, CTAs, Gutachtenarten, Ablauf, digitale Schadenaufnahme als Anfragevorbereitung, Trust-/Kompetenzbereich, FAQ und Kontaktbereich pruefen und spaeter begrenzt umsetzen.
- Alte Nicht-Scope-Wirkung wie Autovermietung, Mietwagen, Werkstatt, Fahrzeugservice, Zulassung, Abschleppdienst, Detailing, Express/Kurier und allgemeine Mobilitaet aus der sichtbaren Homepage-Prioritaet entfernen oder ersetzen.
- Telefon, WhatsApp und freigegebene Anfragewege mobil priorisieren.
- Bestehende Schwarz/Rot-Designrichtung beibehalten.
- Nach Umsetzung passende Checks ausfuehren.

## Erlaubter Scope

Aufgabe 027 darf spaeter nach weiterer Freigabe nur die fuer die Homepage-Umsetzung noetigen Dateien anfassen, zum Beispiel:

- Homepage-Seite und Homepage-nahe Komponenten
- sichtbare Homepage-Texte und Sektionen
- CTA-Texte und CTA-Reihenfolge auf der Homepage
- FAQ-/Kontakt-/Ablauf-/Trust-Bereiche, soweit sie zur Homepage gehoeren
- bestehende Komponenten, wenn sie fuer die Homepage-Rework-Umsetzung angepasst werden muessen

## Nicht-Scope / Tabu

Aufgabe 027 darf nicht umfassen:

- Supabase
- Upload
- KI
- Kundenportal
- Adminbereich
- neue Dependencies
- Environment-Variablen
- Datenbankaenderungen
- Routenloeschungen
- Redirects ohne eigenen Routing-/Redirect-Task
- SEO-/Metadata-/Structured-Data-Umsetzung ohne eigenen SEO-Umsetzungstask
- alte Services endgueltig loeschen ohne Referenz-, Routing- und SEO-Pruefung
- komplettes Redesign
- Launch oder Deployment

## Akzeptanzkriterien

- Die Homepage wirkt klar als `KFZ-Gutachten Berlin`-Seite.
- Alte Autovermietung-, Werkstatt-, Fahrzeugservice- und sonstige Nicht-Scope-Wirkung wird auf der Homepage nicht mehr sichtbar priorisiert.
- Hero und Hauptaussage passen zur reinen KFZ-Gutachten-Ausrichtung.
- CTAs priorisieren mobil Telefon, WhatsApp und freigegebene Anfragewege.
- Digitale Schadenaufnahme wird nur als Anfragevorbereitung dargestellt und nicht als Upload-/Supabase-/KI-Livefunktion.
- Supabase, Upload, KI und Kundenportal werden nicht umgesetzt und nicht als live suggeriert.
- Bestehende dunkle Schwarz/Rot-Designrichtung bleibt erhalten.
- Keine Routenloeschungen, Redirects, SEO-/Metadata-/Structured-Data-Umsetzung, neuen Dependencies oder Env-Aenderungen erfolgen.
- Typecheck, Lint und Build werden nach einer spaeteren Umsetzung ausgefuehrt oder begruendet uebersprungen.
- Mobile und Desktop werden nach einer spaeteren Umsetzung visuell geprueft oder begruendet uebersprungen.

## Status

Status: in Arbeit
