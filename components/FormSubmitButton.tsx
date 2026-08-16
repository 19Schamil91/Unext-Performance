/*
  Diese Datei definiert den Absende-Button fuer Formulare.
  Sie zeigt waehrend des Sendens einen Ladekreis und sperrt den Button.
  Nutzer koennen damit Kontakt- und Service-Anfragen eindeutig absenden.
*/
"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

type Props = {
  submitLabel: string
  ariaLabel?: string
  pendingLabel: string
  pending?: boolean
}

export function FormSubmitButton({ submitLabel, ariaLabel, pendingLabel, pending = false }: Props) {
  // Dieser Wert kommt vom Formular und zeigt, ob die Anfrage gerade gesendet wird.
  const { pending: formPending } = useFormStatus()
  const isPending = pending || formPending

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={isPending}
      aria-label={isPending ? undefined : ariaLabel}
    >
      {isPending ? (
        <>
          <Spinner className="mr-2" />
          {pendingLabel}
        </>
      ) : (
        submitLabel
      )}
    </Button>
  )
}
