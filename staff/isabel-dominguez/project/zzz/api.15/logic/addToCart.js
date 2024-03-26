import { User, Order, Product } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError } = errors

function addToCart(productId, userId) {
    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')

            return Order.findOne({ user: userId, status: 'active' })
                .then(order => {
                    if (!order) {
                        return Order.create({ user: userId, status: 'active' })
                            .then(newOrder => {
                                return Product.findById(productId)
                                    .then(product => {
                                        if (!product)
                                            throw new NotFoundError('Product not found')

                                        newOrder.products.push({ product: productId, quantity: 1 })
                                        return newOrder.save()
                                    })
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