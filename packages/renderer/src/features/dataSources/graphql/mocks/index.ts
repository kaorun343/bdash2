import { mutationHandlers } from './mutations'
import { queryHandlers } from './queries'

export const dataSourceHandlers = [...mutationHandlers, ...queryHandlers]
