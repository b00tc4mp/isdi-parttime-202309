const changeEmailUser = require('./changeEmailUser')

try {
    changeEmailUser('31y1lmy4r700', 'patata@frita.com', 'cala@bacin.com', 'cala@bacin.com', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('email changed in user with id:', userId)
    })

} catch (error) {
    console.log(error)
}