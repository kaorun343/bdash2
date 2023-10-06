import { ActionFunction } from 'react-router-dom'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  console.info(JSON.parse(formData.get('serialized') as string))

  return {
    title: 'Data Sources',
  }
}
