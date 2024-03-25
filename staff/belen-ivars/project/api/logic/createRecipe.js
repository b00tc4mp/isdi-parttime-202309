import { validate, errors } from 'com'
import { Recipe, User } from '../data/models.js'
const { ContentError, NotFoundError } = errors

async function createRecipe(userId, title, description, image) {
	validate.text(title, 'title')
	validate.text(description, 'description')
	validate.text(image, 'image')
	validate.id(userId, 'id')

	const user = await User.findById(userId)

	if (!user)
		throw new NotFoundError('user not found')
	console.log('user founded')

	let recipe

	try {
		recipe = await Recipe.create({ author: userId, title, description, image })
	} catch (error) {
		throw new ContentError('recipe cannot be published')
	}
}

export default createRecipe