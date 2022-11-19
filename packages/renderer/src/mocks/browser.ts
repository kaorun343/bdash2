import { setupWorker } from 'msw'
import { userQueryHandlers } from '~/features/queries/graphql/mocks'

export const worker = setupWorker(...userQueryHandlers)
