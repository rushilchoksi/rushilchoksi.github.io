import { rename } from 'node:fs/promises'
import { resolve } from 'node:path'

const buildDirectory = resolve(process.cwd(), 'dist')

await rename(
  resolve(buildDirectory, 'app.html'),
  resolve(buildDirectory, 'index.html'),
)
