import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  htmlFor: string
}>

export const DialogFormLabel: FC<Props> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-900">
      {children}
    </label>
  )
}
