import logic from '../logic/index.js'
import { ContentError, DuplicityError } from '../logic/errors.js'

export default (req, res) => {

    try {
        const { name, email, password } = req.body

        // llamamos a lógica
        logic.registerUser(name, email, password, error => {
            if (error) {
                // establecemos un código de error predeterminado
                let status = 500

                if (error instanceof DuplicityError)
                    status = 409

                // envío respuesta de error
                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            // envío de respuesta, happy path
            res.status(201).send()
        })
    } catch (error) {
        // código de error predeterminado 500
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })

    }
}