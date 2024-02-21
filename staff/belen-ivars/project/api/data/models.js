import mongoose from 'mongoose'

const { Schema, model, ObjectId } = mongoose

const user = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8
	},
	image: {
		type: String
		// required: true
	},
	favs: [{
		type: ObjectId,
		ref: 'Recipe'
	}]
})

const ingredient = new Schema({
	name: {
		type: String,
		required: true
	},
})

const recipe = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	ingredients: [{
		type: ObjectId,
		required: true,
		ref: 'Ingredient'
	}],
	diet: {
		type: String,
		required: true,
		enum: ['glutenfree', 'vegetarian', 'vegan', 'omnivorous']
	},
	complexity: {
		type: Number,
		required: true,
		enum: [1, 2, 3, 4, 5]
	},
	method: {
		type: String,
		required: true,
		enum: ['steamed', 'oven', 'microwave', 'grill', 'fresh']
	},
	time: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		required: true
	}
})

const review = new Schema({
	user: {
		type: ObjectId,
		required: true,
		ref: 'User'
	},
	recipe: {
		type: ObjectId,
		required: true,
		ref: 'Recipe'
	},
	stars: {
		type: Number,
		required: true,
		enum: [1, 2, 3, 4, 5]
	},
	comment: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true
	}
})

const User = model('User', user)
const Ingredient = model('Ingredient', ingredient)
const Recipe = model('Recipe', recipe)
const Review = model('Review', review)

export {
	User,
	Ingredient,
	Recipe,
	Review
}