import { createRoot } from 'react-dom/client'
import { App } from './App'
import { getSdk } from './lib/graphql/generated'
import { createRouter } from './routes'

export const init = (el: HTMLElement) => {
  const sdk = getSdk(async (query, variables) => {
    return null as any
  })
  const router = createRouter(sdk)

  const root = createRoot(el)
  root.render(<App router={router} />)
}
