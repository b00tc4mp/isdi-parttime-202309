import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost(
                // '6584656975fc0b52c39022e1',
                '658467e375fc0b52c39022e3',
                'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
                'Grande Peter !',
                error => {
                    if (error) {
                        console.error(error)
                        return
                    }
                    console.log('post created')
                })

        } catch (error) {
            console.log(error)
        }

    })
    .catch(error => console.error(error))