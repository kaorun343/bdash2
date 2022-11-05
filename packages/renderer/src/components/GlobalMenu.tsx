import { FC, PropsWithChildren } from 'react'
import { FaTerminal } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavLinkItem: FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-full h-full grid justify-items-center items-center ${isActive ? 'bg-gray-600' : undefined} hover:bg-gray-900`
      }
    >
      {children}
    </NavLink>
  )
}

export const GlobalMenu: FC = () => {
  return (
    <nav className="w-16 h-screen bg-gray-800">
      <ul>
        <li className="block text-center text-3xl h-16">
          <NavLinkItem to="/query-groups">
            <FaTerminal className="text-white" />
          </NavLinkItem>
        </li>
      </ul>
    </nav>
  )
}
