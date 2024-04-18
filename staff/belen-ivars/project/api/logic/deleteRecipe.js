import { validate } from "com"
import { User, Recipe } from '../data/models.js'
import { ContentError, NotFoundError } from "com/errors.js"

async function deleteRecipe(userId, recipeId) {
	validate.id(userId, 'user id')
	validate.id(recipeId, 'recipe id')

	const user = await User.findById(userId)

	if (!user)
		throw new NotFoundError('user not found')


	const recipe = await Recipe.findById(recipeId)
	if (user.id !== recipe.author.toString())
		throw new NotFoundError('recipe does not belong to that user')

	try {
		await Recipe.findByIdAndDelete(recipe.id)
	} catch (error) {
		throw new ContentError('recipe cannot be deleted')
	}
}

export default deleteRecipe