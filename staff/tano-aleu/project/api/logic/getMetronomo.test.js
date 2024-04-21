import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import getMetronomo from './getMetronomo.js';

(async () => {
    await mongoose.connect(process.env.MONGODB_URL);

    try {
        const metronomo = await getMetronomo();

        console.log('Retrieved metronomo:', metronomo);
    } catch (error) {
        console.error('Error retrieving samples:', error);
    } finally {
        await mongoose.disconnect();
    }
})();
