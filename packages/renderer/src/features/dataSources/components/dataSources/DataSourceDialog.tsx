import { forwardRef, lazy, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { Sdk } from '~/lib/graphql/generated'

const DataSourceForm = lazy(() => import('./DataSourceForm').then((m) => ({ default: m.DataSourceForm })))

type Props = {
  sdk: Sdk
}

type Ref = Pick<HTMLDialogElement, 'showModal'>

export const DataSourceDialog = forwardRef<Ref, Props>(function DataSourceDialog({ sdk }, ref) {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(
    ref,
    () => ({
      showModal: () => {
        setIsOpen(true)
        dialogRef.current?.showModal()
      },
    }),
    []
  )

  const handleCancel = useCallback(() => {
    setIsOpen(false)
    dialogRef.current?.close()
  }, [])

  return (
    <dialog ref={dialogRef} className="w-96 rounded backdrop:bg-gray-400 backdrop:bg-opacity-50">
      {isOpen && <DataSourceForm onCancel={handleCancel} sdk={sdk} />}
    </dialog>
  )
})
