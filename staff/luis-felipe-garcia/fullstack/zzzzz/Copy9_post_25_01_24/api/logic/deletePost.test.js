import mongoose from 'mongoose'
import deletePost from './deletePost'

//NOTA: Revisar si los userId y postId son correctos para hacer el test, es decir si el UserId tiene en sus favs el postId

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('65847354048098ba1c111778', '65847adb875dad65bcbc74d5', error => {
                if (error) {
                    console.error(error.message)
                    return
                }

            })
            console.log('post unfaved from all users favs and deleted')

        } catch (error) {
            console.error(error.message)
        }

    })
    .catch(error => console.error(error.message))