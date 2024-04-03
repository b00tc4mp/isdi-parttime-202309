import jwt from 'jsonwebtoken'
import logic from '../logic/index.js'
import { errors } from 'com'

const { NotFoundError, ContentError, TokenError } = errors
const { JsonWebTokenError } = jwt

export default async (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        const { dogId } = req.params

        await logic.deleteDog(userId, dogId)

        res.status(200).send()
    } catch (error) {
        let status = 500
        let errorMessage

        if (error instanceof NotFoundError) {
            status = 404
        } else if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        } else if (error instanceof JsonWebTokenError) {
            status = 401
            errorMessage = new TokenError(error.message).message
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}