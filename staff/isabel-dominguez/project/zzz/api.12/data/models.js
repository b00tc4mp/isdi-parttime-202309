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
    favs: [{
        type: ObjectId,
        ref: 'Product'
    }]
})

const User = model('User', user)


const order = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    products: [{
        type: ObjectId,
        ref: 'Product'
    }]
})

const Order = model('Order', order)


const product = new Schema({
    name: {
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
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['RawMaterial', 'Utensils', 'Packings'],
        required: true
    }
})

const Product = model('Product', product)


const recipe = new Schema({
    name: {
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
    products: [{
        type: ObjectId,
        ref: 'Product'
    }],
    type: {
        type: String,
        enum: ['Hair', 'Body', 'Make-up', 'Fragrance', 'Treatment'],
        required: true
    }
})

const Recipe = model('Recipe', recipe)


export {
    User,
    Product,
    Order,
    Recipe
}