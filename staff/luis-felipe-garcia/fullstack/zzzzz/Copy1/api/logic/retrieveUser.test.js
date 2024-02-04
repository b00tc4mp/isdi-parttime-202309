const retrieveUser = require('./retrieveUser')

try {
    retrieveUser('5hjsjd4co740', (error, user) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('retrieved', user)

    })


} catch (error) {
    console.error(error)
}

