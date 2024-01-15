const toggleLikePost = require('./toggleLikePost')

try {
    toggleLikePost('4di130e14fa0', '735ila7f8mc0', error =>{
        if(error){
            console.error(error)

            return 
        }

        console.log('post like toggled')
    })
} catch(error){
    console.error(error)
}