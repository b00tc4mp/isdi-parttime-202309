import { NotFoundError } from "com/errors.js"
import { Recipe } from "../data/models.js"
import retrieveUser from "./retrieveUser.js"

async function retrieveRecipes(id) {

	const user = retrieveUser(id)

	if (!user) {
		throw new NotFoundError('No user found')
	}

	console.log('user exists')
	const recipes = await Recipe.find()

	return recipes
}

export default retrieveRecipes