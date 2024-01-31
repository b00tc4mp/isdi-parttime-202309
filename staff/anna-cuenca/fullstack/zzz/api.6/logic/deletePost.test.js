import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            deletePost('65944ed178f044ee3aece02b', '6595064381b9e9c247381d20', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('post deleted')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error)) 