import { FC, lazy, useId } from 'react'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { DataSourceFormFieldValues } from '../../lib/useDataSourceForm'
import { DataSourceFormLabel } from './DataSourceFormLabel'

const DataSourceFormErrorMessage = lazy(() =>
  import('./DataSourceFormErrorMessage').then((m) => ({ default: m.DataSourceFormErrorMessage }))
)

type Props = {
  errors: Partial<FieldErrorsImpl<DataSourceFormFieldValues>>
  register: UseFormRegister<DataSourceFormFieldValues>
}

export const DataSourceFormSqlite3: FC<Props> = ({ errors, register }) => {
  const id = useId()

  return (
    <div className="flex flex-col mb-3">
      <DataSourceFormLabel htmlFor={id}>Path</DataSourceFormLabel>
      <input
        {...register('sqlite3.path', { required: true })}
        type="text"
        id={id}
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="/path/to/database.sqlite3"
      />
      {errors.sqlite3?.path?.type === 'required' && (
        <DataSourceFormErrorMessage>Type is required</DataSourceFormErrorMessage>
      )}
    </div>
  )
}
