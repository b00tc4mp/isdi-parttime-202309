import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import retrieveUserOrder from './retrieveUserOrder.js'
import { User, Product, Order } from '../data/models.js'
import random from './helpers/random.js'

import { errors } from 'com'
const { NotFoundError } = errors

describe('retrieveUserOrder', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany(), Order.deleteMany()]))

    it('should retrieve active order for existing user', () => {
        let user, product, order
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser
                return Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() })
            })
            .then(createdProduct => {
                product = createdProduct
                return Order.create({ user: user._id, status: 'active', products: [{ product: product._id, quantity: 1 }] })
            })
            .then(createdOrder => {
                order = createdOrder
                return retrieveUserOrder(user._id)
            })
            .then(retrievedOrder => {
                expect(retrievedOrder).to.exist
                expect(retrievedOrder._id).to.eql(order._id)
            })
    })


    it('should throw NotFoundError when active order does not exist', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return retrieveUserOrder(user._id)
            })
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Active order not found')
            })
    })

    after(() => mongoose.disconnect())
})