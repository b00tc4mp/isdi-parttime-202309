import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveRecipesByType from './retrieveRecipesByType.js'
import { Recipe } from '../data/models.js'
import { errors } from 'com'

const { NotFoundError } = errors

describe('retrieveRecipesByType', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Recipe.deleteMany())

    it('succeeds on existing recipes', () => {

        const recipes = []

        const recipeName = random.recipeName()
        const description = random.description()
        const image = random.image()
        const recipeType = random.recipeType()
        const products = random.randomProducts(1)

        const newRecipe = new Recipe({
            name: recipeName,
            description: description,
            image: image,
            products: products,
            type: recipeType
        })

        recipes.push(newRecipe.save())


        return Promise.all(recipes)
            .then(() => {
                return retrieveRecipesByType(recipeType)
                    .then(retrievedRecipes => {
                        expect(retrievedRecipes).to.exist
                        expect(newRecipe).to.have.property('name')
                        expect(newRecipe).to.have.property('description')
                        expect(newRecipe).to.have.property('image')
                        expect(newRecipe).to.have.property('products')
                        expect(newRecipe).to.have.property('type')
                    })
            })
    })

    it('fails on non-existing recipes', () => {
        const typeNonExist = {
            type: 'TypeNonExist'
        }

        return retrieveRecipesByType(typeNonExist.type)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`Recipes of type ${typeNonExist.type} not found`)
            })
    })

    after(() => mongoose.disconnect())
})