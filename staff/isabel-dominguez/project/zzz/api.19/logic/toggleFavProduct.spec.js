import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import toggleFavProduct from './toggleFavProduct.js'
import { User, Product } from '../data/models.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('toggleFavProduct', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

    it('succeed on existing user and product', () => {
        return Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])
            .then(([user1]) => {
                return Promise.all([
                    Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() }),
                    Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() }),
                    Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() })
                ])
                    .then(([product3]) => {
                        return toggleFavProduct(user1.id, product3.id)
                            .then(value => {
                                expect(value).to.be.undefined

                                return User.findById(user1.id)
                                    .then(user1 => {
                                        const productIdExists = user1.favs.some(productObjectId => productObjectId.toString() === product3.id)

                                        expect(productIdExists).to.be.true
                                    })
                            })
                            .then(() => {
                                return toggleFavProduct(user1.id, product3.id)
                                    .then(value => {
                                        expect(value).to.be.undefined

                                        return User.findById(user1.id)
                                            .then(user1 => {
                                                const productIdExists = user1.favs.some(productObjectId => productObjectId.toString() === product3.id)

                                                expect(productIdExists).to.be.false
                                            })
                                    })
                            })
                    })
            })
    })

    it('fails on non-existing user', () => {
        return toggleFavProduct(new ObjectId().toString(), new ObjectId().toString())
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    })

    it('fails on existing user but not product', () => {
        return Promise.all([
            User.create({ name: random.name(), email: random.email(), password: random.password() }),
            User.create({ name: random.name(), email: random.email(), password: random.password() })
        ])
            .then(([user2]) => {
                return toggleFavProduct(user2.id, new ObjectId().toString())
                    .then(() => { throw new Error('should not reach this point') })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('product not found')
                    })
            })
    })

    after(() => mongoose.disconnect())
})