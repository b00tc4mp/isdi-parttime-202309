import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'
import { errors } from 'com'
const { NotFoundError, ContentError, TokenError } = errors

export default (req, res) => {
    try {

        const { userId } = req.params // se extrae el id de los parámetros de la ruta // cambiarlo a targetUserId

        const token = req.headers.authorization.substring(7) //extraemos el token de la authorización

        jwt.verify(token, process.env.JWT_SECRET) //se valida el token

        logic.retrieveUserPosts(userId) //llamamos a la lógica de retrieveUserPosts //targetUserId

            .then(posts => res.json(posts)) //recuperamos los posts del usuario y se responde a la petición con los posts en formato JSON
            .catch(error => { //si hay algún error se llega aqui

                let status = 500


                if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

            })


    } catch (error) { //miramos el tipo de error, para devolverlo correctamente
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        else if (error instanceof JsonWebTokenError)
            status = 401
        error = new TokenError(error.message)

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}