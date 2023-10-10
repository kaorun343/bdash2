import { createRoot } from 'react-dom/client'
import { App } from './App'
import { createHashRouter } from 'react-router-dom'
import { routes } from './routes'

export const init = (el: HTMLElement) => {
  const router = createHashRouter(routes)

  const root = createRoot(el)
  root.render(<App router={router} />)
}
