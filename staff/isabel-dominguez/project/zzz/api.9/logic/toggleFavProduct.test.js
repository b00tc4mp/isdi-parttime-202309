import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toggleFavProduct from './toggleFavProduct.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {

        try {
            toggleFavProduct('65e756762cf4b0b781075ed9', '65e708dbcdf01598022fe0ad')
                .then(() => {
                    console.log('product fav toggled')
                })
                .catch(error => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))