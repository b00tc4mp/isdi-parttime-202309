import { errors } from '../../../shared'
import { SystemError } from '../../../shared/errors'

function retrieveResources() {
  const req = {
    method: 'GET',
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

      return res.json()
    })
}

export default retrieveResources
