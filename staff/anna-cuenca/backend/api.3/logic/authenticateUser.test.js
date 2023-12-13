const authenticateUser = require('./authenticateUser')

try {
    authenticateUser('cala@bacin2.com', '1234', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('user authenticated', userId)
    })

} catch (error) {
    console.log(error)
}