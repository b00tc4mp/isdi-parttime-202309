import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'
import { NotFoundError, ContentError, TokenError } from '../logic/errors.js'

export default (req, res) => {
  try {
    const token = req.headers.authorization.substring(7)

    // en vez de hacer crear la variable userId (option A), hacemos destructuring (option B):
    // option A
    // const payload = jwt.verify(token, process.env.JWT_SECRET)
    // const userId = payload.sub

    // option B
    const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

    logic
      .retrieveUser(userId)
      .then((user) => res.json(user))
      .catch((error) => {
        let status = 500

        if (error instanceof NotFoundError) {
          status = 404
        }

        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })

        return
      })
  } catch (error) {
    let status = 500

    if (error instanceof ContentError || error instanceof TypeError) {
      status = 406
    } else if (error instanceof JsonWebTokenError) {
      status = 401

      error = new TokenError(error.message)
    }

    res
      .status(status)
      .json({ error: error.constructor.name, message: error.message })
  }
}
