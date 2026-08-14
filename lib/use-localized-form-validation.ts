"use client"

import { startTransition, useCallback, useRef, useState, type FormEvent } from "react"
import type { ZodError } from "zod"
import {
  buildFieldErrors,
  getValidationSummary,
  type ContactActionState,
} from "@/lib/contactForm"
import type { Locale } from "@/lib/i18n"

type ValidationResult =
  | { success: true }
  | { success: false; error: ZodError }

type LocalizedFormValidationOptions = {
  locale: Locale
  serverState: ContactActionState
  submitAction: (formData: FormData) => void
  validate: (formData: FormData, locale: Locale) => ValidationResult
}

type ClientValidationState = {
  serverState: ContactActionState
  fieldErrors: Record<string, string> | null
  message: string
}

export function useLocalizedFormValidation({
  locale,
  serverState,
  submitAction,
  validate,
}: LocalizedFormValidationOptions) {
  const [clientState, setClientState] = useState<ClientValidationState>({
    serverState,
    fieldErrors: null,
    message: "",
  })
  const hasAttemptedSubmit = useRef(false)
  const submitting = useRef(false)
  const submittedServerState = useRef<ContactActionState | null>(null)
  const clientStateIsCurrent = clientState.serverState === serverState
  const fieldErrors = clientStateIsCurrent && clientState.fieldErrors !== null
    ? clientState.fieldErrors
    : serverState.fieldErrors
  const message = clientStateIsCurrent ? clientState.message : ""

  const focusFirstInvalidField = useCallback((form: HTMLFormElement, errors: Record<string, string>) => {
    const firstFieldName = Object.keys(errors)[0]

    if (!firstFieldName) {
      return
    }

    window.requestAnimationFrame(() => {
      const field = form.elements.namedItem(firstFieldName)

      if (field instanceof HTMLElement) {
        field.focus()
      }
    })
  }, [])

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (submittedServerState.current !== serverState) {
        submitting.current = false
      }

      if (submitting.current) {
        return
      }

      const form = event.currentTarget
      const formData = new FormData(form)
      const result = validate(formData, locale)

      if (!result.success) {
        const errors = buildFieldErrors(result.error)
        hasAttemptedSubmit.current = true
        setClientState({ serverState, fieldErrors: errors, message: getValidationSummary(locale) })
        focusFirstInvalidField(form, errors)
        return
      }

      setClientState({ serverState, fieldErrors: {}, message: "" })
      submitting.current = true
      submittedServerState.current = serverState

      // Nur lokal gültige Daten erreichen die bestehende, weiterhin verbindlich prüfende Server Action.
      startTransition(() => submitAction(formData))
    },
    [focusFirstInvalidField, locale, serverState, submitAction, validate],
  )

  const handleChange = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (!hasAttemptedSubmit.current && Object.keys(serverState.fieldErrors).length === 0) {
        return
      }

      const result = validate(new FormData(event.currentTarget), locale)
      const errors = result.success ? {} : buildFieldErrors(result.error)
      setClientState({
        serverState,
        fieldErrors: errors,
        message: Object.keys(errors).length > 0 ? getValidationSummary(locale) : "",
      })
    },
    [locale, serverState, validate],
  )

  return {
    fieldErrors,
    getFieldError: (field: string) => fieldErrors[field],
    handleChange,
    handleSubmit,
    message,
  }
}