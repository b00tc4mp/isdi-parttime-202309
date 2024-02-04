const mongoose = require('mongoose')
const changeUserPassword = require('./changeUserPassword')


//CASE HAPPY PATH
//Ex Change password to '999999999':
// {
//     _id: ObjectId('658474423281e9fb97995467'),
//     name: 'Ele Fante',
//     email: 'ele@fante.com',
//     password: '123123123',
//     favs: []
//   },

//Se supone que el usuario está activo, por lo que debería sobrar la
//identificación del mismo con Id, pero a efectos de este código inicial se incorpora.

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserPassword('658474423281e9fb97995467', '999999999', '999999999', '123123123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('password changed')

            })
        } catch (error) {
            console.error(error)

        }

    })
    .catch(error => console.error(error))


//CASE password do not match
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserPassword('658474423281e9fb97995467', '111111111', '999999999', '123123123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('password changed')

            })
        } catch (error) {
            console.error(error)

        }

    })
    .catch(error => console.error(error))


    //CASE wrong password
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    try {
        changeUserPassword('658474423281e9fb97995467', '999999999', '999999999', 'wrongpassword', error => {
            if (error) {
                console.error(error)
                return
            }

            console.log('password changed')

        })
    } catch (error) {
        console.error(error)

    }

})
.catch(error => console.error(error))

//Terminal return
// (base) lf@MacBook-Pro-de-Luis api % node ./logic/changeUserPassword.test.js
// CredentialsError: wrong credentials
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/backend/api/logic/changeUserPassword.js:25:26
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
// ContentError: new passwords do not match
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/backend/api/logic/changeUserPassword.js:20:26
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
// password changed

//db.users en mongoDb
// {
//     _id: ObjectId('658474423281e9fb97995467'),
//     name: 'Ele Fante',
//     email: 'elefan@te.com',
//     password: '999999999',
//     favs: []
//   },