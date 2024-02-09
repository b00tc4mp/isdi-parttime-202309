import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import toggleFavPost from './toggleFavPost.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'
import { User, Post } from '../data/models.js'

const { ObjectId } = mongoose.Types

describe('toggleFavPost', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))
    beforeEach(() => Promise.all([User.deleteMany(), Post.deleteMany()]))

    it('succeed on existing user', () => {
        return Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])

            .then(([user1, user2]) => {
                return Promise.all([
                    Post.create({ author: user1.id, image: random.image(), text: random.text() }),
                    Post.create({ author: user2.id, image: random.image(), text: random.text() }),
                    Post.create({ author: user2.id, image: random.image(), text: random.text() })
                ])
                    .then(([post1, post2, post3]) => {
                        return toggleFavPost(user1.id, post1.id)
                            .then((value) => {
                                expect(value).to.be.undefined // porque no devuelve nada

                                return User.findById(user1.id)
                                    .then(user1 => {

                                        const postIdExists = user1.favs.some(postObjectId => postObjectId.toString() === post1.id)
                                        expect(postIdExists).to.be.true
                                    })


                            })

                            .then(() => { //ahora le quita el fav
                                return toggleFavPost(user1.id, post1.id)
                                    .then(value => {
                                        expect(value).to.be.undefined

                                        return User.findById(user1.id)
                                            .then(user1 => {

                                                const postIdExsists = user1.favs.some(postObjectId => postObjectId.toString() === post1.id)
                                                expect(postIdExsists).to.be.false
                                            })
                                    })
                            })
                    })
            })
    })

    // falta el caso de fails y mirar de como se hacía lo de loss tests individuales 
    it('fails on non-existing user', () => {
        return toggleFavPost(new ObjectId().toString(), new ObjectId().toString())
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })

    })

    it('fails on existing user but no post', () => {
        return Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])

            .then(([user1, user2]) => {
                return toggleFavPost(user2.id, new ObjectId().toString())
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('Post not found')
                    })
            })
    })

    after(() => mongoose.disconnect())
})