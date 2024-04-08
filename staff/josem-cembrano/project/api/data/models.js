import mongoose from 'mongoose'

const { Schema, model, ObjectId } = mongoose

const user = new Schema({
    Admin: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
})

const dog = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    image: {
        type: String,
        required: true
    },

    afix: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },

    birthDate: {
        type: String,
        required: true
    },

    puppy: {
        type: Boolean,
        required: true,
        default: false
    },

    text: {
        type: String,
        required: true
    },
})

const contact = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
})

const history = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    image: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },
})

const User = model('User', user)
const Dog = model('Dog', dog)
const Contact = model('Contact', contact)
const History = model('History', history)

export {
    User,
    Dog,
    Contact,
    History
}