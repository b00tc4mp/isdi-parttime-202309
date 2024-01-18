
import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {

        try {
            toggleFavPost('659b00eb4e62f914182bb698', '659d30db76b0e532f9a1b6f8', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('fav toogled')
            })
        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))
