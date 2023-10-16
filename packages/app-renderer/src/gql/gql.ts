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
    "\n  query TestSqlite3Connection($path: String!) {\n    connectionTestSQLite3(path: $path) {\n      ...ConnectionTestForDialogFormButtonList\n    }\n  }\n": types.TestSqlite3ConnectionDocument,
    "\n  fragment ConnectionTestForDialogFormButtonList on ConnectionTest {\n    success\n    message\n  }\n": types.ConnectionTestForDialogFormButtonListFragmentDoc,
    "\n  query GetDataSourceListLayout {\n    dataSources {\n      ...DataSourceForDataSourceListLayout\n    }\n  }\n": types.GetDataSourceListLayoutDocument,
    "\n  fragment BdashQueryForQueryDetailPage on BdashQuery {\n    status\n    ...BdashQueryForEditor\n  }\n": types.BdashQueryForQueryDetailPageFragmentDoc,
    "\n  fragment BdashQueryForEditor on BdashQuery {\n    id\n    title\n    body\n  }\n": types.BdashQueryForEditorFragmentDoc,
    "\n  query GetQueryDetailPage($id: ID!) {\n    query: bdashQuery(id: $id) {\n      ...BdashQueryForQueryDetailPage\n    }\n  }\n": types.GetQueryDetailPageDocument,
    "\n  fragment BdashQueryForQueryListItem on BdashQuery {\n    id\n    title\n  }\n": types.BdashQueryForQueryListItemFragmentDoc,
    "\n  fragment QueryGroupForQueryGroupListLayout on QueryGroup {\n    ...QueryGroupForQueryGroupList\n  }\n": types.QueryGroupForQueryGroupListLayoutFragmentDoc,
    "\n  fragment QueryGroupForQueryGroupList on QueryGroup {\n    id\n    ...QueryGroupForQueryGroupListItem\n  }\n": types.QueryGroupForQueryGroupListFragmentDoc,
    "\n  fragment QueryGroupForQueryGroupListItem on QueryGroup {\n    id\n    name\n  }\n": types.QueryGroupForQueryGroupListItemFragmentDoc,
    "\n  query GetQueryGroupListLayout {\n    queryGroups {\n      ...QueryGroupForQueryGroupListLayout\n    }\n  }\n": types.GetQueryGroupListLayoutDocument,
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
export function graphql(source: "\n  query TestSqlite3Connection($path: String!) {\n    connectionTestSQLite3(path: $path) {\n      ...ConnectionTestForDialogFormButtonList\n    }\n  }\n"): typeof import('./graphql').TestSqlite3ConnectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ConnectionTestForDialogFormButtonList on ConnectionTest {\n    success\n    message\n  }\n"): typeof import('./graphql').ConnectionTestForDialogFormButtonListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDataSourceListLayout {\n    dataSources {\n      ...DataSourceForDataSourceListLayout\n    }\n  }\n"): typeof import('./graphql').GetDataSourceListLayoutDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BdashQueryForQueryDetailPage on BdashQuery {\n    status\n    ...BdashQueryForEditor\n  }\n"): typeof import('./graphql').BdashQueryForQueryDetailPageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BdashQueryForEditor on BdashQuery {\n    id\n    title\n    body\n  }\n"): typeof import('./graphql').BdashQueryForEditorFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetQueryDetailPage($id: ID!) {\n    query: bdashQuery(id: $id) {\n      ...BdashQueryForQueryDetailPage\n    }\n  }\n"): typeof import('./graphql').GetQueryDetailPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BdashQueryForQueryListItem on BdashQuery {\n    id\n    title\n  }\n"): typeof import('./graphql').BdashQueryForQueryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QueryGroupForQueryGroupListLayout on QueryGroup {\n    ...QueryGroupForQueryGroupList\n  }\n"): typeof import('./graphql').QueryGroupForQueryGroupListLayoutFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QueryGroupForQueryGroupList on QueryGroup {\n    id\n    ...QueryGroupForQueryGroupListItem\n  }\n"): typeof import('./graphql').QueryGroupForQueryGroupListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QueryGroupForQueryGroupListItem on QueryGroup {\n    id\n    name\n  }\n"): typeof import('./graphql').QueryGroupForQueryGroupListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetQueryGroupListLayout {\n    queryGroups {\n      ...QueryGroupForQueryGroupListLayout\n    }\n  }\n"): typeof import('./graphql').GetQueryGroupListLayoutDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
