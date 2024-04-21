import { validate, errors } from 'com'
import { Recipe } from '../data/models.js'

const { SystemError } = errors

function createRecipe(name, description, image, products, type) {
    validate.text(name, 'name')
    validate.text(description, 'description')
    validate.text(image, 'image')
    validate.array(products, 'products')
    validate.text(type, 'type')

    return Recipe.create({ name, description, image, products, type })
        .catch(error => { throw new SystemError(error.message) })
}

export default createRecipe