import { sql } from '@codemirror/lang-sql'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { FC, useEffect, useRef } from 'react'
import { UseFormGetValues, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { GetUserQueryQuery } from '~/lib/graphql/generated'

type Props = {
  getValues: UseFormGetValues<GetUserQueryQuery['userQuery']>
  setValue: UseFormSetValue<GetUserQueryQuery['userQuery']>
  watch: UseFormWatch<GetUserQueryQuery['userQuery']>
}

export const QueryDetailEditor: FC<Props> = ({ getValues, setValue, watch }) => {
  const containerRef = useRef<HTMLDivElement>(null)

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

  return <div ref={containerRef} />
}
