import { app, BrowserWindow, ipcMain } from 'electron'
import { graphql } from 'graphql'
import initSqlJs from 'sql.js'
import { createDatabase } from './database'
import { migrateToLatest } from './migrations'
import { schema } from './schema'

const createWindow = (filePath: string) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
    },
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

  await Promise.all([app.whenReady(), migrateToLatest(db)])

  createWindow(filePath)
}
