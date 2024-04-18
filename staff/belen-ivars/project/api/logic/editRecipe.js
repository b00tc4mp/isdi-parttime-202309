import { validate } from "com"
import { User, Recipe } from '../data/models.js'
import { NotFoundError, ContentError } from "com/errors.js"


async function editRecipe(userId, recipeId, title, description, image) {
	validate.id(userId, 'user id')
	validate.id(recipeId, 'recipe id')

	if (title) validate.text(title, 'title')
	if (description) validate.text(description, 'description')
	//if (image) validate.image pròximament

	const user = await User.findById(userId)
	if (!user)
		throw new NotFoundError('user not found')

	const recipe = await Recipe.findById(recipeId)
	if (!recipe)
		throw new NotFoundError('recipe not found')

	let recipeUpdated

	try {
		if (title)
			recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { title: title })

		if (description)
			recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { description: description })

		if (image)
			recipeUpdated = await Recipe.findOneAndUpdate({ _id: recipe.id }, { image: image })


	} catch (error) {
		throw new ContentError('recipe cannot be edited')
	}
	return recipeUpdated

}

export default editRecipe