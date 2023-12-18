const registerUser = require('./registerUser')

try {
    registerUser('Lee Chuga 112', 'lee@chuga11.es', '1', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('User registered')
    })
    
} catch (error) {
    console.log(error)
    
}