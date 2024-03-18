import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import getSamples from './getSamples.js'
import { Sample, User } from '../data/models.js'

describe('getSamples', () => {
    before(async () => {
        await mongoose.connect(process.env.TEST_MONGODB_URL);
    });

    let userId;

    beforeEach(async () => {
        await Sample.deleteMany();
        await User.deleteMany();

        // Crear un usuario de prueba
        const user = await User.create({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password',
            favSamples: []
        });
        userId = user.id;

        // Crear algunos samples de prueba
        const samplesData = [
            { name: 'Sample 1', filePath: 'path/to/sample1.mp3' },
            { name: 'Sample 2', filePath: 'path/to/sample2.mp3' },
        ];
        await Sample.insertMany(samplesData);
    });

    it('should retrieve all samples file paths and mark favorites correctly', async () => {
        // Asumir que el primer sample es favorito
        const samples = await Sample.find();
        await User.findByIdAndUpdate(userId, { $push: { favSamples: samples[0]._id } });

        const retrievedSamples = await getSamples(userId);

        expect(retrievedSamples).to.be.an('array').that.has.lengthOf(2);
        // Verificar que el primer sample es marcado como favorito
        expect(retrievedSamples[0].fav).to.be.true;
        // Verificar que el segundo sample no es marcado como favorito
        expect(retrievedSamples[1].fav).to.be.false;
    });

    after(async () => {
        await mongoose.disconnect();
    });
});