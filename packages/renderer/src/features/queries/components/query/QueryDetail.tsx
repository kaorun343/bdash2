import { useMutation, useQueryClient } from '@tanstack/react-query'
import produce from 'immer'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { GetUserQueriesQuery, GetUserQueryQuery, Sdk } from '~/lib/graphql/generated'
import { QueryDetailEditor } from './QueryDetailEditor'
import { QueryDetailHeader } from './QueryDetailHeader'

type Props = {
  data: GetUserQueryQuery
  groupId: string
  sdk: Sdk
}

export const QueryDetail: FC<Props> = ({ data, groupId, sdk }) => {
  const queryClient = useQueryClient()
  const id = data.userQuery.id
  const { register, getValues, setValue, watch } = useForm({ defaultValues: data.userQuery })

  useEffect(() => {
    setValue('title', data.userQuery.title)
    setValue('body', data.userQuery.body)
  }, [data.userQuery])

  const updateUserQueryTitleMutation = useMutation(
    async (title: string) => sdk.updateUserQueryTitle({ input: { id, title } }),
    {
      onSuccess: (result) => {
        queryClient.setQueriesData<GetUserQueriesQuery>(
          ['getUserQueries', groupId],
          produce((draft) => {
            if (!draft) return
            const query = draft.userQueriesByGroup.find((query) => query.id === id)
            if (!query) return
            query.title = result.updateUserQueryTitle.userQuery.title
          })
        )
      },
    }
  )

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name !== 'title') return
      if (type !== 'change') return
      if (typeof value.title !== 'string') return
      updateUserQueryTitleMutation.mutate(value.title)
    })

    return () => subscription.unsubscribe()
  }, [id, watch])

  return (
    <div className="flex-1">
      <QueryDetailHeader register={register} />
      <QueryDetailEditor getValues={getValues} setValue={setValue} watch={watch} />
    </div>
  )
}
