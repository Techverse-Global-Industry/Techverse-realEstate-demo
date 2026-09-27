"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { properties } from "@/lib/data"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { PropertyCard } from "./PropertyCard"

export function FeaturedProperties() {
  const { t } = useLanguage()
  return (
    <section id="properties" className="section section-properties">
      <div className="container-wide">
        <Reveal><SectionHeading eyebrow={t.properties.eyebrow} title={t.properties.title} body={t.properties.intro} /></Reveal>
        <div className="property-grid">{properties.map((property, index) => <Reveal key={property.id} delay={index * 0.08}><PropertyCard property={property} index={index} /></Reveal>)}</div>
      </div>
    </section>
  )
}
