import { createRoot } from 'react-dom/client'
import { createHashRouter } from 'react-router-dom'
import { App } from './App'
import { routes } from './routes'

export const init = (el: HTMLElement) => {
  const router = createHashRouter(routes)

  const root = createRoot(el)
  root.render(<App router={router} />)
}
