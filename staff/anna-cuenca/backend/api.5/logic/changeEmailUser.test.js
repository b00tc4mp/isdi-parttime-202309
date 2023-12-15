const changeEmailUser = require('./changeEmailUser')

try {
    changeEmailUser('3vxs04m50tk0', 'cala@bacin.com', 'lechu@guita.com', 'lechu@guita.com', (error, userId) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('email changed in user with id:', userId)
    })

} catch (error) {
    console.log(error)
}