import { validate, errors } from '../../../shared'
const { SystemError } = errors

function createResource({
  title,
  description,
  resourceType,
  topic,
  link,
  image,
  author,
  ageRange,
}) {
  validate.text(title, 'title')
  validate.text(description, 'description')
  validate.resourceType(resourceType, 'resourceType')
  validate.tagArray(topic, 'topic array')

  if (resourceType === 'activity') {
    validate.text(link, 'link')
    validate.text(image, 'image')
  }
  if (resourceType === 'book') {
    validate.text(author, 'author')
    validate.text(image, 'image')
    // validate.ageRange(ageRange, 'ageRange')
  }
  if (resourceType === 'specialDate') {
    validate.text(link, 'link')
  }

  // prepare the request (body)
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      resourceType,
      topic,
      link,
      image,
      author,
      ageRange,
    }),
  }

  // send the request to the backend
  return fetch(`${import.meta.env.VITE_API_URL}/resources`, req)
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

export default createResource
