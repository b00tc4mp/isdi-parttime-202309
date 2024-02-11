import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import commentPost from './commentPost.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {

        try {
            commentPost('65b55e049d19d1be7189e2ac', '65ad658b1d7848797e2bc0e7', 'textooo')
                .then(user => console.log('commented', user))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }


    })

    .catch(error => console.error(error))