"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"
import { companyConfig } from "@/lib/config"
import { generalWhatsAppUrl } from "@/lib/utils"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("resize", closeOnResize)
    return () => window.removeEventListener("resize", closeOnResize)
  }, [])

  const links = [
    ["#home", t.nav.home],
    ["#properties", t.nav.properties],
    ["#services", t.nav.services],
    ["#about", t.nav.about],
    ["#investment", t.nav.investment],
    ["#contact", t.nav.contact],
  ] as const

  return (
    <header className={`navbar-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar container-wide" aria-label={t.a11y.primaryNav}>
        <a href="#home" className="brand" aria-label={`${companyConfig.name} home`}>
          <span className="brand-mark">RE</span>
          <span className="brand-name">{companyConfig.name}</span>
        </a>

        <div className="desktop-nav" aria-label="Main sections">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>

        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label={t.a11y.currentLanguage}>
            <button type="button" className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === "fr" ? "active" : ""} onClick={() => setLanguage("fr")} aria-pressed={language === "fr"}>FR</button>
          </div>
          <a className="nav-agent" href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer">
            {t.nav.agent}<ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button className="mobile-menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? t.a11y.closeMenu : t.a11y.menu} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.25 }}>
            {links.map(([href, label], index) => (
              <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                <span>{String(index + 1).padStart(2, "0")}</span>{label}
              </motion.a>
            ))}
            <a className="mobile-agent" href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer">{t.nav.agent}<ArrowUpRight size={18} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
