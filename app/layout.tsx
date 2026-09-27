import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/components/language/LanguageProvider"
import { companyConfig } from "@/lib/config"

export const metadata: Metadata = {
  metadataBase: new URL(companyConfig.siteUrl),
  title: `Premium Real Estate & Property Services | ${companyConfig.name}`,
  description: "A premium bilingual real-estate experience for properties, architecture, services and investment opportunities.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Premium Real Estate & Property Services | ${companyConfig.name}`,
    description: "Exceptional properties, distinctive architecture and property opportunities presented through a cinematic digital experience.",
    type: "website",
    url: "/",
    images: [{ url: "/images/real-estate/modern-building.jpg", width: 1600, height: 1000, alt: "Modern architectural property presentation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Premium Real Estate & Property Services | ${companyConfig.name}`,
    description: "A cinematic bilingual property and architecture experience.",
    images: ["/images/real-estate/modern-building.jpg"],
  },
  icons: { icon: "/icon.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
