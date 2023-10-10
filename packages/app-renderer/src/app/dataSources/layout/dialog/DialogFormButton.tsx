import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

type Props = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'onClick' | 'type'>

export const DialogFormButton: FC<Props> = ({ children, className, onClick, type }) => {
  return (
    <button type={type} className={clsx(`rounded border px-2.5 py-2`, className)} onClick={onClick}>
      {children}
    </button>
  )
}
