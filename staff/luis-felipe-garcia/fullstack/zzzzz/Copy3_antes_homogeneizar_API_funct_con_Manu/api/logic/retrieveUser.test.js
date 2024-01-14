const mongoose = require('mongoose')
const retrieveUser = require('./retrieveUser')


//CASE user exist
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser('6584656975fc0b52c39022e1', (error, user) => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('retrieved', user)

            })


        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))

// //CASE user not exist
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser('6584656975fc0b52c39022e9', (error, user) => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('retrieved', user)

            })


        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))
