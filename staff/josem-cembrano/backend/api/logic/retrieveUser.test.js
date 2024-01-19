const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser('65a7bd5bac10d94819cc652e', (error, user) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('retrieve', user)
            })
        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))

