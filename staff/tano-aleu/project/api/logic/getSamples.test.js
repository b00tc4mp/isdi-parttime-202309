import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import getSamples from './getSamples.js'; // Asegúrate de usar la ruta correcta a tu archivo getSamples

(async () => {
    await mongoose.connect(process.env.MONGODB_URL);

    try {
        const samples = await getSamples();

        console.log('Retrieved samples:', samples);
    } catch (error) {
        console.error('Error retrieving samples:', error);
    } finally {
        await mongoose.disconnect();
    }
})();
