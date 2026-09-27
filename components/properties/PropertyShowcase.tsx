"use client"

import Image from "next/image"
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/hooks/useLanguage"
import { properties } from "@/lib/data"
import { propertyWhatsAppUrl } from "@/lib/utils"
import { Reveal } from "@/components/ui/Reveal"

gsap.registerPlugin(ScrollTrigger)

export function PropertyShowcase() {
  const { language, t } = useLanguage()
  const property = properties[0]
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      gsap.to(".showcase-image", { yPercent: -8, scale: 1.05, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true } })
      gsap.from(".showcase-float", { y: 50, opacity: 0, stagger: 0.08, scrollTrigger: { trigger: root, start: "top 60%" }, duration: 0.9, ease: "power3.out" })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="section showcase-section section-dark">
      <div className="container-wide">
        <Reveal><div className="showcase-title"><p className="eyebrow eyebrow-light">{t.showcase.eyebrow}</p><h2>{t.showcase.title}</h2><p>{t.showcase.body}</p></div></Reveal>
        <div className="showcase-frame">
          <div className="showcase-image-wrap" data-cursor="EXPLORE"><Image className="showcase-image" src={property.image} alt={property.imageAlt[language]} fill sizes="100vw" /></div>
          <div className="floorplan-lines" aria-hidden="true"><span/><span/><span/><span/></div>
          <div className="showcase-float showcase-card showcase-card--name"><small>{language === "fr" ? property.typeFr : property.type}</small><strong>{property.name}</strong></div>
          <div className="showcase-float showcase-card showcase-card--place"><MapPin size={15}/><span>{t.showcase.location}</span><strong>{property.location}</strong></div>
          <div className="showcase-float showcase-card showcase-card--area"><Maximize2 size={15}/><span>{t.showcase.area}</span><strong>{property.area}</strong></div>
          <div className="showcase-float showcase-card showcase-card--price"><span>{t.showcase.price}</span><strong>{t.properties.price}</strong><a href={propertyWhatsAppUrl(property, language)} target="_blank" rel="noreferrer">{t.properties.agent}<ArrowUpRight size={14}/></a></div>
          <div className="showcase-floorplan-label">{t.showcase.floorplan}</div>
        </div>
      </div>
    </section>
  )
}
