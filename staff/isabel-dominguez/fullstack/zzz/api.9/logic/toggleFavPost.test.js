import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('659d998329ee11d6151ee661', '659d99a329ee11d6151ee670', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post fav toggled')
            })

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))