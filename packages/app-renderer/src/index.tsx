import { createRoot } from 'react-dom/client'
import { createHashRouter } from 'react-router-dom'
import { App } from './App'
import { TypedDocumentString } from './gql/graphql'
import { routes } from './routes'

window.request = async <TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) => {
  const response = await window.electronAPI.graphql(document.toString(), variables)
  if (response.errors) {
    throw new Error(JSON.stringify(response.errors))
  }
  return response.data as TResult
}

export const init = (el: HTMLElement) => {
  const router = createHashRouter(routes)

  const root = createRoot(el)
  root.render(<App router={router} />)
}
