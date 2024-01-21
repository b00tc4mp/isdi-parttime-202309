import mongoose, { Types } from 'mongoose' 
import { expect } from 'chai'
import dotenv from 'dotenv'

import retrieveFavs from './retrieveFavs.js'
import { Post, User } from '../data/models.js'
import random from './helpers/random.js'

dotenv.config()
const { ObjectId } = Types

describe('retrieveFavs', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    // CASO POSITIVO - Retrieve Favs
    it('success with retrieve fav post', () => {
        const name = random.name()
        const email = random.email()
        const password = random.password()

        const image = random.image()
        const text = random.text()

        return Post.create({ author: new ObjectId().toString(), image, text })
            .then(post => {
                return User.create({ _id: post.author, name, email, password })
                    .then(user => {
                        user.favs.push(post.id)

                        return retrieveFavs(user.id)
                            .then(favs => {
                                expect(favs).to.be.an('array')
                                // expect(favs).that.has.lengthOf(1)
                            })
                    })
            })
    })

    after(() => mongoose.disconnect())
})
