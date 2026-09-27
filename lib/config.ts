import type { CompanyConfig } from "./types"

export const companyConfig: CompanyConfig = {
  name: "[REAL ESTATE COMPANY]",
  whatsappNumber: "229XXXXXXXX",
  phone: "+229 XX XX XX XX",
  email: "hello@example.com",
  address: "[Office address]",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  instagram: "#",
  linkedin: "#",
}
