import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import retrieveFavRecipes from './retrieveFavRecipes.js'
import { errors } from 'com'
import { User, Recipe } from '../data/models.js'
import { SystemError } from 'com/errors.js'
const { NotFoundError } = errors
const { ObjectId } = mongoose.Types

describe('retrieveFavRecipes', () => {
	before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
	beforeEach(async () => await User.deleteMany())

	it('succeds on current user', async () => {
		const name = random.name()
		const email = random.email()
		const password = random.password()

		const user = await User.create({ name, email, password })

		const title = random.name()
		const description = random.text()
		const image = random.image()

		const ingredients = []
		const ingredient1 = new ObjectId()
		const ingredient2 = new ObjectId()
		const ingredient3 = new ObjectId()
		ingredients.push(ingredient1, ingredient2, ingredient3)

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const recipe = await Recipe.create({ author: user.id, title, description, image, ingredients, diet, complexity, method })

		const title2 = random.name()
		const description2 = random.text()
		const image2 = random.image()

		const ingredients2 = []
		const ingredient4 = new ObjectId()
		const ingredient5 = new ObjectId()
		const ingredient6 = new ObjectId()
		ingredients.push(ingredient4, ingredient5, ingredient6)

		const diet2 = random.diet()
		const complexity2 = random.complexity()
		const method2 = random.method()

		const author2 = new ObjectId().toString()

		const recipe2 = await Recipe.create({ author: author2, title: title2, description: description2, image: image2, ingredients: ingredients2, diet: diet2, complexity: complexity2, method: method2 })

		const recipes = [recipe, recipe2]

		user.favs = [recipe.id, recipe2.id]

		let favRecipes
		try {
			favRecipes = await retrieveFavRecipes(user.id)
		} catch (error) {
			expect(user).to.exist
			expect(favRecipes).to.exist
			expect(recipes).to.exist
			expect(user.favs).contain(recipe.id)
			expect(user.favs).contain(recipe2.id)
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error).to.be.instanceOf(SystemError)
			expect(error.message).to.be.equal('recipes can not be searched')
			expect(error.message).to.be.equal('user can not be searched')
			expect(error.message).to.be.equal('No user found')


		}
	})

	it('fails on non-existing user', async () => {
		const name = random.name()
		const email = random.email()
		const password = random.password()

		const user = await User.create({ name, email, password })

		const name2 = random.name()
		const email2 = random.email()
		const password2 = random.password()


		const user2 = await User.create({ name: name2, email: email2, password: password2 })

		const title = random.name()
		const description = random.text()
		const image = random.image()

		let ingredients = []
		const ingredient1 = new ObjectId()
		const ingredient2 = new ObjectId()
		const ingredient3 = new ObjectId()
		ingredients = [ingredient1, ingredient2, ingredient3]

		const diet = random.diet()
		const complexity = random.complexity()
		const method = random.method()

		const recipe = await Recipe.create({ author: user.id, title, description, image, ingredients, diet, complexity, method })

		const title2 = random.name()
		const description2 = random.text()
		const image2 = random.image()

		let ingredients2 = []
		const ingredient4 = new ObjectId()
		const ingredient5 = new ObjectId()
		const ingredient6 = new ObjectId()
		ingredients = [ingredient4, ingredient5, ingredient6]

		const diet2 = random.diet()
		const complexity2 = random.complexity()
		const method2 = random.method()

		const author2 = new ObjectId().toString()

		const recipe2 = await Recipe.create({ author: author2, title: title2, description: description2, image: image2, ingredients: ingredients2, diet: diet2, complexity: complexity2, method: method2 })

		const favRecipes = [recipe, recipe2]

		user.favs = [recipe.id, recipe2.id]

		try {
			const retrieveFavs = await retrieveFavRecipes(user2.id)
		} catch (error) {
			expect(retrieveFavs).to.not.equal(user.favs)
			expect(favRecipes).to.not.exist
			expect(retrieveFavRecipes).to.throw(NotFoundError)
			expect(error).to.be.instanceOf(NotFoundError)
			expect(error).to.be.instanceOf(SystemError)
			expect(error.message).to.equal('user can not be searched')
			expect(error.message).to.equal('No user found')
			expect(error.message).to.equal('recipes can not be searched')

		}
	})
	after(async () => await mongoose.disconnect())
})