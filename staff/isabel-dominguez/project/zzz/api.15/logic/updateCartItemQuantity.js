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

            const productIndex = order.products.findIndex(item => item.product.equals(productId))

            if (productIndex !== -1) {
                const newQuantity = order.products[productIndex].quantity + quantityDelta

                if (newQuantity <= 0) {
                    order.products.splice(productIndex, 1)
                } else {
                    order.products[productIndex].quantity = newQuantity
                }
            } else {
                if (quantityDelta > 0) {
                    order.products.push({ product: productId, quantity: quantityDelta })
                }
            }

            return order.save()
        })
}

export default updateCartItemQuantity