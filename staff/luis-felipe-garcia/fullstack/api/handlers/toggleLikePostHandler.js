
import logic from '../logic/index.js'
import { SystemError, DuplicityError, NotFoundError, ContentError } from '../logic/errors.js'


export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { postId } = req.params

        logic.toggleLikePost(userId, postId, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }

            res.status(204).send()
        })

    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })

    }
}