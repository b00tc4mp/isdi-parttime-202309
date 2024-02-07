// ///// VERSION CON COLORES ///// 

// const mongoose = require('mongoose')
// const retrieveUser = require('./retrieveUser')
// const { printInRed, printInGreen } = require('./consoleColors2');

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => {

//         try {
//             retrieveUser('658b1fdabacb648a0efc5bce', (error, user) => {
//                 if (error) {
//                     printInRed(error)
//                     return
//                 }
//                 printInGreen('retrived User', user)
//             })

//         } catch (error) {
//             printInRed(error)
//         }
//     })

//     .catch(error => printInRed(error))



/////////////// VERSION NORMAL ////////////
import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {

        try {
            retrieveUser('65ab846ed998b589cd22fa81') // remolacha
                .then(user => console.log('retrieved', user))
                .catch(error => console.error(error))


        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))