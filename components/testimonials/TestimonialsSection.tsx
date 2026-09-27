"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { testimonials } from "@/lib/data"
import { useLanguage } from "@/hooks/useLanguage"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function TestimonialsSection() {
  const { language, t } = useLanguage()
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]
  const move = (direction: number) => setActive((current) => (current + direction + testimonials.length) % testimonials.length)

  return (
    <section className="section testimonial-section">
      <div className="container-wide">
        <Reveal><SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} body={t.testimonials.note} /></Reveal>
        <div className="testimonial-stage"><Quote size={54} strokeWidth={1}/><AnimatePresence mode="wait"><motion.blockquote key={`${testimonial.id}-${language}`} initial={{ opacity: 0, y: 20, rotateX: -8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: -15, rotateX: 8 }} transition={{ duration: 0.45 }}><span className="placeholder-pill">{t.testimonials.placeholder}</span><p>“{testimonial.quote[language]}”</p><footer><strong>{testimonial.author}</strong><span>{testimonial.role[language]}</span></footer></motion.blockquote></AnimatePresence><div className="testimonial-controls"><button type="button" onClick={() => move(-1)} aria-label={t.testimonials.previous}><ArrowLeft/></button><span>{String(active + 1).padStart(2,"0")} / {String(testimonials.length).padStart(2,"0")}</span><button type="button" onClick={() => move(1)} aria-label={t.testimonials.next}><ArrowRight/></button></div></div>
      </div>
    </section>
  )
}
