import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import updateCartItemQuantity from './updateCartItemQuantity.js'
import { User, Product, Order } from '../data/models.js'
import random from './helpers/random.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('updateCartItemQuantity', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany(), Order.deleteMany()]))

    it('should increment quantity of existing product in cart', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Product.create({ name: random.productName(), price: random.price(1, 20) })
                    .then(product => {
                        return Order.create({ user: user._id, products: [{ product: product._id, quantity: 1 }] })
                            .then(order => {
                                return updateCartItemQuantity(product._id, order._id, user._id, 2)
                                    .then(() => {
                                        return Order.findById(order._id)
                                            .then(updatedOrder => {
                                                expect(updatedOrder.products[0].quantity).to.equal(3)
                                            })
                                    })
                            })
                    })
            })
    })


    it('should decrement quantity of existing product in cart', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Product.create({ name: random.productName(), price: random.price(1, 20) })
                    .then(product => {
                        return Order.create({ user: user._id, products: [{ product: product._id, quantity: 3 }] })
                            .then(order => {
                                return updateCartItemQuantity(product._id, order._id, user._id, -2)
                                    .then(() => {
                                        return Order.findById(order._id)
                                            .then(updatedOrder => {
                                                expect(updatedOrder.products[0].quantity).to.equal(1)
                                            })
                                    })
                            })
                    })
            })
    })


    it('should remove product from cart when quantity becomes zero', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                return Product.create({ name: random.productName(), price: random.price(1, 20) })
                    .then(product => {
                        return Order.create({ user: user._id, products: [{ product: product._id, quantity: 1 }] })
                            .then(order => {
                                return updateCartItemQuantity(product._id, order._id, user._id, -1)
                                    .then(() => {
                                        return Order.findById(order._id)
                                            .then(updatedOrder => {
                                                expect(updatedOrder.products).to.be.empty
                                            })
                                    })
                            })
                    })
            })
    })


    it('should throw NotFoundError when user does not exist', () => {
        const nonExistingUserId = new ObjectId()

        return updateCartItemQuantity(new ObjectId(), new ObjectId(), nonExistingUserId, 1)
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })
    })


    it('should throw NotFoundError when order does not exist', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                const nonExistingOrderId = new ObjectId()

                return updateCartItemQuantity(new ObjectId(), nonExistingOrderId, user._id, 1)
                    .then(() => {
                        throw new Error('The function should have thrown an error')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('Order not found')
                    })
            })
    })


    it('should throw NotFoundError when product does not exist', () => {
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(user => {
                const product = new Product({ name: random.productName(), price: random.price(1, 20) })
                const order = new Order({ user: user._id, products: [{ product: product._id, quantity: 1 }] })

                const nonExistingProductId = new ObjectId()

                return updateCartItemQuantity(nonExistingProductId, order._id, user._id, 1)
                    .then(() => {
                        throw new Error('The function should have thrown an error')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('Product not found')
                    })
            })
    })

    after(() => mongoose.disconnect())
})