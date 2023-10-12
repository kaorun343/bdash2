import { FC, Fragment } from 'react'
import { Control, useWatch } from 'react-hook-form'
import { FaCheck, FaSpinner } from 'react-icons/fa'
import { useFetcher } from 'react-router-dom'
import { TEST_SQLITE3_CONNECTION_INTENT } from '../action'
import { DialogFormButton } from './DialogFormButton'
import { DialogFormFieldValues } from './DialogFormFieldValues'

type Props = {
  control: Control<DialogFormFieldValues>
}

export const DialogFormConnectionTest: FC<Props> = ({ control }) => {
  const dataSourceType = useWatch({ control, name: 'dataSourceType' })
  const sqlite3 = useWatch({ control, name: 'sqlite3' })
  const fetcher = useFetcher()

  const testConnection = () => {
    switch (dataSourceType) {
      case 'sqlite3':
        fetcher.submit({ intent: TEST_SQLITE3_CONNECTION_INTENT, path: sqlite3.path }, { method: 'post' })
        break
    }
  }

  return (
    <Fragment>
      <DialogFormButton type="button" onClick={() => testConnection()}>
        Connection Test
      </DialogFormButton>
      {fetcher.state === 'loading' && <FaSpinner className="text-gray-500 animate-spin" />}
      {fetcher.data && <FaCheck className="text-green-500" />}
    </Fragment>
  )
}
