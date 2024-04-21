import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { expect } from 'chai';
import random from './helpers/random.js'; // Asegúrate de que random ahora incluye funciones para generar datos de samples

import toggleFavSample from './toggleFavSample.js'; // Asume que esta es tu función modificada
import { User, Sample } from '../data/models.js';
import { errors } from 'com';

const { NotFoundError, SystemError } = errors;

describe('toggleFavSample', () => {
    before(async () => {
        await mongoose.connect(process.env.TEST_MONGODB_URL);
    });

    beforeEach(async () => {
        await Promise.all([
            User.deleteMany(),
            Sample.deleteMany(),
        ]);
    });

    it('succeeds on marking an existing sample as favorite and unmarking it', async () => {
        const user = await User.create({ name: random.name(), email: random.email(), password: random.password() });
        const sample = await Sample.create({ name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() });

        // Mark as favorite
        await toggleFavSample(user.id, sample.id);
        let updatedUser = await User.findById(user.id);
        expect(updatedUser.favSamples.includes(sample.id)).to.be.true;

        // Unmark as favorite
        await toggleFavSample(user.id, sample.id);
        updatedUser = await User.findById(user.id);
        expect(updatedUser.favSamples.includes(sample.id)).to.be.false;
    });

    it('fails on non-existing user', async () => {
        const sample = await Sample.create({ name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() });
        const nonExistingUserId = new mongoose.Types.ObjectId().toString();

        try {
            await toggleFavSample(nonExistingUserId, sample.id);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal('user not found');
        }
    });

    it('fails on non-existing sample', async () => {
        const user = await User.create({ name: random.name(), email: random.email(), password: random.password() });
        const nonExistingSampleId = new mongoose.Types.ObjectId().toString();

        try {
            await toggleFavSample(user.id, nonExistingSampleId);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal('sample not found');
        }
    });

    it('fails with an invalid user id format', async () => {
        const invalidUserId = "invalidId";
        const sample = await Sample.create({ name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() });

        try {
            await toggleFavSample(invalidUserId, sample.id);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError); // O el tipo específico de error que esperas por un ID inválido
        }
    });

    it('fails with an invalid sample id format', async () => {
        const user = await User.create({ name: random.name(), email: random.email(), password: random.password() });
        const invalidSampleId = "invalidId";

        try {
            await toggleFavSample(user.id, invalidSampleId);
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError); // O el tipo específico de error que esperas por un ID inválido
        }
    });

    it('handles multiple samples being marked and unmarked as favorites', async () => {
        const user = await User.create({ name: random.name(), email: random.email(), password: random.password() });
        const samples = await Sample.insertMany([
            { name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() },
            { name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() }
        ]);

        // Marcar ambos como favoritos y luego desmarcar uno
        await toggleFavSample(user.id, samples[0].id);
        await toggleFavSample(user.id, samples[1].id);
        await toggleFavSample(user.id, samples[1].id);

        let updatedUser = await User.findById(user.id);
        expect(updatedUser.favSamples.includes(samples[0].id)).to.be.true;
        expect(updatedUser.favSamples.includes(samples[1].id)).to.be.false;
    });





    after(async () => {
        await mongoose.disconnect();
    });

});
