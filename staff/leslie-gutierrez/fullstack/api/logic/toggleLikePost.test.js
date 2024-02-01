import mongoose from 'mongoose'

import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then (() => {

try {
    toggleLikePost('65a563a64e55fe47b1cc267f', '65a02510556ac5fbdf2571a8', error =>{
        if(error){
            console.error(error)

            return 
        }

        console.log('post like toggled')
    })
} catch(error){
    console.error(error)
}

})
.catch(error=>console.error(error))