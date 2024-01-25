import logic from '../logic/index.js'
import { NotFoundError, ContentError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7) /* cogemos el authorization y cortamos a partir del carácter 7 (para tener solo el id) */

        logic.retrieveUser(userId, (error, user) => {
            if (error) {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(user)
        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}