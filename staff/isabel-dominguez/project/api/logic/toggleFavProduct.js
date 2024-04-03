import { User, Product } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors


function toggleFavProduct(userId, productId) {
    validate.id(userId, 'user id')
    validate.id(productId, 'product id')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return Product.findById(productId).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(product => {
                    if (!product)
                        throw new NotFoundError('product not found')

                    const index = user.favs.findIndex(productObjectId => productObjectId.toString() === productId)

                    if (index < 0)
                        user.favs.push(productId)
                    else
                        user.favs.splice(index, 1)

                    return user.save()
                        .catch(error => { throw new SystemError(error.message) })
                        .then(() => { })
                })

        })

}

export default toggleFavProduct