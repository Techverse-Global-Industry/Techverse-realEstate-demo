"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { generalWhatsAppUrl } from "@/lib/utils"

export function WhatsAppButton() {
  const { language, t } = useLanguage()
  return <a className="whatsapp-float" href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer" aria-label={t.whatsapp.aria}><span className="whatsapp-tooltip">{t.whatsapp.tooltip}</span><MessageCircle size={24}/></a>
}
