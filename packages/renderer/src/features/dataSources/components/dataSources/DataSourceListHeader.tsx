import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Sdk } from '~/lib/graphql/generated'

type Props = {
  sdk: Sdk
}

export const DataSourceListHeader: FC<Props> = ({ sdk }) => {
  return (
    <div className="p-2 text-xl border-b border-gray-300">
      <button type="button" className="inline-block">
        <FaPlus />
      </button>
    </div>
  )
}
