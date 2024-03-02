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
        unique: true //crea un indice para que no deje registrar a más usuarios con el mismo email 
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    robot: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user']

    },
    favs: [{
        type: ObjectId,
        ref: 'Tutorial'
    }]
})

const movement = new Schema({
    type: String,
    order: Number,
    enum: ['forward', 'backward', 'left', 'right']


})

const tutorial = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User' //le decimos que el objectId hace referencia a usuario
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }],
    comments: [{
        author: { type: ObjectId, ref: 'User' },
        text: { type: String, required: true }

    }]
})

//tenemos que usar una clase para construir usuarios
const User = model('User', user)
const Tutorial = model('Tutorial', tutorial)
const Movement = model('Movement', movement)

export {
    User, Tutorial, Movement
}