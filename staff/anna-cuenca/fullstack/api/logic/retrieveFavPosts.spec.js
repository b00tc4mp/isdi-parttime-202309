import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveFavPosts from './retrieveFavPosts.js'
import { Post, User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('retrieveFavPosts', () => {
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

        user2.favs.push(post1, post2)

        await user2.save()

        const posts = await retrieveFavPosts(user2.id)

        expect(posts).to.exist
        expect(posts).to.be.instanceOf(Array)
        expect(posts).to.have.lengthOf(2)

        const post1Exists = posts.some(post => post.id === post1.id && post.image === post1.image && post.text === post1.text && post.fav)
        expect(post1Exists).to.be.true


        const post2Exists = posts.some(post => post.id === post2.id && post.image === post2.image && post.text === post2.text && post.fav)
        expect(post2Exists).to.be.true

    })

    it('fails on non-existing user', async () => {

        try {
            await retrieveFavPosts(new ObjectId().toString())
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')

        }

    })

    after(async () => mongoose.disconnect())
})