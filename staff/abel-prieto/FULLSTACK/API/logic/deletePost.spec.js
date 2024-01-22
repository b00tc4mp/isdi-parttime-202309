import mongoose, { Types } from 'mongoose' 
import { expect } from 'chai'
import dotenv from 'dotenv'

import deletePost from './deletePost.js'
import { NotFoundError } from './errors.js'
import { Post, User } from '../data/models.js'
import random from './helpers/random.js'

dotenv.config()
const { ObjectId } = Types

describe('deletePost', () => {

    beforeEach(() => Post.deleteMany())
    beforeEach(() => User.deleteMany())

    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    // CASO POSITIVO - Deleting post
    it('succeeds on deleting a post', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return User.create({ name, email, password })
            .then(user => {
                return Post.create({ author: user.id, image, text })
                    .then(post => {
                        user.favs.push(post.id)
                        return user.save()
                            .then(user => {
                                return deletePost(user.id, post.id)
                                    .then(() => {
                                        return Post.findOne({ image: image })
                                            .then(post => {
                                                expect(post).to.be.null
                                                expect(user.favs).to.be.an('array').that.is.empty
                                            })
                                    })
                            })
                    })
            })
    })

    // CASO NEGATIVO - Not Found
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
                        return deletePost(user.id, new ObjectId().toString())
                            .then(() => {throw new Error('should not reach this point!')})
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('post not found')
                            })
                    })
            })
    })

    after(() => mongoose.disconnect())
})
