"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/useLanguage"

const frames = [
  "/images/real-estate/modern-building.jpg",
  "/images/real-estate/skyscrapers.jpg",
  "/images/real-estate/luxury-lobby.jpg",
  "/images/real-estate/modern-city.jpg",
  "/images/real-estate/property-development.jpg",
]

export function CinematicBackdrop() {
  const { t } = useLanguage()
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const interval = window.setInterval(() => setFrame((current) => (current + 1) % frames.length), 2600)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="cinematic-backdrop" aria-hidden="true">
      {frames.map((src, index) => (
        <div key={src} className={`cinematic-frame ${frame === index ? "is-visible" : ""}`}>
          <Image src={src} alt="" fill priority={index === 0} sizes="100vw" className="cinematic-image" />
        </div>
      ))}
      <div className="cinematic-vignette" />
      <div className="cinematic-caption">
        <span>{String(frame + 1).padStart(2, "0")}</span>
        <p>{t.hero.reelScenes[frame]}</p>
      </div>
    </div>
  )
}
