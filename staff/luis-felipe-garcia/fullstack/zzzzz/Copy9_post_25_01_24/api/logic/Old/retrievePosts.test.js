import mongoose from 'mongoose'
import retrievePosts from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/retrievePosts'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {

            retrievePosts(
                //'6584656975fc0b52c39022e1',
                '658467e375fc0b52c39022e3',
                (error, posts) => {

                    if (error) {
                        console.error(error)
                        return
                    }

                    console.log('user posts', posts)

                })

        } catch (error) {
            console.error(error)

        }
    })