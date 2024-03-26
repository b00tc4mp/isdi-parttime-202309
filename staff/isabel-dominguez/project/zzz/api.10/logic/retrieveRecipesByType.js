import { errors } from 'com'
import { Recipe } from '../data/models.js'

const { NotFoundError, SystemError } = errors

function retrieveRecipesByType(type) {

    return Recipe.find({ type }).populate('products').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(recipes => {
            if (!recipes || recipes.length === 0)
                throw new NotFoundError(`Recipes of type ${type} not found`)

            recipes.forEach(recipe => {
                recipe.id = recipe._id.toString()
            })

            return recipes
        })
}

export default retrieveRecipesByType