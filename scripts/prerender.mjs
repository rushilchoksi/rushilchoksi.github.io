import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { render } from '../dist-ssr/entry-server.js'

const outputPath = resolve(process.cwd(), 'dist/index.html')
const rootMarker = '<div id="root"></div>'
const document = await readFile(outputPath, 'utf8')

if (!document.includes(rootMarker)) {
  throw new Error('Unable to locate the application root in the built HTML.')
}

await writeFile(
  outputPath,
  document.replace(rootMarker, `<div id="root">${render()}</div>`),
)
