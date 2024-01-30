import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import {errors} from 'com'

import logic from '../logic/index.js'
const { NotFoundError, ContentError, TokenError } = errors
export default (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)

        const { sub: userid } = jwt.verify(token, process.env.JWT_SECRET)

        logic.retrieveFavPosts(userId)
            .then(() => res.json(posts))
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
        else if (error instanceof JsonWebTokenError) {
            status = 401

            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
