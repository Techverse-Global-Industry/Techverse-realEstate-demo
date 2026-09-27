"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const previous = history.scrollRestoration
      history.scrollRestoration = "manual"
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      return () => {
        history.scrollRestoration = previous
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    return undefined
  }, [])

  return null
}
