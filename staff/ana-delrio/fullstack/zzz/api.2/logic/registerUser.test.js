const registerUser = require('./registerUser')

try {
    // registerUser('', 'cala@bacin.com', '123123123', error => {
    registerUser('Le chuga', 'le@chuga.com', '123123123', error => {
        if (error) {
            console.error(error)

            return
        }
        console.log('user registered')
    })
} catch (error) {
    console.log(error)

}