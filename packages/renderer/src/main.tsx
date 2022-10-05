import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { GraphQLClient } from './lib/GraphQLClient'
import { worker } from './mocks/browser'
import { createRouter } from './routes'

worker.start()

const client: GraphQLClient = async (query, variables) => {
  const res = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const { data } = await res.json()
  return data
}

const router = createRouter(client)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>
)
