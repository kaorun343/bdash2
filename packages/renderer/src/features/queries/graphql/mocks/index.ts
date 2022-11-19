import { mutationHandlers } from './mutations'
import { queryHandlers } from './queries'

export const userQueryHandlers = [...mutationHandlers, ...queryHandlers]
