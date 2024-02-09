const mongoose = require('mongoose')

const changePasswordUser = require('./changePasswordUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            changePasswordUser('659a904a06ac064c6025bc91', '123', '111', '111', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('password changed')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))
