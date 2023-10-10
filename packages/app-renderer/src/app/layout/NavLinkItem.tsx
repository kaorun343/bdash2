import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

type Props = PropsWithChildren<{
  to: string
}>

export const NavLinkItem: FC<Props> = ({ to, children }) => {
  return (
    <li className="block text-center text-3xl h-16">
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx('w-full h-full grid justify-items-center items-center', isActive && 'bg-gray-600', 'hover:bg-gray-900')
        }
      >
        {children}
      </NavLink>
    </li>
  )
}
