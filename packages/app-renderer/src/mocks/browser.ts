import { setupWorker } from 'msw'
import { dataSourceListLayoutMockHandlers } from '~/app/dataSources/layout/mocks'
import { userQueryHandlers } from '~/features/queries/graphql/mocks'

export const worker = setupWorker(...dataSourceListLayoutMockHandlers, ...userQueryHandlers)
