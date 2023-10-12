import { builder } from '../../builder'

export const DateTimeResolverRef = builder.scalarType('DateTime', {
  serialize: (dateTime) => new Date(dateTime).toISOString(),
  parseValue: (value) => {
    if (typeof value !== 'string') {
      throw new Error(`Expected a string value for DateTime scalar, got ${typeof value}`)
    }

    return value
  },
})
