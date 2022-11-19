import { setupWorker } from 'msw'
import { dataSourceHandlers } from '~/features/dataSources/graphql/mocks'
import { userQueryHandlers } from '~/features/queries/graphql/mocks'

export const worker = setupWorker(...dataSourceHandlers, ...userQueryHandlers)
