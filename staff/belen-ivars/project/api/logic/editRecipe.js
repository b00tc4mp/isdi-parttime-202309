import { validate } from "com"
import { User, Recipe } from '../data/models.js'
import { NotFoundError, ContentError, SystemError } from "com/errors.js"


async function editRecipe(userId, recipeId, title, description, image) {
	validate.id(userId, 'user id')
	validate.id(recipeId, 'recipe id')

	if (title) validate.text(title, 'title')
	if (description) validate.text(description, 'description')
	//if (image) validate.image pròximament

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

	let recipeUpdated

	try {
		if (title)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { title: title })
			} catch (error) {
				throw new SystemError(error.message)
			}

		if (description)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { description: description })
			} catch (error) {
				throw new SystemError(error.message)
			}


		if (image)
			try {
				recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { image: image })
			} catch (error) {
				throw new SystemError(error.message)
			}

	} catch (error) {
		throw new ContentError('recipe cannot be edited')
	}
	return recipeUpdated

}

export default editRecipe