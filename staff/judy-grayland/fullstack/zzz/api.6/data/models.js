import mongoose from 'mongoose'

const { Schema, model, ObjectId } = mongoose

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  favs: [
    {
      type: ObjectId,
      ref: 'Post',
    },
  ],
})

// el ref lo ponemos para decirle a qué colección pertenece. El Id pertenece a los usuarios. Así relacionamos que el autor viene de la colección usuarios.
const post = new Schema({
  author: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
})
const User = model('User', user)
const Post = model('Post', post)

export { User, Post }
