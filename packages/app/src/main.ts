import { main } from '@bdash2/app-main'

const filename = 'dist/index.html'

main(filename).catch((error) => {
  console.error(error)
})
