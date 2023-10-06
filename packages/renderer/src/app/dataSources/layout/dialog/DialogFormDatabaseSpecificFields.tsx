import { Control, UseFormRegister, useWatch } from 'react-hook-form'
import { DialogFormFieldValues } from './DialogFormFieldValues'
import { FC } from 'react'
import { DialogFormSqlite3Fields } from './DialogFormSqlite3Fields'

type Props = {
  control: Control<DialogFormFieldValues>
  register: UseFormRegister<DialogFormFieldValues>
}

export const DialogFormDatabaseSpecificFields: FC<Props> = ({ control, register }) => {
  const dataSourceType = useWatch({ control, name: 'dataSourceType' })

  switch (dataSourceType) {
    case 'sqlite3':
      return <DialogFormSqlite3Fields control={control} register={register} />
    default:
      return null
  }
}
