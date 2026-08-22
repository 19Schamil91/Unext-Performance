/*
  Dieser Proxy behandelt ausschließlich die 15 endgültig entfernten Legacy-Service-URLs.
  Nutzer sehen weiterhin die vorhandene lokalisierte Recovery-Seite, während der Status vor dem Streaming auf 404 gesetzt wird.
  Die ursprüngliche Browser-URL bleibt erhalten; es findet keine Weiterleitung statt.
*/
import { NextResponse, type NextRequest } from "next/server"

const recoveryPaths = {
  de: "/leistungen/__entfernte-legacy-leistung",
  en: "/en/__removed-legacy-service",
  ru: "/ru/__udalennaya-legacy-usluga",
} as const

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const recoveryPath = pathname.startsWith("/en/")
    ? recoveryPaths.en
    : pathname.startsWith("/ru/")
      ? recoveryPaths.ru
      : recoveryPaths.de
  const rewriteUrl = request.nextUrl.clone()

  rewriteUrl.pathname = recoveryPath

  return NextResponse.rewrite(rewriteUrl, { status: 404 })
}

export const config = {
  matcher: [
    "/leistungen/autovermietung",
    "/leistungen/autoservice",
    "/leistungen/detailing",
    "/leistungen/zulassungsservice",
    "/leistungen/abschleppdienst-pannenhilfe",
    "/en/leistungen/autovermietung",
    "/en/leistungen/autoservice",
    "/en/leistungen/detailing",
    "/en/leistungen/zulassungsservice",
    "/en/leistungen/abschleppdienst-pannenhilfe",
    "/ru/leistungen/autovermietung",
    "/ru/leistungen/autoservice",
    "/ru/leistungen/detailing",
    "/ru/leistungen/zulassungsservice",
    "/ru/leistungen/abschleppdienst-pannenhilfe",
  ],
}
