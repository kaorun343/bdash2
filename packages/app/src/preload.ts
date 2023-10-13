import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  graphql: async (query: string, variables: any) => {
    return await ipcRenderer.invoke('graphql', query, variables)
  },
})
