"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"

export function InteriorSection() {
  const { t } = useLanguage()
  return (
    <section className="section interior-section section-dark">
      <div className="container-wide interior-grid">
        <Reveal className="interior-media"><Image src="/images/real-estate/luxury-lobby.jpg" alt="Modern luxury lobby interior with warm material palette" fill sizes="(max-width: 900px) 100vw, 52vw" /><span className="media-index light">03 / 05</span></Reveal>
        <Reveal className="interior-copy" delay={0.08}><p className="eyebrow eyebrow-light">{t.interior.eyebrow}</p><h2>{t.interior.title}</h2><p>{t.interior.body}</p><div className="interior-list">{t.interior.items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><Check size={16}/></div>)}</div></Reveal>
      </div>
    </section>
  )
}
