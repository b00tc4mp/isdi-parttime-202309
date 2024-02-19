const retrieveUser = require('./retrieveUser')

try {
    retrieveUser("4q0ivj68xgq0", (error, user) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('retrieved', user)
    })
} catch (error) {
    console.log(error)
}
