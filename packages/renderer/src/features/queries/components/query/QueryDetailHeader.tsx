import { FC } from 'react'

type Props = {
  value: string
  onChange(value: string): void
}

export const QueryDetailHeader: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="w-full border-b border-gray-300 p-2">
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
