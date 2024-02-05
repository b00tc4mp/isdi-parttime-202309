import mongoose, { Types } from 'mongoose' 
import { expect } from 'chai'
import dotenv from 'dotenv'

import retrieveFavs from './retrieveFavs.js'
import { Post, User } from '../data/models.js'
import random from './helpers/random.js'
import { errors } from 'com'
const { NotFoundError } = errors

dotenv.config()
const { ObjectId } = Types

describe('retrieveFavs', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    // CASO POSITIVO - Retrieve Favs
    it('succeeds on retrieve fav posts', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Post.create({ author: user.id, image: random.image(), text: random.text() })
                    .then(post => {
                        user.favs.push(post)
                        return user.save()
                            .then(user => {
                                return retrieveFavs(user.id)
                                .then(favs => {
                                    expect(favs).to.be.an('array').that.has.lengthOf(1)
                                    expect(favs[0].id).to.equal(post.id)
                                })
                            })
                    })
            })
    })

    // CASO NEGATIVO - User not found
    it('fails on user not found', () => {
        const userId = new ObjectId().toString()

        return Post.create({ author: userId, image: random.image(), text: random.text() })
            .then(() => {
                return retrieveFavs(userId)
                    .then(() => { throw new Error('should not reach this point!') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    })
            })
    })

    after(() => mongoose.disconnect())
})
