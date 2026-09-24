import { cp, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const projectRoot = process.cwd()
const buildDirectory = resolve(projectRoot, 'dist')
const generatedDirectories = ['assets', 'media']
const generatedFiles = [
  '404.html',
  'CNAME',
  'favicon.svg',
  'index.html',
  'og.png',
  'og-v2.png',
  'robots.txt',
  'sitemap.xml',
]

for (const directory of generatedDirectories) {
  const destination = resolve(projectRoot, directory)
  await rm(destination, { force: true, recursive: true })
  await mkdir(destination, { recursive: true })
  await cp(resolve(buildDirectory, directory), destination, { recursive: true })
}

for (const file of generatedFiles) {
  await cp(resolve(buildDirectory, file), resolve(projectRoot, file))
}
