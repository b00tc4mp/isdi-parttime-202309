import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
    .then(() => {
        try {
            retrieveUser('65b52ae8b0d9ccbc058a85c6')
                .then(user => console.log('retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))