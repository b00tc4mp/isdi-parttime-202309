const toggleLikePost = require ('./toggleLikePost')

try {
    toggleLikePost( "1g6al6ee05pc", "40ga0cl8bd00", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}