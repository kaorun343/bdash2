import { ButtonHTMLAttributes, FC } from 'react'

type Props = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'onClick' | 'type'>

export const DataSourceFormButton: FC<Props> = ({ children, className, onClick, type }) => {
  return (
    <button type={type} className={`rounded border px-2.5 py-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
