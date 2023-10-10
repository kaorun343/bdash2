import { setupWorker } from 'msw'
import { dataSourceListLayoutMockHandlers } from '~/app/dataSources/layout/mocks'
import { queryDetailPageMockHandlers } from '~/app/queries/queryGroups/_queryGroupId/_queryId/mocks'

export const worker = setupWorker(...dataSourceListLayoutMockHandlers, ...queryDetailPageMockHandlers)
