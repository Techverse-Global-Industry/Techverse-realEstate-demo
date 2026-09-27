"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { properties } from "@/lib/data"
import type { PropertyPurpose } from "@/lib/types"
import { useLanguage } from "@/hooks/useLanguage"

export function PropertySearch() {
  const { language, t } = useLanguage()
  const [location, setLocation] = useState("all")
  const [type, setType] = useState("all")
  const [bedrooms, setBedrooms] = useState("all")
  const [purpose, setPurpose] = useState<PropertyPurpose>("buy")
  const [submitted, setSubmitted] = useState(false)

  const matches = useMemo(() => properties.filter((property) => {
    const locationMatch = location === "all" || property.location === location
    const typeMatch = type === "all" || property.type === type
    const bedroomMatch = bedrooms === "all" || property.bedrooms >= Number(bedrooms)
    const purposeMatch = property.purpose.includes(purpose)
    return locationMatch && typeMatch && bedroomMatch && purposeMatch
  }), [location, type, bedrooms, purpose])

  return (
    <section id="search" className="search-wrap container-wide" aria-labelledby="search-title">
      <div className="search-panel glass-panel">
        <div className="search-heading">
          <span className="search-icon"><SlidersHorizontal size={17} /></span>
          <div><p className="eyebrow" id="search-title">{t.search.eyebrow}</p><p className="search-note">{t.search.note}</p></div>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="search-grid">
          <label><span>{t.search.location}</span><select value={location} onChange={(event) => setLocation(event.target.value)}><option value="all">{t.search.allLocations}</option><option value="Cotonou">Cotonou</option><option value="Calavi">Calavi</option></select></label>
          <label><span>{t.search.type}</span><select value={type} onChange={(event) => setType(event.target.value)}><option value="all">{t.search.allTypes}</option><option value="Residence">{language === "fr" ? "Résidence" : "Residence"}</option><option value="Apartment">{language === "fr" ? "Appartement" : "Apartment"}</option><option value="Villa">Villa</option></select></label>
          <label><span>{t.search.price}</span><select disabled aria-disabled="true"><option>{t.search.anyPrice}</option></select></label>
          <label><span>{t.search.bedrooms}</span><select value={bedrooms} onChange={(event) => setBedrooms(event.target.value)}><option value="all">{t.search.anyBedrooms}</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option><option value="5">5+</option></select></label>
          <div className="purpose-field"><span>{t.search.purpose}</span><div className="purpose-buttons">{(["buy", "rent", "invest"] as const).map((item) => <button key={item} type="button" className={purpose === item ? "active" : ""} onClick={() => setPurpose(item)}>{t.search[item]}</button>)}</div></div>
          <button type="submit" className="search-button"><Search size={18} />{t.search.button}</button>
        </form>
        {submitted && <div className="search-result" role="status">{matches.length > 0 ? <><strong>{matches.length}</strong> {t.search.results}: {matches.map((property) => property.name).join(" · ")}</> : t.search.none}</div>}
      </div>
    </section>
  )
}
