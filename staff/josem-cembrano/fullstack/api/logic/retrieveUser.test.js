import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

(async () => {
    await mongoose.connect(process.env.TEST_MONGODB_URL)
    try {
        const user = await retrieveUser('65d2137ba9c4b4d1097c7d06')

        console.log('retrieved', user)
    } catch (error) {
        console.error(error)
    }
})()


