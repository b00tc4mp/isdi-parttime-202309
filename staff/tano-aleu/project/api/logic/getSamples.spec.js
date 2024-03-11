// En getSamples.spec.js o un archivo de pruebas similar

import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import getSamples from './getSamples.js'
import { Sample } from '../data/models.js'

describe('getSamples', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Sample.deleteMany())

    it('should retrieve all sample file paths', async () => {
        const samplesData = [
            { name: 'Sample 1', filePath: 'path/to/sample1.mp3' },
            { name: 'Sample 2', filePath: 'path/to/sample2.mp3' }
            // Más samples si es necesario
        ];

        await Sample.insertMany(samplesData)

        const filePaths = await getSamples()

        expect(filePaths).to.be.an('array').that.has.lengthOf(samplesData.length)
        samplesData.forEach(sample => {
            expect(filePaths).to.include(sample.filePath)
        })
    })

    after(() => mongoose.disconnect())
})
