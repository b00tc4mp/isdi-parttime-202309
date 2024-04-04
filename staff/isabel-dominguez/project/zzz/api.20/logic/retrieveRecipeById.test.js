import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveRecipeById from './retrieveRecipeById.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            retrieveRecipeById('65f74087896c67714c05e816')
                .then(recipe => console.log('retrieved', recipe))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))