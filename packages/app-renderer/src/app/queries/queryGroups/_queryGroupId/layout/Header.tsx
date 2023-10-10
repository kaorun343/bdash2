import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'

export const Header: FC = () => {
  return (
    <div className="p-2 text-xl border-b border-gray-300">
      <button type="button" className="inline-block">
        <FaPlus />
      </button>
    </div>
  )
}
