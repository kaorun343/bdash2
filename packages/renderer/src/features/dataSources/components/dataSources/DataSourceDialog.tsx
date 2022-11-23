import { forwardRef, useImperativeHandle, useRef } from 'react'

type Props = {}

type Ref = Pick<HTMLDialogElement, 'showModal'>

export const DataSourceDialog = forwardRef<Ref, Props>(function DataSourceDialog(_props, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(
    ref,
    () => ({
      showModal: () => dialogRef.current?.showModal(),
    }),
    []
  )

  return (
    <dialog ref={dialogRef} className="backdrop:bg-gray-400 backdrop:bg-opacity-50">
      <form method="dialog">
        <button type="button" onClick={() => dialogRef.current?.close()}>
          Cancel
        </button>
      </form>
    </dialog>
  )
})
