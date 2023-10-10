import { builder } from './builder'
import './schema/objects/Mutation'
import './schema/objects/Query'

export const schema = builder.toSchema()
