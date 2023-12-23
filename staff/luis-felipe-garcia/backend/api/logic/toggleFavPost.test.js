const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {

            toggleFavPost('6584656975fc0b52c39022e1', '6584687a75fc0b52c39022e4', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('fav toggled')


            })

        } catch (error) {
            console.error(error)

        }

    })

    .catch(error => console.error(error))

    //Terminal mongoshell:
    // {
    //     _id: ObjectId('6584656975fc0b52c39022e1'),
    //     name: 'Peter Pan',
    //     email: 'peter@pan.com',
    //     password: '123123123',
    //     favs: [ ObjectId('6584687a75fc0b52c39022e4') ],
    //     __v: 1
    //   },