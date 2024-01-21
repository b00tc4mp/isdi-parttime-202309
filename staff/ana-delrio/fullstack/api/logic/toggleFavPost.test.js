
import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('658961111bef8b597847ec00', '65aab92c6f7208cea9f0aa18', error => {
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
