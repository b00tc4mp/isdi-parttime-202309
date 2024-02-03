import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import random from './helpers/random.js'
import { User, Post } from '../data/models.js'

import createPost from './createPost.js'
import { NotFoundError } from './errors.js'

const { ObjectId } = mongoose.Types

describe('createPost', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeds on existing user', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return User.create({ name, email, password })
            .then(user => {
                return createPost(user.id, image, text)
                    .then(value => {//por que ponemos aqui value en vez de post?
                        expect(value).to.be.undefined

                        return Post.findOne({ author: user.id })
                    })
                    .then(post => {
                        expect(post.image).to.be.equal(image)
                        expect(post.text).to.be.equal(text)
                    })
            })
    })

    it('fails on no-existing user', () => {
        const image = random.image()
        const text = random.text()

        return createPost(new ObjectId().toString(), image, text)
            .then(() => { throw new Error('should not reach point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    after(() => mongoose.disconnect())
})