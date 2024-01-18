const mongoose = require('mongoose')

const changeEmailUser = require('./changeEmailUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeEmailUser('659aaf07e1d0a278068d446a', 'man@zana.com', 'man@zanita.com', 'man@zanita.com', (error, userId) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('email changed', userId)
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))