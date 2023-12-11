const deleteUser = require('./deleteUser')

try {
    deleteUser('5u7iskm9sf00', '123123123', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user deleted', userId)
    })
} catch (error) {
    console.log(error)
}