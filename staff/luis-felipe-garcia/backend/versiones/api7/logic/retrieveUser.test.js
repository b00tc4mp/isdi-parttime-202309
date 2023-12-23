const retrieveUser = require('./retrieveUser')

try {
    retrieveUser('1g6al6ee05pc', (error, user) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('retrieved', user)

    })


} catch (error) {
    console.error(error)
}

