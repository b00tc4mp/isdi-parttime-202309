import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import toggleFavPost from './toggleFavPost.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
    .then(() => {
        try {
            toggleFavPost('65a7bd5bac10d94819cc652e', '65acffdb7e9f6dc641a72c6c')
                .then(() => {
                    console.log('has been saved fav 💫')
                })
                .catch(error => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))