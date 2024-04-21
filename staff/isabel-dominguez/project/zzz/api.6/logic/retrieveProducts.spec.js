import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveProducts from './retrieveProducts.js'
import { Product } from '../data/models.js'
import { errors } from 'com'

const { NotFoundError } = errors

describe('retrieveProducts', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Product.deleteMany())

    it('succeeds on existing products', () => {
        // Crear varios productos para probar
        const numProducts = 5
        const products = []

        for (let i = 0; i < numProducts; i++) {
            const image = random.image()
            const productName = random.productName()
            const productDescription = random.productDescription()
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
        }

        return Promise.all(products)
            .then(() => {
                return retrieveProducts()
                    .then(retrievedProducts => {
                        expect(retrievedProducts).to.exist
                        expect(retrievedProducts).to.have.lengthOf(numProducts)

                        // Verificar que cada producto devuelto sea válido
                        retrievedProducts.forEach(product => {
                            expect(product).to.have.property('name')
                            expect(product).to.have.property('image')
                            expect(product).to.have.property('price')
                            expect(product).to.have.property('type')
                        })
                    })
            })
    })

    it('fails on non-existing products', () => {
        return retrieveProducts()
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Products not found')
            })
    })

    after(() => mongoose.disconnect())
})