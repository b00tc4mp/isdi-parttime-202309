import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import toggleFavPost from './toggleFavPost.js'
import random from './helpers/random.js'
import { Post, User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = Types

dotenv.config()

describe('toggleFavPost', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())
    beforeEach(() => Post.deleteMany())

    // CASO POSTIVO
    it('succeeds on toggle fav post', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        return toggleFavPost(post.id, user.id)
                            .then(() => {
                                return User.findOne({ email: user.email })
                                    .then(user => {
                                        expect(user.favs).to.be.an('array').that.has.lengthOf(1)
                                        expect(user.favs[0].toString()).to.equal(post.id)
                                    })
                            })
                    })
            })
    })

    // CASO NEGATIVO - Post not found
    it('fails on post not found', () => {
        const postId = new ObjectId().toString()

        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return toggleFavPost(postId, user.id)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('post not found')
                    })
            })
    })

    // CASO NEGATIVO - User not found
    it('fails on user not found', () => {
        const userId = new ObjectId().toString()

        return Post.create({ author: userId, image: random.image(), text: random.text() })
            .then(post => {
                return toggleFavPost(post.id, userId)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    })
            })
    })

    after(() => mongoose.disconnect())
})