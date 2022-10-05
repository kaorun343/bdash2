import { ComponentProps, FC } from 'react'
import { QueryListItem } from './QueryListItem'

type Props = {
  queries: readonly ComponentProps<typeof QueryListItem>['query'][]
}

export const QueryList: FC<Props> = ({ queries }) => {
  return (
    <div>
      <div>QueryList</div>
      {queries.map((query) => (
        <QueryListItem key={query.id} query={query} />
      ))}
    </div>
  )
}
