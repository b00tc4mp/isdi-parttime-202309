const changePasswordUser = require('./changePasswordUser')

try {
    changePasswordUser('69d4ph8zzj00', '000', '222', '222', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('password changed in user with id: ', userId)
    })

} catch (error) {
    console.log(error)
}