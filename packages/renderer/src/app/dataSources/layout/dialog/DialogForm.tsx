import { FC, useId } from 'react'
import { DialogFormLabel } from './DialogFormLabel'
import { useForm } from 'react-hook-form'
import { useSubmit } from 'react-router-dom'
import { DialogFormFieldValues } from './DialogFormFieldValues'
import { DialogFormErrorMessage } from './DialogFormErrorMessage'
import { DialogFormDatabaseSpecificFields } from './DialogFormDatabaseSpecificFields'
import { DialogFormFooter } from './DialogFormFooter'

type Props = {
  onCancel: () => void
}

export const DialogForm: FC<Props> = ({ onCancel }) => {
  const nameId = useId()
  const typeId = useId()

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<DialogFormFieldValues>({
    defaultValues: {
      name: '',
      dataSourceType: '',
      sqlite3: {
        path: '',
      },
    },
  })

  const submit = useSubmit()

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) =>
        submit(
          {
            serialized: JSON.stringify(data),
          },
          { method: 'post' }
        )
      )}
    >
      <div className="flex flex-col mb-3">
        <DialogFormLabel htmlFor={nameId}>Name</DialogFormLabel>
        <input
          {...register('name', { required: true })}
          type="text"
          id={nameId}
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="My Database"
        />
        {errors.name?.type === 'required' && <DialogFormErrorMessage>Name is required</DialogFormErrorMessage>}
      </div>
      <div className="flex flex-col mb-3">
        <DialogFormLabel htmlFor={typeId}>Type</DialogFormLabel>
        <select
          {...register('dataSourceType', { required: true })}
          id={typeId}
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        >
          <option value=""></option>
          <option value="sqlite3">SQLite3</option>
        </select>
        {errors.dataSourceType?.type === 'required' && (
          <DialogFormErrorMessage>Type is required</DialogFormErrorMessage>
        )}
      </div>
      <DialogFormDatabaseSpecificFields control={control} register={register} />
      <DialogFormFooter control={control} onCancel={onCancel} />
    </form>
  )
}
