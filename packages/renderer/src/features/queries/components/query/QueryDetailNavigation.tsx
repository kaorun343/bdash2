import { FC } from 'react'
import { QueryDetailPageQuery } from '~/lib/graphql/generated'
import { QueryDetailButton } from './QueryDetailButton'
import { QueryDetailStatus } from './QueryDetailStatus'

type Props = {
  query: QueryDetailPageQuery['userQuery']
}

const handleClick = () => {}

export const QueryDetailNavigation: FC<Props> = ({ query }) => {
  return (
    <nav className="px-2 py-2 bg-gray-50 border-y border-gray-300 flex gap-2 items-center">
      <QueryDetailButton onCancel={handleClick} onExecute={handleClick} status={query.status} />
      <QueryDetailStatus query={query} />
    </nav>
  )
}
