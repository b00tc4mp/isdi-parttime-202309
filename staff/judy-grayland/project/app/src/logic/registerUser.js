import { validate, errors } from '../../../shared'
import { SystemError } from '../../../shared/errors'

function registerUser(name, email, password) {
  validate.text(name, 'name')
  validate.email(email, 'email')
  validate.password(password, 'password')

  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }

  return fetch(`${import.meta.env.VITE_API_URL}/users`, req)
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

export default registerUser
