import { setupWorker } from 'msw'
import { queriesHandlers } from '~/features/queries/graphql/mockHandlers'

export const worker = setupWorker(...queriesHandlers)
