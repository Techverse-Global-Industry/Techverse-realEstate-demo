"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"

export function FAQSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section faq-section">
      <div className="container-wide faq-grid">
        <Reveal className="faq-intro"><p className="eyebrow">{t.faq.eyebrow}</p><h2>{t.faq.title}</h2></Reveal>
        <div className="faq-list">{t.faq.items.map((item, index) => {
          const expanded = open === index
          return <article key={item.q} className={expanded ? "is-open" : ""}><button type="button" onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded}><span>0{index + 1}</span><strong>{item.q}</strong><Plus className="faq-plus"/></button><AnimatePresence initial={false}>{expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}><p>{item.a}</p></motion.div>}</AnimatePresence></article>
        })}</div>
      </div>
    </section>
  )
}
