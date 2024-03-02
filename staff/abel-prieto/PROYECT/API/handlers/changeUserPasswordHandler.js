import jwt from 'jsonwebtoken'
import { errors } from 'com'
import changeUserPassword from '../logic/changeUserPassword.js'
const { JsonWebTokenError } = jwt
const { NotFoundError, CredentialsError, ContentError, TokenError } = errors

export default (req, res) => {
    const token = req.headers.authorization.substring(7)
    const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

    const { password, newPassword, againNewPassword } = req.body

    try {
        changeUserPassword(userId, password, newPassword, againNewPassword)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                if (error instanceof CredentialsError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof ContentError) {
            status = 409
        }

        if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}