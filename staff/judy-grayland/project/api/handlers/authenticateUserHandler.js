import jwt from 'jsonwebtoken'
import logic from '../logic/index.js'
import { errors } from '../../shared/index.js'
const { NotFoundError, CredentialsError, ContentError } = errors

export default (req, res) => {
  const { email, password } = req.body

  try {
    logic
      .authenticateUser(email, password)
      .then((user) => {
        const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXP,
        })
        const role = user.role
        res.json({ token, role })
        res.send()
      })
      .catch((error) => {
        let status = 500
        if (error instanceof NotFoundError) {
          status = 404
        } else if (error instanceof CredentialsError) {
          status = 401
        }
        res.status(status).json({
          error: error.constructor.name,
          message: error.constructor.message,
        })
      })
  } catch (error) {
    let status = 500

    if (error instanceof ContentError || error instanceof TypeError) {
      status = 406
    }
    res.status(status).json({
      error: error.constructor.name,
      message: error.message,
    })
  }
}
