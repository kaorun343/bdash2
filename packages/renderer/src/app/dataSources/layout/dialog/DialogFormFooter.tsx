import { FC } from 'react'
import { Control, useWatch } from 'react-hook-form'
import { DialogFormFieldValues } from './DialogFormFieldValues'
import { useMutation } from '@tanstack/react-query'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'
import { DialogFormButton } from './DialogFormButton'
import { FaSpinner, FaCheck } from 'react-icons/fa'

const TestSqlite3Connection = graphql(`
  mutation TestSqlite3Connection($input: TestSqlite3ConnectionInput!) {
    testSqlite3Connection(input: $input) {
      success
    }
  }
`)

type Props = {
  control: Control<DialogFormFieldValues>
  onCancel: () => void
}

export const DialogFormFooter: FC<Props> = ({ control, onCancel }) => {
  const dataSourceType = useWatch({ control, name: 'dataSourceType' })
  const sqlite3 = useWatch({ control, name: 'sqlite3' })

  const testConnection = useMutation({
    mutationFn: async () => {
      switch (dataSourceType) {
        case 'sqlite3': {
          const result = await requestToGraphQL(TestSqlite3Connection, {
            input: {
              path: sqlite3.path,
            },
          })
          return {
            success: result.testSqlite3Connection.success,
          }
        }
        default:
          return {
            success: true,
          }
      }
    },
  })

  return (
    <section className="flex justify-between text-sm pt-8">
      <div className="flex gap-2 items-center">
        <DialogFormButton type="button" onClick={() => testConnection.mutate()}>
          Connection Test
        </DialogFormButton>
        {testConnection.isLoading && <FaSpinner className="text-gray-500 animate-spin" />}
        {testConnection.data?.success && <FaCheck className="text-green-500" />}
      </div>
      <div className="flex gap-2">
        <DialogFormButton type="button" onClick={onCancel}>
          Cancel
        </DialogFormButton>
        <DialogFormButton type="submit" className="text-white bg-blue-700 hover:bg-blue-800">
          Submit
        </DialogFormButton>
      </div>
    </section>
  )
}
