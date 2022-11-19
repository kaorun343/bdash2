import { FC } from 'react'
import { GetUserQueryQuery, Sdk } from '~/lib/graphql/generated'
import { QueryDetailEditor } from './QueryDetailEditor'

type Props = {
  data: GetUserQueryQuery
  groupId: string
  sdk: Sdk
}

export const QueryDetail: FC<Props> = ({ data, groupId, sdk }) => {
  return (
    <div className="flex-1">
      <QueryDetailEditor data={data} groupId={groupId} sdk={sdk} />
    </div>
  )
}
