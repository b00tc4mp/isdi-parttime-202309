const createPost = require('./createPost')

try{
    createPost("6ttz1tptn2c0", 'https://s2.abcstatics.com/media/bienestar/2020/09/01/lechuga-kSlD--1248x698@abc.jpg', 'what a fresh day', error=>{
        if(error){
            console.error(error)

            return 
        }
        console.log('created')
    })
} catch(error){
    console.log(error)
}