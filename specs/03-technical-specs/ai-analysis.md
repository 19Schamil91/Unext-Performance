# AI Analysis

Status: Finaler Entwurf, wartet auf Freigabe.

Grundlage: `specs/07-open-questions/open-questions.md`, Abschnitte 6, 7 und 10.

## Ziel

Technische Planung fuer eine spaetere KI-Voranalyse von Fahrzeugschadenbildern. Keine Integration in dieser Aufgabe.

## Technische Richtung

Erste moegliche Richtung:

- OpenAI Vision API oder vergleichbare Vision-faehige KI-Schnittstelle

Die KI-Schicht muss austauschbar bleiben. Anbieter duerfen nicht ueberall hart im Projekt verdrahtet werden.

Moegliche spaetere Struktur:

```text
/lib/ai/analyzeVehicleDamage.ts
```

Diese interne Schicht kann zunaechst OpenAI Vision API verwenden und spaeter gegen andere Anbieter oder spezialisierte Vehicle-Damage-Modelle austauschbar bleiben.

## Eingaben

Spaetere Eingaben koennen sein:

- Schadenbilder aus Supabase Storage
- Fahrzeugdaten
- Schadenbeschreibung
- Anfrage-ID
- Metadaten zu Upload und Zeitpunkt

## Ausgaben

Spaeter strukturiert speichern:

- erkannte Schadenbereiche
- Bildqualitaets-Hinweise
- fehlende Perspektiven
- interne Zusammenfassung
- Zeitpunkt der Analyse
- verwendeter Anbieter / Modell, falls sinnvoll
- Hinweis, dass es sich nicht um finale Bewertung handelt

## Interne Nutzung

KI-Ergebnisse sind zunaechst intern fuer Gutachter vorgesehen. Kundensichtbarkeit nur nach gesonderter fachlicher, rechtlicher und technischer Freigabe.

## Abgrenzung zu Supabase

- Supabase: Datenbank, Storage, Anfrageverwaltung
- KI-Schicht: Analysefunktion
- Adminbereich: interne Darstellung und Pruefung

Die KI-Schicht analysiert Bilder und Daten, soll aber nicht unkontrolliert mit der Datenbank vermischt werden.

## Datenschutzabhaengigkeit

Vor Umsetzung klaeren:

- Datenschutztexte
- Einwilligung
- Speicherort
- Speicherfristen
- Zugriff auf KI-Ergebnisse
- Loeschung und Auskunft

Ohne Klaerung keine KI-Verarbeitung.

## Ausschluesse

Keine technische Umsetzung, keine Dependencies, keine Environment-Variablen und keine Anbieterintegration in dieser Aufgabe.
