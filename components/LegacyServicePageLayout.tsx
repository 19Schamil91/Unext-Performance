/*
  Diese Datei ist die Uebergangs-Huelle fuer noch nicht migrierte Leistungsdetailseiten.
  Sie liest vorerst die Sprache aus der bestehenden Server-Logik und zeigt das gemeinsame Leistungsseiten-Layout.
  Besucher sehen dadurch die bisherigen Detailseiten, bis diese auf URL-Sprachen umgestellt sind.
*/
import {
  ServicePageLayout,
  type ServicePageLayoutProps,
} from "@/components/service-page-layout"
import { getCurrentLocale } from "@/lib/server-locale"

type Props = Omit<ServicePageLayoutProps, "locale">

export async function LegacyServicePageLayout(props: Props) {
  const locale = await getCurrentLocale()

  return <ServicePageLayout {...props} locale={locale} />
}
