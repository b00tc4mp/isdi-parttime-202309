import { Order } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors

function updateCartItemQuantity(productId, orderId, quantityProduct) {
    validate.id(productId, 'product id')
    validate.id(orderId, 'order id')
    validate.number(quantityProduct, 'quantity product')

    return Order.findById(orderId)
        .catch(error => { throw new SystemError(error.message) })
        .then(order => {
            if (!order) {
                throw new NotFoundError('Order not found')
            }

            const orderProductsList = order.products.findIndex(item => item.product.equals(productId))

            if (orderProductsList !== -1) {
                order.products[orderProductsList].quantity += quantityProduct

                if (order.products[orderProductsList].quantity <= 0) {
                    order.products.splice(orderProductsList, 1)
                }
            } else {
                if (quantityProduct > 0) {
                    order.products.push({ product: productId, quantity: quantityProduct })
                }
            }

            return order.save()
        })
}

export default updateCartItemQuantity