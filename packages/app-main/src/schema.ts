import { builder } from './builder'
import './schema/objects/Query'

export const schema = builder.toSchema()
