import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { getSdk } from './lib/graphql/generated'
import { worker } from './mocks/browser'
import { createHashRouter } from 'react-router-dom'
import { createRoutes } from './routes'
import { TypedDocumentString } from './gql/graphql'

window.request = async <TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  // NOTE: これがないと、msw のリクエストハンドラが実行される前にレスポンスが返ってしまう
  await Promise.resolve()

  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: document.toString(),
      variables,
    }),
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const json = await response.json()
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors))
  }
  return json.data as TResult
}

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

const router = createHashRouter(createRoutes(sdk))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>
)
