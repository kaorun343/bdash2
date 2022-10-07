import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import { GetUserQueryQuery } from '~/lib/graphql/generated'

export const Query: FC = () => {
  const data = useLoaderData() as GetUserQueryQuery

  return (
    <div>
      <h1>{data.userQuery.title}</h1>
    </div>
  )
}
