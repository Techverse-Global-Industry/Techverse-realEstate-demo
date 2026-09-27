"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"

gsap.registerPlugin(ScrollTrigger)

export function ArchitectureSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      gsap.to(".architecture-image", { yPercent: -13, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true } })
      gsap.fromTo(".architecture-line", { scaleY: 0 }, { scaleY: 1, transformOrigin: "top", stagger: 0.08, duration: 1.1, scrollTrigger: { trigger: root, start: "top 65%" } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="section architecture-section">
      <div className="container-wide architecture-grid">
        <Reveal className="architecture-copy"><p className="eyebrow">{t.architecture.eyebrow}</p><h2>{t.architecture.title}</h2><p>{t.architecture.body}</p><span className="technical-label">{t.architecture.label}</span></Reveal>
        <div className="architecture-media" data-cursor="EXPLORE">
          <Image className="architecture-image" src="/images/real-estate/skyscrapers.jpg" alt="Upward architectural perspective between modern towers" fill sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="architecture-lines" aria-hidden="true"><span className="architecture-line"/><span className="architecture-line"/><span className="architecture-line"/><span className="architecture-line"/></div>
          <span className="media-index">02 / 05</span>
        </div>
      </div>
    </section>
  )
}
