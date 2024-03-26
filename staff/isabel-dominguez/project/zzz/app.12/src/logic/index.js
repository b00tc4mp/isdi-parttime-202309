import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import isUserLoggedIn from './isUserLoggedIn'
import createProduct from './createProduct'
import retrieveProductsByType from './retrieveProductsByType'
import createRecipe from './createRecipe'
import retrieveRecipesByType from './retrieveRecipesByType'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    createProduct,
    retrieveProductsByType,
    createRecipe,
    retrieveRecipesByType
}

export default logic