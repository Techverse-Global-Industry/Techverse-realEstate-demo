"use client"

import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export function CustomCursor() {
  const disabled = useMediaQuery("(hover: none), (pointer: coarse), (max-width: 767px)")
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState("")
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (disabled) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let rafId = 0

    const move = (event: MouseEvent) => {
      x = event.clientX
      y = event.clientY
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const enter = (event: Event) => {
      const target = event.currentTarget as HTMLElement
      setActive(true)
      setLabel(target.dataset.cursor ?? "")
    }

    const leave = () => {
      setActive(false)
      setLabel("")
    }

    const animate = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", move)
    const interactive = Array.from(document.querySelectorAll<HTMLElement>("a, button, input, select, textarea, [data-cursor]"))
    interactive.forEach((element) => {
      element.addEventListener("mouseenter", enter)
      element.addEventListener("mouseleave", leave)
    })
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafId)
      interactive.forEach((element) => {
        element.removeEventListener("mouseenter", enter)
        element.removeEventListener("mouseleave", leave)
      })
    }
  }, [disabled])

  if (disabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${active ? "is-active" : ""}`} aria-hidden="true">
        {label && <span>{label}</span>}
      </div>
    </>
  )
}
