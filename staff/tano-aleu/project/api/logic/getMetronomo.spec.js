import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import { Metronomo } from '../data/models.js'
import getMetronomo from './getMetronomo.js'

describe('getMetronomo', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Metronomo.deleteMany())

    it('should retrieve metronomo file paths', async () => {
        const metronomoData = [
            { name: 'Metronomo1', filePath: 'path/to/metronomo1.mp3' },
        ];

        await Metronomo.insertMany(metronomoData);

        const metronomos = await getMetronomo();

        expect(metronomos).to.be.an('array').that.has.lengthOf(metronomoData.length);
        metronomoData.forEach(data => {
            expect(metronomos.some(metronomo => metronomo.filePath === data.filePath)).to.be.true;
        });
    });

    after(() => mongoose.disconnect())
})
