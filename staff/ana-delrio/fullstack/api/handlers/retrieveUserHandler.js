const logic = require('../logic')
const { ContentError, DuplicityError, NotFoundError, CredentialsError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        // eliminamos los primeros 7 caracteres del token. Esto asume que los primeros 7 caracteres representan la palabra "Bearer" seguida de un espacio, y se están eliminando para obtener solo el ID del usuario
        const userId = req.headers.authorization.substring(7)

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