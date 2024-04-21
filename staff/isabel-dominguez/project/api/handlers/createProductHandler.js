import logic from '../logic/index.js'
import { errors } from 'com'

const { NotFoundError, ContentError } = errors

export default (req, res) => {
    try {
        const { name, description, image, price, type } = req.body

        logic.createProduct(name, description, image, price, type)
            .then(() => res.status(201).send())
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

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}