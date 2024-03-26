import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import addToCart from './addToCart.js'
import { User, Product, Order } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('addToCart', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany(), Order.deleteMany()]))

    it('should add product to the cart', () => {
        let user, product, order
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser
                return Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() })
            })
            .then(createdProduct => {
                product = createdProduct
                return Order.create({ user: user._id, status: 'active' })
            })
            .then(createdOrder => {
                order = createdOrder
                return addToCart(product._id, order._id, user._id)
            })
            .then(() => {
                return Order.findById(order._id)
            })
            .then(updatedOrder => {
                expect(updatedOrder).to.exist
                expect(updatedOrder.products).to.include(product._id)
            })
    })


    it('should throw NotFoundError when user does not exist', () => {
        const nonExistingUserId = new ObjectId().toString()

        return addToCart(new ObjectId(), new ObjectId(), nonExistingUserId)
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })
    })


    it('should throw NotFoundError when order does not exist', () => {
        let user
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser

                const nonExistingOrderId = new ObjectId().toString()
                return addToCart(new ObjectId(), nonExistingOrderId, user._id)
            })
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Order not found')
            })
    })


    it('should throw NotFoundError when product does not exist', () => {
        let user, order
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser
                return Order.create({ user: user._id, status: 'active' })
            })
            .then(createdOrder => {
                order = createdOrder
                const nonExistingProductId = new ObjectId().toString()
                return addToCart(nonExistingProductId, order._id, user._id)
            })
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Product not found')
            })
    })

    after(() => mongoose.disconnect())
})