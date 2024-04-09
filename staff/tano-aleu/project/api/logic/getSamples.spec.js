import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'

import { SystemError, NotFoundError } from 'com/errors.js';

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
            { name: 'Sample 1', filePath: 'path/to/sample1.mp3', bpm: 120, duration: 3.5 },
            { name: 'Sample 2', filePath: 'path/to/sample2.mp3', bpm: 100, duration: 2.5 },
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

    it('should retrieve samples without any favorites if the user has not marked any', async () => {
        // Asumiendo que userId ya está definido y el usuario no tiene favoritos
        const retrievedSamples = await getSamples(userId);

        expect(retrievedSamples).to.be.an('array');
        expect(retrievedSamples.every(sample => sample.fav === false)).to.be.true;
    });

    it('should fail if the user ID is not provided', async () => {
        try {
            await getSamples(); // No proporcionar userId
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError);
            expect(error.message).to.equal('User ID not provided');
        }
    });

    it('should fail if the user ID is invalid', async () => {
        try {
            await getSamples('invalidUserId');
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError);
            expect(error.message).to.include('User not found');
        }
    });

    it('should fail if no user matches the provided ID', async () => {
        const nonExistentUserId = new mongoose.Types.ObjectId().toString();
        try {
            await getSamples(nonExistentUserId);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError);
            expect(error.message).to.equal('User not found');
        }
    });

    it('should retrieve samples including bpm and duration info', async () => {
        // Asumir que ya se han insertado samples con bpm y duration en la base de datos
        const retrievedSamples = await getSamples(userId);

        expect(retrievedSamples.every(sample =>
            typeof sample.bpm === 'number' && typeof sample.duration === 'number'
        )).to.be.true;

    });

    after(async () => {
        await mongoose.disconnect();
    });
});