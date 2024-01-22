import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import updatePostText from './updatePostText.js'
import random from './helpers/random.js'
import { Post, User } from '../data/models.js'
import { NotFoundError } from './errors.js'

const { ObjectId } = Types

dotenv.config()

describe('updatePostText', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())
    beforeEach(() => Post.deleteMany())

    // CASO POSITIVO - Update Text
    it('succeeds on updating post text', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return User.create({ name, email, password })
            .then(user => {
                return Post.create({ author: user.id, image, text })
                    .then(post => {
                        return updatePostText(user.id, post.id, 'new text')
                            .then(() => {
                                return Post.findOne({ image: image })
                                    .then(post => {
                                        expect(post.text).to.be.a('string')
                                        expect(post.text).to.equal('new text')
                                    })
                            })
                    })
            })
    })

    // CASO NEGATIVO - User not found
    it('fails on user not found', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return User.create({ name, email, password })
            .then(user => {
                return Post.create({ author: user.id, image, text })
                    .then(post => {
                        return updatePostText(new ObjectId().toString(), post.id, 'new text')
                            .then(() => {throw new Error('should not reach this point!')} )
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('user not found')
                            })
                    })
            })
    })

    // CASO NEGATIVO - Post not found
    it('fails on post not found', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return User.create({ name, email, password })
            .then(user => {
                return Post.create({ author: user.id, image, text })
                    .then(post => {
                        return updatePostText(user.id, new ObjectId().toString(), 'new text')
                            .then(() => {throw new Error('should not reach this point!')} )
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('post not found')
                            })
                    })
            })
    })

    after(() => mongoose.disconnect())
})
