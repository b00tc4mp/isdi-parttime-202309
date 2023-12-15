const retrieveUser = require('./retrieveUser')

try {
    retrieveUser('6z32ut2oz4c0', (error, user) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('retrieved', user)
    })

} catch (error) {
    console.error(error)
}