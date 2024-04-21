import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import changeUserEmail from './changeUserEmail.js'

(async () => {
    await mongoose.connect(process.env.TEST_MONGODB_URL)

    try {
        await changeUserEmail('660379bca28f8799b4cff129', 'gon@zo2.com', 'gon@zo2.com', '123123123')
        console.log('email changed')
    } catch (error) {
        console.error(error)
    }
})()