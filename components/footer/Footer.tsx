"use client"

import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { companyConfig } from "@/lib/config"
import { generalWhatsAppUrl } from "@/lib/utils"

export function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const links = [["#properties",t.footer.properties],["#services",t.footer.services],["#about",t.footer.about],["#investment",t.footer.investment],["#contact",t.footer.contact]] as const
  return (
    <footer className="footer section-dark"><div className="container-wide"><div className="footer-top"><a href="#home" className="brand brand--footer"><span className="brand-mark">RE</span><span className="brand-name">{companyConfig.name}</span></a><p>{t.footer.statement}</p><a href={generalWhatsAppUrl(language)} target="_blank" rel="noreferrer" className="footer-agent">{t.footer.whatsapp}<ArrowUpRight size={17}/></a></div><div className="footer-columns"><div><span>{t.footer.navigation}</span>{links.map(([href,label]) => <a key={href} href={href}>{label}</a>)}</div><div><span>{t.footer.social}</span><a href={companyConfig.instagram}>Instagram</a><a href={companyConfig.linkedin}>LinkedIn</a></div><div><span>{t.footer.language}</span><button type="button" onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>EN</button><button type="button" onClick={() => setLanguage("fr")} className={language === "fr" ? "active" : ""}>FR</button></div><div><span>{t.footer.legal}</span><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.terms}</a></div></div><div className="footer-bottom"><p>{t.footer.placeholder}</p><span>© {new Date().getFullYear()} {companyConfig.name}. {t.footer.rights}</span></div></div></footer>
  )
}
