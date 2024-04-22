import { Recipe } from '../data/models.js'

async function findRecipes() {
	// const { diet, ingredients } = req.query
	const filter = {}
	if (diet) filter.diet = diet
	if (method) filter.method = method
	if (complexity) filter.complexity = complexity
	if (time) {
		filter.time = { $lte: parseInt(tiempo) }
	}
	if (ingredients) {
		const ingredientList = ingredients.split('-')
		filter.ingredients = { $in: ingredientList }
	}


	const recipes = await Recipe.find(filter)
}

export default findRecipes  