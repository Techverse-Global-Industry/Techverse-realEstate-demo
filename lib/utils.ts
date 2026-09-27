import { companyConfig } from "./config"
import type { Language, Property } from "./types"

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export function propertyWhatsAppUrl(property: Property, language: Language) {
  const message =
    language === "fr"
      ? `Bonjour, je suis intéressé(e) par ${property.name}. J'aimerais recevoir plus d'informations.`
      : `Hello, I am interested in ${property.name}. I would like to receive more information.`
  return `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function generalWhatsAppUrl(language: Language) {
  const message =
    language === "fr"
      ? "Bonjour, j’aimerais échanger avec un agent au sujet de vos services immobiliers."
      : "Hello, I would like to speak with an agent about your real-estate services."
  return `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
