const registerUser = require('./registerUser') // el requiere es como el input

try {
    registerUser('Cala Bacin', 'cala@bacin2.com', '1234', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('user registered')
    })

} catch (error) {
    console.log(error)
}