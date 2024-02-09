import dotenv from 'dotenv'
dotenv.config()

import mongoose, { mongo } from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import toggleLikePost from './toogleLikePost.js'
import { errors } from 'com'
import { User, Post } from '../data/models.js'

const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('toggleLikePost', () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
    beforeEach(async () => await Promise.all([User.deleteMany(), Post.deleteMany()]))

    it('succeed on existing user and post', async () => {

        const users = Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })

        ])

        let user1 = users[0]
        let user2 = users[1]

        const posts = await Promise.all([
            Post.create({ author: user1.id, image: random.image(), text: random.text() }),
            Post.create({ author: user2.id, image: random.image(), text: random.text() }),
            Post.create({ author: user2.id, image: random.image(), text: random.text() })
        ])

        const post1 = posts[0]

        let value = await toggleLikePost(user1.id, post1.id)
        expect(value).to.be.undefined

        post1 = await Post.findById(post1.id)
        const userIdExists = post1.likes.some(userObjectId => userObjectId.toString() === user1.id)
        expect(userIdExists).to.be.true

        value = await toggleLikePost(user1.id, post1.id)
        expect(value).to.be.undefined

        post1 = await Post.findById(post1.id)
        const userIdExists2 = post1.likes.some(userObjectId => userObjectId.toString() === user1.id)
        expect(userIdExists2).to.be.false


    })



    it('fails on non existing user', async () => {

        try {
            await toggleLikePost(new ObjectId().toString(), new ObjectId().toString())
            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('User not found')
        }

    })

    it('fails on existing user but no post', async () => {

        const [user1, user2] = await Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })

        ])

        try {
            await toggleLikePost(user1.id, new ObjectId().toString())
            throw new Error('should not reach this point')
        } catch (error) {

            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('Post not found')

        }


    })
    after(async () => mongoose.disconnect())

})