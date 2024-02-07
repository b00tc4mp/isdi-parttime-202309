import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import registerUser from './registerUser.js' // el requiere es como el input

mongoose.connect(process.env.MONGODB_URL) //aqui lo pongo en mi api
    .then(() => {

        try {
            registerUser('Man Darina', 'man@darina.com', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)

        }
    })

    .catch(error => console.error(error))