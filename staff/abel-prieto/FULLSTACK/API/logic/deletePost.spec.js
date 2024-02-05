import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import deletePost from './deletePost.js'
import { errors } from 'com'
const { NotFoundError, RelationalError } = errors
import { Post, User } from '../data/models.js'
import random from './helpers/random.js'

dotenv.config()
const { ObjectId } = Types

describe('deletePost', () => {

    beforeEach(() => Post.deleteMany())
    beforeEach(() => User.deleteMany())

    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    // CASO POSITIVO - Deleting post 
    it('succeeds on deleting a post and is on user fav', () =>
        User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user =>
                Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        user.favs.push(post.id)

                        return user.save()
                            .then(() => deletePost(user.id, post.id))
                            .then(() => Post.findById(post.id))
                            .then(post => {
                                expect(post).to.be.null // .to.not.exist
                                return User.findById(user.id)
                            })
                            .then(user => {
                                expect(user.favs).to.have.lengthOf(0)
                            })
                    })
            )
    )

    // CASO NEGATIVO - Not Found
    it('fails on post not found', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(() => {
                        return deletePost(user.id, new ObjectId().toString())
                            .then(() => { throw new Error('should not reach this point!') })
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)
                                expect(error.message).to.equal('post not found')
                            })
                    })
            })
    })

    it('fails on deleting post that does not belong to user', () =>
        User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user =>
                Post.create({ author: new ObjectId, image: random.image(), text: random.text() })
                    .then(post => {
                        user.favs.push(post.id)

                        return user.save()
                            .then(() => deletePost(user.id, post.id))
                            .then(() => { throw new Error('should not reach this point!') })
                            .catch(error => {
                                expect(error).to.be.instanceOf(RelationalError)
                                expect(error.message).to.equal('post does not belong to user')
                            })
                    })
            )
    )

    it('fails on user not found', () =>
        Post.create({ author: new ObjectId, image: random.image(), text: random.text() })
            .then(post => deletePost(new ObjectId().toString(), post.id))
            .then(() => { throw new Error('should not reach this point!') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    )


    after(() => mongoose.disconnect())
})
