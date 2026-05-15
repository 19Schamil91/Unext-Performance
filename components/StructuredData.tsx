/*
  Diese Datei gibt strukturierte Daten fuer Suchmaschinen aus.
  Sie zeigt nichts Sichtbares auf der Seite.
  Nutzer profitieren davon, dass Suchmaschinen Firma, Leistungen und Seitenpfade besser verstehen.
*/
type Props = {
  data: Record<string, unknown> | readonly Record<string, unknown>[]
}

export function StructuredData({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
