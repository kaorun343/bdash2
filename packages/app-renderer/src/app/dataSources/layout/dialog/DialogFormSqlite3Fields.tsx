import { Control, UseFormRegister, useFormState } from 'react-hook-form'
import { DialogFormFieldValues } from './DialogFormFieldValues'
import { FC, useId } from 'react'
import { DialogFormLabel } from './DialogFormLabel'
import { DialogFormErrorMessage } from './DialogFormErrorMessage'

type Props = {
  control: Control<DialogFormFieldValues>
  register: UseFormRegister<DialogFormFieldValues>
}

export const DialogFormSqlite3Fields: FC<Props> = ({ control, register }) => {
  const id = useId()
  const { errors } = useFormState({ control })

  return (
    <div className="flex flex-col mb-3">
      <DialogFormLabel htmlFor={id}>Path</DialogFormLabel>
      <input
        {...register('sqlite3.path', { required: true })}
        type="text"
        id={id}
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="/path/to/database.sqlite3"
      />
      {errors.sqlite3?.path?.type === 'required' && <DialogFormErrorMessage>Type is required</DialogFormErrorMessage>}
    </div>
  )
}
