import { factory, primaryKey } from '@mswjs/data'
import {
  mockCreateUserQueryMutation,
  mockGetUserQueriesQuery,
  mockGetUserQueryGroupsQuery,
  mockGetUserQueryQuery,
  mockUpdateUserQueryTitleMutation,
} from '~/lib/graphql/generated'

const db = factory({
  userQueryGroups: {
    id: primaryKey(String),
    title: String,
  },
  userQueries: {
    id: primaryKey(String),
    title: String,
    body: String,
  },
})

db.userQueryGroups.create({
  id: `${Date.now()}`,
  title: `Group 1`,
})

db.userQueries.create({
  id: `${Date.now()}`,
  title: 'New Query',
})

export const queriesHandlers = [
  mockCreateUserQueryMutation(async (req, res, ctx) => {
    const id = `${Date.now()}`
    const title = req.variables.input.title

    const result = db.userQueries.create({
      id,
      title,
      body: '',
    })

    return res(
      ctx.data({
        createUserQuery: {
          userQuery: {
            id: result.id,
            title: result.title,
          },
        },
      })
    )
  }),

  mockGetUserQueriesQuery((req, res, ctx) => {
    return res(
      ctx.data({
        userQueriesByGroup: db.userQueries.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      })
    )
  }),

  mockGetUserQueryGroupsQuery((req, res, ctx) => {
    return res(
      ctx.data({
        userQueryGroups: db.userQueryGroups.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      })
    )
  }),

  mockGetUserQueryQuery((req, res, ctx) => {
    const { id } = req.variables
    const userQuery = db.userQueries.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    })

    if (!userQuery) {
      return res(
        ctx.errors([
          {
            message: `Could not find user query with id ${id}`,
          },
        ])
      )
    }

    return res(
      ctx.data({
        userQuery: {
          id: userQuery.id,
          title: userQuery.title,
          body: userQuery.body,
        },
      })
    )
  }),

  mockUpdateUserQueryTitleMutation((req, res, ctx) => {
    const input = req.variables.input
    db.userQueries.update({
      where: {
        id: {
          equals: input.id,
        },
      },
      data: {
        title: input.title,
      },
    })

    return res(
      ctx.data({
        updateUserQueryTitle: {
          userQuery: {
            title: input.title,
          },
        },
      })
    )
  }),
]
