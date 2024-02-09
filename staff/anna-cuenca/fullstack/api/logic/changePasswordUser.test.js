import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import changePasswordUser from './changePasswordUser.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        await changePasswordUser('65b93b869f8dd89eeaaf9c28', '456456456', '123123123', '123123123')
        console.log('password changed')
    } catch (error) {
        console.log(error)
    }
})()
