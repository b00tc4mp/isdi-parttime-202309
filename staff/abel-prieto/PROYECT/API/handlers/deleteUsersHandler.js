import jwt from 'jsonwebtoken'
import deleteUsers from '../logic/deleteUsers.js'
import { errors } from 'com'

const { JsonWebTokenError } = jwt
const { NotFoundError, AuthorizationError, TokenError, ContentError } = errors


export default async (req, res) => {
    const token = req.headers.authorization.substring(7)
    const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

    const { userToDelete } = req.params

    try {
        await deleteUsers(userId, userToDelete)
        res.status(201).send()

    } catch (error) {
        let status = 500

        if (error instanceof NotFoundError) {
            status = 404
        }

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        if (error instanceof AuthorizationError) {
            status = 409
        }

        if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}