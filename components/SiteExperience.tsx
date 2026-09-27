"use client"

import { useLenis } from "@/hooks/useLenis"
import { Navbar } from "@/components/navbar/Navbar"
import { Hero } from "@/components/hero/Hero"
import { PropertySearch } from "@/components/search/PropertySearch"
import { FeaturedProperties } from "@/components/properties/FeaturedProperties"
import { PropertyShowcase } from "@/components/properties/PropertyShowcase"
import { ArchitectureSection } from "@/components/sections/ArchitectureSection"
import { InteriorSection } from "@/components/sections/InteriorSection"
import { LifestyleSection } from "@/components/sections/LifestyleSection"
import { InvestmentSection } from "@/components/investment/InvestmentSection"
import { CitySection } from "@/components/sections/CitySection"
import { ServicesSection } from "@/components/services/ServicesSection"
import { AboutSection } from "@/components/about/AboutSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection"
import { FAQSection } from "@/components/faq/FAQSection"
import { ContactSection } from "@/components/contact/ContactSection"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/footer/Footer"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { useLanguage } from "@/hooks/useLanguage"

export function SiteExperience() {
  useLenis()
  const { t } = useLanguage()

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <a className="skip-link" href="#main-content">{t.a11y.skip}</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PropertySearch />
        <FeaturedProperties />
        <PropertyShowcase />
        <ArchitectureSection />
        <InteriorSection />
        <LifestyleSection />
        <InvestmentSection />
        <CitySection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
