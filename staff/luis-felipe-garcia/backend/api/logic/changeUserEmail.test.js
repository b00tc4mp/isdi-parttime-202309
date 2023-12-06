const { error } = require('console')
const changeUserEmail = require('./changeUserEmail')

try {

    changeUserEmail('3n7rgalrgwg0', 'cala2@bacin.es', 'cala2@bacin.es', '1', (error, user) => {
        if (error) {
            console.error(error)
            return
        }

        console.log(user)
    })
} catch (error) {
    console.log(error)

}