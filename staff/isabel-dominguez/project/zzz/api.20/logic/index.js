import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createProduct from './createProduct.js'
import retrieveProductsByType from './retrieveProductsByType.js'
import createRecipe from './createRecipe.js'
import retrieveRecipesByType from './retrieveRecipesByType.js'
import toggleFavProduct from './toggleFavProduct.js'
import retrieveFavs from './retrieveFavs.js'
import addToCart from './addToCart.js'
import deleteOrder from './deleteOrder.js'
import updateCartItemQuantity from './updateCartItemQuantity.js'
import retrieveUserOrder from './retrieveUserOrder.js'
import retrieveRecipeById from './retrieveRecipeById.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createProduct,
    retrieveProductsByType,
    createRecipe,
    retrieveRecipesByType,
    toggleFavProduct,
    retrieveFavs,
    addToCart,
    deleteOrder,
    updateCartItemQuantity,
    retrieveUserOrder,
    retrieveRecipeById
}

export default logic