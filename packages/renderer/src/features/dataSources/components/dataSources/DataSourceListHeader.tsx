import { FC, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Sdk } from '~/lib/graphql/generated'
import { DataSourceDialog } from '../dataSourceDialog/DataSourceDialog'

type Props = {
  sdk: Sdk
}

export const DataSourceListHeader: FC<Props> = ({ sdk }) => {
  const dialogRef = useRef<Pick<HTMLDialogElement, 'showModal'>>(null)

  return (
    <div className="p-2 text-xl border-b border-gray-300">
      <button type="button" className="inline-block" onClick={() => dialogRef.current?.showModal()}>
        <FaPlus />
      </button>
      <DataSourceDialog ref={dialogRef} />
    </div>
  )
}
