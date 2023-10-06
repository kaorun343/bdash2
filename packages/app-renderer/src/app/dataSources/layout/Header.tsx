import { FC, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Dialog } from './dialog/Dialog'

export const Header: FC = () => {
  const dialogRef = useRef<Pick<HTMLDialogElement, 'showModal'>>(null)

  return (
    <div className="p-2 text-xl border-b border-gray-300">
      <button type="button" className="inline-block" onClick={() => dialogRef.current?.showModal()}>
        <FaPlus />
      </button>
      <Dialog ref={dialogRef} />
    </div>
  )
}
