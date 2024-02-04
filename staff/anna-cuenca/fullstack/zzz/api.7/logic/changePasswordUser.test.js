import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import changePasswordUser from './changePasswordUser.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {
        try {
            changePasswordUser('65b93b869f8dd89eeaaf9c28', '456456456', '123123123', '123123123')
                .then(() => console.log('password changed'))
                .catch(error => console.log(error))

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))
