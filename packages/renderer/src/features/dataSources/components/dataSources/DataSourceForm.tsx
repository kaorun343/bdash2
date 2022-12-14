import { FC, lazy, useId } from 'react'
import { FaCheck, FaSpinner } from 'react-icons/fa'
import { Sdk } from '~/lib/graphql/generated'
import { useDataSourceForm } from '../../lib/useDataSourceForm'
import { DataSourceFormButton } from './DataSourceFormButton'
import { DataSourceFormLabel } from './DataSourceFormLabel'

const DataSourceFormErrorMessage = lazy(() =>
  import('./DataSourceFormErrorMessage').then((m) => ({ default: m.DataSourceFormErrorMessage }))
)
const DataSourceFormSqlite3 = lazy(() =>
  import('./DataSourceFormSqlite3').then((m) => ({ default: m.DataSourceFormSqlite3 }))
)

type Props = {
  onCancel: () => void
  sdk: Sdk
}

export const DataSourceForm: FC<Props> = ({ onCancel, sdk }) => {
  const nameId = useId()
  const typeId = useId()

  const [errors, onSubmit, register, testConnection, watch] = useDataSourceForm(sdk)
  const dataSourceType = watch('dataSourceType')

  return (
    <form method="dialog" onSubmit={onSubmit}>
      <div className="flex flex-col mb-3">
        <DataSourceFormLabel htmlFor={nameId}>Name</DataSourceFormLabel>
        <input
          {...register('name', { required: true })}
          type="text"
          id={nameId}
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="My Database"
        />
        {errors.name?.type === 'required' && <DataSourceFormErrorMessage>Name is required</DataSourceFormErrorMessage>}
      </div>

      <div className="flex flex-col mb-3">
        <DataSourceFormLabel htmlFor={typeId}>Type</DataSourceFormLabel>
        <select
          {...register('dataSourceType', { required: true })}
          id={typeId}
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        >
          <option value=""></option>
          <option value="sqlite3">SQLite3</option>
        </select>
        {errors.dataSourceType?.type === 'required' && (
          <DataSourceFormErrorMessage>Type is required</DataSourceFormErrorMessage>
        )}
      </div>

      {(() => {
        switch (dataSourceType) {
          case 'sqlite3':
            return <DataSourceFormSqlite3 errors={errors} register={register} />
          default:
            return null
        }
      })()}

      <footer className="flex justify-between text-sm pt-8">
        <div className="flex gap-2 items-center">
          <DataSourceFormButton type="button" onClick={() => testConnection.mutate()}>
            Connection Test
          </DataSourceFormButton>

          {testConnection.isLoading && <FaSpinner className="text-gray-500 animate-spin" />}
          {testConnection.data?.success && <FaCheck className="text-green-500" />}
        </div>

        <div className="flex gap-2">
          <DataSourceFormButton type="button" onClick={onCancel}>
            Cancel
          </DataSourceFormButton>

          <DataSourceFormButton type="submit" className="text-white bg-blue-700 hover:bg-blue-800">
            Submit
          </DataSourceFormButton>
        </div>
      </footer>
    </form>
  )
}
