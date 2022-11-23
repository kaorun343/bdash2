import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Sdk } from '~/lib/graphql/generated'

export type DataSourceFormFieldValues = {
  name: string
  dataSourceType: 'sqlite3' | ''
  sqlite3: {
    path: string
  }
}

export const useDataSourceForm = (sdk: Sdk) => {
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    watch,
  } = useForm<DataSourceFormFieldValues>({
    defaultValues: {
      name: '',
      dataSourceType: '',
      sqlite3: {
        path: '',
      },
    },
  })

  const onSubmit = handleSubmit(
    (data) => {
      alert(JSON.stringify(data))
    },
    (errors) => {
      console.error(errors)
    }
  )

  const testConnection = useMutation({
    mutationFn: async () => {
      const { dataSourceType: type, sqlite3 } = getValues()

      switch (type) {
        case 'sqlite3': {
          const result = await sdk.testSqlite3Connection({
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

  return [errors, onSubmit, register, testConnection, watch] as const
}
