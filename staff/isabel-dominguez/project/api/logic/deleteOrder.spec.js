import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import deleteOrder from './deleteOrder.js'
import { Order, User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError } = errors

const { ObjectId } = mongoose.Types

describe('deleteOrder', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Order.deleteMany()]))

    it('should delete existing order for existing user', () => {
        let user, order

        return User.create({
            name: random.name(),
            email: random.email(),
            password: random.password()
        })
            .then(createdUser => {
                user = createdUser

                return Order.create({
                    user: user._id,
                    products: [{
                        name: random.productName(),
                        description: random.description(),
                        image: random.image(),
                        price: random.price(1, 20),
                        type: random.productType()
                    }],
                    createdAt: new Date()
                })
            })
            .then(createdOrder => {
                order = createdOrder
                return deleteOrder(user._id.toString(), order._id.toString())
            })
            .then(deletedOrder => {
                expect(deletedOrder._id).to.deep.equal(order._id)
                return Order.findById(order._id)
            })
            .then(foundOrder => {
                expect(foundOrder).to.be.null
            })
    })


    it('should fail when user does not exist', () => {
        const userId = new ObjectId().toString()
        const orderId = new ObjectId().toString()

        return deleteOrder(userId, orderId)
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })
    })


    it('should fail when order does not exist', () => {
        let user, order

        return User.create({
            name: random.name(),
            email: random.email(),
            password: random.password()
        })
            .then(createdUser => {
                user = createdUser._id

                return Order.create({
                    user: user,
                    products: [{
                        name: random.productName(),
                        description: random.description(),
                        image: random.image(),
                        price: random.price(1, 20),
                        type: random.productType()
                    }],
                    createdAt: new Date()
                })
            })
            .then(createdOrder => {
                order = createdOrder._id

                return Order.deleteOne({ _id: order })
            })
            .then(() => {
                return deleteOrder(user.toString(), order.toString())
            })
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Order not found')
            })
    })


    after(() => mongoose.disconnect())
})