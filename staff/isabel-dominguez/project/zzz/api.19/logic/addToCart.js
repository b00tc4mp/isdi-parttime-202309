import { User, Order, Product } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError } = errors

function addToCart(productId, userId) {
    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')

            // Busca cualquier orden asociada al usuario
            return Order.findOne({ user: userId })
                .then(order => {
                    // Si no hay ninguna orden, crea una nueva
                    if (!order) {
                        return Product.findById(productId)
                            .then(product => {
                                if (!product)
                                    throw new NotFoundError('Product not found')

                                // Crea una nueva orden con el producto y lo guarda
                                return Order.create({ user: userId, products: [{ product: productId, quantity: 1 }] })
                            })
                    } else {
                        // Si ya hay una orden, agrega el producto a esa orden
                        return Product.findById(productId)
                            .then(product => {
                                if (!product)
                                    throw new NotFoundError('Product not found')

                                // Verifica si el producto ya está en la orden
                                const existingProduct = order.products.find(item => item.product.equals(productId))

                                if (!existingProduct) {
                                    // Si el producto no está en la orden, agrégalo con cantidad 1
                                    order.products.push({ product: productId, quantity: 1 })
                                } else {
                                    // Si el producto ya está en la orden, incrementa su cantidad
                                    existingProduct.quantity += 1
                                }

                                // Guarda los cambios en la orden y devuelve la orden actualizada
                                return order.save()
                            })
                    }
                })
        })
}

export default addToCart