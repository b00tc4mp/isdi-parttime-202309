import jwt from 'jsonwebtoken'

import logic from '../logic/index.js'
import { NotFoundError, ContentError } from '../logic/errors.js'

export default (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)
        // Recogemos en la cabecera el elemento solicitado en GET con el Authorization
        // Mediante el .substring() indicamos con número el carácter donde empieza el contenido/dato

        const payload = jwt.verify(token, process.env.JWT_SECRET) 
        // Con jwt.verify() comprobamos que el token que recibimos coincide con la secret word

        const userId = payload.sub
        // Rescatamos el sub del payload que contiene el userId

        logic.retrieveUser(userId)
            .then(user => res.json(user))
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError) {
                    status = 404
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}