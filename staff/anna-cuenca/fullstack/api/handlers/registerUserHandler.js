import logic from '../logic/index.js'
import { errors } from 'com'
const { DuplicityError, ContentError } = errors

export default (req, res) => {
    const { name, email, password } = req.body //queremos que nos devuelva la respuesta en el body
    try {
        logic.registerUser(name, email, password)
            // no hacemos un callback(error), le indicamos al navegador el tipo de error en forma de respuesta (res)
            .then(() => res.status(201).send())
            .catch(error => {

                let status = 500
                if (error instanceof DuplicityError)
                    status = 409
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }) //todo ha ido bien, se lo indicamos al navegador

    } catch (error) {
        let status = 500
        if (error instanceof ContentError || error instanceof TypeError)
            status = 406
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
