import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import createPost from './createPost.js'

import { User, Post } from '../data/models.js'

import { errors } from 'com'

const { NotFoundError } = errors

dotenv.config()

const { ObjectId } = mongoose.Types

describe('createPost', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))

  beforeEach(() => User.deleteMany())

  it('succeeds on existing user', () => {
    const name = random.name()
    const email = random.email()
    const password = random.password()

    const image = random.image()
    const text = random.text()

    return User.create({ name, email, password }).then((user) => {
      return createPost(user.id, image, text)
        .then((value) => {
          // comprobamos que el createPost no devuelve ningún valor:
          expect(value).to.be.undefined
          // comprobamos que el post se ha creado en la BBDD:
          return Post.findOne({ author: user.id })
        })
        .then((post) => {
          expect(post.image).to.equal(image)
          expect(post.text).to.equal(text)
        })
    })
  })

  it('fails on non-existing user', () => {
    const image = random.image()
    const text = random.text()

    return (
      createPost(new ObjectId().toString(), image, text)
        // no debería de llegar aquí (si no reconoce el usuario debería llegar al catch)
        .then(() => {
          throw new Error('should not reach this point')
        })
        .catch((error) => {
          expect(error).to.be.instanceOf(NotFoundError)
          expect(error.message).to.equal('user not found')
        })
    )
  })
})
