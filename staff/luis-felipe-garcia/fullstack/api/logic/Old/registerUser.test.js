import mongoose from 'mongoose'
import registerUser from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/registerUser'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            registerUser('Lee Chuga 112', 'lee@chuga11.es', '123123123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('User registered')
            })

        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))