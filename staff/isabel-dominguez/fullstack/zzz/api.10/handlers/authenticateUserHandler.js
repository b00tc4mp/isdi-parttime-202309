import logic from '../logic/index.js'
import { NotFoundError, ContentError, CredentialsError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const { email, password } = req.body

        logic.authenticateUser(email, password)
            .then(userId => res.json(userId))//la función flecha toma el userId como argumento y lo devuelve en formato JSON.
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof CredentialsError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}