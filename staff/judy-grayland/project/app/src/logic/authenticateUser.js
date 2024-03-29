import { validate, errors } from '../../../shared'
import { SystemError } from '../../../shared/errors'
import context from './context'

function authenticateUser(email, password) {
  validate.email(email, 'email')
  validate.password(password, 'password')

  // It constructs an http request object (req) for making a POST request to the authentification endpoint (/users/auth) with the provided email and password. the request body is JSON formatted with the email and password properties.
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }

  /* 
  1. The function uses fetch to send the request to the server and .then() to handle the response from the server. 
  2. If the response is not ok, it parses the response body as JSON to extract the error information. 
  3. If the response is ok, it parses the response body as JSON to extract the authentication token. The then() callback method takes a function an as argument. In this case the function accepts an object parameter (in this case the response JSON object) and it extracts the token property using destructuring. The token, a JSON Web Token, consists of three parts: header, payload and signature.
  4. It extracts the payload part by slicing.
  5. The payload is base64-encoded so it's decoded using the atob function.
  6. The decoded payload string (payloadJson) is then parsed into a JS object (payload) using json.parse()
  7. From the payload object, the sub property is extracted, which is usually the user id. 
  8. The extracted userId is assigned to context.sessionUserId, to store the currently authenticated user's id in the application's context.
  9. The original token obtained from the server response is assigned to context.token which may be useful for subsequent requests requiring authentification.
  
  */
  return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, req)
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

      res
        .json()
        .then(({ token }) => {
          const payloadB64 = token.slice(
            token.indexOf('.') + 1,
            token.lastIndexOf('.')
          )

          const payloadJson = atob(payloadB64)
          const payload = JSON.parse(payloadJson)
          const userId = payload.sub

          context.sessionUserId = userId
          context.token = token
        })
        .catch((error) => {
          throw new SystemError(error)
        })
    })
}

export default authenticateUser
