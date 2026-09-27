"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function InvestmentSection() {
  const { t } = useLanguage()
  return (
    <section id="investment" className="section investment-section section-dark">
      <div className="investment-backdrop"><Image src="/images/real-estate/property-development.jpg" alt="Aerial property development landscape" fill sizes="100vw" /><div /></div>
      <div className="container-wide investment-content">
        <Reveal><SectionHeading light eyebrow={t.investment.eyebrow} title={t.investment.title} body={t.investment.body} /></Reveal>
        <div className="investment-layout">
          <Reveal className="investment-list">{t.investment.items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><ArrowUpRight size={17}/></div>)}</Reveal>
          <div className="investment-stats">{t.investment.stats.map((stat, index) => <Reveal key={stat.label} delay={index * 0.08}><article><strong>{stat.value}</strong><span>{stat.label}</span></article></Reveal>)}</div>
        </div>
        <p className="investment-disclaimer">{t.investment.disclaimer}</p>
      </div>
    </section>
  )
}
