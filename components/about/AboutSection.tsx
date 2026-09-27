"use client"

import Image from "next/image"
import { ArrowDownRight } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"

export function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="about" className="section about-section">
      <div className="container-wide about-grid">
        <Reveal className="about-heading"><p className="eyebrow">{t.about.eyebrow}</p><h2>{t.about.title}</h2><p>{t.about.body}</p><small>{t.about.note}</small></Reveal>
        <Reveal className="about-media" delay={0.05}><Image src="/images/real-estate/modern-building.jpg" alt="Contemporary architecture used as a company-story visual" fill sizes="(max-width: 900px) 100vw, 48vw" /><div className="about-media-label"><span>Editorial / 01</span><ArrowDownRight/></div></Reveal>
        <div className="about-pillars">{t.about.pillars.map((pillar, index) => <Reveal key={pillar} delay={index * 0.04}><div><span>0{index + 1}</span><strong>{pillar}</strong></div></Reveal>)}</div>
      </div>
    </section>
  )
}
