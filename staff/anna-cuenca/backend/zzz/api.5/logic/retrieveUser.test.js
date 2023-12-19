const retrieveUser = require('./retrieveUser')

try {
    retrieveUser('69d4ph8zzj00', (error, user) => {
        if (error) {
            console.error(error)
            return
        }
        console.log('retrieved', user)
    })

} catch (error) {
    console.error(error)
}