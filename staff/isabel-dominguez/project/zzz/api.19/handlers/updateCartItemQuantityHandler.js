import { errors } from 'com'
import logic from '../logic/index.js'

const { NotFoundError, ContentError, TokenError } = errors

export default (req, res) => {

    try {
        const { productId, orderId, quantityDelta } = req.params

        const quantityDeltaNumber = parseInt(quantityDelta)

        logic.updateCartItemQuantity(productId, orderId, quantityDeltaNumber)
            .then(() => res.status(200).send())
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
        } else if (error instanceof JsonWebTokenError) {
            status = 401
            error = new TokenError(error.message)
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}