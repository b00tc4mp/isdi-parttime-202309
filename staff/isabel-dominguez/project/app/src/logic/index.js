import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import isUserLoggedIn from './isUserLoggedIn'
import createProduct from './createProduct'
import retrieveProducts from './retrieveProducts'
import createRecipe from './createRecipe'
import retrieveRecipes from './retrieveRecipes'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    createProduct,
    retrieveProducts,
    createRecipe,
    retrieveRecipes
}

export default logic