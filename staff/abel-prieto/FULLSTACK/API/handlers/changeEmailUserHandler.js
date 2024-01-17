import logic from '../logic/index.js'
import { NotFoundError, CredentialsError, ContentError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const { newEmail, againNewEmail, password } = req.body

        logic.changeEmailUser(userId, newEmail, againNewEmail, password, error => {
            if (error) {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                if (error instanceof CredentialsError) {
                    status = 401
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).send()
            // Envía código 200 de 'OKEY'

        })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}