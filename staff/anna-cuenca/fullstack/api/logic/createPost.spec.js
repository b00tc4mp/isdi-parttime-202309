import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import createPost from './createPost.js'
import { errors } from 'com'
import { User, Post } from '../data/models.js'

const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('createPost', () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
    beforeEach(async () => await User.deleteMany())

    it('succeeds on existing User', async () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        const user = await User.create({ name, email, password })

        const value = await createPost(user.id, image, text)
        expect(value).to.be.undefined

        const post = await Post.findOne({ author: user.id })

        expect(post.image).to.equal(image)
        expect(post.text).to.equal(text)

    })

    it('fails on non existing user', async () => {
        const image = random.image()
        const text = random.text()

        try {
            await createPost(new ObjectId().toString(), image, text)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }
    })
    after(async () => mongoose.disconnect())
})