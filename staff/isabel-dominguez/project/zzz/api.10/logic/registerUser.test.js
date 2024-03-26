import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import registerUser from './registerUser.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            registerUser('Isabel', 'isa@bel.com', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))