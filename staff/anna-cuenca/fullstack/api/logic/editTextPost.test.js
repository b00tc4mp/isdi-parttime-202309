import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import editTextPost from './editTextPost.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {
        try {
            editTextPost('65b93b869f8dd89eeaaf9c28', '65ba930da33136f844b14a0a', 'Que buenos en una hamburguesa!')
                .then(() => console.log('post edited'))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))  