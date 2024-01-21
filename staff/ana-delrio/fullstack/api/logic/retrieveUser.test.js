import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser('658961111bef8b597847ec00', (error, user) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log('retrieved', user)
            })
        } catch (error) {
            console.log(error)

        }
    })

    .catch(error => console.error(error))

