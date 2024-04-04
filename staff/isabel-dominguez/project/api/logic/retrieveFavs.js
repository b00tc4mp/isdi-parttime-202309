import { User, Product } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors

function retrieveFavs(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId)
        .lean()
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')

            return Product.find({ _id: { $in: user.favs } }).select('-__v').lean()
                .then(products => {
                    return products.map(product => {
                        product.id = product._id.toString()
                        product.fav = user.favs.some(productObjectId => productObjectId.toString() === product.id)
                        return product
                    })
                })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
}

export default retrieveFavs