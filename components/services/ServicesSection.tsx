"use client"

import { ArrowUpRight, Building2, House, KeyRound, Landmark, ScanSearch, Waypoints } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

const icons = [House, KeyRound, Building2, Landmark, Waypoints, ScanSearch]

export function ServicesSection() {
  const { t } = useLanguage()
  return (
    <section id="services" className="section services-section">
      <div className="container-wide">
        <Reveal><SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.body} /></Reveal>
        <div className="services-grid">{t.services.items.map((service, index) => {
          const Icon = icons[index]
          return <Reveal key={service.title} delay={index * 0.04}><article className="service-card" data-cursor="EXPLORE"><div className="service-card__top"><span>0{index + 1}</span><Icon size={23}/></div><h3>{service.title}</h3><p>{service.body}</p><ArrowUpRight className="service-arrow" size={20}/></article></Reveal>
        })}</div>
      </div>
    </section>
  )
}
