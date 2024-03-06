import { errors } from 'com'
import { Product } from '../data/models.js'

const { NotFoundError, SystemError } = errors

function retrieveProducts() {

    return Product.find().lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(products => {
            if (!products || products.length === 0)
                throw new NotFoundError('Products not found')


            products.forEach(product => {
                product.id = product._id.toString()
            })

            return products
        })
}

export default retrieveProducts