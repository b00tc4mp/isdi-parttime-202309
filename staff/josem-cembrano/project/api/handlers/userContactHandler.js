import logic from '../logic/index.js'
import { errors } from 'com'

const { NotFoundError, ContentError, TokenError } = errors

export default async (req, res) => {
    try {
        const { name, email, phone, message } = req.body

        await logic.userContact(name, email, phone, message)

        res.status(201).json({ message: 'Mensaje enviado' })
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