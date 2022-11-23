import { useForm } from 'react-hook-form'

export type DataSourceFormFieldValues = {
  name: string
  dataSourceType: string
  sqlite3: {
    path: string
  }
}

export const useDataSourceForm = () => {
  const { handleSubmit, register, watch } = useForm<DataSourceFormFieldValues>({
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

  return [onSubmit, register, watch] as const
}
