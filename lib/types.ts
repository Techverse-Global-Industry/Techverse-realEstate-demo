export type Language = "en" | "fr"
export type PropertyPurpose = "buy" | "rent" | "invest"
export type PropertyType = "Residence" | "Apartment" | "Villa" | "Development"
export type PropertyLocation = "Cotonou" | "Calavi"

export interface PropertyFeature {
  icon: "bed" | "bath" | "pool" | "terrace" | "garden" | "area"
  en: string
  fr: string
}

export interface Property {
  id: string
  name: string
  type: PropertyType
  typeFr: string
  location: PropertyLocation
  bedrooms: number
  bathrooms: number
  purpose: PropertyPurpose[]
  priceLabel: string
  area: string
  image: string
  imageAlt: { en: string; fr: string }
  description: { en: string; fr: string }
  feature: PropertyFeature
  available: boolean | null
}

export interface Testimonial {
  id: string
  quote: { en: string; fr: string }
  author: string
  role: { en: string; fr: string }
  placeholder: true
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  preferredLanguage: Language
  propertyInterest: string
  message: string
}

export interface CompanyConfig {
  name: string
  whatsappNumber: string
  phone: string
  email: string
  address: string
  siteUrl: string
  instagram: string
  linkedin: string
}

export type Translation = typeof import("./translations").translations.en
