import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createProduct from './createProduct.js'
import retrieveProductsByType from './retrieveProductsByType.js'
import createRecipe from './createRecipe.js'
import retrieveRecipes from './retrieveRecipes.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createProduct,
    retrieveProductsByType,
    createRecipe,
    retrieveRecipes
}

export default logic