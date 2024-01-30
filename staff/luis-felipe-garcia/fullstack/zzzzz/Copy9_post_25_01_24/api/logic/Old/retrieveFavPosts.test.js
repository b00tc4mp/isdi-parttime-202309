import mongoose from 'mongoose'
import retrieveFavPosts from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/retrieveFavPosts'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {

            retrieveFavPosts(
                '6584656975fc0b52c39022e1',
                //'658467e375fc0b52c39022e3', 
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