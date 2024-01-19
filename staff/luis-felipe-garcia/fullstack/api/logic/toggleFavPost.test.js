import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {

            //Users for add to favs to check function and support check of deletePost. Exists?
            //'6584656975fc0b52c39022e1'

            //posts to be faved to check function and support check of deletePost. Exists?
            //'658754fa59a4bf2702110411'
            // '65875572b464a40b921c96b5'
            //'658757528142a4c392ea62f5'
            //'658757885cd0d8f266d7d901'
            toggleFavPost('658467e375fc0b52c39022e3', '658757885cd0d8f266d7d901', error => {
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