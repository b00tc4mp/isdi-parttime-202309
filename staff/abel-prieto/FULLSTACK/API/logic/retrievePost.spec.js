import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import retrievePost from './retrievePost.js'
import random from './helpers/random.js'
import { Post, User } from '../data/models.js'
import { NotFoundError } from './errors.js'

const { ObjectId } = Types

dotenv.config()

describe('retrievePosts', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())
    beforeEach(() => Post.deleteMany())

    // CASO POSITIVO
    it('succeeds on retrieve posts', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        return retrievePost(user.id)
                            .then(posts => {
                                expect(posts).to.be.an('array').that.has.lengthOf(1)
                                expect(posts[0].id).to.equal(post.id)
                            })
                    })
            })
    })

    // CASO NEGATIVO - User not found
    it('fails on user not found', () => {
        const userId = new ObjectId().toString()

        return Post.create({ author: userId, image: random.image(), text: random.text() })
            .then(post => {
                return retrievePost(userId)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    })
            })
    })



    after(() => mongoose.disconnect())
})