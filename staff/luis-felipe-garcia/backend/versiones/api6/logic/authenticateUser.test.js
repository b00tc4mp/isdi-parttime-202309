const authenticateUser = require('./authenticateUser')

try {
    authenticateUser('zana@horia.es', '1', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('User authenticated', userId)
    })

} catch (error) {
    console.log(error)

}