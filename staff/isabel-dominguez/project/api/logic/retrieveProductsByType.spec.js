import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveProductsByType from './retrieveProductsByType.js'
import { Product } from '../data/models.js'
import { errors } from 'com'

const { NotFoundError } = errors

describe('retrieveProductsByType', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Product.deleteMany())

    it('succeeds on existing products', () => {

        const products = []

        const image = random.image()
        const productName = random.productName()
        const productDescription = random.description()
        const productType = random.productType()
        const price = random.price(1, 20)

        const newProduct = new Product({
            name: productName,
            description: productDescription,
            image: image,
            price: price,
            type: productType
        })

        products.push(newProduct.save())


        return Promise.all(products)
            .then(() => {
                return retrieveProductsByType(productType)
                    .then(retrievedProducts => {
                        expect(retrievedProducts).to.exist
                        expect(newProduct).to.have.property('name')
                        expect(newProduct).to.have.property('description')
                        expect(newProduct).to.have.property('image')
                        expect(newProduct).to.have.property('price')
                        expect(newProduct).to.have.property('type')
                    })
            })
    })

    it('fails on non-existing products', () => {
        const typeNonExist = {
            type: 'TypeNonExist'
        }

        return retrieveProductsByType(typeNonExist.type)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`Products of type ${typeNonExist.type} not found`)
            })
    })

    after(() => mongoose.disconnect())
})

