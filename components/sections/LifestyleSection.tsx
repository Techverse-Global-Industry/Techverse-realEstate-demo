"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"

gsap.registerPlugin(ScrollTrigger)

export function LifestyleSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 900) return
    const track = root.querySelector<HTMLElement>(".lifestyle-track")
    if (!track) return
    const ctx = gsap.context(() => {
      gsap.to(track, { x: () => -(track.scrollWidth - window.innerWidth + 48), ease: "none", scrollTrigger: { trigger: root, start: "top top", end: () => `+=${track.scrollWidth}`, scrub: true, pin: true, invalidateOnRefresh: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="lifestyle-section">
      <div className="lifestyle-track">
        <div className="lifestyle-intro"><Reveal><p className="eyebrow">{t.lifestyle.eyebrow}</p><h2>{t.lifestyle.title}</h2><p>{t.lifestyle.body}</p></Reveal></div>
        <div className="lifestyle-image-card" data-cursor="EXPLORE"><Image src="/images/real-estate/modern-city.jpg" alt="Modern residential architecture and palms" fill sizes="80vw" /><span className="media-index light">04 / 05</span></div>
        {t.lifestyle.cards.map((card, index) => <article key={card.title} className="lifestyle-text-card"><span>0{index + 1}</span><h3>{card.title}</h3><p>{card.body}</p></article>)}
      </div>
    </section>
  )
}
