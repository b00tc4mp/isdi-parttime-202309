import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            retrieveUser('65d662cd94a3197f2c3ac115')
                .then(user => console.log('retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))