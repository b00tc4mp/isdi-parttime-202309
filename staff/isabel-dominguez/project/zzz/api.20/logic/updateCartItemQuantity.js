import { Order } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError } = errors

function updateCartItemQuantity(productId, orderId, quantityDelta) {
    return Order.findById(orderId)
        .catch(error => { throw new SystemError(error.message) })
        .then(order => {
            if (!order) {
                throw new NotFoundError('Order not found')
            }

            const existingProductIndex = order.products.findIndex(item => item.product.equals(productId))

            if (existingProductIndex !== -1) {
                // Si el producto ya existe en la lista de productos de la orden
                order.products[existingProductIndex].quantity += quantityDelta

                // Si la nueva cantidad es menor o igual a 0, elimina el producto de la orden
                if (order.products[existingProductIndex].quantity <= 0) {
                    order.products.splice(existingProductIndex, 1)
                }
            } else {
                if (quantityDelta > 0) {
                    // Si el producto no existe en la lista de productos de la orden y la cantidadDelta es positiva
                    // Agrega el producto a la orden con la cantidad especificada
                    order.products.push({ product: productId, quantity: quantityDelta })
                }
            }

            return order.save()
        })
}

export default updateCartItemQuantity