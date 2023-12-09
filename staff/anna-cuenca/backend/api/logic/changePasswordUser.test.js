const changePasswordUser = require('./changePasswordUser')

try {
    changePasswordUser('cala@bacin2.com', '123', '111', '111', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('password changed in user with id: ', userId)
    })

} catch (error) {
    console.log(error)
}