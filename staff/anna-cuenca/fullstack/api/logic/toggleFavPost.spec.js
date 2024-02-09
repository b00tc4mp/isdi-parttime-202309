import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import toggleFavPost from './toggleFavPost.js'
import { errors } from 'com'
import { User, Post } from '../data/models.js'

const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('toggleFavPost', () => {
    before(async () => await mongoose.connect(process.env.TEST_MONGODB_URL))
    beforeEach(async () => await Promise.all([User.deleteMany(), Post.deleteMany()]))

    it('succeed on existing user', async () => {

        const users = await Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])

        let user1 = users[0]
        const user2 = users[1]

        const posts = await Promise.all([
            Post.create({ author: user1.id, image: random.image(), text: random.text() }),
            Post.create({ author: user2.id, image: random.image(), text: random.text() }),
            Post.create({ author: user2.id, image: random.image(), text: random.text() })
        ])
        const post1 = posts[0]

        let value = await toggleFavPost(user1.id, post1.id)
        expect(value).to.be.undefined

        user1 = await User.findById(user1.id)
        const postIdExists = user1.favs.some(postObjectId => postObjectId.toString() === post1.id)
        expect(postIdExists).to.be.true

        //ahora le quito el fav
        value = await toggleFavPost(user1.id, post1.id)
        expect(value).to.be.undefined

        user1 = await User.findById(user1.id)
        const postIdExsists = user1.favs.some(postObjectId => postObjectId.toString() === post1.id)
        expect(postIdExsists).to.be.false


    })




    // falta el caso de fails y mirar de como se hacía lo de loss tests individuales 
    it('fails on non-existing user', async () => {

        try {
            await toggleFavPost(new ObjectId().toString(), new ObjectId().toString())
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
            await toggleFavPost(user2.id, new ObjectId().toString())
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('Post not found')
        }


    })
    after(async () => mongoose.disconnect())
})