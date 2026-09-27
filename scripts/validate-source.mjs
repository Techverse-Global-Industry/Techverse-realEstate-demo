import { readFile, readdir, access } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const scanRoots = ["app", "components", "hooks", "lib"]
const sourceFiles = []

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name)
    if (entry.isDirectory()) await walk(target)
    else if (/\.(ts|tsx|css)$/.test(entry.name)) sourceFiles.push(target)
  }
}

for (const dir of scanRoots) await walk(path.join(root, dir))

const forbidden = ["useEffect(async", "return async ()", "console.clear()"]
for (const file of sourceFiles) {
  const text = await readFile(file, "utf8")
  for (const pattern of forbidden) {
    if (text.includes(pattern)) throw new Error(`${pattern} found in ${path.relative(root, file)}`)
  }
}

const imagePattern = /\/images\/real-estate\/[A-Za-z0-9._-]+/g
const images = new Set()
for (const file of sourceFiles) {
  const text = await readFile(file, "utf8")
  for (const match of text.matchAll(imagePattern)) images.add(match[0])
}
for (const image of images) await access(path.join(root, "public", image))

console.log(`Validated ${sourceFiles.length} source files and ${images.size} local real-estate images.`)
