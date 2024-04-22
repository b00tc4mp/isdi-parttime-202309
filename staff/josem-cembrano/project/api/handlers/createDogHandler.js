import jwt from 'jsonwebtoken'
import logic from '../logic/index.js'
import { errors } from 'com'

const { ContentError, NotFoundError, TokenError, JsonWebTokenError } = errors

export default async (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)

        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        const { image, afix, name, gender, birthDate, puppy, text } = req.body

        await logic.createDog(userId, image, afix, name, gender, birthDate, puppy, text)

        res.status(201).send()
    } catch (error) {
        let status = 500
        let erorr

        if (error instanceof NotFoundError) {
            status = 404
        } else if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        } else if (error instanceof JsonWebTokenError) {
            status = 401
            erorr = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
