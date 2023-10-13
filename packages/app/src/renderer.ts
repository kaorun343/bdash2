import { init } from '@bdash2/app-renderer'
import '@bdash2/app-renderer/dist/style.css'

const el = document.getElementById('app')
if (!el) {
  throw new Error('Element not found')
}

init(el).catch((error) => {
  console.error(error)
})
