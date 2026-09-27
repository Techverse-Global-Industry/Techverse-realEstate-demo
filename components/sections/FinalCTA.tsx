"use client"

import Image from "next/image"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { generalWhatsAppUrl } from "@/lib/utils"
import { Reveal } from "@/components/ui/Reveal"

export function FinalCTA() {
  const { language, t } = useLanguage()
  return (
    <section className="final-cta section-dark"><Image src="/images/real-estate/modern-building.jpg" alt="Modern architecture behind the final call to action" fill sizes="100vw" /><div className="final-cta-overlay"/><div className="final-architecture" aria-hidden="true"><span/><span/><span/></div><div className="container-wide final-cta-content"><Reveal><p className="eyebrow eyebrow-light">{t.finalCta.eyebrow}</p><h2>{t.finalCta.title}</h2><p>{t.finalCta.body}</p><div className="hero-actions"><a className="button button-light" href="#properties">{t.finalCta.explore}<ArrowUpRight size={17}/></a><a className="button button-ghost-light" href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer">{t.finalCta.agent}<ArrowUpRight size={17}/></a><a className="button button-ghost-light button-icon" href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.finalCta.whatsapp}</a></div></Reveal></div></section>
  )
}
