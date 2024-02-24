import retrieveGuest from "../logic/retrieveGuest.js"
import { errors } from 'com'
const { NotFoundError, ContentError } = errors

export default (req, res) => {
    try {
        retrieveGuest()
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            })
            .then(guest => res.json(guest))
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}