import { Order } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError } = errors

function retrieveUserOrder(userId) {
    return Order.findOne({ user: userId, status: 'active' }).populate('products.product')
        .catch(error => { throw new SystemError(error.message) })
        .then(order => {
            if (!order) {
                throw new NotFoundError('Active order not found')
            }

            return order
        })
}

export default retrieveUserOrder