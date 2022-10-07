import { ComponentProps, FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CreateUserQueryInput, Sdk } from '~/lib/graphql/generated'
import { QueryListItem } from './QueryListItem'

type Props = {
  queries: readonly ComponentProps<typeof QueryListItem>['query'][]
  sdk: Sdk
}

export const QueryList: FC<Props> = ({ queries, sdk }) => {
  const createUserQuery = async () => {
    const input: CreateUserQueryInput = {
      title: 'New Query',
    }
    await sdk.createUserQuery({ input })
  }

  return (
    <div className="h-screen w-72 border-r border-gray-300">
      <div className="p-2 text-xl border-b border-gray-300">
        <button type="button" className="inline-block" onClick={createUserQuery}>
          <FaPlus />
        </button>
      </div>
      <ul>
        {queries.map((query) => (
          <QueryListItem key={query.id} query={query} />
        ))}
      </ul>
    </div>
  )
}
