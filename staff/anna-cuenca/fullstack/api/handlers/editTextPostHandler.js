import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'
import { errors } from 'com'
const { NotFoundError, ContentError, TokenError } = errors

export default (req, res) => {
    try {

        const token = req.headers.authorization.substring(7)
        //const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const userId = payload.sub

        const { postId } = req.params
        const { text } = req.body

        logic.editTextPost(userId, postId, text)
            .then(() => res.status(202).send())
            .catch(error => {

                let status = 500


                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

            })


    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}