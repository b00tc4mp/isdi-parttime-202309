import logic from '../logic/index.js'
import { NotFoundError, ContentError, CredentialsError } from '../logic/errors.js'
//const { ContentError, NotFoundError, TypeError, CredentialsError } = require('../logic/errors')

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { email, newEmail, repeatNewEmail } = req.body

        logic.changeEmailUser(userId, email, newEmail, repeatNewEmail, error => {
            if (error) {
                let status = 500


                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(204).send()
        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}