import { validate } from 'com'
import { User, Recipe } from '../data/models.js'
import { SystemError } from 'com/errors.js'
import { NotFoundError } from 'com/errors.js'

export default async function toggleFavRecipe(userId, recipeId) {
	validate.id(userId, 'user id')
	validate.id(recipeId, 'user id')

	let user

	try {
		user = await User.findById(userId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user)
		throw new NotFoundError('user not found')

	let recipe

	try {
		recipe = await Recipe.findById(recipeId)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!recipe)
		throw new NotFoundError('recipe not found')

	const index = user.favs.findIndex(recipeObjectId => recipeObjectId.toString() === recipeId)

	if (index < 0) {
		try {
			await User.findOneAndUpdate({ _id: user.id }, { $push: { favs: recipeId } })
		} catch (error) {
			throw new SystemError(error.message)
		}
	} else {
		try {
			await User.findOneAndUpdate({ _id: user.id }, { $pull: { favs: recipeId } })
		} catch (error) {
			throw new SystemError(error.message)
		}
	}
}