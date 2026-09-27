"use client"

import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { translations } from "@/lib/translations"
import type { Language } from "@/lib/types"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (typeof translations)[Language]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "en" ? "fr" : "en"))
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t: translations[language] }),
    [language, setLanguage, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
