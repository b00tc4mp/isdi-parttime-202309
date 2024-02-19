import mongoose from 'mongoose'

import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/api')
    .then(() => {

        try {
            toggleLikePost('65aff83bfce060fe7a0d4a83', '65aff89bfce060fe7a0d4a8d', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post like toggled')
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))