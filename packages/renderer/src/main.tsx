import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { worker } from './mocks/browser'
import { router } from './routes'

worker.start()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>
)
