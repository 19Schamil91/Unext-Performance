/*
  Diese Datei stellt die aktuelle Sprache fuer die Website bereit.
  Sie merkt sich die ausgewaehlte Sprache im Browser und laedt die Seite danach neu.
  Nutzer koennen dadurch zwischen Deutsch, Englisch und Russisch wechseln.
*/
"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { type Locale } from "@/lib/i18n"

type LocaleContextValue = {
  locale: Locale
  isPending: boolean
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

type LocaleProviderProps = {
  initialLocale: Locale
  children: ReactNode
}

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  // Diese Werte speichern die aktuell sichtbare Sprache und ob gerade neu geladen wird.
  const [locale, setLocaleState] = useState(initialLocale)
  const [isPending, setIsPending] = useState(false)

  // Diese Funktion aktualisiert die sichtbare Sprache, bis die Navigation die passende URL geladen hat.
  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    setLocaleState(nextLocale)
    setIsPending(true)
  }

  return (
    <LocaleContext.Provider value={{ locale, isPending, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }

  return context
}
