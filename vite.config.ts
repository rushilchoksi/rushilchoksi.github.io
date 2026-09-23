import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? undefined
    : {
        rollupOptions: {
          input: resolve(process.cwd(), 'app.html'),
        },
      },
}))
