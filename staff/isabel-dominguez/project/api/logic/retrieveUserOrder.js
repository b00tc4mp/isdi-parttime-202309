import { Order } from '../data/models.js'

import { errors } from 'com'
const { SystemError } = errors

function retrieveUserOrder(userId) {
    return Order.findOne({ user: userId }).populate('products.product')
        .catch(error => { throw new SystemError(error.message) })
        .then(order => {
            if (!order) {
                return null
            }
            return order
        })
}

export default retrieveUserOrder