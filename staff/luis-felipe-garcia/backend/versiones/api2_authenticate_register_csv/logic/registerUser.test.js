const registerUser = require('./registerUser')

try {
    registerUser('Zana Horia', 'zana@horia.es', '1', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('User registered')
    })
    
} catch (error) {
    console.log(error)
    
}