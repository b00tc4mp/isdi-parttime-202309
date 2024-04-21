import { errors } from 'com'
import { Recipe } from '../data/models.js'

const { NotFoundError, SystemError } = errors

function retrieveRecipeById(recipeId) {
    return Recipe.findById(recipeId).populate('products').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(recipe => {
            if (!recipe)
                throw new NotFoundError(`Recipe not found`)

            recipe.id = recipe._id.toString()

            return recipe
        })
}

export default retrieveRecipeById