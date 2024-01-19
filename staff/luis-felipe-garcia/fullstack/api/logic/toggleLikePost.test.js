import mongoose from 'mongoose'
import toggleLikePost from './toggleLikePost'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost("658467e375fc0b52c39022e3", "658522cd96367f332bc1518b", error => {
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