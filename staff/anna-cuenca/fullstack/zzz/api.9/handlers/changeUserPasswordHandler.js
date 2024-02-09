import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'
import { errors } from 'com'
const { NotFoundError, ContentError, TokenError, CredentialsError } = errors

export default (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)

        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)


        const { password, newPassword, newPasswordConfirm } = req.body

        logic.changePasswordUser(userId, password, newPassword, newPasswordConfirm)
            .then(() => res.status(204).send())
            .catch(error => {


                let status = 500


                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })


            })


    } catch (error) {
        let status = 500

        if (error instanceof ContentError)
            status = 406

        if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}