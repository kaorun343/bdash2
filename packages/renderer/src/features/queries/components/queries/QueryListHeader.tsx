import produce from 'immer'
import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { CreateUserQueryInput, GetUserQueriesQuery, Sdk } from '~/lib/graphql/generated'
import { queryClient } from '~/lib/queryClient'

type Props = {
  groupId: string
  sdk: Sdk
}

export const QueryListHeader: FC<Props> = ({ groupId, sdk }) => {
  const navigate = useNavigate()

  const createUserQuery = async () => {
    const input: CreateUserQueryInput = {
      title: 'New Query',
    }
    const { createUserQuery } = await sdk.createUserQuery({ input })

    queryClient.setQueryData<GetUserQueriesQuery>(
      ['getUserQueries', groupId],
      produce((draft) => {
        if (!draft) return
        draft.userQueriesByGroup.unshift(createUserQuery.userQuery)
      })
    )

    navigate(`/query-groups/${groupId}/${createUserQuery.userQuery.id}`)
  }

  return (
    <div className="p-2 text-xl border-b border-gray-300">
      <button type="button" className="inline-block" onClick={createUserQuery}>
        <FaPlus />
      </button>
    </div>
  )
}
