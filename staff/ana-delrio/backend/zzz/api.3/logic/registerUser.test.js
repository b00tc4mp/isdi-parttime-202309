const registerUser = require('./registerUser')

try {
    // registerUser('Cala bacín', 'cala@bacin.com', '123123123', error => {
    registerUser('ana delrio', 'ana@bacin.com', '123123123', error => {
        if (error) {
            console.error(error)

            return
        }
        console.log('user registered')
    })
} catch (error) {
    console.log(error)

}