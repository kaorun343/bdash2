import { createRoot } from 'react-dom/client'
import { App } from './App'
import { router } from './routes'

export const init = (el: HTMLElement) => {
  const root = createRoot(el)
  root.render(<App router={router} />)
}
