import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import deleteOrder from './deleteOrder.js'
import { Order, User } from '../data/models.js'
import { errors } from 'com'
const { NotFoundError } = errors

describe('deleteOrder', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([Order.deleteMany(), User.deleteMany()]))

    it('should delete an existing order', () => {
        let order, user
        return User.create({
            name: random.name(),
            email: random.email(),
            password: random.password()
        })
            .then(createdUser => {
                user = createdUser
                return Order.create({ user: user._id })
            })
            .then(createdOrder => {
                order = createdOrder
                return deleteOrder(order._id)
            })
            .then(() => {
                return Order.findById(order._id)
            })
            .then(deletedOrder => {
                expect(deletedOrder).to.be.null
            })
    })


    it('should throw NotFoundError when order does not exist', () => {
        const nonExistingOrderId = new mongoose.Types.ObjectId()

        return deleteOrder(nonExistingOrderId)
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Order not found')
            })
    })

    after(() => mongoose.disconnect())
})