const retrieveFavPosts = require ('./retrieveFavPosts')

try {

    retrieveFavPosts('amhkljhnhc4', (error, favs) => {
        if (error) {
            console.error(error)
            return
        }

        console.log(`favs posts of user):`, favs)
    })
    
} catch (error) {
    console.error(error.message)
    
}
