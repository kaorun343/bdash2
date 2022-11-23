import { FC, PropsWithChildren } from 'react'

export const DataSourceFormErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return <p className="pt-1 text-sm text-red-600">{children}</p>
}
