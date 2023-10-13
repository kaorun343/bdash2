interface Window {
  request: (query: any, variables?: any) => Promise<any>
  electronAPI: {
    graphql: (query: string, variables: any) => Promise<any>
  }
}
