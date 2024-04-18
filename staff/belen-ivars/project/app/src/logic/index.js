import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import isUserLoggedIn from './isUserLoggedIn'
import createRecipe from './createRecipe'
import retrieveRecipes from './retrieveRecipes'
import editRecipe from './editRecipe'

const logic = {
	registerUser,
	loginUser,
	logoutUser,
	retrieveUser,
	isUserLoggedIn,
	createRecipe,
	retrieveRecipes,
	editRecipe
}

export default logic