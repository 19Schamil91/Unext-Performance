"use server"

import type { Locale } from "@/lib/i18n"
import {
  buildContactEmail,
  buildFieldErrors,
  buildServiceInquiryEmail,
  type ContactActionState,
  validateContactForm,
  validateServiceInquiry,
} from "@/lib/contactForm"
import { normalizeLocale } from "@/lib/i18n"

const actionMessages: Record<Locale, { invalid: string; config: string; failed: string; sent: string }> = {
  de: {
    invalid: "Bitte prüfen Sie die markierten Felder.",
    config: "Der Mailversand ist noch nicht eingerichtet. Bitte rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp.",
    failed: "Die Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
    sent: "Ihre Anfrage wurde erfolgreich übermittelt.",
  },
  en: {
    invalid: "Please check the highlighted fields.",
    config: "Email delivery is not configured yet. Please call us directly or contact us via WhatsApp.",
    failed: "The message could not be sent right now. Please try again or call us.",
    sent: "Your inquiry has been sent successfully.",
  },
  ru: {
    invalid: "Проверьте отмеченные поля.",
    config: "Отправка писем еще не настроена. Пожалуйста, позвоните нам напрямую или напишите в WhatsApp.",
    failed: "Сообщение сейчас не удалось отправить. Попробуйте еще раз или позвоните нам.",
    sent: "Ваш запрос успешно отправлен.",
  },
}

async function sendEmail(input: { replyTo: string; subject: string; text: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? "info@unext.de"
  const from = process.env.CONTACT_FROM_EMAIL ?? "UNEXT Website <info@unext.de>"

  if (!apiKey) {
    return { ok: false, reason: "config" as const }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text,
    }),
  })

  if (!response.ok) {
    return { ok: false, reason: "send" as const }
  }

  return { ok: true, reason: "send" as const }
}

export async function sendContactMessage(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const locale = normalizeLocale(formData.get("locale")?.toString())
  const messages = actionMessages[locale]
  const result = validateContactForm(formData)

  if (!result.success) {
    return {
      status: "error",
      message: messages.invalid,
      fieldErrors: buildFieldErrors(result.error),
    }
  }

  const email = buildContactEmail(result.data)
  const sendResult = await sendEmail({
    replyTo: result.data.email,
    subject: email.subject,
    html: email.html,
    text: email.text,
  })

  if (!sendResult.ok) {
    return {
      status: "error",
      message: sendResult.reason === "config" ? messages.config : messages.failed,
      fieldErrors: {},
    }
  }

  return {
    status: "success",
    message: messages.sent,
    fieldErrors: {},
  }
}

export async function sendServiceInquiry(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const locale = normalizeLocale(formData.get("locale")?.toString())
  const messages = actionMessages[locale]
  const result = validateServiceInquiry(formData)

  if (!result.success) {
    return {
      status: "error",
      message: messages.invalid,
      fieldErrors: buildFieldErrors(result.error),
    }
  }

  const email = buildServiceInquiryEmail(result.data)
  const sendResult = await sendEmail({
    replyTo: result.data.email,
    subject: email.subject,
    html: email.html,
    text: email.text,
  })

  if (!sendResult.ok) {
    return {
      status: "error",
      message: sendResult.reason === "config" ? messages.config : messages.failed,
      fieldErrors: {},
    }
  }

  return {
    status: "success",
    message: messages.sent,
    fieldErrors: {},
  }
}
