import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { GetUserQueryQuery } from '~/lib/graphql/generated'

type Props = {
  register: UseFormRegister<GetUserQueryQuery['userQuery']>
}

export const QueryDetailHeader: FC<Props> = ({ register }) => {
  return (
    <div className="w-full border-b border-gray-300 p-2">
      <input className="font-bold text-2xl" type="text" {...register('title')} />
    </div>
  )
}
