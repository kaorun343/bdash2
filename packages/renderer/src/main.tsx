import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>
)
