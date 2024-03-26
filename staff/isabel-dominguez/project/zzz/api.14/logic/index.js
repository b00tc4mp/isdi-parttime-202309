import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createProduct from './createProduct.js'
import retrieveProductsByType from './retrieveProductsByType.js'
import createRecipe from './createRecipe.js'
import retrieveRecipesByType from './retrieveRecipesByType.js'
import toggleFavProduct from './toggleFavProduct.js'
import retrieveFavs from './retrieveFavs.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createProduct,
    retrieveProductsByType,
    createRecipe,
    retrieveRecipesByType,
    toggleFavProduct,
    retrieveFavs
}

export default logic