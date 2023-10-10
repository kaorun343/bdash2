/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment DataSourceForDataSourceListLayout on DataSource {\n    ...DataSourceForDataSourceList\n  }\n": types.DataSourceForDataSourceListLayoutFragmentDoc,
    "\n  fragment DataSourceForDataSourceList on DataSource {\n    id\n    ...DataSourceForDataSourceListItem\n  }\n": types.DataSourceForDataSourceListFragmentDoc,
    "\n  fragment DataSourceForDataSourceListItem on DataSource {\n    id\n    name\n  }\n": types.DataSourceForDataSourceListItemFragmentDoc,
    "\n  mutation TestSqlite3Connection($input: TestSqlite3ConnectionInput!) {\n    testSqlite3Connection(input: $input) {\n      success\n    }\n  }\n": types.TestSqlite3ConnectionDocument,
    "\n  query GetDataSourceListLayout {\n    dataSources {\n      ...DataSourceForDataSourceListLayout\n    }\n  }\n": types.GetDataSourceListLayoutDocument,
    "\n  fragment UserQueryForQueryDetailPage on UserQuery {\n    status\n    ...UserQueryForEditor\n  }\n": types.UserQueryForQueryDetailPageFragmentDoc,
    "\n  fragment UserQueryForEditor on UserQuery {\n    id\n    title\n    body\n  }\n": types.UserQueryForEditorFragmentDoc,
    "\n  mutation UpdateUserQueryTitle($input: UpdateUserQueryTitleInput!) {\n    updateUserQueryTitle(input: $input) {\n      userQuery {\n        title\n      }\n    }\n  }\n": types.UpdateUserQueryTitleDocument,
    "\n  query GetQueryDetailPage($id: ID!) {\n    query: userQuery(id: $id) {\n      ...UserQueryForQueryDetailPage\n    }\n  }\n": types.GetQueryDetailPageDocument,
    "\n  fragment UserQueryForQueryListItem on UserQuery {\n    id\n    title\n  }\n": types.UserQueryForQueryListItemFragmentDoc,
    "\n  fragment UserQueryGroupForQueryGroupListLayout on UserQueryGroup {\n    ...UserQueryGroupForQueryGroupList\n  }\n": types.UserQueryGroupForQueryGroupListLayoutFragmentDoc,
    "\n  fragment UserQueryGroupForQueryGroupList on UserQueryGroup {\n    id\n    ...UserQueryGroupForQueryGroupListItem\n  }\n": types.UserQueryGroupForQueryGroupListFragmentDoc,
    "\n  fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {\n    id\n    title\n  }\n": types.UserQueryGroupForQueryGroupListItemFragmentDoc,
    "\n  query GetQueryGroupListLayout {\n    queryGroups: userQueryGroups {\n      ...UserQueryGroupForQueryGroupListLayout\n    }\n  }\n": types.GetQueryGroupListLayoutDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DataSourceForDataSourceListLayout on DataSource {\n    ...DataSourceForDataSourceList\n  }\n"): typeof import('./graphql').DataSourceForDataSourceListLayoutFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DataSourceForDataSourceList on DataSource {\n    id\n    ...DataSourceForDataSourceListItem\n  }\n"): typeof import('./graphql').DataSourceForDataSourceListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DataSourceForDataSourceListItem on DataSource {\n    id\n    name\n  }\n"): typeof import('./graphql').DataSourceForDataSourceListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation TestSqlite3Connection($input: TestSqlite3ConnectionInput!) {\n    testSqlite3Connection(input: $input) {\n      success\n    }\n  }\n"): typeof import('./graphql').TestSqlite3ConnectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDataSourceListLayout {\n    dataSources {\n      ...DataSourceForDataSourceListLayout\n    }\n  }\n"): typeof import('./graphql').GetDataSourceListLayoutDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserQueryForQueryDetailPage on UserQuery {\n    status\n    ...UserQueryForEditor\n  }\n"): typeof import('./graphql').UserQueryForQueryDetailPageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserQueryForEditor on UserQuery {\n    id\n    title\n    body\n  }\n"): typeof import('./graphql').UserQueryForEditorFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserQueryTitle($input: UpdateUserQueryTitleInput!) {\n    updateUserQueryTitle(input: $input) {\n      userQuery {\n        title\n      }\n    }\n  }\n"): typeof import('./graphql').UpdateUserQueryTitleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetQueryDetailPage($id: ID!) {\n    query: userQuery(id: $id) {\n      ...UserQueryForQueryDetailPage\n    }\n  }\n"): typeof import('./graphql').GetQueryDetailPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserQueryForQueryListItem on UserQuery {\n    id\n    title\n  }\n"): typeof import('./graphql').UserQueryForQueryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserQueryGroupForQueryGroupListLayout on UserQueryGroup {\n    ...UserQueryGroupForQueryGroupList\n  }\n"): typeof import('./graphql').UserQueryGroupForQueryGroupListLayoutFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserQueryGroupForQueryGroupList on UserQueryGroup {\n    id\n    ...UserQueryGroupForQueryGroupListItem\n  }\n"): typeof import('./graphql').UserQueryGroupForQueryGroupListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {\n    id\n    title\n  }\n"): typeof import('./graphql').UserQueryGroupForQueryGroupListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetQueryGroupListLayout {\n    queryGroups: userQueryGroups {\n      ...UserQueryGroupForQueryGroupListLayout\n    }\n  }\n"): typeof import('./graphql').GetQueryGroupListLayoutDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
