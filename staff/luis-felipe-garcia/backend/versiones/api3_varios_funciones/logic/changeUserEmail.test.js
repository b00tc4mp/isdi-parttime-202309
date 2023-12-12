const { error } = require('console')
const changeUserEmail = require('./changeUserEmail')
const CSV = require('../utils/CSV')


try {
    console.log('trying load file')
    CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        changeUserEmail(users, 'u1', 'cala2@bacin.es', 'cala2@bacin.es', '1', (error, user) => {
            if (error) {
                console.error(error)
                return
            }

            console.log('user changed', user)
        })
    })
} catch (error) {
    console.log(error)

}
