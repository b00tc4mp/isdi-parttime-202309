import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

mongoose.connect(process.env.MONGODB_URL) //aqui lo pongo en mi api
    .then(() => {

        try {

            authenticateUser('patata@frita.com', '123123123')
                .then(userId => {
                    console.log('user authenticated', userId)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))


