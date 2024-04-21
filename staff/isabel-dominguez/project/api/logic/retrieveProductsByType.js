import { Product } from '../data/models.js'

import { validate, errors } from 'com'
const { NotFoundError, SystemError } = errors

function retrieveProductsByType(type) {
    validate.text(type, 'type')

    return Product.find({ type }).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(products => {
            if (!products || products.length === 0)
                throw new NotFoundError(`Products of type ${type} not found`)

            products.forEach(product => {
                product.id = product._id.toString()
            })

            return products
        })
}

export default retrieveProductsByType