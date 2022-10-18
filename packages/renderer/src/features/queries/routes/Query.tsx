import { useMutation, useQueryClient } from '@tanstack/react-query'
import produce from 'immer'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router-dom'
import { GetUserQueriesQuery, GetUserQueryQuery, Sdk } from '~/lib/graphql/generated'
import { QueryDetailHeader } from '../components/query/QueryDetailHeader'

type Props = {
  sdk: Sdk
}

export const Query: FC<Props> = ({ sdk }) => {
  const queryClient = useQueryClient()
  const data = useLoaderData() as GetUserQueryQuery
  const id = data.userQuery.id
  const { register, watch } = useForm({ defaultValues: data.userQuery })

  const updateUserQueryTitleMutation = useMutation(async (title: string) => title, {
    onSuccess: (title) => {
      queryClient.setQueriesData<GetUserQueriesQuery>(
        ['getUserQueries'],
        produce((draft) => {
          if (!draft) return
          const query = draft.userQueries.find((query) => query.id === id)
          if (!query) return
          query.title = title
        })
      )
    },
  })

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
    </div>
  )
}
