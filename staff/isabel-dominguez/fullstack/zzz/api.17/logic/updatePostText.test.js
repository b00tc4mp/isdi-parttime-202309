import mongoose from 'mongoose'

import updatePostText from './updatePostText.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePostText('', '', 'probandooo')
                .then(() => console.log('text post updated!'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error.message)
        }
    })
    .catch(error => console.log(error))