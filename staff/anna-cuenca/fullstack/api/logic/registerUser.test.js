import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import registerUser from './registerUser.js' // el requiere es como el input

(async () => {

    await mongoose.connect(process.env.MONGODB_URL)

    try {

        await registerUser('Man Darina', 'man@darina.com', '123123123')
        console.log('user registered')

    } catch (error) {

        console.log(error)

    }
})()


