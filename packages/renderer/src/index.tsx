import { createRoot } from 'react-dom/client'
import { App } from './App'
import { GraphQLClient } from './lib/GraphQLClient'
import { createRouter } from './routes'

export const init = (el: HTMLElement) => {
  const client: GraphQLClient = async (query, variables) => {
    //
  }
  const router = createRouter(client)

  const root = createRoot(el)
  root.render(<App router={router} />)
}
