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
                return deleteOrder(order._id.toString()) // Convertir el ID de la orden a cadena
            })
            .then(() => {
                return Order.findById(order._id)
            })
            .then(deletedOrder => {
                expect(deletedOrder).to.be.null
            })
    })


    it('When user does not exist', () => {
        const nonExistingUserId = new ObjectId()

        return deleteOrder(nonExistingUserId.toString(), order._id.toString())
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })
    })


    it('When order does not exist', () => {
        const nonExistingOrderId = new ObjectId()

        return deleteOrder(nonExistingOrderId.toString()) // Convertir el ID de la orden a cadena
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