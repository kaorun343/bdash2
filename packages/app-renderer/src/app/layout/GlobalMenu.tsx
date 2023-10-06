import { FC } from 'react'
import { FaDatabase, FaTerminal } from 'react-icons/fa'
import { NavLinkItem } from './NavLinkItem'

export const GlobalMenu: FC = () => {
  return (
    <nav className="w-16 h-screen bg-gray-800">
      <ul>
        <NavLinkItem to="/query-groups">
          <FaTerminal className="text-white" />
        </NavLinkItem>
        <NavLinkItem to="/data-sources">
          <FaDatabase className="text-white" />
        </NavLinkItem>
      </ul>
    </nav>
  )
}
