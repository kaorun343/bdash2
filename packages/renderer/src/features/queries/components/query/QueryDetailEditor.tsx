import { sql } from '@codemirror/lang-sql'
import { EditorView } from '@codemirror/view'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { basicSetup } from 'codemirror'
import produce from 'immer'
import { FC, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { GetUserQueriesQuery, GetUserQueryQuery, Sdk } from '~/lib/graphql/generated'

type Props = {
  data: GetUserQueryQuery
  groupId: string
  sdk: Sdk
}

export const QueryDetailEditor: FC<Props> = ({ data, groupId, sdk }) => {
  const containerRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const editor = new EditorView({
      doc: getValues().body,
      extensions: [
        basicSetup,
        sql(),
        EditorView.updateListener.of((update) => {
          setValue('body', update.state.doc.toString())
        }),
      ],
      parent: container,
    })

    const subscription = watch((value, { name }) => {
      if (name !== 'body') return
      if (typeof value.body !== 'string') return
      if (value.body === editor.state.doc.toString()) return
      editor.dispatch({
        changes: { from: 0, to: editor.state.doc.length, insert: value.body },
      })
    })

    return () => {
      subscription.unsubscribe()
      editor.destroy()
    }
  }, [getValues, setValue, watch])

  return (
    <div className="w-full">
      <div className="w-full border-b border-gray-300 p-2">
        <input className="font-bold text-2xl" type="text" {...register('title')} />
      </div>
      <div ref={containerRef} />
    </div>
  )
}
