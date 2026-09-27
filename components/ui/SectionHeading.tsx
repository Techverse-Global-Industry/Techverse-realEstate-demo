import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({ eyebrow, title, body, light = false, className, aside }: { eyebrow: string; title: string; body?: string; light?: boolean; className?: string; aside?: ReactNode }) {
  return (
    <div className={cn("section-heading", light && "section-heading--light", className)}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-heading__aside">
        {body && <p>{body}</p>}
        {aside}
      </div>
    </div>
  )
}
