import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const root = path.join(process.cwd(), "public", "images", "real-estate")
await mkdir(root, { recursive: true })

const assets = [
  {
    file: "modern-building.jpg",
    source: "https://unsplash.com/photos/white-concrete-building-near-road-during-daytime-pIqUc3A97V0",
    download: "https://images.unsplash.com/photo-1627640268913-91cfd4675b65?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  },
  {
    file: "luxury-lobby.jpg",
    source: "https://unsplash.com/photos/modern-hotel-lobby-with-designer-furniture-and-wood-walls-zSG-kd-L6vw",
    download: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  },
  {
    file: "modern-city.jpg",
    source: "https://unsplash.com/photos/modern-buildings-with-palm-trees-against-blue-sky-uU7STW59esE",
    download: "https://images.unsplash.com/photo-1771457362598-eb92f9f4bf42?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  },
  {
    file: "property-development.jpg",
    source: "https://unsplash.com/photos/aerial-photography-of-houses-and-buildings-on-green-field-viewing-mountain-under-white-and-blue-sky-OxesnxkySD0",
    download: "https://images.unsplash.com/photo-1577900190299-7316c32fe85f?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  },
]

for (const asset of assets) {
  const response = await fetch(asset.download)
  if (!response.ok) throw new Error(`Could not fetch ${asset.file}: ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(path.join(root, asset.file), buffer)
  console.log(`Saved ${asset.file} — source: ${asset.source}`)
}

console.log("\nThe specified LWwlbpsaIvI skyscraper reference is an Unsplash+ asset. It is not auto-downloaded by this script. If you hold the appropriate license, export your licensed copy as public/images/real-estate/skyscrapers.jpg.")
