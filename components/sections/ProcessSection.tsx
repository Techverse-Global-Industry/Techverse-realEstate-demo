"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"

gsap.registerPlugin(ScrollTrigger)

export function ProcessSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      gsap.to(".process-model", { x: () => Math.max(0, root.clientWidth - 160), rotateY: 360, ease: "none", scrollTrigger: { trigger: root, start: "top 70%", end: "bottom 60%", scrub: true } })
      gsap.fromTo(".process-progress", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: "none", scrollTrigger: { trigger: root, start: "top 70%", end: "bottom 60%", scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="section process-section section-dark">
      <div className="container-wide">
        <Reveal><p className="eyebrow eyebrow-light">{t.process.eyebrow}</p><h2 className="process-title">{t.process.title}</h2></Reveal>
        <div className="process-line"><div className="process-progress"/><div className="process-model" aria-hidden="true"><span/><span/><span/></div></div>
        <div className="process-steps">{t.process.steps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}</div>
      </div>
    </section>
  )
}
