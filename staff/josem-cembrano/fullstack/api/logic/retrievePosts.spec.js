import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrievePosts from './retrievePosts.js'
import { User, Post } from '../data/models.js'
import { NotFoundError } from './errors.js'

const { ObjectId } = mongoose.Types

describe('retrievePosts', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    // beforeEach(() => User.deleteMany()).then(() => { Post.deleteMany() })//promesas en serie
    beforeEach(() => Promise.all([User.deleteMany(), Post.deleteMany()]))//promesas en paralelo

    it('succeed on existing user', () => {
        return Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])
            .then(([user1, user2, user3]) => {
                return Promise.all([
                    Post.create({ author: user1.id, image: random.image(), text: random.text() }),
                    Post.create({ author: user2.id, image: random.image(), text: random.text() }),
                    Post.create({ author: user3.id, image: random.image(), text: random.text() })
                ])
                    .then(([post1, post2, post3]) => {
                        return retrievePosts(user1.id)
                            .then(posts => {
                                expect(posts).to.exist
                                expect(posts).to.instanceOf(Array)
                                expect(posts).to.have.lengthOf(3)

                                const post1Exists = posts.some(post => {
                                    return post.id === post1.id && post.image === post1.image && post.text === post1.text
                                })

                                expect(post1Exists).to.be.true

                                const post2Exists = posts.some(post => {
                                    return post.id === post2.id && post.image === post2.image && post.text === post2.text
                                })

                                expect(post2Exists).to.be.true

                                const post3Exists = posts.some(post => {
                                    return post.id === post3.id && post.image === post3.image && post.text === post3.text
                                })

                                expect(post3Exists).to.be.true

                            })
                    })
            })
    })

    it('fails on non-existing user', () => {
        return retrievePosts(new ObjectId().toString())
            .then(posts => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    after(() => mongoose.disconnect())
})
