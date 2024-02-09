import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveUserPosts from './retrieveUserPosts.js'
import { Post, User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('retrieveUserPosts', () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(async () => await Promise.all([User.deleteMany(), Post.deleteMany()]))

    it('succeed on existing user', async () => {
        const [user1, user2] = await Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })

        ])

        const [post1, post2, post3] = await Promise.all([
            Post.create({ author: user1.id, image: random.image(), text: random.text() }),
            Post.create({ author: user2.id, image: random.image(), text: random.text() }),
            Post.create({ author: user2.id, image: random.image(), text: random.text() })
        ])

        const posts = await retrieveUserPosts(user2.id)
        expect(posts).to.exist
        expect(posts).to.be.instanceOf(Array)
        expect(posts).to.have.lengthOf(2)


        const post2Exists = posts.some(post => post.id === post2.id && post.image === post2.image && post.text === post2.text)
        expect(post2Exists).to.be.true

        const post3Exists = posts.some(post => post.id === post3.id && post.image === post3.image && post.text === post3.text)
        expect(post3Exists).to.be.true

    })





    it('fails on non-existing user', async () => {

        try {
            await retrieveUserPosts(new ObjectId().toString())
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')

        }

    })

    after(async () => mongoose.disconnect())


})