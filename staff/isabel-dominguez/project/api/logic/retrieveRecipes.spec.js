import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveRecipes from './retrieveRecipes.js'
import { Recipe } from '../data/models.js'
import { errors } from 'com'

const { NotFoundError } = errors

describe('retrieveRecipes', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Recipe.deleteMany())

    it('succeeds on existing recipes', () => {
        // Crear varios productos para probar
        const numRecipes = 5
        const recipes = []

        for (let i = 0; i < numRecipes; i++) {
            const image = random.image()
            const recipeName = random.recipeName()
            const description = random.description()
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
        }

        return Promise.all(recipes)
            .then(() => {
                return retrieveRecipes()
                    .then(retrievedRecipes => {
                        expect(retrievedRecipes).to.exist
                        expect(retrievedRecipes).to.have.lengthOf(numRecipes)

                        // Verificar que cada producto devuelto sea válido
                        retrievedRecipes.forEach(recipe => {
                            expect(recipe).to.have.property('name')
                            expect(recipe).to.have.property('description')
                            expect(recipe).to.have.property('image')
                            expect(recipe).to.have.property('products')
                            expect(recipe).to.have.property('type')
                        })
                    })
            })
    })

    it('fails on non-existing recipes', () => {
        return retrieveRecipes()
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Recipes not found')
            })
    })

    after(() => mongoose.disconnect())
})