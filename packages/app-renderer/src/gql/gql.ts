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


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
