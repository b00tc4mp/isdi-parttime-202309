import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import retrieveSequence from './retrieveSequence.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        const sequences = await retrieveSequence('65d8e3c8e5c7a46a05f53b0c')
        console.log('retrieves user sequences', sequences)
    } catch (error) {
        console.error(error)

    }
})()