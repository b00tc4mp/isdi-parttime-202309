import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            createPost('658961111bef8b597847ec00', 'https://quetengasungrandia.com/wp-content/uploads/2014/11/Bipbip-Coyote-wallpaper-768x576.jpg', 'Hi!', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post created')
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))