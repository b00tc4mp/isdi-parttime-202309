const retrieveUser = require('./retrieveUser')
const CSV = require('../utils/CSV.js')

try {
    console.log('trying load file')


    console.log('Calling retrieveUser')

    retrieveUser('u2', (error, user) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('Finishing retrieveUser')

        console.log(user)
    })


} catch (error) {
    console.error(error)
}

