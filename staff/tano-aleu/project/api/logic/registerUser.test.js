import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import registerUser from './registerUser.js'

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/project')
    try {
        await registerUser('Gon Zo', 'gon@zo.com', '123123123')
        console.log('user registered')

    } catch (error) {

        console.log(error)
    }
})()
