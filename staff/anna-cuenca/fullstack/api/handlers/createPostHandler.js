import logic from '../logic/index.js'
import { NotFoundError, ContentError, CredentialsError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { image, text } = req.body
        logic.createPost(userId, image, text)
            .then(() => res.status(201).send())
            .catch(error => {

                let status = 400
                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404
                res.status(status).json({ error: error.constructor.name, message: error.message })

            })


    } catch (error) {
        let status = 400
        if (error instanceof ContentError)
            status = 406
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}