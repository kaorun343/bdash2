import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { DialogForm } from './DialogForm'

type Ref = Pick<HTMLDialogElement, 'showModal'>

export const Dialog = forwardRef<Ref>(function Dialog(_, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(
    ref,
    () => ({
      showModal: () => {
        dialogRef.current?.showModal()
      },
    }),
    [],
  )

  const handleCancel = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  return (
    <dialog ref={dialogRef} className="w-96 rounded backdrop:bg-gray-400 backdrop:bg-opacity-50">
      <DialogForm onCancel={handleCancel} />
    </dialog>
  )
})
