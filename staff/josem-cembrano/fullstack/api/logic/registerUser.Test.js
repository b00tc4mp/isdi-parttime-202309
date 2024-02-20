import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import registerUser from './registerUser.js'

(async () => {
    try {
        await mongoose.connect(process.env.TEST_MONGODB_URL)

        await registerUser('Pis Tacho', 'pis@tacho.com', '123123123')

        console.log('user registered')
    } catch (error) {
        console.error(error)
    }
})()