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
        let user, product
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser
                return Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() })
            })
            .then(createdProduct => {
                product = createdProduct
                return addToCart(product._id.toString(), user._id.toString())
            })
            .then(() => Order.findOne({ user: user._id }))
            .then(updatedOrder => {
                expect(updatedOrder).to.exist
                const updatedProduct = updatedOrder.products.find(p => p.product.equals(product._id))
                expect(updatedProduct).to.exist
                expect(updatedProduct.quantity).to.equal(1)
            })
    })

    it('should increment quantity when adding existing product to cart', () => {
        let user, product
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser
                return Product.create({ name: random.productName(), description: random.description(), image: random.image(), price: random.price(1, 20), type: random.productType() })
            })
            .then(createdProduct => {
                product = createdProduct
                return Order.create({ user: user._id, products: [{ product: product._id, quantity: 1 }] })
            })
            .then(() => addToCart(product._id.toString(), user._id.toString()))
            .then(() => Order.findOne({ user: user._id }))
            .then(updatedOrder => {
                const updatedProduct = updatedOrder.products.find(p => p.product.equals(product._id))
                expect(updatedProduct.quantity).to.equal(2)
            })
    })

    it('should throw NotFoundError when user does not exist', () => {
        const nonExistingUserId = new ObjectId().toString()

        return addToCart(new ObjectId().toString(), nonExistingUserId)
            .then(() => {
                throw new Error('The function should have thrown an error')
            })
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('User not found')
            })
    })

    it('should throw NotFoundError when product does not exist', () => {
        let user
        return User.create({ name: random.name(), email: random.email(), password: random.password() })
            .then(createdUser => {
                user = createdUser
                const nonExistingProductId = new ObjectId().toString()
                return addToCart(nonExistingProductId, user._id.toString())
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
