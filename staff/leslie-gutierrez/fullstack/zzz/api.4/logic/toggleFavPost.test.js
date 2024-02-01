const mongoose = require('mongoose')

const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=>{

        try {
            toggleFavPost('65a563a64e55fe47b1cc267f','65a02510556ac5fbdf2571a8', error => {
                if(error){
                    console.error(error)
                    
                    return 
                }

                console.log('post fav toggled')
            })
        } catch(error){
            console.error(error)
        }
})
.catch(error => console.error(error))