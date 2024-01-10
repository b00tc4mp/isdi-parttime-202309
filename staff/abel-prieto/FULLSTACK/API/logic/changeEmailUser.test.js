const mongoose = require('mongoose')
const changeEmailUser = require("./changeEmailUser");

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeEmailUser("soy@batman.com", "nosoy@batman.com", "123123123", error => {
                if (error) {
                    console.log(error)
        
                    return
                }
        
                console.log("email succesfully changed!")
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))

