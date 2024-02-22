import retrieveUser from '../logic/retrieveUser.js'
import { errors } from 'com'
const { NotFoundError, ContentError } = errors

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        retrieveUser(userId)
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            })
            .then(user => res.json(user))
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.satus(status).json({ error: error.constructor.name, message: error.message })
    }
}