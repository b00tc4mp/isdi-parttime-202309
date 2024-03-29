import { Order, User } from '../data/models.js'

import { errors, validate } from 'com'
const { SystemError, NotFoundError } = errors


function deleteOrder(userId, orderId) {
    validate.id(userId, 'user id')
    validate.id(orderId, 'order id')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            return Order.findByIdAndDelete(orderId)
                .then(order => {
                    if (!order) {
                        throw new NotFoundError('Order not found')
                    }
                    return order
                })
        })
}

export default deleteOrder