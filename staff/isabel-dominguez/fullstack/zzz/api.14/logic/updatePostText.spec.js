import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import updatePostText from './updatePostText.js'
import random from './helpers/random.js'
import { Post, User } from '../data/models.js'

import { errors } from 'com'
const { SystemError, NotFoundError, CredentialsError, DuplicityError } = errors

const { ObjectId } = Types

dotenv.config()

describe('updatePostText', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())
    beforeEach(() => Post.deleteMany())

    it('succeds on updating post text', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        return updatePostText(user.id, post.id, 'updateText')
                            .then(() => {
                                return Post.findOne({ image: post.image })
                                    .then(post => {
                                        expect(post.text).to.be.a('string')
                                        expect(post.text).to.equal('updateText')
                                    })
                            })
                    })
            })
    })

    it('fails on user not found', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        return updatePostText(new ObjectId().toString(), post.id, 'updateText')
                            .then(() => { throw new Error('should not reach this point!') })
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('User not found')
                            })
                    })
            })
    })

    it('fails on post not found', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        return updatePostText(user.id, new ObjectId().toString(), 'updateText')
                            .then(() => { throw new Error('should not reach this point!') })
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('Post not found')
                            })
                    })
            })
    })

    after(() => mongoose.disconnect())
})