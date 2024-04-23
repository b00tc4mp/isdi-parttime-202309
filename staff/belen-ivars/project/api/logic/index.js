import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createRecipe from './createRecipe.js'
import retrieveRecipes from './retrieveRecipes.js'
import deleteRecipe from './deleteRecipe.js'
import editRecipe from './editRecipe.js'
import toggleFavRecipe from './toggleFavRecipe.js'
import retrieveFavRecipes from './retrieveFavRecipes.js'
import checkIngredient from './checkIngredient.js'
import findRecipes from './findRecipes.js'

const logic = {
	registerUser,
	authenticateUser,
	retrieveUser,
	createRecipe,
	retrieveRecipes,
	deleteRecipe,
	editRecipe,
	toggleFavRecipe,
	retrieveFavRecipes,
	checkIngredient,
	findRecipes
}

export default logic