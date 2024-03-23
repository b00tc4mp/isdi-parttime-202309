import mongoose from 'mongoose'

import retrieveRecipesByType from './retrieveRecipesByType.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {

        retrieveRecipesByType('Treatment')
            .then(recipe => {
                console.log('retrieved recipe', recipe)
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))