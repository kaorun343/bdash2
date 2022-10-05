import { memo } from 'react'
import { UserQueryForQueryListItemFragment } from './QueryListItem.generated'

type Props = {
  query: UserQueryForQueryListItemFragment
}

export const QueryListItem = memo<Props>(function QueryListItem({ query }) {
  return null
})
