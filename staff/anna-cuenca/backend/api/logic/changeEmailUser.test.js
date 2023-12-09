const changeEmailUser = require('./changeEmailUser')

try {
    changeEmailUser('cala@bacin2.com', 'patata@frita.com', 'patata@frita.com', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('email changed in user with id:', userId)
    })

} catch (error) {
    console.log(error)
}