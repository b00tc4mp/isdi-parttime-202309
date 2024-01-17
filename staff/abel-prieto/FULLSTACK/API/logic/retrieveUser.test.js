import mongoose from 'mongoose'
import retrieveUser from './retrieveUser'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser("6594001301bf4244974a5268", (error, user) => {
                if (error) {
                    console.error(error)
        
                    return
                }
        
                console.log("retrieved", user)
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error.message))