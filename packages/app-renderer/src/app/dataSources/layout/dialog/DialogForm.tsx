import { FC, useId } from 'react'
import { useForm } from 'react-hook-form'
import { useSubmit } from 'react-router-dom'
import { DialogFormButton } from './DialogFormButton'
import { DialogFormConnectionTest } from './DialogFormConnectionTest'
import { DialogFormDatabaseSpecificFields } from './DialogFormDatabaseSpecificFields'
import { DialogFormErrorMessage } from './DialogFormErrorMessage'
import { DialogFormFieldValues } from './DialogFormFieldValues'
import { DialogFormLabel } from './DialogFormLabel'

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
          { method: 'post' },
        ),
      )}
      className="p-4"
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
      <section className="flex justify-between text-sm pt-8">
        <div className="flex gap-2 items-center">
          <DialogFormConnectionTest control={control} />
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
    </form>
  )
}
