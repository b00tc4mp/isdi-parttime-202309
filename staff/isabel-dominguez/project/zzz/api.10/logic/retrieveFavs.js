import { User, Product } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError } = errors

function retrieveFavs(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')

            const favoriteProductIds = user.favs.map(fav => fav.toString())

            return Product.find({ _id: { $in: favoriteProductIds } }).lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
                .then(products => {
                    products.forEach(product => {
                        product.id = product._id.toString()
                        delete product._id;

                        product.isFavorite = true
                    })

                    return products
                })
        })
}

export default retrieveFavs


// Lo de los detalles lo haré igual que los recetas ruta/rawMaterial/id del producto