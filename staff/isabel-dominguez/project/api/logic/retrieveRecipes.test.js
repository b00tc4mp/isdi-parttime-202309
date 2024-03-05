import mongoose from 'mongoose'

import retrieveRecipes from './retrieveRecipes.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {

        retrieveRecipes('')
            .then(recipe => {
                console.log('retrieved recipe', recipe)
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))