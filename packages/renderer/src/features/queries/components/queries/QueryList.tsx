import { useQuery } from '@tanstack/react-query'
import produce from 'immer'
import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { CreateUserQueryInput, GetUserQueriesQuery, Sdk } from '~/lib/graphql/generated'
import { queryClient } from '~/lib/queryClient'
import { QueryListItem } from './QueryListItem'

type Props = {
  sdk: Sdk
}

export const QueryList: FC<Props> = ({ sdk }) => {
  const navigate = useNavigate()
  const { data } = useQuery<GetUserQueriesQuery>(['getUserQueries'], () => sdk.getUserQueries())

  const createUserQuery = async () => {
    const input: CreateUserQueryInput = {
      title: 'New Query',
    }
    const { createUserQuery } = await sdk.createUserQuery({ input })

    queryClient.setQueryData<GetUserQueriesQuery>(
      ['getUserQueries'],
      produce((draft) => {
        if (!draft) return
        draft.userQueries.unshift(createUserQuery.userQuery)
      })
    )

    navigate(`/queries/${createUserQuery.userQuery.id}`)
  }

  return (
    <div className="h-screen w-72 border-r border-gray-300">
      <div className="p-2 text-xl border-b border-gray-300">
        <button type="button" className="inline-block" onClick={createUserQuery}>
          <FaPlus />
        </button>
      </div>
      <ul>
        {data?.userQueries.map((query) => (
          <QueryListItem key={query.id} query={query} />
        ))}
      </ul>
    </div>
  )
}
