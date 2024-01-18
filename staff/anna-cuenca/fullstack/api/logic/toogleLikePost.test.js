import mongoose from 'mongoose'
import toogleLikePost from './toogleLikePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {

        try {
            toogleLikePost('65959e2a7eff18b095527371', '659a96fc4a7285879ca7ef93', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('post like toogled')
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
