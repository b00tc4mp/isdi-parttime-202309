const mongoose = require('mongoose')
const editTextPost = require('./editTextPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            editTextPost('659a904a06ac064c6025bc91', '659a96fc4a7285879ca7ef93', 'La Remolacha mancha', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('post text edited')
            })
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))  