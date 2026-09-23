import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/schibsted-grotesk/wght.css'
import '@fontsource-variable/martian-mono/wdth.css'
import './index.css'
import App from './App.tsx'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
