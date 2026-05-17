import { z } from "zod"

export type ContactActionStatus = "idle" | "success" | "error"

export type ContactActionState = {
  status: ContactActionStatus
  message: string
  fieldErrors: Record<string, string>
}

export const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
}

export type ContactFormValues = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export type ServiceInquiryValues = {
  service: string
  name: string
  phone: string
  email: string
  vehicle: string
  subject: string
  date: string
  message: string
}

const requiredText = z.string().trim().min(1)
const optionalText = z.string().trim()

const contactFormSchema = z.object({
  name: requiredText.max(120),
  phone: optionalText.max(60),
  email: requiredText.email().max(180),
  subject: requiredText.max(160),
  message: requiredText.max(4000),
})

const serviceInquirySchema = z.object({
  service: requiredText.max(160),
  name: requiredText.max(120),
  phone: requiredText.max(60),
  email: requiredText.email().max(180),
  vehicle: optionalText.max(160),
  subject: optionalText.max(160),
  date: optionalText.max(40),
  message: optionalText.max(4000),
})

export function readFormText(formData: FormData, key: string) {
  const value = formData.get(key)

  return typeof value === "string" ? value : ""
}

export function validateContactForm(formData: FormData) {
  return contactFormSchema.safeParse({
    name: readFormText(formData, "name"),
    phone: readFormText(formData, "phone"),
    email: readFormText(formData, "email"),
    subject: readFormText(formData, "subject"),
    message: readFormText(formData, "message"),
  })
}

export function validateServiceInquiry(formData: FormData) {
  return serviceInquirySchema.safeParse({
    service: readFormText(formData, "service"),
    name: readFormText(formData, "name"),
    phone: readFormText(formData, "phone"),
    email: readFormText(formData, "email"),
    vehicle: readFormText(formData, "vehicle"),
    subject: readFormText(formData, "subject"),
    date: readFormText(formData, "date"),
    message: readFormText(formData, "message"),
  })
}

export function buildFieldErrors(error: z.ZodError) {
  const fieldErrors: Record<string, string> = {}

  for (const issue of error.issues) {
    const fieldName = issue.path[0]

    if (typeof fieldName === "string" && !fieldErrors[fieldName]) {
      fieldErrors[fieldName] = issue.message
    }
  }

  return fieldErrors
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function renderEmailParagraph(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 130px; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 10px 0; color: #111827; font-size: 15px; font-weight: 600; vertical-align: top;">${escapeHtml(value)}</td>
    </tr>
  `
}

function renderMessageBlock(value: string) {
  return `
    <div style="margin-top: 24px;">
      <div style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Nachricht</div>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; color: #111827; font-size: 15px; line-height: 1.65; padding: 18px 20px;">
        ${escapeHtml(value).replaceAll("\n", "<br />")}
      </div>
    </div>
  `
}

function renderEmailHtml(input: { eyebrow: string; title: string; rows: string[]; message: string }) {
  return `
    <!doctype html>
    <html>
      <body style="margin: 0; padding: 0; background: #f3f4f6; font-family: Arial, Helvetica, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
          ${escapeHtml(input.title)}
        </div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #f3f4f6; padding: 32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 18px; max-width: 640px; overflow: hidden;">
                <tr>
                  <td style="background: #050505; padding: 26px 30px;">
                    <div style="color: #ef4444; font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;">${escapeHtml(input.eyebrow)}</div>
                    <h1 style="color: #ffffff; font-size: 24px; line-height: 1.25; margin: 10px 0 0;">${escapeHtml(input.title)}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 28px 30px 32px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      ${input.rows.join("")}
                    </table>
                    ${renderMessageBlock(input.message)}
                    <p style="border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; line-height: 1.6; margin: 26px 0 0; padding-top: 16px;">
                      Antworten auf diese E-Mail gehen an die im Formular angegebene Kundenadresse.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

export function buildContactEmail(values: ContactFormValues) {
  return {
    subject: `Kontaktformular: ${values.subject}`,
    text: [
      "Neue Nachricht über das Kontaktformular.",
      "",
      `Name: ${values.name}`,
      `Telefon: ${values.phone || "Nicht angegeben"}`,
      `E-Mail: ${values.email}`,
      `Betreff: ${values.subject}`,
      "",
      "Nachricht:",
      values.message,
    ].join("\n"),
    html: renderEmailHtml({
      eyebrow: "Kontaktformular",
      title: "Neue Nachricht über das Kontaktformular",
      rows: [
        renderEmailParagraph("Name", values.name),
        renderEmailParagraph("Telefon", values.phone || "Nicht angegeben"),
        renderEmailParagraph("E-Mail", values.email),
        renderEmailParagraph("Betreff", values.subject),
      ],
      message: values.message,
    }),
  }
}

export function buildServiceInquiryEmail(values: ServiceInquiryValues) {
  return {
    subject: `Service-Anfrage: ${values.service}`,
    text: [
      "Neue Anfrage über eine Leistungsseite.",
      "",
      `Leistung: ${values.service}`,
      `Name: ${values.name}`,
      `Telefon: ${values.phone}`,
      `E-Mail: ${values.email}`,
      `Fahrzeug: ${values.vehicle || "Nicht angegeben"}`,
      `Betreff: ${values.subject || "Nicht angegeben"}`,
      `Wunschtermin: ${values.date || "Nicht angegeben"}`,
      "",
      "Nachricht:",
      values.message || "Nicht angegeben",
    ].join("\n"),
    html: renderEmailHtml({
      eyebrow: "Service-Anfrage",
      title: `Neue Anfrage: ${values.service}`,
      rows: [
        renderEmailParagraph("Leistung", values.service),
        renderEmailParagraph("Name", values.name),
        renderEmailParagraph("Telefon", values.phone),
        renderEmailParagraph("E-Mail", values.email),
        renderEmailParagraph("Fahrzeug", values.vehicle || "Nicht angegeben"),
        renderEmailParagraph("Betreff", values.subject || "Nicht angegeben"),
        renderEmailParagraph("Wunschtermin", values.date || "Nicht angegeben"),
      ],
      message: values.message || "Nicht angegeben",
    }),
  }
}
