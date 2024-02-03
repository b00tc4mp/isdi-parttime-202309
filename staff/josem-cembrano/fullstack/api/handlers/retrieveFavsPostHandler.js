import logic from '../logic/index.js'
import { ContentError, NotFoundError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        logic.retrieveFavPosts(userId, (error, posts) => {
            if (error) {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(posts)
        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}