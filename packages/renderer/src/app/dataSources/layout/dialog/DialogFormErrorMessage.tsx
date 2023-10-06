import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

export const DialogFormErrorMessage: FC<Props> = ({ children }) => {
  return <p className="pt-1 text-sm text-red-600">{children}</p>
}
