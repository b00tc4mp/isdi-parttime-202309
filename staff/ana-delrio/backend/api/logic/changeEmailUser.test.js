
const changeEmailUser = require('./changeEmailUser')

try {
    changeEmailUser('4pf53kk73no0', 'ana@bacin.com', 'ana123@bacin.com', 'ana123@bacin.com', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }
        console.log('email changed', userId)
    })

} catch (error) {
    console.error(error)

}