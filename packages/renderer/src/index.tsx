import { createRoot } from 'react-dom/client'
import { App } from './App'

export const init = (el: HTMLElement) => {
  const root = createRoot(el)
  root.render(<App />)
}
