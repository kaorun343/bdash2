import { sql } from '@codemirror/lang-sql'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { FC, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FragmentType, getFragmentData, graphql } from '~/gql'

const BdashQueryForEditor = graphql(`
  fragment BdashQueryForEditor on BdashQuery {
    id
    title
    body
  }
`)

type Props = {
  query: FragmentType<typeof BdashQueryForEditor>
  groupId: string
}

export const Editor: FC<Props> = (props) => {
  const query = getFragmentData(BdashQueryForEditor, props.query)

  const containerRef = useRef<HTMLDivElement>(null)
  const { register, getValues, setValue, watch } = useForm({ defaultValues: query })
  const { id, title, body } = query

  useEffect(() => {
    setValue('title', title)
  }, [title])

  useEffect(() => {
    setValue('body', body)
  }, [body])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name !== 'title') return
      if (type !== 'change') return
      if (typeof value.title !== 'string') return
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
