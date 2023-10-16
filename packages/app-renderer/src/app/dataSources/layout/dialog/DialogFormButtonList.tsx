import { FC } from 'react'
import { Control, useWatch } from 'react-hook-form'
import { FaCheck, FaSpinner, FaTimes } from 'react-icons/fa'
import { useFetcher } from 'react-router-dom'
import { FragmentType, getFragmentData, graphql } from '~/gql'
import { CONNECTION_TEST_INTENT } from '../action'
import { DialogFormButton } from './DialogFormButton'
import { DialogFormFieldValues } from './DialogFormFieldValues'

const ConnectionTestForDialogFormButtonList = graphql(`
  fragment ConnectionTestForDialogFormButtonList on ConnectionTest {
    success
    message
  }
`)

type Props = {
  control: Control<DialogFormFieldValues>
  onCancel: () => void
}

export const DialogFormButtonList: FC<Props> = ({ control, onCancel }) => {
  const dataSourceType = useWatch({ control, name: 'dataSourceType' })
  const sqlite3 = useWatch({ control, name: 'sqlite3' })
  const fetcher = useFetcher<FragmentType<typeof ConnectionTestForDialogFormButtonList>>()
  const data = getFragmentData(ConnectionTestForDialogFormButtonList, fetcher.data)

  const testConnection = () => {
    const target = { intent: CONNECTION_TEST_INTENT, type: dataSourceType }

    switch (dataSourceType) {
      case 'sqlite3':
        fetcher.submit({ ...target, path: sqlite3.path }, { method: 'post' })
        break
    }
  }

  return (
    <section>
      <div className="flex justify-between text-sm pt-8">
        <div className="flex gap-2 items-center">
          <DialogFormButton type="button" onClick={testConnection}>
            Connection Test
          </DialogFormButton>
          {fetcher.state === 'loading' && <FaSpinner className="text-gray-500 animate-spin" />}
          {data && (data.success ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />)}
        </div>
        <div className="flex gap-2">
          <DialogFormButton type="button" onClick={onCancel}>
            Cancel
          </DialogFormButton>
          <DialogFormButton type="submit" className="text-white bg-blue-700 hover:bg-blue-800">
            Submit
          </DialogFormButton>
        </div>
      </div>
      {data?.message && <div className="text-sm text-red-500">{data.message}</div>}
    </section>
  )
}
