import type { Property, Testimonial } from "./types"

export const properties: Property[] = [
  {
    id: "meridian-residence",
    name: "The Meridian Residence",
    type: "Residence",
    typeFr: "Résidence",
    location: "Cotonou",
    bedrooms: 4,
    bathrooms: 3,
    purpose: ["buy", "invest"],
    priceLabel: "Price on request",
    area: "[000] m²",
    image: "/images/real-estate/modern-building.jpg",
    imageAlt: {
      en: "Contemporary multi-storey residential architecture",
      fr: "Architecture résidentielle contemporaine à plusieurs niveaux",
    },
    description: {
      en: "A fictional showcase residence designed to demonstrate the property experience.",
      fr: "Une résidence fictive conçue pour illustrer l’expérience immobilière.",
    },
    feature: { icon: "pool", en: "Private Pool", fr: "Piscine privée" },
    available: null,
  },
  {
    id: "palm-heights",
    name: "Palm Heights",
    type: "Apartment",
    typeFr: "Appartement",
    location: "Cotonou",
    bedrooms: 3,
    bathrooms: 3,
    purpose: ["buy", "rent"],
    priceLabel: "Price on request",
    area: "[000] m²",
    image: "/images/real-estate/modern-city.jpg",
    imageAlt: {
      en: "Modern city residences framed by palm trees",
      fr: "Résidences urbaines modernes bordées de palmiers",
    },
    description: {
      en: "A fictional urban residence concept balancing privacy, outlook and city access.",
      fr: "Un concept fictif de résidence urbaine conciliant intimité, vue et accès à la ville.",
    },
    feature: { icon: "terrace", en: "Rooftop Terrace", fr: "Terrasse panoramique" },
    available: null,
  },
  {
    id: "horizon-villas",
    name: "Horizon Villas",
    type: "Villa",
    typeFr: "Villa",
    location: "Calavi",
    bedrooms: 5,
    bathrooms: 4,
    purpose: ["buy", "invest"],
    priceLabel: "Price on request",
    area: "[000] m²",
    image: "/images/real-estate/property-development.jpg",
    imageAlt: {
      en: "Aerial view of an urban property development landscape",
      fr: "Vue aérienne d’un paysage de développement immobilier urbain",
    },
    description: {
      en: "A fictional private-villa development concept with generous outdoor space.",
      fr: "Un concept fictif de villas privées offrant de généreux espaces extérieurs.",
    },
    feature: { icon: "garden", en: "Garden", fr: "Jardin" },
    available: null,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote: {
      en: "Placeholder testimonial — replace this copy with an approved, verifiable client statement.",
      fr: "Témoignage fictif — remplacez ce texte par un avis client approuvé et vérifiable.",
    },
    author: "[Client name]",
    role: { en: "[Client profile]", fr: "[Profil client]" },
    placeholder: true,
  },
  {
    id: "placeholder-2",
    quote: {
      en: "Placeholder testimonial — this layout is ready for real feedback once supplied.",
      fr: "Témoignage fictif — cette mise en page est prête à accueillir de vrais retours.",
    },
    author: "[Client name]",
    role: { en: "[Client profile]", fr: "[Profil client]" },
    placeholder: true,
  },
  {
    id: "placeholder-3",
    quote: {
      en: "Placeholder testimonial — no real client experience is implied by this sample content.",
      fr: "Témoignage fictif — ce contenu d’exemple ne prétend décrire aucune expérience client réelle.",
    },
    author: "[Client name]",
    role: { en: "[Client profile]", fr: "[Profil client]" },
    placeholder: true,
  },
]
