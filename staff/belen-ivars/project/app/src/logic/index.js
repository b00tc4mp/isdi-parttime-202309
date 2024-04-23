import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import isUserLoggedIn from './isUserLoggedIn'
import createRecipe from './createRecipe'
import retrieveRecipes from './retrieveRecipes'
import editRecipe from './editRecipe'
import deleteRecipe from './deleteRecipe'
import toggleFavRecipe from './toggleFavRecipe'
import retrieveFavRecipes from './retrieveFavRecipes'
import searchRecipes from './searchRecipes'

const logic = {
	registerUser,
	loginUser,
	logoutUser,
	retrieveUser,
	isUserLoggedIn,
	createRecipe,
	retrieveRecipes,
	editRecipe,
	deleteRecipe,
	toggleFavRecipe,
	retrieveFavRecipes,
	searchRecipes
}

export default logic