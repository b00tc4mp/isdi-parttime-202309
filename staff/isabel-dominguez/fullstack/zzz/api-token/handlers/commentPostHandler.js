import logic from '../logic/index.js'
import { errors } from 'com'

const { NotFoundError, ContentError, TokenError } = errors

export default (req, res) => {
    try {

        const token = req.headers.authorization.substring(7)

        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        const { postId } = req.params

        const { comment } = req.body

        logic.commentPost(userId, postId, comment)
            .then(name => res.json(name))
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