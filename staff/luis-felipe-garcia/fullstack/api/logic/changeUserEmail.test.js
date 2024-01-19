import mongoose from 'mongoose'
import changeUserEmail from './changeUserEmail'


//CASE HAPPY PATH
//Ex Change mail to 'elefan@te.com':
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
            changeUserEmail('658474423281e9fb97995467', 'elefan@te.com', 'elefan@te.com', '123123123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('mail changed')

            })
        } catch (error) {
            console.error(error)

        }

    })
    .catch(error => console.error(error))


//CASE mails do not match
//Ex Change mail to 'elefan@te.com':
// {
//     _id: ObjectId('658474423281e9fb97995467'),
//     name: 'Ele Fante',
//     email: 'ele@fante.com',
//     password: '123123123',
//     favs: []
//   },

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserEmail('658474423281e9fb97995467', 'elefan@te.com', 'wrong@mail.com', '123123123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('mail changed')

            })
        } catch (error) {
            console.error(error)

        }

    })
    .catch(error => console.error(error))

//CASE wrong password
//Ex Change mail to 'elefan@te.com':
// {
//     _id: ObjectId('658474423281e9fb97995467'),
//     name: 'Ele Fante',
//     email: 'ele@fante.com',
//     password: '123123123',
//     favs: []
//   },

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserEmail('658474423281e9fb97995467', 'elefan@te.com', 'elefan@te.com', 'wrongpassword', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('mail changed')

            })
        } catch (error) {
            console.error(error)

        }

    })
    .catch(error => console.error(error))

//Terminal return
// (base) lf@MacBook-Pro-de-Luis api % node ./logic/changeUserEmail.test.js
// CredentialsError: wrong credentials
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/backend/api/logic/changeUserEmail.js:25:26
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
// ContentError: new emails do not match
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/backend/api/logic/changeUserEmail.js:20:26
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
// mail changed
