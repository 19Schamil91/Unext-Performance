'use client'

/*
  Diese Datei stellt das helle und dunkle Farbschema fuer die Website bereit.
  Sie verbindet die App mit dem Theme-System von next-themes.
  Nutzer koennen dadurch zwischen hellem und dunklem Erscheinungsbild wechseln.
*/
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
