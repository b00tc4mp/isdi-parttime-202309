const retrieveFavs = require('./retrieveFavs')

try {
    retrieveFavs('userId', error => {
        if (error) {
            console.log(error)

            return
        }

        console.log('favs retrieved!')
    }) 
} catch (error) {
    console.log(error)
}