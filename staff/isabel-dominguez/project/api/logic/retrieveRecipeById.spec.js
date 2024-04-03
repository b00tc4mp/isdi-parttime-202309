import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveRecipeById from './retrieveRecipeById.js'
import { Recipe } from '../data/models.js'
import { errors } from 'com'

const { ObjectId } = mongoose.Types

const { NotFoundError } = errors

describe('retrieveRecipeById', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Recipe.deleteMany())

    it('succeeds on existing recipe', () => {
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

        return newRecipe.save()
            .then(savedRecipe => {
                return retrieveRecipeById(savedRecipe._id.toString())
                    .then(retrievedRecipe => {
                        expect(retrievedRecipe).to.exist
                        expect(retrievedRecipe.name).to.equal(recipeName)
                        expect(retrievedRecipe.description).to.equal(description)
                        expect(retrievedRecipe.image).to.equal(image)
                        expect(retrievedRecipe.products).to.exist
                        if (retrievedRecipe.products.length > 0) {
                            expect(retrievedRecipe.products[0]).to.deep.equal(products[0])
                        }
                        expect(retrievedRecipe.type).to.equal(recipeType)
                    })
            })
    })


    it('fails on non-existing recipe', () => {
        const nonExistingRecipeId = new ObjectId().toString()

        return retrieveRecipeById(nonExistingRecipeId)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`Recipe not found`)
            })
    })

    after(() => mongoose.disconnect())
})