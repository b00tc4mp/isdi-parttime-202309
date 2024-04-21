import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import createProduct from './createProduct.js'
import { Product } from '../data/models.js'

describe('createProduct', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Product.deleteMany())

    it('succeeds on creating a product', () => {
        const image = random.image()
        const productName = random.productName()
        const productType = random.productType()
        const price = random.price(1, 20)

        return createProduct(productName, image, price, productType)
            .then(createdProduct => {
                expect(createdProduct).to.exist
                expect(createdProduct.name).to.equal(productName)
                expect(createdProduct.image).to.equal(image)
                expect(createdProduct.price).to.equal(price)
                expect(createdProduct.type).to.equal(productType)

                return Product.findOne({ _id: createdProduct._id })
            })
            .then(product => {
                expect(product).to.exist
                expect(product.name).to.equal(productName)
                expect(product.image).to.equal(image)
                expect(product.price).to.equal(price)
                expect(product.type).to.equal(productType)
            })
    })

    after(() => mongoose.disconnect())
})