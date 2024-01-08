const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            retrieveUser('658b1fdabacb648a0efc5bce', (error, user) => {
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