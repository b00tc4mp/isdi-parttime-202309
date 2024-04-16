import { NotFoundError } from "com/errors.js"
import { Recipe, User } from "../data/models.js"
import retrieveUser from "./retrieveUser.js"

async function retrieveRecipes(id) {

	const user = await User.findById(id)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	console.log('user exists')
	const recipes = await Recipe.find()

	return recipes
}

export default retrieveRecipes