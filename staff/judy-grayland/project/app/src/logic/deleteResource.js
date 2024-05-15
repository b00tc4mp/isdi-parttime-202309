import { errors } from '../../../shared'
import { SystemError } from '../../../shared/errors'
import context from './context'

function deleteResource(id) {
  const req = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetch(`${import.meta.env.VITE_API_URL}/resources/${id}`, req)
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

export default deleteResource
