import { validate, errors } from 'com'
import { Product } from '../data/models.js'

const { SystemError } = errors

function createProduct(name, description, image, price, type) {
    validate.text(name, 'name')
    validate.text(description, 'description')
    validate.text(image, 'image')
    validate.number(price, 'price')
    validate.text(type, 'type')

    return Product.create({ name, description, image, price, type })
        .catch(error => { throw new SystemError(error.message) })
}

export default createProduct