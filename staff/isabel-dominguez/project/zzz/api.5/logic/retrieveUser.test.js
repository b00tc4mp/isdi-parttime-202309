import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            retrieveUser('65db17e47cef8ece86aa911c')
                .then(user => console.log('retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))