const CSV = require(('../utils/CSV'))
const findUserById = require('./findUserById')

try {
    console.log('trying load file')
    CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        console.log('Calling findUser')

        findUserById('u3', users, (error, user) => {
            if (error) {
                console.error(error)
                return
            }

            console.log('Finishing findUser')

            console.log(user)
        })

    })
} catch (error) {
    console.error(error)
}

