import { app, BrowserWindow, ipcMain } from 'electron'
import { graphql } from 'graphql'
import initSqlJs from 'sql.js'
import { createDatabase } from './database'
import { schema } from './schema'

const createWindow = (filePath: string) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile(filePath)
}

export const main = async (filePath: string) => {
  const SQL = await initSqlJs()
  const db = createDatabase(new SQL.Database())

  ipcMain.handle('graphql', async (_event, source: string, variableValues: any) => {
    const result = await graphql({
      schema,
      source,
      contextValue: { db },
      variableValues,
    })
    return result
  })

  await app.whenReady()
  createWindow(filePath)
}
