"use client"

import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"
import { generalWhatsAppUrl } from "@/lib/utils"
import { CinematicBackdrop } from "./CinematicBackdrop"

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false, loading: () => <div className="hero-scene-loading" /> })

export function Hero() {
  const { language, t } = useLanguage()
  return (
    <section id="home" className="hero section-dark">
      <CinematicBackdrop />
      <div className="hero-3d-layer"><HeroScene /></div>
      <div className="hero-noise" aria-hidden="true" />
      <div className="container-wide hero-content">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <p className="eyebrow eyebrow-light">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#properties" className="button button-light" data-cursor="EXPLORE">{t.hero.explore}<ArrowDown size={17} /></a>
            <a href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer" className="button button-ghost-light">{t.hero.agent}<ArrowUpRight size={17} /></a>
          </div>
        </motion.div>

        <div className="hero-bottom-row">
          <div className="hero-reel-label"><span className="reel-icon"><Play size={13} fill="currentColor" /></span><span>{t.hero.reel}</span></div>
          <div className="hero-mini-stats">
            <div><span>01</span><p>{t.hero.stat1}</p></div>
            <div><span>02</span><p>{t.hero.stat2}</p></div>
          </div>
          <a href="#search" className="hero-scroll" aria-label={t.a11y.scrollNext}><ArrowDown /></a>
        </div>
      </div>
    </section>
  )
}
