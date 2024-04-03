import { User, Order, Product } from '../data/models.js'
import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors


function addToCart(productId, userId) {
    validate.id(productId, 'product id')
    validate.id(userId, 'user id')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')

            return Order.findOne({ user: userId })
                .then(order => {
                    if (!order) {
                        return Product.findById(productId)
                            .then(product => {
                                if (!product)
                                    throw new NotFoundError('Product not found')

                                return Order.create({ user: userId, products: [{ product: productId, quantity: 1 }] })
                            })
                    } else {
                        return Product.findById(productId)
                            .then(product => {
                                if (!product)
                                    throw new NotFoundError('Product not found')

                                const existingProduct = order.products.find(item => item.product.equals(productId))

                                if (!existingProduct) {
                                    order.products.push({ product: productId, quantity: 1 })
                                } else {
                                    existingProduct.quantity += 1
                                }

                                return order.save()
                            })
                    }
                })
        })
}

export default addToCart