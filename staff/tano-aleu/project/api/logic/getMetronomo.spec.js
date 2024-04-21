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



    it('should retrieve multiple metronomo file paths successfully', async () => {
        const metronomoData = [
            { name: 'Metronomo1', filePath: 'path/to/metronomo1.mp3', bpm: 100 },
            { name: 'Metronomo2', filePath: 'path/to/metronomo2.mp3', bpm: 120 }
        ];

        await Metronomo.insertMany(metronomoData);

        const metronomos = await getMetronomo();

        expect(metronomos).to.be.an('array').that.has.lengthOf(metronomoData.length);
        metronomoData.forEach(data => {
            const found = metronomos.some(metronomo =>
                metronomo.filePath === data.filePath && metronomo.name === data.name && metronomo.bpm === data.bpm
            );
            expect(found).to.be.true;
        });
    });



    it('should retrieve metronomos with correct properties', async () => {
        const metronomoData = { name: 'MetronomoTest', filePath: 'path/to/metronomoTest.mp3', bpm: 110 };

        await Metronomo.create(metronomoData);

        const [metronomo] = await getMetronomo();

        expect(metronomo).to.include.keys('name', 'filePath', 'bpm');
        expect(metronomo).to.not.include.keys('_id', '__v'); // Asegúrate de que no incluya propiedades de la base de datos
    });



    it('should return an empty array when no metronomos are available', async () => {
        const metronomos = await getMetronomo();

        expect(metronomos).to.be.an('array').that.is.empty;
    });



    after(() => mongoose.disconnect())
})
