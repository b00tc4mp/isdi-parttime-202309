import { Order } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError } = errors


function deleteOrder(orderId) {
    return Order.findByIdAndUpdate(orderId, { status: 'canceled' })
        .catch(error => { throw new SystemError(error.message) })
        .then(order => {
            if (!order) {
                throw new NotFoundError('Order not found')
            }
            return order
        })
}

export default deleteOrder