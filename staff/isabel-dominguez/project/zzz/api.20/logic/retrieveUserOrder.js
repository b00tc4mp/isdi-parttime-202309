import { User, Order } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError } = errors

function retrieveUserOrder(userId) {
    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }
            return Order.findOne({ user: userId }).populate('products.product')
        })
        .then(order => {
            return order || null
        })
}

export default retrieveUserOrder