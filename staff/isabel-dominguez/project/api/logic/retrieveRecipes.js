import { errors } from 'com'
import { Recipe } from '../data/models.js'

const { NotFoundError, SystemError } = errors

function retrieveRecipes() {

    return Recipe.find().populate('products').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(recipes => {
            if (!recipes || recipes.length === 0)
                throw new NotFoundError('Recipes not found')

            recipes.forEach(recipe => {
                recipe.id = recipe._id.toString()
            })

            return recipes
        })
}

export default retrieveRecipes

//2 logicas findProducts y findRecipes y filtar por type , utilizaré estas funciones en vez de retrieve. Las rutas del server serían recipes/:type y products/:type, modificar componentes que no filtren y llamar a las funciones find.