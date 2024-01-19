const changePasswordUser = require('./changePasswordUser')

try {
    changePasswordUser('4pf53kk73no0', '123123123', '123123', '123123', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }
        console.log('password changed', userId)

    })
} catch (error) {
    console.log(error)

}