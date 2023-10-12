import { builder } from '../../builder'

export const QueryStatusRef = builder.enumType('QueryStatus', {
  values: {
    SUCCESS: { value: 'success' },
    FAILURE: { value: 'failure' },
  } as const,
})
