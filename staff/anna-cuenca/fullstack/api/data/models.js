import mongoose from 'mongoose'

const { Schema, model, ObjectId } = mongoose

// definimos el esquema de usuario
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
    favs: [{
        type: ObjectId,
        ref: 'Post'
    }]
})

const post = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User' //le decimos que el objectId hace referencia a usuario
    },
    image: {
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
const Post = model('Post', post)

export {
    User, Post
}