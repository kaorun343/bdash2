import { FC, PropsWithChildren } from 'react'

type Props = {
  htmlFor: string
}

export const DataSourceFormLabel: FC<PropsWithChildren<Props>> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-900">
      {children}
    </label>
  )
}
