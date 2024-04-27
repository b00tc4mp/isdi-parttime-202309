import { validate, errors } from '../../../shared'
import { SystemError } from '../../../shared/errors'

function createActivity(title, description, image, link) {
  validate.title(title, 'title')
  validate.description(description, 'description')
  validate.image(image, 'image')
  validate.link(link, 'link')

  const req = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, image, link }),
  }

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
            throw new errors[body.error](body.message)
          })
      }
    })
}

export default createActivity
