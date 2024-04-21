import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import createRecipe from './createRecipe.js'
import { Recipe } from '../data/models.js'

describe('createRecipe', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Recipe.deleteMany())

    it('succeeds on creating a recipe', () => {
        const recipe = {
            name: random.recipeName(),
            description: random.description(),
            image: random.image(),
            products: random.randomProducts(1),
            type: random.recipeType()
        }

        return createRecipe(recipe.name, recipe.description, recipe.image, recipe.products, recipe.type)
            .then(createdRecipe => {
                expect(createdRecipe).to.exist
                expect(createdRecipe.name).to.equal(recipe.name)
                expect(createdRecipe.description).to.equal(recipe.description)
                expect(createdRecipe.image).to.equal(recipe.image)
                expect(createdRecipe.products).to.deep.equal(recipe.products)
                expect(createdRecipe.type).to.equal(recipe.type)

                return Recipe.findOne({ _id: createdRecipe._id })
            })
            .then(recipe => {
                expect(recipe).to.exist
                expect(recipe.name).to.equal(recipe.name)
                expect(recipe.description).to.equal(recipe.description)
                expect(recipe.image).to.equal(recipe.image)
                expect(recipe.products).to.deep.equal(recipe.products)
                expect(recipe.type).to.equal(recipe.type)
            })
    })

    after(() => mongoose.disconnect())
})