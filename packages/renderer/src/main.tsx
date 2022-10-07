import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { getSdk } from './lib/graphql/generated'
import { worker } from './mocks/browser'
import { createRouter } from './routes'

worker.start()

const sdk = getSdk(async (query, variables) => {
  const res = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const { data, errors } = await res.json()

  if (!data) {
    throw new Error(errors[0].message)
  }

  return data
})

const router = createRouter(sdk)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>
)
