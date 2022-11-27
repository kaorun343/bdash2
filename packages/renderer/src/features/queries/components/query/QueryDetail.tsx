import { FC } from 'react'
import { QueryDetailPageQuery, Sdk } from '~/lib/graphql/generated'
import { QueryDetailEditor } from './QueryDetailEditor'

type Props = {
  data: QueryDetailPageQuery
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
