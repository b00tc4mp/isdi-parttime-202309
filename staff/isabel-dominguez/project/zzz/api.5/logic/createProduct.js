import { validate, errors } from 'com'
import { Product } from '../data/models.js'

const { SystemError } = errors

function createProduct(name, image, price, type) {
    validate.text(name, 'name')
    validate.text(image, 'image')
    validate.number(price, 'price')
    validate.text(type, 'type')

    return Product.create({ name, image, price, type })
        .catch(error => { throw new SystemError(error.message) })
}

export default createProduct