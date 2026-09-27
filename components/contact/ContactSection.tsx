"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { companyConfig } from "@/lib/config"
import { properties } from "@/lib/data"
import { generalWhatsAppUrl } from "@/lib/utils"
import type { ContactForm } from "@/lib/types"
import { Reveal } from "@/components/ui/Reveal"

const initialForm: ContactForm = { name: "", email: "", phone: "", preferredLanguage: "en", propertyInterest: "", message: "" }

type FieldErrors = Partial<Record<keyof ContactForm, string>>

export function ContactSection() {
  const { language, t } = useLanguage()
  const [form, setForm] = useState<ContactForm>({ ...initialForm, preferredLanguage: language })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const update = <K extends keyof ContactForm>(field: K, value: ContactForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const next: FieldErrors = {}
    if (!form.name.trim()) next.name = t.contact.requiredName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.contact.invalidEmail
    if (!form.phone.trim()) next.phone = t.contact.requiredPhone
    if (!form.message.trim()) next.message = t.contact.requiredMessage
    return next
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus("error")
      return
    }
    setStatus("loading")
    window.setTimeout(() => setStatus("success"), 550)
  }

  return (
    <section id="contact" className="section contact-section section-dark">
      <div className="container-wide contact-grid">
        <Reveal className="contact-copy"><p className="eyebrow eyebrow-light">{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p>{t.contact.body}</p><div className="contact-methods"><a href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WhatsApp</small><strong>{t.contact.chat}</strong></span><ArrowUpRight/></a><a href={`tel:${companyConfig.phone.replace(/\s/g, "")}`}><Phone/><span><small>{t.contact.phone}</small><strong>{companyConfig.phone}</strong></span><ArrowUpRight/></a><a href={`mailto:${companyConfig.email}`}><Mail/><span><small>{t.contact.email}</small><strong>{companyConfig.email}</strong></span><ArrowUpRight/></a></div></Reveal>
        <Reveal delay={0.06}><form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row"><label><span>{t.contact.name}</span><input value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} />{errors.name && <em>{errors.name}</em>}</label><label><span>{t.contact.email}</span><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} />{errors.email && <em>{errors.email}</em>}</label></div>
          <div className="form-row"><label><span>{t.contact.phone}</span><input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <em>{errors.phone}</em>}</label><label><span>{t.contact.preferredLanguage}</span><select value={form.preferredLanguage} onChange={(e) => update("preferredLanguage", e.target.value as ContactForm["preferredLanguage"])}><option value="en">English</option><option value="fr">Français</option></select></label></div>
          <label><span>{t.contact.propertyInterest}</span><select value={form.propertyInterest} onChange={(e) => update("propertyInterest", e.target.value)}><option value="">—</option>{properties.map((property) => <option key={property.id} value={property.name}>{property.name}</option>)}</select></label>
          <label><span>{t.contact.message}</span><textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} />{errors.message && <em>{errors.message}</em>}</label>
          <button type="submit" className="button button-light" disabled={status === "loading"}>{status === "loading" ? t.contact.sending : t.contact.send}<ArrowUpRight size={17}/></button>
          <div className={`form-status form-status--${status}`} aria-live="polite">{status === "success" ? t.contact.success : status === "error" ? t.contact.error : t.contact.backendNote}</div>
        </form></Reveal>
      </div>
    </section>
  )
}
