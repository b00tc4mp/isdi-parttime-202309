const mongoose = require('mongoose')
const updatePostText = require('./updatePostText')

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    try {

        updatePostText('6584656975fc0b52c39022e1', '6584687a75fc0b52c39022e4', 'A este post le hemos cambiado el texto !!!', error => {
            if(error) {
                console.error(error)
                return
            }

            console.log('text updated')

        })
        
    } catch (error) {
        console.error(error)
        
    }
})

.catch(error => console.error(error))

//Terminal return

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/updatePostText.test.js
// text updated

//Mongo return
// {
//     _id: ObjectId('6584687a75fc0b52c39022e4'),
//     author: '6584656975fc0b52c39022e1',
//     image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
//     text: 'A este post le hemos cambiado el texto !!!',
//     likes: [ ObjectId('6584656975fc0b52c39022e1') ],
//     __v: 1
//   },


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    try {

        updatePostText('658467e375fc0b52c39022e3', '6584687a75fc0b52c39022e4', 'A este post le hemos cambiado el texto !!!', error => {
            if(error) {
                console.error(error)
                return
            }

            console.log('text updated')

        })
        
    } catch (error) {
        console.error(error)
        
    }
})

.catch(error => console.error(error))
//Terminal return with post not belongs to user Id
// CredentialsError: post do not belong to user
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/backend/api/logic/updatePostText.js:19:26
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
