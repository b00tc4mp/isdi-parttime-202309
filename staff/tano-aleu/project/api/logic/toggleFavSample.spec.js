import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { expect } from 'chai';
import random from './helpers/random.js'; // Asegúrate de que random ahora incluye funciones para generar datos de samples

import toggleFavSample from './toggleFavSample.js'; // Asume que esta es tu función modificada
import { User, Sample } from '../data/models.js';
import { errors } from 'com';

const { NotFoundError } = errors;

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

    // it('fails on non-existing sample', async () => {
    //     const Sample = await Sample.create({ name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() });
    //     const nonExistingSampleId = new mongoose.Types.ObjectId().toString();

    //     try {
    //         await toggleFavSample(user.id, nonExistingSampleId);
    //         throw new Error('should not reach this point');
    //     } catch (error) {
    //         expect(error).to.be.instanceOf(NotFoundError);
    //         expect(error.message).to.equal('sample not found');
    //     }
    // });

    after(async () => {
        await mongoose.disconnect();
    });
});
