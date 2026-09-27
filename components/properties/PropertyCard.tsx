"use client"

import Image from "next/image"
import { useRef } from "react"
import { ArrowUpRight, Bath, BedDouble, MapPin, Maximize2 } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import type { Property } from "@/lib/types"
import { useLanguage } from "@/hooks/useLanguage"
import { propertyWhatsAppUrl } from "@/lib/utils"

export function PropertyCard({ property, index }: { property: Property; index: number }) {
  const { language, t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 20 })
  const sy = useSpring(y, { stiffness: 180, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5])

  return (
    <motion.article
      ref={ref}
      id={property.id}
      className="property-card"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={(event) => {
        const box = ref.current?.getBoundingClientRect()
        if (!box) return
        x.set((event.clientX - box.left) / box.width - 0.5)
        y.set((event.clientY - box.top) / box.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      data-cursor="VIEW"
    >
      <div className="property-card__image">
        <Image src={property.image} alt={property.imageAlt[language]} fill sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="property-card__topline">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="placeholder-pill">{t.properties.placeholder}</span>
        </div>
        <div className="property-card__location"><MapPin size={14} />{property.location}</div>
      </div>
      <div className="property-card__body">
        <div className="property-card__title"><div><p>{language === "fr" ? property.typeFr : property.type}</p><h3>{property.name}</h3></div><span className="card-arrow"><ArrowUpRight size={18} /></span></div>
        <p className="property-card__desc">{property.description[language]}</p>
        <div className="property-facts"><span><BedDouble size={15} />{property.bedrooms} {t.properties.beds}</span><span><Bath size={15} />{property.bathrooms} {t.properties.baths}</span><span><Maximize2 size={15} />{property.area}</span></div>
        <div className="property-card__footer"><div><span>{language === "fr" ? property.feature.fr : property.feature.en}</span><strong>{t.properties.price}</strong></div><a href={propertyWhatsAppUrl(property, language)} target="_blank" rel="noreferrer" className="mini-link">{t.properties.agent}<ArrowUpRight size={14} /></a></div>
      </div>
    </motion.article>
  )
}
