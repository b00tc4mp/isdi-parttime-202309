import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

//CASE user exists
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            authenticateUser('peter@pan.com', '123123123')
                .then(userId => {
                    console.log('User authenticated', userId)
                }).catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

    .catch(error => console.error(error))

// //CASE wrong mail
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => {
//         try {
//             authenticateUser('wrong@mail.com', '123123123', (error, userId) => {
//                 if (error) {
//                     console.error(error)
//                     return
//                 }

//                 console.log('User authenticated', userId)
//             })

//         } catch (error) {
//             console.log(error)
//         }
//     })

//     .catch(error => console.error(error))

// //CASE wrong password
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => {
//         try {
//             authenticateUser('peter@pan.com', 'wrong_password', (error, userId) => {
//                 if (error) {
//                     console.error(error)
//                     return
//                 }

//                 console.log('User authenticated', userId)
//             })

//         } catch (error) {
//             console.log(error)
//         }
//     })

//     .catch(error => console.error(error))