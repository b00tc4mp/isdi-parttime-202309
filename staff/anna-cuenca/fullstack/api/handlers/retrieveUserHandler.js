import jwt from 'jsonwebtoken'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'
import { errors } from 'com'
const { NotFoundError, ContentError, TokenError } = errors

export default (req, res) => { //no hay un jsonBodyParser porque no enviamos nada en el body, enviamos una cabecera con el id
    try {

        //antes de pasar el id del usuario validemos el token para comprobar que es el usuario correcto 
        const token = req.headers.authorization.substring(7)
        //el verify comprueba toda la integridad del token contra el secreto 
        // si el verify va mal, va al catch, pero si va bien, nos devuelve el payload (un obejto con lo s datos)
        //const payload = jwt.verify(token, process.env.JWT_SECRET)

        // y del payload qué nos interesa? El userId para ponerlo en la constante de userId, por lo que tenemos que hacer
        // el payload.sub y quedarnos con el sub
        // de manera que si alguien me envía un payload inválido, no podrá pasar 

        //const userId = payload.sub

        // Otra manera de hacer lo de la línea de arriba, haciéndolo con destructuring

        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)



        logic.retrieveUser(userId)
            .then(user => res.json(user))
            .catch(error => {

                let status = 500
                if (error instanceof NotFoundError)
                    status = 404
                res.status(status).json({ error: error.constructor.name, message: error.message })


            })


    } catch (error) {
        let status = 500
        if (error instanceof ContentError || error instanceof TypeError)
            status = 406
        else if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}