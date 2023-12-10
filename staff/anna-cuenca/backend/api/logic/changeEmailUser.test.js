const changeEmailUser = require('./changeEmailUser')

try {
    changeEmailUser('31y1lmy4r700', 'pimiento@verde.com', 'patata@frita.com', 'patata@frita.com', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('email changed in user with id:', userId)
    })

} catch (error) {
    console.log(error)
}