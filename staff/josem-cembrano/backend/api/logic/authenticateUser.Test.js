const authenticateUser = require('./authenticateUser.js')

try {
    authenticateUser('cala@bazin', '123123123', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user authenticated', userId)
    })
} catch (error) {
    console.log(error)
}