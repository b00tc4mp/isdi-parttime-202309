import { validate, errors } from '../../../shared'
const { SystemError } = errors

function editResource(resourceId, newData) {
  if (newData.title) validate.text(newData.title, 'title')
  if (newData.description) validate.text(newData.description, 'description')
  if (newData.resourceType)
    validate.resourceType(newData.resourceType, 'resourceType')
  if (newData.topic) validate.tagArray(newData.topic, 'topic array')
  if (newData.image) validate.text(newData.image, 'image')
  if (newData.link) validate.text(newData.link, 'link')
  if (newData.author) validate.text(newData.author, 'author')

  // prepare the request (body)
  const req = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: resourceId, newData }),
  }

  // send the request to the backend
  return fetch(`${import.meta.env.VITE_API_URL}/resources/${resourceId}`, req)
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((res) => {
      if (!res.ok) {
        return res
          .json()
          .catch((error) => {
            throw new SystemError(error.message)
          })
          .then((body) => {
            console.log('error from server', body.error)
            throw new errors[body.error](body.message)
          })
      }
    })
}

export default editResource
