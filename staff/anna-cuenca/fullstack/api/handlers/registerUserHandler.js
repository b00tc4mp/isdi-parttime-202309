import logic from '../logic/index.js'
import { NotFoundError, ContentError, CredentialsError } from '../logic/errors.js'

export default (req, res) => {
    const { name, email, password } = req.body //queremos que nos devuelva la respuesta en el body
    try {
        logic.registerUser(name, email, password, error => {
            if (error) {
                // no hacemos un callback(error), le indicamos al navegador el tipo de error en forma de respuesta (res)
                let status = 500
                if (error instanceof DuplicityError)
                    status = 409
                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }
            res.status(201).send() //todo ha ido bien, se lo indicamos al navegador
        })
    } catch (error) {
        let status = 500
        if (error instanceof ContentError || error instanceof TypeError)
            status = 406
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}