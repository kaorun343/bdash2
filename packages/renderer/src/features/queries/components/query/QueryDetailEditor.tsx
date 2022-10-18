import { sql } from '@codemirror/lang-sql'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { FC, useEffect, useRef } from 'react'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import { GetUserQueryQuery } from '~/lib/graphql/generated'

type Props = {
  getValues: UseFormGetValues<GetUserQueryQuery['userQuery']>
  setValue: UseFormSetValue<GetUserQueryQuery['userQuery']>
}

export const QueryDetailEditor: FC<Props> = ({ getValues, setValue }) => {
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

    return () => {
      editor.destroy()
    }
  }, [getValues, setValue])

  return <div ref={containerRef} />
}
