import { FC, PropsWithChildren } from 'react'
import { FaDatabase, FaTerminal } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavLinkItem: FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => {
  return (
    <li className="block text-center text-3xl h-16">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `w-full h-full grid justify-items-center items-center ${isActive ? 'bg-gray-600' : ''} hover:bg-gray-900`
        }
      >
        {children}
      </NavLink>
    </li>
  )
}

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
