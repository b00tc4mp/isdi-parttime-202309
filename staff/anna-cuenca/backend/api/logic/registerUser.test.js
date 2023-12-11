const registerUser = require('./registerUser') // el requiere es como el input

try {
    registerUser('Patata Frita', 'patata@frita.com', '000', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('user registered')
    })

} catch (error) {
    console.log(error)
}