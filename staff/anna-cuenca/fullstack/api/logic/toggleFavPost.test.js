import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost.js'

mongoose.connect(process.env.MONGODB_URL)

    .then(() => {

        try { //userId // postId
            toggleFavPost('65afdf535c84b191db2dad5b', '65acdfe84f5971df0e614d4f')
                .then(() => {
                    console.log('fav toogled')
                })
                .catch(error => {
                    console.error(error)
                })




        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))
