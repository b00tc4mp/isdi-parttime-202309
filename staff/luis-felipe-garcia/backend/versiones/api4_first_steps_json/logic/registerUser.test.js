const registerUser = require('./registerUser')

try {
    registerUser('Lee Chuga', 'lee@chuga.es', '1', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('User registered')
    })
    
} catch (error) {
    console.log(error)
    
}