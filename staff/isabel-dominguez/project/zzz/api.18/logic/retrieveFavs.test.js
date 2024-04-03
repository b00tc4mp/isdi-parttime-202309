import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveFavs from './retrieveFavs.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            retrieveFavs('65f20f187290aa65d891d07c')
                .then(products => console.log('retrieved products', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))