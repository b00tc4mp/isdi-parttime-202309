import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import changeEmailUser from './changeEmailUser.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {

        try {
            changeEmailUser('65abeea7ccb29864b82b9dc4', 'patatare@frita.com', 'patatare@frita.com', '123123123')
                .then(() => console.log('email changed'))
                .catch(error => console.error(error))


        } catch (error) {
            console.log(error)
        }


    })

    .catch(error => console.error(error))