import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import commentPost from './commentPost.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {

        try {
            commentPost('65afe3cee4a6208ef9bf08b0', '65afea36ef22d1107e006031', 'Cosa de Belen')
                .then(user => console.log('commented', user))
                .catch(error => console.error(error))

        } catch (error) {
            console.log(error)
        }


    })

    .catch(error => console.error(error))