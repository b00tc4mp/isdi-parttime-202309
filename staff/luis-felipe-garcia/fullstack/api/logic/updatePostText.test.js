const updatePostText = require ('./updatePostText')


// CASE Succsess
try {
    updatePostText( "1g6al6ee05pc", "40ga0cl8bd00", 'TEXT UPDATED TO TEST', error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post text updated')
    })
    
} catch (error) {
    console.error(error)
    
}