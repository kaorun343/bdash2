import { FC, lazy, useId } from 'react'
import { useDataSourceForm } from '../../lib/useDataSourceForm'
import { DataSourceFormButton } from './DataSourceFormButton'
import { DataSourceFormLabel } from './DataSourceFormLabel'

const DataSourceFormSqlite3 = lazy(() =>
  import('./DataSourceFormSqlite3').then((m) => ({ default: m.DataSourceFormSqlite3 }))
)

type Props = {
  onCancel: () => void
}

export const DataSourceForm: FC<Props> = ({ onCancel }) => {
  const nameId = useId()
  const typeId = useId()

  const [onSubmit, register, watch] = useDataSourceForm()
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
      </div>

      <div className="flex flex-col mb-3">
        <DataSourceFormLabel htmlFor={typeId}>Type</DataSourceFormLabel>
        <select
          {...register('dataSourceType', { required: true })}
          id={typeId}
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        >
          <option value=""></option>
          <option value="SQLite3">SQLite3</option>
        </select>
      </div>

      {(() => {
        switch (dataSourceType) {
          case 'SQLite3':
            return <DataSourceFormSqlite3 register={register} />
          default:
            return null
        }
      })()}

      <footer className="flex justify-between text-sm pt-8">
        <DataSourceFormButton type="button">Connection Test</DataSourceFormButton>

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
