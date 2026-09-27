"use client"

import dynamic from "next/dynamic"
import { ArrowUpRight, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { properties } from "@/lib/data"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Reveal } from "@/components/ui/Reveal"

const CityMap = dynamic(() => import("@/components/three/CityMap"), { ssr: false, loading: () => <div className="city-canvas city-canvas--loading" /> })

export function CitySection() {
  const { language, t } = useLanguage()
  return (
    <section className="section city-section section-dark">
      <div className="container-wide">
        <Reveal><SectionHeading light eyebrow={t.map.eyebrow} title={t.map.title} body={t.map.body} /></Reveal>
        <div className="city-stage"><CityMap language={language} /><div className="city-property-list">{properties.map((property, index) => <article key={property.id}><span className="pin-dot"><MapPin size={14}/></span><div><small>0{index + 1} · {language === "fr" ? property.typeFr : property.type}</small><strong>{property.name}</strong><p>{t.map.availability}: {t.map.availabilityValue}</p></div><a href={`#${property.id}`} aria-label={`${t.map.view}: ${property.name}`}><ArrowUpRight size={16}/></a></article>)}</div><span className="city-note">{t.map.note}</span></div>
      </div>
    </section>
  )
}
