import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import changeEmailUser from './changeEmailUser.js'

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {
        await changeEmailUser('65abeea7ccb29864b82b9dc4', 'patatare@frita.com', 'patatare@frita.com', '123123123')
        console.log('email changed')
    } catch (error) {
        console.log(error)
    }
})()


