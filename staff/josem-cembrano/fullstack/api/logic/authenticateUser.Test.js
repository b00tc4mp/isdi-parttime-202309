import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import authenticateUser from './authenticateUser.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
    .then(() => {
        try {
            authenticateUser('pis@tacho.com', '123123123')
                .then(userId => {
                    console.log('user authenticated', userId)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))