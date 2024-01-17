import logic from '../logic/index.js'
import { NotFoundError, ContentError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const postId = req.params.postId

        const { postText } = req.body

        logic.updatePostText(userId, postId, postText, error => {
            if (error) {
                let status = 500

                if (status instanceof NotFoundError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(202).send()
            // Envía código 202 de 'ACEPTADO'

        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message }) 
    } 
}