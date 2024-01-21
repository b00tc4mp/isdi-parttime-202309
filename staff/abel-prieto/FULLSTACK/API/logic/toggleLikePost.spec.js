import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import toggleLikePost from './toggleLikePost.js'
import random from './helpers/random.js'
import { User, Post } from '../data/models.js'
import {  } from './errors.js'

const { ObjectId } = Types

dotenv.config()

describe('toogleLikePost', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())
    beforeEach(() => Post.deleteMany())

    // CASO POSITIVO
    it('success on toggle like post', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return User.create({ name, email, password })
            .then(user => {
                return Post.create({ author: user.id, image, text })
                    .then(post => {
                        return toggleLikePost(user.id, post.id)
                            .then(() => {
                                return Post.findOne({ image: image })
                                    .then(post => {
                                        expect(post.likes).to.equal(user.id)
                                    })
                            })
                    })
            })
    })


    after(() => mongoose.disconnect())
})
