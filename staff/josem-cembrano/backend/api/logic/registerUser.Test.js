const registerUser = require('./registerUser')

try {
    registerUser('Cala Bacin', 'cala@bazin', '123123123', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user registered')
    })
} catch (error) {
    console.log(error)
}