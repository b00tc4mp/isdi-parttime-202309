import mongoose from 'mongoose'

import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('65a7bcdaff739420cdb3f9a1', '65acffdb7e9f6dc641a72c6c', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('like toggled👍')

            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
