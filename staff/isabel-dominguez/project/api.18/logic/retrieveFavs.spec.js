import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveFavs from './retrieveFavs.js'
import { User, Product } from '../data/models.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('retrieveFavs', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

    it('succeed on existing user', () => {
        return Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])
            .then(([user2]) => {
                return Promise.all([
                    Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() }),
                    Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() }),
                    Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() })
                ])
                    .then(([product2, product3]) => {
                        user2.favs.push(product2, product3)

                        return user2.save()
                            .then(user2 => {
                                return retrieveFavs(user2.id)
                                    .then(products => {
                                        expect(products).to.exist
                                        expect(products).to.be.instanceOf(Array)
                                        expect(products).to.have.lengthOf(2)

                                        const products2Exists = products.some(product => product.id === product2.id && product.fav)
                                        expect(products2Exists).to.be.true

                                        const product3Exists = products.some(product => product.id === product3.id && product.fav)
                                        expect(product3Exists).to.be.true
                                    })
                            })
                    })
            })
    })

    it('fails on non-existing user', () => {
        return retrieveFavs(new ObjectId().toString())
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })
    })

    after(() => mongoose.disconnect())
})