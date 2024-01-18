import mongoose from 'mongoose'
import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('659d80f8aab595d1bf1d8ece', '659d824f9f02bc61a6c11859', error => {
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