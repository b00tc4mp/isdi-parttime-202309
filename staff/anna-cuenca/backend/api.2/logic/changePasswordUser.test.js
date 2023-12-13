const changePasswordUser = require('./changePasswordUser')

try {
    changePasswordUser('31y1lmy4r700', '111', '222', '222', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('password changed in user with id: ', userId)
    })

} catch (error) {
    console.log(error)
}