const updateUser = require('./updateUser')

try {
    updateUser({ id: 'u2', name: 'name1', email: 'email2@gmail.com', password: '1' },
        (error, index) => {
            if (error) {
                console.error(error)
                return
            }
        })
} catch (error) {
    console.error(error)

}